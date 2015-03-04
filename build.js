var mysql = require('mysql'),
    async = require('async'),
    fs = require('fs'),
    _ = require('underscore'),
    moment = require('moment'),
    rimraf = require('rimraf'),
    lunr = require('lunr'),
    nameparse = require('./lib/nameparser');

var concurrentLimit = 10,
    queryDir = __dirname + '/queries/';

var contractorsQuery = fs.readFileSync(queryDir + 'contractors.sql', 'utf8'),
    contractorQuery = fs.readFileSync(queryDir + 'contractor.sql', 'utf8'),
    agenciesQuery = fs.readFileSync(queryDir + 'agencies.sql', 'utf8'),
    agencyQuery = fs.readFileSync(queryDir + 'agency.sql', 'utf8'),
    vendorsQuery = fs.readFileSync(queryDir + 'vendors.sql', 'utf8'),
    vendorQuery = fs.readFileSync(queryDir + 'vendor.sql', 'utf8');

async.waterfall([
  cleanDir,
  makeDirs,
  dbConnect,
  contractorCollection,
  buildIndex,
  contractorModels,
  agencyCollection,
  agencyModels,
  vendorCollection,
  vendorModels
], function(err, results) {
  if(err) throw err;
});

// Clean out the old files
function cleanDir(cb) {
  console.log('Cleaning existing data files.');
  rimraf(__dirname + '/public/data', cb);
}

// Setup the directory structure to hold the files
function makeDirs(cb) {
  console.log('Creating directory structure.');
  fs.mkdirSync(__dirname + '/public/data', 0744);
  fs.mkdirSync(__dirname + '/public/data/contractors', 0744);
  fs.mkdirSync(__dirname + '/public/data/agencies', 0744);
  fs.mkdirSync(__dirname + '/public/data/vendors', 0744);
  cb(null);
}

// Connect to the DB
function dbConnect(cb) {
  var pool = mysql.createPool({
    host: 'waller.statesman.com',
    user: 'reporter',
    password: process.argv[2],
    database: 'dir',
    connectionLimit: concurrentLimit
  });
  cb(null, pool);
}

// Get a list of all contractors, then loop through that query to build individual contractor files
function contractorCollection(pool, cb) {
  console.log("Running all-contractors query.");
  pool.query(contractorsQuery, function(err, rows, fields) {
    if (err) return cb(err);

    console.log("Writing contractors.json file.");

    var contractors = parseRows(rows);
    fs.writeFileSync(__dirname + '/public/data/contractors.json', JSON.stringify(rows));
    cb(null, pool, contractors);
  });
}

function buildIndex(pool, contractors, cb) {
  console.log('Building Lunr.js index.');

  // When the data are loaded, setup the Lunr index
  var index = lunr(function() {
    this.ref('id');

    this.field('name');
    this.field('agency');
    this.field('vendor');
  });

  // Add all models to the index
  _.chain(contractors)
    .map(function(model) {
      return {
        id: model.id,
        name: model.name,
        agency: model.agency,
        vendor: model.vendor
      };
    })
    .each(function(model) {
      index.add(model);
    });

  fs.writeFileSync(__dirname + '/public/data/index.json', JSON.stringify(index.toJSON()));
  cb(null, pool, contractors);
}

// Build the individual files
function contractorModels(pool, contractors, cb) {
  console.log("Building individual contractor files.");

  async.eachLimit(contractors, concurrentLimit, buildContractorFile.bind({
    pool: pool
  }), function(err) {
    if(err) return cb(err);
    cb(null, contractors, pool);
  });
}

// Build the agency collection
function agencyCollection(contractors, pool, cb) {
  pool.query(agenciesQuery, function(err, agencies) {
    if (err) return cb(err);

    // Add the index to each model, which will be used as the id
    agencies = agencies.map(function(agency, i) {
      agency.id = i;
      return agency;
    });

    console.log("Writing agencies.json file.");
    fs.writeFileSync(__dirname + '/public/data/agencies.json', JSON.stringify(agencies));

    cb(null, contractors, pool, agencies);
  });
}

