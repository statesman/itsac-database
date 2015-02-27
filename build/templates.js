define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["browse"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "        <tr>\n          <td><a href=\"#/contractor/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a><br /><small>"
    + escapeExpression(((helper = (helper = helpers.vendor || (depth0 != null ? depth0.vendor : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"vendor","hash":{},"data":data}) : helper)))
    + "</small></td>\n          <td>"
    + escapeExpression(((helper = (helper = helpers.agency || (depth0 != null ? depth0.agency : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"agency","hash":{},"data":data}) : helper)))
    + "</td>\n          <td>";
  stack1 = ((helper = (helper = helpers.rate || (depth0 != null ? depth0.rate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rate","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\n          <td>"
    + escapeExpression(((helper = (helper = helpers.hours || (depth0 != null ? depth0.hours : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hours","hash":{},"data":data}) : helper)))
    + "</td>\n          <td>"
    + escapeExpression(((helper = (helper = helpers.monthsWorked || (depth0 != null ? depth0.monthsWorked : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"monthsWorked","hash":{},"data":data}) : helper)))
    + "</td>\n          <td>"
    + escapeExpression(((helper = (helper = helpers.sales || (depth0 != null ? depth0.sales : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sales","hash":{},"data":data}) : helper)))
    + "</a></td>\n        </tr>\n";
},"3":function(depth0,helpers,partials,data) {
  return " disabled";
  },"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "href=\"#/browse/page/"
    + escapeExpression(((helper = (helper = helpers.prevPage || (depth0 != null ? depth0.prevPage : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"prevPage","hash":{},"data":data}) : helper)))
    + "\"";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "href=\"#/browse/page/"
    + escapeExpression(((helper = (helper = helpers.nextPage || (depth0 != null ? depth0.nextPage : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nextPage","hash":{},"data":data}) : helper)))
    + "\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<h3>All entries</h3>\n<p>Showing "
    + escapeExpression(((helper = (helper = helpers.first || (depth0 != null ? depth0.first : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"first","hash":{},"data":data}) : helper)))
    + " to "
    + escapeExpression(((helper = (helper = helpers.last || (depth0 != null ? depth0.last : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"last","hash":{},"data":data}) : helper)))
    + " of "
    + escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total","hash":{},"data":data}) : helper)))
    + " entries. Click a name for additional details.</p>\n\n<div class=\"table-responsive\">\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>Contractor</th>\n        <th>Customer</th>\n        <th>Avg.&nbsp;Rate</th>\n        <th>Hours</th>\n        <th>Months</th>\n        <th>Sales</th>\n      </tr>\n    </thead>\n    <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.results : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    </tbody>\n  </table>\n</div>\n\n<nav>\n  <ul class=\"pager\">\n    <li class=\"previous";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.prevPage : depth0), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n      <a ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.prevPage : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " id=\"prev\">\n        <span aria-hidden=\"true\">&larr;</span> Previous\n      </a>\n    </li>\n    <li>Page "
    + escapeExpression(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"page","hash":{},"data":data}) : helper)))
    + " of "
    + escapeExpression(((helper = (helper = helpers.totalPages || (depth0 != null ? depth0.totalPages : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalPages","hash":{},"data":data}) : helper)))
    + "</li>\n    <li class=\"next";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.nextPage : depth0), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n      <a ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.nextPage : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " id=\"next\">\n        Next <span aria-hidden=\"true\">&rarr;</span>\n      </a>\n    </li>\n  </ul>\n</nav>\n";
},"useData":true});

this["JST"]["detail"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "          <tr>\n            <td>"
    + escapeExpression(((helper = (helper = helpers.month || (depth0 != null ? depth0.month : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"month","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = (helper = helpers.level || (depth0 != null ? depth0.level : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"level","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = (helper = helpers.hours || (depth0 != null ? depth0.hours : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hours","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = (helper = helpers.rate || (depth0 != null ? depth0.rate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rate","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"amount","hash":{},"data":data}) : helper)))
    + "</td>\n          </tr>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "              <tr";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.same : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n                <td>"
    + escapeExpression(((helper = (helper = helpers.i || (depth0 != null ? depth0.i : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"i","hash":{},"data":data}) : helper)))
    + ".</td>\n                <th><a href=\"#/contractor/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a></th>\n                <td>"
    + escapeExpression(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"amount","hash":{},"data":data}) : helper)))
    + "</td>\n              </tr>\n";
},"4":function(depth0,helpers,partials,data) {
  return " class=\"active\"";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<h3>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " <small>"
    + escapeExpression(((helper = (helper = helpers.vendor || (depth0 != null ? depth0.vendor : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"vendor","hash":{},"data":data}) : helper)))
    + "</small></h3>\n<p><span class=\"auto-field\">"
    + escapeExpression(((helper = (helper = helpers.vendor || (depth0 != null ? depth0.vendor : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"vendor","hash":{},"data":data}) : helper)))
    + "</span> has billed <span class=\"auto-field\">"
    + escapeExpression(((helper = (helper = helpers.sales || (depth0 != null ? depth0.sales : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sales","hash":{},"data":data}) : helper)))
    + "</span> in sales since the beginning of fiscal year 2014 to <span class=\"auto-field\">"
    + escapeExpression(((helper = (helper = helpers.agency || (depth0 != null ? depth0.agency : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"agency","hash":{},"data":data}) : helper)))
    + "</span> for work performed by <span class=\"auto-field\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</span>. The table below shows each of the reports to the Department of Information Resources submitted by "
    + escapeExpression(((helper = (helper = helpers.vendor || (depth0 != null ? depth0.vendor : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"vendor","hash":{},"data":data}) : helper)))
    + ".</p>\n<p class=\"doc-links\"><small><i class=\"fa fa-file-text\"></i><a href=\"http://www2.dir.state.tx.us/DIR_Contracts/"
    + escapeExpression(((helper = (helper = helpers.contract || (depth0 != null ? depth0.contract : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"contract","hash":{},"data":data}) : helper)))
    + ".pdf\" target=\"_blank\">View contract</a></small></p>\n\n<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-7 col-md-8\">\n    <h3>Individual sales reports</h3>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Month</th>\n          <th>Title</th>\n          <th>Hours billed</th>\n          <th>Rate</th>\n          <th>Amount</th>\n        </tr>\n      </thead>\n      <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.transactions : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "      </tbody>\n    </table>\n  </div>\n  <div class=\"col-xs-12 col-sm-5 col-md-4\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">"
    + escapeExpression(((helper = (helper = helpers.agency || (depth0 != null ? depth0.agency : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"agency","hash":{},"data":data}) : helper)))
    + " top contractors</div>\n      <div class=\"panel-body\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Rank</th>\n              <th>Name</th>\n              <th>Sales</th>\n            </tr>\n          </thead>\n          <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.topAgency : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});

this["JST"]["results"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "  <h3>Search results</h3>\n  <p>Not finding what you're looking for? Trying <a href=\"#/browse/page/1\">browsing</a> the database.</p>\n  <div class=\"table-responsive\">\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>Contractor</th>\n          <th>Customer</th>\n          <th>Avg.&nbsp;Rate</th>\n          <th>Hours</th>\n          <th>Months</th>\n          <th>Sales</th>\n        </tr>\n      </thead>\n      <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.results : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "      </tbody>\n    </table>\n  </div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "          <tr>\n            <td><a href=\"#/contractor/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a><br /><small>"
    + escapeExpression(((helper = (helper = helpers.vendor || (depth0 != null ? depth0.vendor : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"vendor","hash":{},"data":data}) : helper)))
    + "</small></td>\n            <td>"
    + escapeExpression(((helper = (helper = helpers.agency || (depth0 != null ? depth0.agency : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"agency","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>";
  stack1 = ((helper = (helper = helpers.rate || (depth0 != null ? depth0.rate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rate","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\n            <td>"
    + escapeExpression(((helper = (helper = helpers.hours || (depth0 != null ? depth0.hours : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hours","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = (helper = helpers.monthsWorked || (depth0 != null ? depth0.monthsWorked : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"monthsWorked","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = (helper = helpers.sales || (depth0 != null ? depth0.sales : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sales","hash":{},"data":data}) : helper)))
    + "</a></td>\n          </tr>\n";
},"4":function(depth0,helpers,partials,data) {
  return "  <div class=\"well\"><strong>No entries match your query.</strong> Try searching by only last name or try <a href=\"#/browse/page/1\">browsing</a> the database to find the contractor you're looking for.</div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.results : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

return this["JST"];

});