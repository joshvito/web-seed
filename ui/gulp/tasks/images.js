var config = require('../gulp.config').images,
  gulp = require('gulp'),
  connect = require('gulp-connect');

//================================================
// Task: img
//================================================
gulp.task('img', function () {
  // must use return, to make sure tasks run asynchronously
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload());
});
