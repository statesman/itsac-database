define(['backbone', 'underscore', 'tpl', 'lib/format', 'd3', 'mg', 'moment'], function(Backbone, _, tpl, format, d3, MG, moment) {

  'use strict';

  return Backbone.View.extend({

    template: tpl.detail,

    // Defaults for the MG charts
    chartDefaults: {
      inflator: 1.05,
      width: 600,
      full_width: true,
      height: 250,
      buffer: 0,
      left: 40,
      right: 5,
      top: 18,
      bottom: 60,
      interpolate: 'step',
      xax_format: d3.time.format('%b \'%y'),
      linked: true,
      show_tooltips: false,
      show_secondary_x_label: false,
      x_accessor: '_month'
    },

    _chartData: function(data) {
      // Get the number of months we should have data for
      var min = moment(_.min(data, function(d) {
        return d._month;
      })._month);
      var max = moment(_.max(data, function(d) {
        return d._month;
      })._month);
      var days = max.diff(min, 'days');

      // Build an array with an 0-ed object for each month
      var months = {};
      _.each(_.range(0, Math.round(days / 30)), function(m) {
        var addedMonth = min.clone().add(m, 'months');
        var month = addedMonth.format('MMM YYYY');

        months[month] = [{
          _amount: 0,
          _month: addedMonth.toDate(),
          month: month,
          hours: 0
        }];
      });

      // Reduce transaction data to a sum by month
      var d = _.groupBy(data, 'month');

      // Merge in the 0 values where there are empty rows
      var merged = _.extend(months, d);

      // Return a reduced version with totaled values
      return _.map(merged, function(transactions) {
        // Get monthly totals
        return _.reduce(transactions, function(memo, row) {
          memo._amount += row._amount;
          memo.hours += row.hours;
          return memo;
        }, {
          _amount: 0,
          _month: transactions[0]._month,
          month: transactions[0].month,
          hours: 0
        });
      });
    },

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
          if(transaction._amount < 0) {
            transaction.negative = true;
          }
          return transaction;
        })
        .value();

      this.$el.html(this.template(data));

      var self = this;
      var labelTimeFormatter = d3.time.format('%b %Y');
      data = self._chartData(data.transactions);
      MG.data_graphic(_.extend({
        data: data,
        target: '#hours-chart',
        y_accessor: 'hours',
        mouseover: function(d) {
          self.$('#hours-chart svg .mg-active-datapoint')
          .html(d.month + ': ' + d.hours);
        }
      }, this.chartDefaults));

      MG.data_graphic(_.extend({
        data: data,
        yax_units: '$',
        target: '#sales-chart',
        y_accessor: '_amount',
        mouseover: function(d) {
          self.$('#sales-chart svg .mg-active-datapoint')
            .html(d.month + ': ' + format.currency(d._amount));
        }
      }, this.chartDefaults));
    }

  });

});
