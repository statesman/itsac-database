var mysql = require('mysql'),
    _ = require('underscore'),
    async = require('async'),
    fs = require('fs'),
    moment = require('moment');

/*
 * Default connection settings
 */
var db = {
  host: 'waller.statesman.com',
  user: 'reporter',
  password: process.argv[2],
  database: 'dir'
};

/*
 * Get a connection and run the top-level, aggregated contractor query
 */
var connection = mysql.createConnection(db);

var allRows;

var contractorsQuery = fs.readFileSync('queries/contractors.sql', 'utf8');

console.log("Running all-contractors query.");

connection.query(contractorsQuery, function(err, rows, fields) {
  if (err) throw err;

  console.log("Writing contractors.json file.");

  rows = parseRows(rows);
  allRows = rows;
  fs.writeFileSync('public/data/contractors.json', JSON.stringify(rows));
  buldIndividualFiles(rows);
});

connection.end();

// Parse the rows before saving them as JSON
function parseRows(rows) {
  return rows.map(function(row, i) {
    row.i = i;
    row.searchable = row.name.split(' ');
    row.id = buildSlug(row.name, i);
    return row;
  });
}

// Build a slug that can be used in the URL
function buildSlug(name, i) {
  return i.toString() + '.' + name.toLowerCase().replace(/\W/g, '');
}

/*
 * Now setup a pool of connections to simultaneously run all of the individual
 * contractor page queries
 */
var pool = mysql.createPool(_.extend(db, {
  connectionLimit: 10
}));

function buldIndividualFiles(rows) {
  console.log("Building individual contractor files.");

  async.eachLimit(rows, 10, buildContractorFile, function(err) {
    if(err) throw err;

    pool.end();
  });
}

var contractorQuery = fs.readFileSync('queries/contractor.sql', 'utf8');
var topByAgencyQuery = fs.readFileSync('queries/top-agency-contractors.sql', 'utf8');

// Build an individual contractor file
function buildContractorFile(row, cb) {
  console.log("Building file for", row.name);

  pool.getConnection(function(err, connection) {
    if (err) return cb(err);

    connection.query(contractorQuery, [row.name, row.vendor, row.agency], function(err, transactions) {
      if(err) return cb(err);

      connection.query(topByAgencyQuery, [row.agency], function(err, topAgency) {

        connection.release();

        if(err) return cb(err);

        // Add the ID to the JSON file
        row.transactions = transactions.map(function(transaction) {
          transaction.month = parseDate(transaction.month);
          return transaction;
        });

        row.topAgency = topAgency.map(function(top) {
          var related = _.findWhere(allRows, {name: top.name, agency: row.agency});
          top.id = related.id;
          if(row.name === top.name && row.vendor === related.vendor) {
            top.same = true;
          }
          return top;
        });

        fs.writeFile('public/data/contractors/' + row.i + '.json', JSON.stringify(row), function (err) {
          if (err) return cb(err);

          cb();
        });


      });
    });
  });
}

// A date parser that turns SQL dates into ISO8601 for JavaScript
function parseDate(d) {
  return moment(d).toISOString();
}
