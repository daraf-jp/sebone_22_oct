require.config
  paths:
    jquery: '../../bower_components/jquery/dist/jquery'
    underscore: '../../bower_components/underscore/underscore'
    backbone: '../../bower_components/backbone/backbone'
    jade: '../../bower_components/jade/runtime'

require ['jquery', 'views/boards/boards', 'models/board'], ($, BoardsView, Board) ->
  $ ->
    new BoardsView(el: $('[data-js=app]'))

    model = new Board()
    console.log model.get('name')
