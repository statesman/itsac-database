define(['backbone', 'models/agency'], function(Backbone, Agency) {

  'use strict';

  return Backbone.Collection.extend({

    model: Agency,

    url: 'data/agencies.json'

  });

});
