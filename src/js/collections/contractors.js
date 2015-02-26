define(['backbone', 'models/contractor', 'fuse'], function(Backbone, Contractor, Fuse) {

  'use strict';

  return Backbone.Collection.extend({

    initialize: function(models) {
      // When the data are loaded, setup the Fuse index
      var options = {
        keys: ['searchable'],
        threshold: 0.3
      };
      this.fuse = new Fuse(models, options);
    },

    model: Contractor,

    url: 'data/contractors/contractors.json',

    search: function(q) {
      // If the query is empty, show top contractors
      if(q.length === 0) {
        // TODO: Fire an evnet that shows top contractors
        this.trigger('search:clear');
      }
      // Don't re-run if the query hasn't changed
      if(q === this.lastQ) {
        return;
      }
      // Only run queries longer than 3
      if(q.length > this.minSearchLength) {
        var r = this.fuse.search(q);
        this.trigger('search', r);
        this.lastQ = q;
      }
    },
    minSearchLength: 3,

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
