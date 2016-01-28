var configCss = require('../gulp.config').styles,
  gulp = require('gulp'),
  //stylus = require('gulp-stylus'),
  less = require('gulp-less'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  //uglifycss = require('gulp-uglifycss'),
  autoprefixer = require('gulp-autoprefixer'),
  connect = require('gulp-connect');

//======================================
// Task: css
//======================================
gulp.task('css', function () {
  // must use return, to make sure tasks run asynchronously
  return gulp.src(configCss.src)
    //.pipe(stylus())
    .pipe(concat(configCss.concatname))
    // .pipe(gulp.dest(configCss.dest))
    .pipe(rename(configCss.name))
    //.pipe(uglifycss(configCss.uglyset))
    .pipe(autoprefixer(configCss.autopre))
    .pipe(gulp.dest(configCss.dest))
    .pipe(connect.reload());

});
