require.config({
  paths: {
    jquery: '../../bower_components/jquery/dist/jquery',
    underscore: '../../bower_components/underscore/underscore',
    backbone: '../../bower_components/backbone/backbone',
    jade: '../../bower_components/jade/runtime',
    backbone_relational: '../../bower_components/backbone-relational/backbone-relational'
  }
});

require(['jquery', 'routers/app', 'collections/boards'], function($, AppRouter, Boards) {
  return $(function() {
    var boards;
    boards = new Boards();
    new AppRouter({
      $el: $('[data-js=app]'),
      boards: boards
    });
    Backbone.history || (Backbone.history = new Backbone.History({}));
    return Backbone.history.start();
  });
});
