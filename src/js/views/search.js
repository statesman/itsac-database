define(['backbone', 'underscore'], function(Backbone, _) {

  'use strict';

  return Backbone.View.extend({

    initialize: function() {
      this.$input = this.$el.find('input');
      this.$help = this.$el.find('p.help-block');

      this.$input.on('input', $.proxy(this.searchHandler, this));
      this.collection.on('search', this.render, this);
      this.collection.on('search:clear', this.clear, this);
    },

    searchHandler: _.debounce(function(e) {
      var q = e.currentTarget.value;
      if(q.length > 0 && q.length <= this.collection.minSearchLength) {
        this.$help.text('Your query must be at least four characters long.');
      }
      this.collection.search(q);
    }, 300),

    helpText: function(results) {
      if(results.length > 0) {
        return results.length + " of " + this.collection.length +
          " entries match your query.";
      }
      return null;
    },

    render: function(results) {
      this.$help.text(this.helpText(results));
    },

    // A public method to clear the search box
    clear: function() {
      this.render([]);
      this.$input.val(null);
    }

  });

});
