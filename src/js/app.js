require(['jquery', 'collections/contractors', 'collections/agencies', 'lib/router'], function($, Contractors, Agencies, Router) {

  'use strict';

  $(function() {

    $.getJSON('data/contractors.json', function(contractorsData) {
      $.getJSON('data/agencies.json', function(agencyData) {
        new Router({
          contractors: new Contractors(contractorsData),
          agencies: new Agencies(agencyData)
        });

        Backbone.history.start();
      });
    });

  });

});
