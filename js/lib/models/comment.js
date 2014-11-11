var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'backbone_relational'], function($, Backbone) {
  var Comment;
  Comment = (function(_super) {
    __extends(Comment, _super);

    function Comment() {
      return Comment.__super__.constructor.apply(this, arguments);
    }

    Comment.prototype.defaults = {
      name: '名無し',
      content: '',
      created_at: ''
    };

    Comment.prototype.validate = function(attrs) {
      if (attrs.content.length === 0) {
        return 'コメントが未入力です';
      }
    };

    return Comment;

  })(Backbone.RelationalModel);
  return Comment.setup();
});
