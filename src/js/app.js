require(['jquery', 'collections/contractors','lib/router'], function($, Contractors, Router) {

  'use strict';

  $(function() {

    $.getJSON('data/contractors.json', function(data) {
        new Router({
          contractors: new Contractors(data)
        });

        Backbone.history.start();
    });

  });

});
