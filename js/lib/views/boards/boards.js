var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'templates/boards/boards', 'views/boards/new', 'views/boards/index'], function($, Backbone, template, NewView, IndexView) {
  var BoardsView;
  return BoardsView = (function(_super) {
    __extends(BoardsView, _super);

    function BoardsView() {
      return BoardsView.__super__.constructor.apply(this, arguments);
    }

    BoardsView.prototype.initialize = function(options) {
      this.boards = options.boards;
      return this.renderBoards();
    };

    BoardsView.prototype.renderBoards = function() {
      this.$el.html(template());
      new NewView({
        el: this.$('[data-js=new]'),
        boards: this.boards
      });
      return new IndexView({
        el: this.$('[data-js=index]'),
        boards: this.boards
      });
    };

    return BoardsView;

  })(Backbone.View);
});
