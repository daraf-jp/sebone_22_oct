define ['jquery', 'backbone'], ($, Backbone) ->
  class BoardsView extends Backbone.View
    initialize: (opitons) ->
      console.log 'Backbone.Viewを作成しました'
