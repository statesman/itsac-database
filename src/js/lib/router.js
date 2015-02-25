define(['backbone', 'views/search', 'views/results', 'views/detail'], function(Backbone, SearchBox, Results, Detail) {

  'use strict';

  return Backbone.Router.extend({

    initialize: function(options) {
      this.contractors = options.contractors;

      this._setupViews();
    },

    routes: {
      "search": "search",
      "entry/:id": "entry"
    },

    entry: function(id) {
      var self = this;
      var contractor = this.contractors.get(id);
      contractor.fetch({
        success: function(model) {
          self.detail = new Detail({
            el: '#detail',
            model: model
          });
          self.detail.render();
        }
      });
    },

    _setupViews: function() {
      this.search = new SearchBox({
        el: '#search',
        collection: this.contractors
      });

      this.results = new Results({
        el: '#results',
        collection: this.contractors
      });
    }

  });

});
