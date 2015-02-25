require(['jquery', 'collections/contractors', 'views/search', 'views/results', 'lib/router'], function($, Contractors, SearchBox, Results, Router) {

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
