gulp = require 'gulp'
coffee = require 'gulp-coffee'

gulp.task 'default', ->
  console.log 'default'

printError = (error) ->
  console.log error.toString()
  @emit 'end'

gulp.task 'coffee', ->
  gulp
  .src 'coffeescripts/**/*.coffee'
  .pipe coffee bare: true
  .on 'error', printError
  .pipe gulp.dest 'js/lib/'
