define ['jquery', 'backbone', 'views/boards/boards'], ($, Backbone, BoardsView) ->
  class AppRouter extends Backbone.Router
    initialize: (options) ->
      @$el = options.$el
      @boards = options.boards
      location.assign '#'
      @renderBoards()

    renderBoards: ->
      new BoardsView el: @$el, boards: @boards
