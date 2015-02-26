define(['backbone', 'views/search', 'views/results', 'views/detail', 'views/browse'], function(Backbone, SearchBox, Results, Detail, Browse) {

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
      "": "home",
      "browse/page/:num": "page",
      "contractor/:id": "contractor"
    },

    home: function() {
      // Empty detail view
      if(this.hasOwnProperty('detail')) {
        this.detail.$el.empty();
      }

      // Render browsable table
      this.contractors.page(1);
    },

    page: function(num) {
      // Empty search results view, clear searh box
      this.contractors.clearSearch();

      // Empty detail view
      if(this.hasOwnProperty('detail')) {
        this.detail.$el.empty();
      }

      this.contractors.page(parseInt(num, 10));
    },

    contractor: function(id) {
      // Empty search results view, clear searh box
      this.contractors.clearSearch();
      this.browse.clear();

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

      this.browse = new Browse({
        el: '#browse',
        collection: this.contractors
      });
    }

  });

});
