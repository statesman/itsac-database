define(['backbone', 'underscore'], function(Backbone, _) {

  'use strict';

  return Backbone.View.extend({

    initialize: function() {
      this.$el.on('keyup', $.proxy(this.searchHandler, this));
      this.collection.on('search:clear', this.clear, this);
    },

    searchHandler: _.debounce(function(e) {
      var q = e.currentTarget.value;
      this.collection.search(q);
    }, 300),

    // A public method to clear the search box
    clear: function() {
      this.$el.val(null);
    }

  });

});
