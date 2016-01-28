
var config = require('../gulp.config').webserver,
  gulp = require('gulp'),
  livereload = require('gulp-livereload'),
  connect = require('gulp-connect');

//======================================
// webserver and livereload
//======================================
gulp.task('webserver', function(){
  connect.server(config);
});
