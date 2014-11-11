var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'backbone', 'models/comment', 'collections/comments', 'backbone_relational'], function($, Backbone, Comment, Comments) {
  var Board;
  Board = (function(_super) {
    __extends(Board, _super);

    function Board() {
      return Board.__super__.constructor.apply(this, arguments);
    }

    Board.prototype.relations = [
      {
        type: Backbone.HasMany,
        key: 'comments',
        relatedModel: Comment,
        collectionType: Comments,
        reverseRelation: {
          key: 'board',
          includeInJSON: true
        }
      }
    ];

    Board.prototype.defaults = {
      name: ''
    };

    Board.prototype.validate = function(attrs) {
      if (attrs.name.length === 0) {
        return '掲示板名が未入力です';
      }
    };

    return Board;

  })(Backbone.RelationalModel);
  return Board.setup();
});
