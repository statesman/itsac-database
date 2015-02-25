require(['jquery', 'collections/contractors', 'views/search', 'views/results'], function($, Contractors, SearchBox, Results) {

  'use strict';

  $(function() {

    var contractors = new Contractors();
    contractors.fetch();

    var search = new SearchBox({
      el: '#search',
      collection: contractors
    });

    var results = new Results({
      el: '#results',
      collection: contractors
    });

  });

});
