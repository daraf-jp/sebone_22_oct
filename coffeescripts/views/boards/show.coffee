define ['jquery', 'backbone', 'templates/boards/show'], ($, Backbone, template) ->
  class IndexView extends Backbone.View
    className: 'list-group-item'

    initialize: (options) ->
      @board = options.board

    render: ->
      @$el.html template(board: @board)
      @
