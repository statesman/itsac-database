define(['backbone', 'tpl', 'lib/format'], function(Backbone, tpl, format) {

  'use strict';

  return Backbone.View.extend({

    template: tpl.agencytop,

    render: function() {
      var model = this.model.toJSON();
      model.top = model.top.map(function(contractor) {
        contractor.amount = format.currency(contractor.amount);
        return contractor;
      });
      this.$el.html(this.template(model));
    }

  });

});
