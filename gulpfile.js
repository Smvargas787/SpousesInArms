var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('server',function() {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: ['ng*', 'static*']
  })
})

gulp.task('js:build', function(){
  return gulp.src(['.ng/module.js', 'ng/**/*.js'])
  .pipe(ngAnnotate())
  .pipe(gulp.dest('./static/js'))
})

gulp.task('default',['js:build','server'], function(){
gulp.watch('./ng/**/*.js',['js:build'])
})
