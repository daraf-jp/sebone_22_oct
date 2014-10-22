define ['jquery', 'backbone', 'templates/boards/boards'], ($, Backbone, template) ->
  class BoardsView extends Backbone.View
    initialize: (opitons) ->
      @renderBoards()

    renderBoards: ->
      @$el.html template()
