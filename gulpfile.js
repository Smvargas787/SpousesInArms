var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var ngAnnotate = require('gulp-ng-annotate');


//Calls server to launch gulp.
gulp.task('server',function() {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: ['ng*', 'static*']
  })
})

//Sets up gulp to help run the server.
gulp.task('js:build', function(){
  return gulp.src(['.ng/module.js', 'ng/**/*.js'])
  .pipe(ngAnnotate())
  .pipe(gulp.dest('./static/js'))
})

//Initiates Gulp to run the server. Default makes that all happen.
gulp.task('default',['js:build','server'], function(){
gulp.watch('./ng/**/*.js',['js:build'])
})
