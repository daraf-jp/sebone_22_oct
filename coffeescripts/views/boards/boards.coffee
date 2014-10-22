define ['jquery', 'backbone'], ($, Backbone) ->
  class BoardsView extends Backbone.View
    initialize: (opitons) ->
      console.log 'Backbone.Viewを作成しました'
      console.log '監視対象は' + @$el.html() + 'です'
