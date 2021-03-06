define(['backbone', 'underscore', 'models/contractor', 'lunr'], function(Backbone, _, Contractor, lunr) {

  'use strict';

  return Backbone.Collection.extend({

    initialize: function(models, options) {
      // When the data are loaded, setup the Lunr index
      this.idx = lunr.Index.load(options.idx);
    },

    model: Contractor,

    url: 'data/contractors/contractors.json',

    search: function(q) {
      // If the query is empty, show top contractors
      if(q.length === 0) {
        this.trigger('search:empty');
        this.trigger('search:clear');
      }
      // Don't re-run if the query hasn't changed
      if(q === this.lastQ) {
        return;
      }
      // Only run queries longer than 3
      if(q.length > this.minSearchLength) {
        var show = 50;
        // Return all matches, sorted by total sales
        var r = _.sortBy(this._hydrate(this.idx.search(q)), function(contractor) {
          return -contractor.sales;
        });
        var count = r.length;
        var trimmed = r.slice(0, show);
        this.trigger('search', {
          results: trimmed,
          count: count,
          shown: _.min([show, count]),
          more: count > show
        });
        this.lastQ = q;
      }
    },
    minSearchLength: 2,

    // Hydrate the search results from Lunr with model info
    _hydrate: function(results) {
      return _.map(results, function(result) {
        return this.get(result.ref).toJSON();
      }, this);
    },

    // The number of results to show per page when browsing
    perPage: 25,

    // Move to a specific page in the collection
    page: function(number) {
      number = number - 1;

      var paginated = this.toJSON().slice((this.perPage * number), (this.perPage * (number + 1)));

      this.trigger('browse:change', number, paginated);
    },

    clearSearch: function() {
      this.lastQ = null;
      this.trigger('search:clear');
    }

  });

});
