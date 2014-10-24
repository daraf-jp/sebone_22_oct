define ['jquery', 'backbone', 'templates/boards/boards', 'views/boards/new', 'views/boards/index'], ($, Backbone, template, NewView, IndexView) ->
  class BoardsView extends Backbone.View
    events:
      'click [data-js=destroy]' : 'destroy'

    initialize: (options) ->
      @boards = options.boards
      @renderBoards()

    renderBoards: ->
      @$el.html template()
      new NewView(el: @$('[data-js=new]'), boards: @boards)
      new IndexView(el: @$('[data-js=index]'), boards: @boards)

    destroy: ->
      console.log '×ボタンが押されました'
