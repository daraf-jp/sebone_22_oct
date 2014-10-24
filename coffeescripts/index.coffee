require.config
  paths:
    jquery: '../../bower_components/jquery/dist/jquery'
    underscore: '../../bower_components/underscore/underscore'
    backbone: '../../bower_components/backbone/backbone'
    jade: '../../bower_components/jade/runtime'

require ['jquery', 'views/boards/boards', 'collections/boards', 'models/board'], ($, BoardsView, Boards, Board) ->
  $ ->
    boards = new Boards()

    board1 = new Board(name: '掲示板タイトル1')
    board2 = new Board(name: '掲示板タイトル2')
    boards.add board1
    boards.add board2
    boards.each (b) -> console.log b.get('name')

    new BoardsView(el: $('[data-js=app]'))
