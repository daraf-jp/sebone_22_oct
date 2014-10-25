define ['jquery', 'backbone'], ($, Backbone) ->
  class Board extends Backbone.Model
    defaults:
      name: ''

    validate: (attrs) ->
      if attrs.name.length is 0
        '掲示板名が未入力です'
