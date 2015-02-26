define(['backbone', 'underscore', 'tpl', 'lib/format'], function(Backbone, _, tpl, format) {

  'use strict';

  return Backbone.View.extend({

    template: tpl.detail,

    render: function() {
      var data = this.model.toJSON();
      data.transactions = _.chain(data.transactions)
        .sortBy(function(transaction) {
          return transaction.month;
        })
        .map(function(transaction) {
          transaction.month = format.month(transaction.month);
          transaction.rate = format.currency(transaction.rate) + '/hr.';
          transaction.amount = format.currency(transaction.amount);
          return transaction;
        })
        .value();
      data.topAgency = _.map(data.topAgency, function(top) {
        top.amount = format.currency(top.amount);
        return top;
      });

      this.$el.html(this.template(data));
    }

  });

});
