define ['jquery', 'backbone', 'templates/boards/show'], ($, Backbone, template) ->
  class IndexView extends Backbone.View
    className: 'list-group-item'

    events:
      'click [data-js=destroy]' : 'destroy'

    initialize: (options) ->
      @board = options.board

    render: ->
      @$el.html template(board: @board)
      @

    destroy: (e) ->
      e.preventDefault()
      e.stopPropagation()

      if window.confirm '本当に削除してよろしいですか？'
        @remove()
        @board.destroy()
