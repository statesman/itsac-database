define(['backbone', 'lib/format', 'tpl'], function(Backbone, format, tpl) {

  'use strict';

  return Backbone.View.extend({

    initialize: function() {
      this.collection.on('browse:change', this.render, this);
    },

    template: tpl.browse,

    // Calculate numbers for the next/prev buttons, returning false to hide them
    // if necessary
    prevPage: function(number) {
      if(number === 0) {
        return false;
      }
      return number;
    },
    nextPage: function(number) {
      if(number === Math.floor(this.collection.length / this.collection.perPage)) {
        return false;
      }
      return number + 2;
    },

    // Calculate the position number of the first and last items in the paginated
    // results
    first: function(number) {
      return format.wholeNum((this.collection.perPage * number) + 1);
    },
    last: function(number) {
      return format.wholeNum(Math.min((this.collection.perPage * (number + 1)), this.collection.length));
    },

    render: function(number, paged) {
      this.$el.html(this.template({
        nextPage: this.nextPage(number),
        prevPage: this.prevPage(number),
        first: this.first(number),
        last: this.last(number),
        count: this.collection.perPage,
        total: format.wholeNum(this.collection.length),
        results: format.tableRow(paged),
        page: number + 1,
        totalPages: Math.ceil(this.collection.length / this.collection.perPage)
      }));
    },

    clear: function(results) {
      this.$el.empty();
    }

  });

});
