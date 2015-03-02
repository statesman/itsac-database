define(['backbone', 'tpl', 'lib/format'], function(Backbone, tpl, format) {

  'use strict';

  return Backbone.View.extend({

    template: tpl.top,

    render: function(options) {
      var model = this.model.toJSON();
      model.organization = options.organization;
      model.top = model.top.map(function(contractor) {
        contractor.amount = format.currency(contractor.amount);
        contractor.underline = contractor[options.underline];
        contractor.current = contractor.id === options.contractor;
        return contractor;
      });
      this.$el.html(this.template(model));
    }

  });

});
