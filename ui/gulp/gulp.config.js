/**
 * Created by jv39363 on 01/27/2016.
 */
var DEST = "./dest";
var SRC = './src';

module.exports = {
    webserver: {
        root: [DEST],
        livereload: {enable: true, port: 1234},
        listen: 1234,
        host: 'localhost',
        port: 9000
    },
    clean: {
        src: [
            DEST
        ],
        opts: { read: false }
    },
    defaults: {
        runseq: [
            'clean',
            ['betterBrowserify', 'fonts', 'img', 'css', 'view', 'templates'],
            ['watch', 'webserver'],
            'chrome'
        ]
    },
    fonts: {
        src: [
            "./node_modules/bootstrap/dist/fonts/*"
        ],
        dest: DEST + "/fonts"
    },
    styles: {
        src: [
            './node_modules/bootstrap/dist/css/*.min.css',
            SRC + '/**/*.styl',
            SRC + '/styles/*.styl',
            SRC + '/styles/**/*.styl',
        ],
        dest: DEST,
        autopre: {
            browsers: ['last 2 versions'],
            cascade: false
        },
        concatname: 'app.css',
        name: {suffix: '.min'},
        uglyset: { 'max-line-len': 80 }
    },
    images: {
        src: SRC + '/assets/img/*',
        dest: DEST + '/app/assets/img'
    },
    viewHtml: {
        src: [
            SRC + '/views/**/*.html'
        ],
        dest: DEST,
        viewSrc: [
            SRC + '/index.html'
        ]
    },
    watch: [
        {
            src: SRC +  '/**/*.js',
            tasks: ['betterBrowserify']
        },
        {
            src: [
                SRC + '/**/*.styl',
                SRC + '/*.styl'
            ],
            tasks: ['css']
        },
        {
            src: SRC + '/**/*.html',
            tasks: ['view', 'templates']
        },
        {
            src: SRC + '/**/*.json',
            tasks: ['json']
        }
    ],
    chrome: {
        dest: DEST + "/index.html",
        opts: {
            uri: "http://localhost:9000",
            app: "chrome"
        }
    },
    browserify: {
        src: SRC + '/app.js',
        name: 'bundle.js',
        dest: DEST
    }
};
