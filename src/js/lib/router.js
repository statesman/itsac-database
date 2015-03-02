define(['backbone',
  'views/search',
  'views/results',
  'views/detail',
  'views/browse',
  'views/topcontractors',
  'views/nav'
], function(Backbone, SearchBox, Results, Detail, Browse, TopContractors, Nav) {

  'use strict';

  return Backbone.Router.extend({

    initialize: function(options) {
      this.contractors = options.contractors;
      this.agencies = options.agencies;
      this.vendors = options.vendors;

      // When someone searches, take us back to the search page
      this.contractors.on('search', function() {
        this.navigate("#/search", {trigger: true});
      }, this);

      this.contractors.on('search:empty', function() {
        this.navigate('#/', {trigger: true});
      }, this);

      this._setupViews();

      // Store the depth of the beginning of the content; we'll scroll back
      // there each time there's a page change
      var self = this;
      this.pageTop = this._contentTop();
      $(window).on('resize', _.debounce(function() {
        self.pageTop = self._contentTop();
      }, 300));
    },

    routes: {
      "": "home",
      "search": "search",
      "browse/page/:num": "page",
      "contractor/:id": "detail"
    },

    home: function() {
      this._clearDetail();
      this.nav.setActive('home');

      // Render browsable table
      this.contractors.page(1);
    },

    search: function() {
      this._clearDetail();
      this.nav.setActive('search');

      // Render browsable table
      this.contractors.page(1);
    },

    page: function(num) {
      // Empty search results view, clear searh box
      this.contractors.clearSearch();
      this.nav.setActive('browse');

      this._clearDetail();

      this.contractors.page(parseInt(num, 10));
    },

    detail: function(id) {
      this._toTop();

      // Empty search results view, clear searh box
      this.contractors.clearSearch();
      this.nav.setActive('detail');

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
          self.browse.clear();
        }
      });

      // Setup detail view with agency info
      var agency = this.agencies.findWhere({agency: contractor.get('agency')});
      agency.fetch({
        success: function(model) {
          self.topAgency = new TopContractors({
            el: '#agency-top',
            model: model
          });
          self.topAgency.render({
            organization: contractor.get('agency'),
            underline: 'vendor',
            contractor: contractor.id
          });
        }
      });

      // Setup detail view with vendor info
      var vendor = this.vendors.findWhere({vendor: contractor.get('vendor')});
      vendor.fetch({
        success: function(model) {
          self.topVendor = new TopContractors({
            el: '#vendor-top',
            model: model
          });
          self.topVendor.render({
            organization: contractor.get('vendor'),
            underline: 'agency',
            contractor: contractor.id
          });
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

      this.nav = new Nav({
        el: '#nav'
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
      if(this.hasOwnProperty('topVendor')) {
        this.topVendor.$el.empty();
      }
    },

    // Get the depth of the top of the content
    _contentTop: function() {
      return this.nav.$el.offset().top - 23;
    },

    // Jump to the top of the page; used on route handlers
    _toTop: function() {
      if($(window).scrollTop() > this.pageTop) {
        $(window).scrollTop(this.pageTop);
      }
    }

  });

});
