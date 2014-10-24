define ['jquery', 'backbone', 'models/board'], ($, Backbone, Board) ->
  class NewView extends Backbone.View
    events:
      'submit' : 'submit'

    initialize: (options) ->
      @boards = options.boards

    submit: (e) ->
      e.stopPropagation()
      e.preventDefault()

      board = new Board()
      board.set name: @$('[data-js=new_name]').val()
      @$('[data-js=new_name]').val('')

      @boards.add board
