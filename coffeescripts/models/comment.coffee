define ['jquery', 'backbone', 'backbone_relational'], ($, Backbone) ->
  class Comment extends Backbone.RelationalModel
    defaults:
      name: '名無し'
      content: ''
      created_at: ''

  Comment.setup()
