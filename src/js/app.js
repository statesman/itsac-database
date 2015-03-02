require(['jquery', 'collections/contractors', 'collections/agencies', 'collections/vendors', 'lib/router', 'lib/spin'], function($, Contractors, Agencies, Vendors, Router, spin) {

  'use strict';

  // A function to fire up the app, but only after everything has loaded
  var data = {};
  var startApp = _.after(4, function() {
    new Router({
      contractors: new Contractors(data.contractors, {
        idx: data.idx
      }),
      agencies: new Agencies(data.agencies),
      vendors: new Vendors(data.vendors),
      spin: spin
    });

    Backbone.history.start();
  });

  $(function() {
    spin.spin();

    // Load the data
    $.getJSON('data/contractors.json', function(d) {
      data.contractors = d;
      startApp();
    });
    $.getJSON('data/index.json', function(d) {
      data.idx = d;
      startApp();
    });
    $.getJSON('data/agencies.json', function(d) {
      data.agencies = d;
      startApp();
    });
    $.getJSON('data/vendors.json', function(d) {
      data.vendors = d;
      startApp();
    });

  });

});
