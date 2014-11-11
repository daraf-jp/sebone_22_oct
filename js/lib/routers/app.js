var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'views/boards/boards', 'views/comments/comments'], function($, Backbone, BoardsView, CommentsView) {
  var AppRouter;
  return AppRouter = (function(_super) {
    __extends(AppRouter, _super);

    function AppRouter() {
      return AppRouter.__super__.constructor.apply(this, arguments);
    }

    AppRouter.prototype.routes = {
      ':cid': 'renderComments',
      '': 'renderBoards'
    };

    AppRouter.prototype.initialize = function(options) {
      this.$el = options.$el;
      this.boards = options.boards;
      location.assign('#');
      return this.renderBoards();
    };

    AppRouter.prototype.renderBoards = function() {
      return new BoardsView({
        el: this.$el,
        boards: this.boards
      });
    };

    AppRouter.prototype.renderComments = function(id) {
      var board;
      board = this.boards.get(id);
      if (board != null) {
        return new CommentsView({
          el: this.$el,
          board: board
        });
      } else {
        return location.assign('#');
      }
    };

    return AppRouter;

  })(Backbone.Router);
});
