define ['jquery', 'backbone', 'templates/boards/show', 'templates/boards/edit'], ($, Backbone, templateShow, templateEdit) ->
  class IndexView extends Backbone.View
    className: 'list-group-item'

    events:
      'click [data-js=destroy]' : 'destroy'
      'click [data-js=edit]' : 'edit'

    initialize: (options) ->
      @board = options.board

    render: ->
      @$el.html templateShow(board: @board)
      @

    destroy: (e) ->
      e.preventDefault()
      e.stopPropagation()

      if window.confirm '本当に削除してよろしいですか？'
        @remove()
        @board.destroy()

    edit: (e) ->
      e.preventDefault()
      e.stopPropagation()

      @$el.html templateEdit(board: @board)

