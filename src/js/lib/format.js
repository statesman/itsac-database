define(['numeral', 'moment'], function(numeral, moment) {

  'use strict';

  return {
    currency: function(n) {
      return numeral(n).format('$0,0');
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

      return raw.map(function(row) {
        row.month = self.month(row.month);
        row.rate = rate(row);
        row.hours = self.wholeNum(row.hours);
        row.sales = self.currency(row.sales);
        return row;
      });
    }
  };

});