// Build the individual agency files
function agencyModels(contractors, pool, agencies, cb) {
  console.log("Building individual agency files.");

  async.eachLimit(agencies, concurrentLimit, buildAgencyFile.bind({
    pool: pool,
    contractors: contractors
  }), function(err) {
    if(err) return cb(err);

    cb(null, contractors, pool);
  });
}

// Build the vendor collection
function vendorCollection(contractors, pool, cb) {
  pool.query(vendorsQuery, function(err, vendors) {
    if (err) return cb(err);

    // Add the index to each model, which will be used as the id
    vendors = vendors.map(function(vendor, i) {
      vendor.id = i;
      return vendor;
    });

    console.log("Writing vendors.json file.");
    fs.writeFileSync(__dirname + '/public/data/vendors.json', JSON.stringify(vendors));

    cb(null, contractors, pool, vendors);
  });
}

// Build the individual agency files
function vendorModels(contractors, pool, vendors, cb) {
  console.log("Building individual vendor files.");

  async.eachLimit(vendors, concurrentLimit, buildVendorFile.bind({
    pool: pool,
    contractors: contractors
  }), function(err) {
    if(err) return cb(err);

    pool.end();

    cb();
  });
}

/*
 * File builders for individual model files
 */

// Build an individual contractor file
function buildContractorFile(row, cb) {
  this.pool.query(contractorQuery, [row.name, row.vendor, row.agency], function(err, transactions) {
    if(err) return cb(err);

    // Add the ID to the JSON file
    row.transactions = transactions.map(function(transaction) {
      transaction.month = parseDate(transaction.month);
      return transaction;
    });

    fs.writeFile(__dirname + '/public/data/contractors/' + row.i + '.json', JSON.stringify(row), function (err) {
      if (err) return cb(err);
      cb();
    });
  });
}

// Build an individual agency file
function buildAgencyFile(agency, cb) {
  var self = this;
  this.pool.query(agencyQuery, [agency.agency], function(err, top) {
    if(err) return cb(err);

    // Add the top contractors to the existing agency data
    agency.top = top.map(function(contractor, i) {
      contractor.name = nameclean(contractor.name);
      contractor.id = lookupContractor(contractor.name, agency.agency, contractor.vendor, self.contractors);
      contractor.rank = (i + 1);
      return contractor;
    });

    fs.writeFile(__dirname + '/public/data/agencies/' + agency.id + '.json', JSON.stringify(agency), function (err) {
      if (err) return cb(err);
      cb();
    });
  });
}

// Build an individual agency file
function buildVendorFile(vendor, cb) {
  var self = this;
  this.pool.query(vendorQuery, [vendor.vendor], function(err, top) {
    if(err) return cb(err);

    // Add the top contractors to the existing agency data
    vendor.top = top.map(function(contractor, i) {
      contractor.name = nameclean(contractor.name);
      contractor.id = lookupContractor(contractor.name, contractor.agency, vendor.vendor, self.contractors);
      contractor.rank = (i + 1);
      return contractor;
    });

    fs.writeFile(__dirname + '/public/data/vendors/' + vendor.id + '.json', JSON.stringify(vendor), function (err) {
      if (err) return cb(err);
      cb();
    });
  });
}

/*
 * Helper functions
 */

// Parse the rows before saving them as JSON
function parseRows(rows) {
 return rows.map(function(row, i) {
   // Store the rank
   row.i = i;

   // Build a name string
   row.name = nameclean(row.name);

   // Store a slug that'll be used to build links on the frontend
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

// Lookup a contractor's ID based on the passed info
function lookupContractor(name, agency, vendor, contractors) {
  return _.findWhere(contractors, {name: name, agency: agency, vendor: vendor}).id;
}

// Clean the name
function nameclean(input) {
  var nameParts = nameparse.parse(input);
  var name = [];
  if(nameParts.salutation) {
    name.push(nameParts.salutation);
  }
  if(nameParts.firstName) {
    name.push(nameParts.firstName);
  }
  if(nameParts.initials) {
    name.push(nameParts.initials);
  }
  if(nameParts.lastName) {
    name.push(nameParts.lastName);
  }
  if(nameParts.suffix) {
    name.push(nameParts.suffix);
  }
  return name.join(' ');
}
