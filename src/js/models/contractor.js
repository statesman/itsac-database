define(['backbone'], function(Backbone) {

  'use strict';

  return Backbone.Model.extend({

    url: function() {
      return 'data/contractors/' + this.get('i') + '.json';
    }

  });

});
