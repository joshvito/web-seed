var gulp = require('gulp'),
  runSequence = require('run-sequence'),
  config = require('../gulp.config').defaults;

//================================================
// Integrated dev and watch tasks to default tasks
//================================================

gulp.task('default', function (cb) {
  //.apply runs the function with the array fron config.runseq as args
  runSequence.apply(this, config.runseq, cb);
});
