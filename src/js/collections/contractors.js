define(['backbone', 'models/contractor', 'fuse'], function(Backbone, Contractor, Fuse) {

  'use strict';

  return Backbone.Collection.extend({

    initialize: function() {

      // When the data are loaded, setup the Fuse index
      this.on('sync', function() {
        var options = {
          keys: ['name'],
          threshold: 0.5
        };
        this.fuse = new Fuse(this.toJSON(), options);
      }, this);
    },

    model: Contractor,

    url: 'data/contractors.json',

    search: function(q) {
      // If the query is empty, show top contractors
      if(q.length === 0) {
        // TODO: Fire an evnet that shows top contractors
        this.trigger('search', null);
      }
      // Don't re-run if the query hasn't changed
      if(q === this.lastQ) {
        return;
      }
      // Only run queries longer than 3
      if(q.length > 3) {
        var r = this.fuse.search(q);
        this.trigger('search', r);
        this.lastQ = q;
      }
    }

  });

});
