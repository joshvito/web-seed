var config = require('../gulp.config').watch,
  gulp = require('gulp');

//================================================
// [watch src changed] .js .styl .html changed from src folders
//================================================
gulp.task('watch', ['betterBrowserify'], function () {

  for (var i = 0; i < config.length; i += 1) {
    gulp.watch(config[i].src, config[i].tasks);
  };

});
