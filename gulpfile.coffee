gulp = require('gulp')
ts = require('gulp-typescript')
webserver = require('gulp-webserver')

gulp.task 'webserver', ->
  gulp.src('app')
    .pipe(webserver({
      host: process.env.LOCAL_IP,
      port: 8080,
      livereload: true
    }))

gulp.task 'ts', ->
  gulp.src(['ts/**/*.ts'])
    .pipe(ts())
    .js
    .pipe gulp.dest('app/js/')

gulp.task 'watch', ->
  gulp.watch 'ts/**/*.ts', ->
    gulp.run 'ts'

gulp.task 'default', ['webserver'], ->
  gulp.run('watch')
