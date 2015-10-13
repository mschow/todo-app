  'use strict';

  var gulp = require('gulp');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');
  var sourcemaps = require('gulp-sourcemaps');
  var htmlmin = require('gulp-htmlmin');

  gulp.task('default', [
    'scripts',
    'styles',
    'static',
    'templates'
  ]);

  gulp.task('watch', [
    'scripts.watch',
    'styles.watch',
    'static.watch',
    'templates.watch'
  ])

  gulp.task('scripts', function() {
    console.log('ran scripts');
    return gulp.src('src/scripts/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('build/js'));
  });

gulp.task('scripts.watch', ['scripts'], function(){
  gulp.watch('src/scripts/**/*.js', ['scripts']);
});

gulp.task ('styles', function() {
  return gulp.src('/src/styles/**/*.css')
    .pipe(sourcemaps.init())
      .pipe(concat('app.min.css'))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('build/css'));
});

gulp.task('styles.watch', ['styles'], function (){
  gulp.watch('src/styles/**/*.css', ['styles']);
});

gulp.task('static', function() {
  return gulp.src('src/static/**')
  .pipe(htmlmin())
  .pipe(gulp.dest('build'));
});

gulp.task('static.watch', ['static'], function(){
  gulp.watch('src/static/**', ['static']);
});

gulp.task('templates', function() {
  return gulp.src('src/templates/**/*.html')
  .pipe(gulp.dest('build'));
});

gulp.task('templates.watch', ['templates'], function(){
  gulp.watch('src/templates/**/*.html', ['templates']);
});
