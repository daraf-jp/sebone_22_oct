var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'templates/comments/show'], function($, Backbone, template) {
  var ShowView;
  return ShowView = (function(_super) {
    __extends(ShowView, _super);

    function ShowView() {
      return ShowView.__super__.constructor.apply(this, arguments);
    }

    ShowView.prototype.className = 'media';

    ShowView.prototype.initialize = function(options) {
      return this.comment = options.comment;
    };

    ShowView.prototype.render = function() {
      this.$el.html(template({
        comment: this.comment
      }));
      return this;
    };

    return ShowView;

  })(Backbone.View);
});
