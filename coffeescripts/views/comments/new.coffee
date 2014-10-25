define ['jquery', 'backbone', 'models/comment'], ($, Backbone, Comment) ->
  class NewView extends Backbone.View
    events:
      'submit' : 'submit'

    initialize: (options) ->
      @comments = options.comments

    submit: (e) ->
      e.preventDefault()
      e.stopPropagation()

      comment = new Comment()
      @listenTo comment, 'invalid', (model, error) =>
        @$('[data-js=invalid]').text error

      date = new Date(Date.now())
      comment.set
        name: @$('[data-js=new_name]').val()
        content: @$('[data-js=new_content]').val()
        created_at: "#{date.getFullYear()}年#{date.getMonth()+1}月#{date.getDate()}日 #{date.getDay()}時#{date.getHours()}分#{date.getMinutes()}秒"

      @$('[data-js=invalid]').empty()
      if comment.isValid()
        @$('[data-js=new_name]').val('名無し')
        @$('[data-js=new_content]').val('')

        @comments.add comment
