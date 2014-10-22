require.config
  paths:
    jquery: '../../bower_components/jquery/dist/jquery'

require ['jquery'], ($) ->
  $ ->
    $('[data-js=app]').text 'jQuery!'
