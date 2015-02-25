var mysql = require('mysql'),
    _ = require('underscore'),
    async = require('async'),
    fs = require('fs');

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

var contractorsQuery = fs.readFileSync('contractors.sql', 'utf8');

console.log("Running all-contractors query.");

connection.query(contractorsQuery, function(err, rows, fields) {
  if (err) throw err;

  console.log("Writing contractors.json file.");

  fs.writeFileSync('public/data/contractors.json', JSON.stringify(rows));
  buldIndividualFiles(parseRows(rows));
});

connection.end();

// Parse the rows before saving them as JSON
function parseRows(rows) {
  return rows.map(function(row, i) {
    row.id = i;
    return row;
  });
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

var contractorQuery = fs.readFileSync('contractor.sql', 'utf8');

// Build an individual contractor file
function buildContractorFile(row, cb) {
  console.log("Building file for", row.name);

  pool.getConnection(function(err, connection) {
    if (err) return cb(err);

    connection.query(contractorQuery, [row.name], function(err, person) {
      connection.release();

      if(err) return cb(err);

      fs.writeFile('public/data/contractors/' + row.id + '.json', JSON.stringify(person), function (err) {
        if (err) return cb(err);

        cb();
      });
    });
  });
}
