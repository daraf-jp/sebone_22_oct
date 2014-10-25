define ['jquery', 'backbone', 'templates/comments/comments'], ($, Backbone, template) ->
  class CommentsView extends Backbone.View
    initialize: (options) ->
      @board = options.board
      @comments = @board.get('comments')
      @renderComments()

    renderComments: ->
      @$el.html template board: @board
