define(['backbone', 'underscore', 'tpl', 'lib/format', 'mg'], function(Backbone, _, tpl, format, MG) {

  'use strict';

  return Backbone.View.extend({

    template: tpl.detail,

    render: function() {
      var data = this.model.toJSON();
      data.sales = format.currency(data.sales);
      data.transactions = _.chain(data.transactions)
        .sortBy(function(transaction) {
          return transaction.month;
        })
        .map(function(transaction) {
          transaction._month = new Date(transaction.month);
          transaction.month = format.month(transaction.month);
          transaction.rate = format.currency(transaction.rate) + '/hr.';
          transaction._amount = parseInt(transaction.amount, 10);
          transaction.amount = format.currency(transaction.amount);
          return transaction;
        })
        .value();

      this.$el.html(this.template(data));

      MG.data_graphic({
        inflator: 1.05,
        data: data.transactions,
        width: 600,
        full_width: true,
        height: 250,
        buffer: 0,
        left: 35,
        right: 10,
        top: 15,
        bottom: 60,
        yax_units: '$',
        xax_count: function() {
          var firstYear = data.transactions[0]._month.getFullYear();
          var lastYear = data.transactions[data.transactions.length - 1]._month.getFullYear();
          return lastYear - firstYear + 1;
        },
        xax_format: function(d) {
          return d.getFullYear();
        },
        interpoloate: 'step',
        linked: true,
        show_tooltips: false,
        show_years: false,
        target: '#sales-chart',
        x_accessor: '_month',
        y_accessor: '_amount'
      });
    }

  });

});
