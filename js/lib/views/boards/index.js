var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'views/boards/show'], function($, Backbone, ShowView) {
  var IndexView;
  return IndexView = (function(_super) {
    __extends(IndexView, _super);

    function IndexView() {
      return IndexView.__super__.constructor.apply(this, arguments);
    }

    IndexView.prototype.initialize = function(options) {
      this.boards = options.boards;
      this.boards.each((function(_this) {
        return function(board) {
          return _this.renderBoard(board);
        };
      })(this));
      return this.listenTo(this.boards, 'add', (function(_this) {
        return function(board) {
          return _this.renderBoard(board);
        };
      })(this));
    };

    IndexView.prototype.renderBoard = function(board) {
      var view;
      view = new ShowView({
        board: board
      });
      return this.$el.append(view.render().el);
    };

    return IndexView;

  })(Backbone.View);
});
