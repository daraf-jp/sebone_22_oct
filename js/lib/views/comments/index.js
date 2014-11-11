var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'views/comments/show'], function($, Backbone, ShowView) {
  var IndexView;
  return IndexView = (function(_super) {
    __extends(IndexView, _super);

    function IndexView() {
      return IndexView.__super__.constructor.apply(this, arguments);
    }

    IndexView.prototype.initialize = function(options) {
      this.comments = options.comments;
      this.comments.on('add', (function(_this) {
        return function(comment) {
          return _this.renderComment(comment);
        };
      })(this));
      return this.renderComments();
    };

    IndexView.prototype.renderComments = function() {
      return this.comments.each((function(_this) {
        return function(comment) {
          return _this.renderComment(comment);
        };
      })(this));
    };

    IndexView.prototype.renderComment = function(comment) {
      var showView;
      showView = new ShowView({
        comment: comment
      });
      return this.$el.append(showView.render().el);
    };

    return IndexView;

  })(Backbone.View);
});
