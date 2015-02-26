require.config({
  paths: {
    backbone: '../../bower_components/backbone/backbone',
    underscore: '../../bower_components/underscore/underscore',
    jquery: '../../bower_components/jquery/dist/jquery',
    fuse: '../../bower_components/fuse.js/src/fuse',
    handlebars: '../../bower_components/handlebars/handlebars',
    numeral: '../../bower_components/numeral/numeral',
    moment: '../../bower_components/moment/moment',
    tpl: '../../build/templates'
  },
  config: {
    moment: {
      noGlobal: true
    }
  }
});
