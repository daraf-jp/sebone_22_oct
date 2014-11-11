var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'templates/comments/comments', 'views/comments/new', 'views/comments/index'], function($, Backbone, template, NewView, IndexView) {
  var CommentsView;
  return CommentsView = (function(_super) {
    __extends(CommentsView, _super);

    function CommentsView() {
      return CommentsView.__super__.constructor.apply(this, arguments);
    }

    CommentsView.prototype.initialize = function(options) {
      this.board = options.board;
      this.comments = this.board.get('comments');
      return this.renderComments();
    };

    CommentsView.prototype.renderComments = function() {
      this.$el.html(template({
        board: this.board
      }));
      new NewView({
        el: $('[data-js=new]'),
        comments: this.comments
      });
      return new IndexView({
        el: $('[data-js=index]'),
        comments: this.comments
      });
    };

    return CommentsView;

  })(Backbone.View);
});
