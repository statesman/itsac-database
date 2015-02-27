var mysql = require('mysql'),
    async = require('async'),
    fs = require('fs'),
    moment = require('moment');


var contractorsQuery = fs.readFileSync('queries/contractors.sql', 'utf8'),
    contractorQuery = fs.readFileSync('queries/contractor.sql', 'utf8'),
    topByAgencyQuery = fs.readFileSync('queries/top-agency-contractors.sql', 'utf8');

async.waterfall([
  dbConnect,
  contractorCollection,
  contractorModels
], function(err, results) {
  if(err) throw err;
});

// Connect to the DB
function dbConnect(cb) {
  var pool = mysql.createPool({
    host: 'waller.statesman.com',
    user: 'reporter',
    password: process.argv[2],
    database: 'dir',
    connectionLimit: 10
  });
  cb(null, pool);
}

// Get a list of all contractors, then loop through that query to build individual contractor files
function contractorCollection(pool, cb) {
  console.log("Running all-contractors query.");
  pool.query(contractorsQuery, function(err, rows, fields) {
    if (err) return cb(err);

    console.log("Writing contractors.json file.");

    rows = parseRows(rows);
    fs.writeFileSync('public/data/contractors.json', JSON.stringify(rows));
    cb(null, pool, rows);
  });
}

// Build the individual files
function contractorModels(pool, rows, cb) {
  console.log("Building individual contractor files.");

  async.eachLimit(rows, 10, buildContractorFile.bind({
    pool: pool
  }), function(err) {
    if(err) return cb(err);

    pool.end();
    cb(null);
  });
}


/*
 * File builders for individual model files
 */

// Build an individual contractor file
function buildContractorFile(row, cb) {
  console.log("Building file for", row.name);

  this.pool.getConnection(function(err, connection) {
    if (err) return cb(err);

    connection.query(contractorQuery, [row.name, row.vendor, row.agency], function(err, transactions) {
      connection.release();

      if(err) return cb(err);

      // Add the ID to the JSON file
      row.transactions = transactions.map(function(transaction) {
        transaction.month = parseDate(transaction.month);
        return transaction;
      });

      fs.writeFile('public/data/contractors/' + row.i + '.json', JSON.stringify(row), function (err) {
        if (err) return cb(err);
        cb();
      });
    });
  });
}


/*
 * Helper functions
 */

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

// A date parser that turns SQL dates into ISO8601 for JavaScript
function parseDate(d) {
  return moment(d).toISOString();
}
