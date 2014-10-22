define ['jquery', 'backbone', 'templates/boards/boards'], ($, Backbone, template) ->
  class BoardsView extends Backbone.View
    events:
      'click [data-js=destroy]' : 'destroy'

    initialize: (opitons) ->
      @renderBoards()

    renderBoards: ->
      @$el.html template()

    destroy: ->
      console.log '×ボタンが押されました'
