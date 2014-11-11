var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'models/comment'], function($, Backbone, Comment) {
  var NewView;
  return NewView = (function(_super) {
    __extends(NewView, _super);

    function NewView() {
      return NewView.__super__.constructor.apply(this, arguments);
    }

    NewView.prototype.events = {
      'submit': 'submit'
    };

    NewView.prototype.initialize = function(options) {
      return this.comments = options.comments;
    };

    NewView.prototype.submit = function(e) {
      var comment, date;
      e.preventDefault();
      e.stopPropagation();
      comment = new Comment();
      this.listenTo(comment, 'invalid', (function(_this) {
        return function(model, error) {
          return _this.$('[data-js=invalid]').text(error);
        };
      })(this));
      date = new Date(Date.now());
      comment.set({
        name: this.$('[data-js=new_name]').val(),
        content: this.$('[data-js=new_content]').val(),
        created_at: "" + (date.getFullYear()) + "年" + (date.getMonth() + 1) + "月" + (date.getDate()) + "日 " + (date.getDay()) + "時" + (date.getHours()) + "分" + (date.getMinutes()) + "秒"
      });
      this.$('[data-js=invalid]').empty();
      if (comment.isValid()) {
        this.$('[data-js=new_name]').val('名無し');
        this.$('[data-js=new_content]').val('');
        return this.comments.add(comment);
      }
    };

    return NewView;

  })(Backbone.View);
});
