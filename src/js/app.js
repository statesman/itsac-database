require(['jquery', 'collections/contractors', 'collections/agencies', 'lib/router'], function($, Contractors, Agencies, Router) {

  'use strict';

  // A function to fire up the app, but only after everything has loaded
  var data = {};
  var startApp = _.after(3, function() {
    new Router({
      contractors: new Contractors(data.contractors, {
        idx: data.idx
      }),
      agencies: new Agencies(data.agencies)
    });

    Backbone.history.start();
  });

  $(function() {

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

  });

});
