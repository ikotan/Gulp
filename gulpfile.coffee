gulp = require('gulp')
webserver = require('gulp-webserver')

gulp.task 'webserver', ->
  gulp.src('app')
    .pipe(webserver({
      host: process.env.LOCAL_IP,
      port: 8080,
      livereload: true
    }))

gulp.task 'default', ['webserver']
