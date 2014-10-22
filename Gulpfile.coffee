gulp = require 'gulp'
coffee = require 'gulp-coffee'
jade = require 'gulp-jade'

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

gulp.task 'jade', ->
  gulp
  .src 'index.jade'
  .pipe jade pretty: true
  .on 'error', printError
  .pipe gulp.dest './'

gulp.task 'watch', ->
  gulp.watch 'coffeescripts/**', ['coffee']
