var config = require('../gulp.config').browserify,
    gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    buffer = require('vinyl-buffer'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    //bundle = require('bundle'),
    source = require('vinyl-source-stream'),
    connect = require('gulp-connect');

//======================================
// Task: browserify
//======================================
//gulp.task('browserify', function (cb) {
//  var stream = browserify(config.src)
//    .bundle()
//    .pipe(source(config.name))
//    .pipe(gulp.dest(config.dest))
//    .pipe(connect.reload());
//  return stream;
//});

/* nicer browserify errors */
var gutil = require('gulp-util');
var chalk = require('chalk');

function map_error(err) {
    if (err.fileName) {
        // regular error
        gutil.log(chalk.red(err.name)
            + ': '
            + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
            + ': '
            + 'Line '
            + chalk.magenta(err.lineNumber)
            + ' & '
            + 'Column '
            + chalk.magenta(err.columnNumber || err.column)
            + ': '
            + chalk.blue(err.description))
    } else {
        // browserify error..
        gutil.log(chalk.red(err.name)
            + ': '
            + chalk.yellow(err.message))
    }

    this.end()
}
/* */
function bundle_js(bundler){
    return bundler.bundle()
        .on('error', map_error)
        .pipe(source(config.src))
        .pipe(buffer())
        //.pipe(gulp.dest(config.dest))//write non-uglified version of stream
        .pipe(rename(config.name))
        .pipe(sourcemaps.init({ loadMaps: true }))
        // capture sourcemaps from transforms
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dest))
        .pipe(connect.reload())
}


gulp.task('betterBrowserify', function browserifyGulp(){
    var bundler = browserify(config.src, { debug: true }).transform(babelify, {});
    return bundle_js(bundler);
});