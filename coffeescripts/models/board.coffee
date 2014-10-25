define ['jquery', 'backbone', 'models/comment', 'collections/comments', 'backbone_relational'], ($, Backbone, Comment, Comments) ->
  class Board extends Backbone.RelationalModel
    relations: [{
      type: Backbone.HasMany
      key: 'comments'
      relatedModel: Comment
      collectionType: Comments
      reverseRelation:
        key: 'board'
        includeInJSON: true
    }]

    defaults:
      name: ''

    validate: (attrs) ->
      if attrs.name.length is 0
        '掲示板名が未入力です'

  Board.setup()
