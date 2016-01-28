var config = require('../gulp.config').fonts,
  gulp = require('gulp'),
  flatten = require('gulp-flatten');
  connect = require('gulp-connect');

//================================================
// Task: fonts
//================================================
gulp.task('fonts', function () {
  // must use return, to make sure tasks run asynchronously
  return gulp.src(config.src)
    .pipe(flatten())
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload());
});
