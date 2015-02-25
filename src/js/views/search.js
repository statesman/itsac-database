define(['backbone', 'underscore'], function(Backbone, _) {

  'use strict';

  return Backbone.View.extend({

    initialize: function() {
      this.$el.on('keyup', $.proxy(this.searchHandler, this));
    },

    searchHandler: _.debounce(function(e) {
      var q = e.currentTarget.value;
      this.collection.search(q);
    }, 300),

  });

});
