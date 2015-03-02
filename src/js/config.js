require.config({
  paths: {
    backbone: '../../bower_components/backbone/backbone',
    underscore: '../../bower_components/underscore/underscore',
    jquery: '../../bower_components/jquery/dist/jquery',
    lunr: '../../bower_components/lunr.js/lunr',
    handlebars: '../../bower_components/handlebars/handlebars',
    numeral: '../../bower_components/numeral/numeral',
    moment: '../../bower_components/moment/moment',
    d3: '../../bower_components/d3/d3',
    mg: '../../bower_components/metrics-graphics/dist/metricsgraphics',
    tpl: '../../build/templates'
  },
  config: {
    moment: {
      noGlobal: true
    }
  }
});
