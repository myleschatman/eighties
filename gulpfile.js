"use strict";

const gulp = require('gulp');
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('gulp-buffer');
const browserSync = require('browser-sync').create();

gulp.task('style', () => {
  return gulp.src([
    './src/**/*.js',
    './*.js'
    ])
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {verbose: true}));
});

gulp.task('build', () => {
  browserify('src/index.js')
    .transform(babelify, {
      presets: ['es2015']
    })
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(gulp.dest('build/scripts'));
});

gulp.task('static', () => {
  return gulp.src('static/**/*')
    .pipe(gulp.dest('build/assets'));
});

gulp.task('serve', () => {
  browserSync.init({
    server: "./"
  });
  gulp.watch('src/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['style', 'build', 'static', 'serve']);
