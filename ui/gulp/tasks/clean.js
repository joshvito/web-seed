var config = require('../gulp.config').clean,
  gulp = require('gulp'),
  clean = require('gulp-rimraf');

//======================================
// Task: clean
//======================================
gulp.task('clean', function () {
  // must use return, to make sure tasks run asynchronously
  return gulp.src(config.src, config.opts)
    .pipe(clean());
});
