define(['underscore', 'numeral', 'moment'], function(_, numeral, moment) {

  'use strict';

  return {
    currency: function(n) {
      return numeral(n).format('$0,0');
    },
    decimal: function(n) {
      return numeral(n).format('0.0');
    },
    wholeNum: function(n) {
      return numeral(n).format('0,0');
    },
    month: function(n) {
      return moment(n).format('MMM YYYY');
    },

    // A special formatter for search/browse table rows
    tableRow: function(raw) {
      var self = this;
      function rate(row) {
        if(row.minRate === row.maxRate) {
          return self.currency(row.minRate) + '/hr.';
        }
        return self.currency(row.avgRate) + '/hr.<br /><small>' +
          self.currency(row.minRate) +
          '-' + self.currency(row.maxRate) + '</small>';
      }

      return _.map(raw, function(row) {
        row.month = this.month(row.month);
        row.rate = rate(row);
        row.hours = this.wholeNum(row.hours);
        row.sales = this.currency(row.sales);
        return row;
      }, this);
    }
  };

});
