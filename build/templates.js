define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["results"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <p>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + ", "
    + escapeExpression(((helper = (helper = helpers.agency || (depth0 != null ? depth0.agency : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"agency","hash":{},"data":data}) : helper)))
    + ", "
    + escapeExpression(((helper = (helper = helpers.vendor || (depth0 != null ? depth0.vendor : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"vendor","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

return this["JST"];

});