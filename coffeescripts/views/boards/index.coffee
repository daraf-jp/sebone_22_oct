define ['jquery', 'backbone'], ($, Backbone) ->
  class IndexView extends Backbone.View
    initialize: (options) ->
      @boards = options.boards
      @boards.each (board) =>
        @renderBoard(board)

      @listenTo @boards, 'add', (board) =>
        @renderBoard(board)

    renderBoard: (board) ->
      @$el.append board.get('name')
