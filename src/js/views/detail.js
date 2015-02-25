define(['backbone', 'tpl'], function(Backbone, tpl) {

  'use strict';

  return Backbone.View.extend({

    template: tpl.detail,

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
    }

  });

});
