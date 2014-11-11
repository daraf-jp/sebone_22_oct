var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'templates/boards/show', 'templates/boards/edit'], function($, Backbone, templateShow, templateEdit) {
  var IndexView;
  return IndexView = (function(_super) {
    __extends(IndexView, _super);

    function IndexView() {
      return IndexView.__super__.constructor.apply(this, arguments);
    }

    IndexView.prototype.className = 'list-group-item';

    IndexView.prototype.tagName = 'a';

    IndexView.prototype.events = {
      'click [data-js=destroy]': 'destroy',
      'click [data-js=edit]': 'edit',
      'click [data-js=done]': 'done',
      'click [data-js=cancel]': 'cancel',
      'click [data-js=edit_name]': 'prevent'
    };

    IndexView.prototype.initialize = function(options) {
      this.board = options.board;
      return this.listenTo(this.board, 'invalid', (function(_this) {
        return function(model, error) {
          return _this.$('[data-js=invalid]').text(error);
        };
      })(this));
    };

    IndexView.prototype.render = function() {
      this.$el.html(templateShow({
        board: this.board
      }));
      this.$el.attr('href', '#' + this.board.cid);
      return this;
    };

    IndexView.prototype.destroy = function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (window.confirm('本当に削除してよろしいですか？')) {
        this.remove();
        return this.board.destroy();
      }
    };

    IndexView.prototype.edit = function(e) {
      e.preventDefault();
      e.stopPropagation();
      return this.$el.html(templateEdit({
        board: this.board
      }));
    };

    IndexView.prototype.done = function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.board.set({
        name: this.$('[data-js=edit_name]').val()
      });
      this.$('[data-js=invalid]').val('');
      if (this.board.isValid()) {
        return this.$el.html(templateShow({
          board: this.board
        }));
      }
    };

    IndexView.prototype.cancel = function(e) {
      e.preventDefault();
      e.stopPropagation();
      return this.$el.html(templateShow({
        board: this.board
      }));
    };

    IndexView.prototype.prevent = function(e) {
      e.preventDefault();
      return e.stopPropagation();
    };

    return IndexView;

  })(Backbone.View);
});
