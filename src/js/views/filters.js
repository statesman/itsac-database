define(['backbone', 'tpl'], function(Backbone, tpl) {

  'use strict';

  return Backbone.View.extend({

    initialize: function() {
      var self = this;
      this.$el.on('change', 'select', function() {
        self.collection.filterByAgency($(this).val());
      });
    },

    template: tpl.filters,

    render: function() {
      this.$el.html(this.template({
        agencies: this.collection.agencies
      }));
    }

  });

});
