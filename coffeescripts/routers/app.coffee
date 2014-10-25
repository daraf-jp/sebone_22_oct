define ['jquery', 'backbone', 'views/boards/boards'], ($, Backbone, BoardsView) ->
  class AppRouter extends Backbone.Router
    routes:
      ':cid' : 'renderComments'
      ''    : 'renderBoards'

    initialize: (options) ->
      @$el = options.$el
      @boards = options.boards
      location.assign '#'
      @renderBoards()

    renderBoards: ->
      new BoardsView el: @$el, boards: @boards

    renderComments: (id) ->
      board = @boards.get(id)
      if board?
        console.log board.get('name')
      else
        location.assign '#'
