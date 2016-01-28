var config = require('../gulp.config').viewHtml,
  gulp = require('gulp'),
  connect = require('gulp-connect'),
  templateCache = require('gulp-angular-templatecache');

//================================================
// Task: views to templates.js
//================================================
gulp.task('view', function () {
  // must use return, to make sure tasks run asynchronously
  return gulp.src(config.viewSrc)
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload());
});

//================================================
// Task: views to templates.js
//================================================
gulp.task('templates', function () {
  // must use return, to make sure tasks run asynchronously
  return gulp.src(config.src)
    .pipe(templateCache('templatescache.js', { module: 'templatescache', root: 'views' }))
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload());
});

