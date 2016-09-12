var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var sass = require('gulp-sass');

gulp.task('concat', function() {
  gulp.src(['app.js', './directives/*.js', './services/*.js', './views/**/*.js'])
  .pipe(concat('all.js'))
  .pipe(gulp.dest('./dist'));
});


gulp.task('sass', function() {
  gulp.src(['./styles/base/reset.css', './styles/css/main.css'])
  .pipe(concat('all.css'))
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['concat', 'sass']);

// gulp.watch(['./**/*.js'], ['concat']);
