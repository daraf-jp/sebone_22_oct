define ['jquery', 'backbone'], ($, Backbone) ->
  class NewView extends Backbone.View
    events:
      'submit' : 'submit'

    submit: (e) ->
      e.stopPropagation()
      e.preventDefault()
      name = @$('[data-js=new_name]').val()
      console.log name + 'を保存します'
