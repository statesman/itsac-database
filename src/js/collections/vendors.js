define(['backbone', 'models/vendor'], function(Backbone, Vendor) {

  'use strict';

  return Backbone.Collection.extend({

    model: Vendor,

    url: 'data/agencies.json'

  });

});
