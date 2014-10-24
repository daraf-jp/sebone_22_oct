define ['jquery', 'backbone', 'templates/boards/show'], ($, Backbone, template) ->
  class IndexView extends Backbone.View
    initialize: (options) ->
      @board = options.board

    render: ->
      @$el.html template(board: @board)
      @
