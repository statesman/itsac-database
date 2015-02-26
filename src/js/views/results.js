define(['backbone', 'tpl', 'lib/format'], function(Backbone, tpl, format) {

  'use strict';

  return Backbone.View.extend({

    initialize: function() {
      this.collection.on('search', this.render, this);
      this.collection.on('search:clear', this.clear, this);
    },

    template: tpl.results,

    render: function(results) {
      this.$el.html(this.template({
        count: results.length,
        total: this.collection.length,
        results: format.tableRow(results)
      }));
    },

    clear: function(results) {
      this.$el.empty();
    }

  });

});
