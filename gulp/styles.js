var paths = require('./paths.js');
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
//var concat = require('gulp-concat');

gulp.task('styles', ['clean'], function(){
  return gulp.src(paths.styles.src)
    .pipe(stylus({
      cache: false,
      compress: false
    }).on('error', notify.onError({
      title: 'Stylus Error',
      message: "\n<%= error.message %>"
    })))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.styles.dest));
});

/*
gulp.task('vendor:styles', function(){
  gulp.src('bower_components/angular/angular.min.js')
    .pipe(gulp.dest('dist/'));
});
*/
