const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('gulp-buffer');

gulp.task('build', () => {
  browserify('src/index.js')
    .transform('babelify', {
      presets: ['es2015']
    })
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(gulp.dest('build/scripts'));
});

gulp.task('default', ['build'], () => {
  gulp.watch('src/index.js', ['build']);
});
