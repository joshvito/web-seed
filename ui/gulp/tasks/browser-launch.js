var config = require('../gulp.config').chrome,
  gulp = require('gulp'),
  open = require("gulp-open");

//================================================
// Task: launch browser url: http://localhost:5000
//================================================
gulp.task("chrome", ['betterBrowserify'], function () {
  gulp.src(config.dest)
    .pipe(open(config.opts));
});
