define ['jquery', 'backbone'], ($, Backbone) ->
  class NewView extends Backbone.View
    initialize: ->
      console.log @$el.html()
