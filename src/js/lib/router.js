define(['backbone', 'views/search', 'views/results', 'views/detail'], function(Backbone, SearchBox, Results, Detail) {

  'use strict';

  return Backbone.Router.extend({

    initialize: function(options) {
      this.contractors = options.contractors;

      // When someone searches, take us back to the search page
      this.contractors.on('search', function() {
        this.navigate("", {trigger: true});
      }, this);

      this._setupViews();
    },

    routes: {
      "": "search",
      "entry/:id": "entry"
    },

    search: function() {
      // Empty detail view
      if(this.hasOwnProperty('detail')) {
        this.detail.$el.empty();
      }
    },

    entry: function(id) {
      // Empty search results view, clear searh box
      this.contractors.clearSearch();

      // Setup detail view
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
