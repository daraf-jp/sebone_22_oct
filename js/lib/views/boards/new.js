var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'models/board'], function($, Backbone, Board) {
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
      return this.boards = options.boards;
    };

    NewView.prototype.submit = function(e) {
      var board;
      e.stopPropagation();
      e.preventDefault();
      board = new Board();
      this.listenTo(board, 'invalid', (function(_this) {
        return function(model, error) {
          return _this.$('[data-js=invalid]').text(error);
        };
      })(this));
      board.set({
        name: this.$('[data-js=new_name]').val()
      });
      this.$('[data-js=new_name]').val('');
      this.$('[data-js=invalid]').empty();
      if (board.isValid()) {
        return this.boards.add(board);
      }
    };

    return NewView;

  })(Backbone.View);
});
