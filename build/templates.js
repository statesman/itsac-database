define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["browse"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "      <tr>\n        <th>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</th>\n        <td>"
    + escapeExpression(((helper = (helper = helpers.agency || (depth0 != null ? depth0.agency : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"agency","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + escapeExpression(((helper = (helper = helpers.vendor || (depth0 != null ? depth0.vendor : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"vendor","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + escapeExpression(((helper = (helper = helpers.avgRate || (depth0 != null ? depth0.avgRate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"avgRate","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + escapeExpression(((helper = (helper = helpers.minRate || (depth0 != null ? depth0.minRate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"minRate","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + escapeExpression(((helper = (helper = helpers.maxRate || (depth0 != null ? depth0.maxRate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"maxRate","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + escapeExpression(((helper = (helper = helpers.hours || (depth0 != null ? depth0.hours : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hours","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + escapeExpression(((helper = (helper = helpers.monthsWorked || (depth0 != null ? depth0.monthsWorked : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"monthsWorked","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + escapeExpression(((helper = (helper = helpers.sales || (depth0 != null ? depth0.sales : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sales","hash":{},"data":data}) : helper)))
    + "</td>\n        <td><a href=\"#/contractor/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">Details</a></td>\n      </tr>\n";
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
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<p><small>Showing "
    + escapeExpression(((helper = (helper = helpers.first || (depth0 != null ? depth0.first : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"first","hash":{},"data":data}) : helper)))
    + "-"
    + escapeExpression(((helper = (helper = helpers.last || (depth0 != null ? depth0.last : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"last","hash":{},"data":data}) : helper)))
    + " of "
    + escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total","hash":{},"data":data}) : helper)))
    + " entries</small></p>\n<table class=\"table table-hover\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Agency</th>\n      <th>Vendor</th>\n      <th>Avg. rate</th>\n      <th>Min. rate</th>\n      <th>Max rate</th>\n      <th>Hours</th>\n      <th>Months</th>\n      <th>Sales</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.results : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "  </tbody>\n</table>\n\n<nav>\n  <ul class=\"pager\">\n    <li class=\"previous";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.prevPage : depth0), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n      <a ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.prevPage : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " id=\"prev\">\n        <span aria-hidden=\"true\">&larr;</span> Previous\n      </a>\n    </li>\n    <li class=\"next";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.nextPage : depth0), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n      <a ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.nextPage : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " id=\"next\">\n        Next <span aria-hidden=\"true\">&rarr;</span>\n      </a>\n    </li>\n  </ul>\n</nav>\n";
},"useData":true});

this["JST"]["detail"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "      <tr>\n        <th>"
    + escapeExpression(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"amount","hash":{},"data":data}) : helper)))
    + "</th>\n        <td>"
    + escapeExpression(((helper = (helper = helpers.hours || (depth0 != null ? depth0.hours : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hours","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + escapeExpression(((helper = (helper = helpers.month || (depth0 != null ? depth0.month : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"month","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + escapeExpression(((helper = (helper = helpers.rate || (depth0 != null ? depth0.rate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rate","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + escapeExpression(((helper = (helper = helpers.level || (depth0 != null ? depth0.level : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"level","hash":{},"data":data}) : helper)))
    + "</td>\n      </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<h3>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " <small>"
    + escapeExpression(((helper = (helper = helpers.vendor || (depth0 != null ? depth0.vendor : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"vendor","hash":{},"data":data}) : helper)))
    + "</small><h3>\n\n<h2>Billing for "
    + escapeExpression(((helper = (helper = helpers.agency || (depth0 != null ? depth0.agency : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"agency","hash":{},"data":data}) : helper)))
    + ":</h2>\n<table class=\"table table-hover\">\n  <thead>\n    <tr>\n      <th>Amount</th>\n      <th>Hours billed</th>\n      <th>Month</th>\n      <th>Hourly rate</th>\n      <th>Title</th>\n    </tr>\n  </thead>\n  <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.transactions : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </tbody>\n</table>\n";
},"useData":true});

this["JST"]["results"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "  <p><small>"
    + escapeExpression(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"count","hash":{},"data":data}) : helper)))
    + " of "
    + escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total","hash":{},"data":data}) : helper)))
    + " entries match your query</small></p>\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Agency</th>\n        <th>Vendor</th>\n        <th>Avg. rate</th>\n        <th>Min. rate</th>\n        <th>Max rate</th>\n        <th>Hours</th>\n        <th>Months</th>\n        <th>Sales</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.results : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </tbody>\n  </table>\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <tr>\n          <th>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</th>\n          <td>"
    + escapeExpression(((helper = (helper = helpers.agency || (depth0 != null ? depth0.agency : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"agency","hash":{},"data":data}) : helper)))
    + "</td>\n          <td>"
    + escapeExpression(((helper = (helper = helpers.vendor || (depth0 != null ? depth0.vendor : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"vendor","hash":{},"data":data}) : helper)))
    + "</td>\n          <td>"
    + escapeExpression(((helper = (helper = helpers.avgRate || (depth0 != null ? depth0.avgRate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"avgRate","hash":{},"data":data}) : helper)))
    + "</td>\n          <td>"
    + escapeExpression(((helper = (helper = helpers.minRate || (depth0 != null ? depth0.minRate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"minRate","hash":{},"data":data}) : helper)))
    + "</td>\n          <td>"
    + escapeExpression(((helper = (helper = helpers.maxRate || (depth0 != null ? depth0.maxRate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"maxRate","hash":{},"data":data}) : helper)))
    + "</td>\n          <td>"
    + escapeExpression(((helper = (helper = helpers.hours || (depth0 != null ? depth0.hours : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hours","hash":{},"data":data}) : helper)))
    + "</td>\n          <td>"
    + escapeExpression(((helper = (helper = helpers.monthsWorked || (depth0 != null ? depth0.monthsWorked : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"monthsWorked","hash":{},"data":data}) : helper)))
    + "</td>\n          <td>"
    + escapeExpression(((helper = (helper = helpers.sales || (depth0 != null ? depth0.sales : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sales","hash":{},"data":data}) : helper)))
    + "</td>\n          <td><a href=\"#/contractor/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">Details</a></td>\n        </tr>\n";
},"4":function(depth0,helpers,partials,data) {
  return "  No results.\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.results : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

return this["JST"];

});