define(['backbone', 'tpl'], function(Backbone, tpl) {

  'use strict';

  return Backbone.View.extend({

    initialize: function() {
      this.collection.on('search', this.render, this);
    },

    template: tpl.results,

    render: function(results) {
      this.$el.html(this.template(results));
    }

  });

});
