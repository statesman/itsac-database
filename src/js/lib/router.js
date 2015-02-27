define(['backbone',
  'views/search',
  'views/results',
  'views/detail',
  'views/browse',
  'views/agencytop'
], function(Backbone, SearchBox, Results, Detail, Browse, AgencyTop) {

  'use strict';

  return Backbone.Router.extend({

    initialize: function(options) {
      this.contractors = options.contractors;
      this.agencies = options.agencies;

      // When someone searches, take us back to the search page
      this.contractors.on('search', function() {
        this.navigate("", {trigger: true});
      }, this);

      this._setupViews();
    },

    routes: {
      "": "home",
      "browse/page/:num": "page",
      "contractor/:id": "detail"
    },

    home: function() {
      this._clearDetail();

      // Render browsable table
      this.contractors.page(1);
    },

    page: function(num) {
      // Empty search results view, clear searh box
      this.contractors.clearSearch();

      this._clearDetail();

      this.contractors.page(parseInt(num, 10));
    },

    detail: function(id) {
      // Empty search results view, clear searh box
      this.contractors.clearSearch();
      this.browse.clear();

      var self = this;

      // Setup detail view with contractor info
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

      // Setup detail view with agency info
      var agency = this.agencies.findWhere({agency: contractor.get('agency')});
      agency.fetch({
        success: function(model) {
          self.topAgency = new AgencyTop({
            el: '#agency-top',
            model: model
          });
          self.topAgency.render();
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
    },

    // Destroy the detail page views
    _clearDetail: function() {
      if(this.hasOwnProperty('detail')) {
        this.detail.$el.empty();
      }
      if(this.hasOwnProperty('topAgency')) {
        this.topAgency.$el.empty();
      }
    }

  });

});
