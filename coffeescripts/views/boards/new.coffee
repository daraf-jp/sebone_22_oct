define ['jquery', 'backbone', 'models/board'], ($, Backbone, Board) ->
  class NewView extends Backbone.View
    events:
      'submit' : 'submit'

    submit: (e) ->
      e.stopPropagation()
      e.preventDefault()

      board = new Board()
      board.set name: @$('[data-js=new_name]').val()
      @$('[data-js=new_name]').val('')

      console.log  board.get('name') + 'を保存しました'
