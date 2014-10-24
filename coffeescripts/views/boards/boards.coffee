define ['jquery', 'backbone', 'templates/boards/boards', 'views/boards/new'], ($, Backbone, template, NewView) ->
  class BoardsView extends Backbone.View
    events:
      'click [data-js=destroy]' : 'destroy'

    initialize: (opitons) ->
      @renderBoards()

    renderBoards: ->
      @$el.html template()
      new NewView(el: @$('[data-js=new]'))

    destroy: ->
      console.log '×ボタンが押されました'
