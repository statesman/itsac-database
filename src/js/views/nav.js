define(['backbone'], function(Backbone) {

  'use strict';

  return Backbone.View.extend({

    events: {
      "click .nav-search": "disable",
      "click .nav-detail": "disable"
    },

    setActive: function(active) {
      this.$('.active').removeClass('active');
      this.$('.nav-' + active).addClass('active');
    },

    disable: function(e) {
      e.preventDefault();
    }

  });

});
