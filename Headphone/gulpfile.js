//require gulp's variables
const {src, dest, parallel, series, watch } = require('gulp');
//require browserSync
const browserSync = require('browser-sync').create();
//require gulp-concat
const concat = require('gulp-concat');
//require uglify js
const uglify = require('gulp-uglify-es').default;
//require sass
const sass = require('gulp-sass');
//require autoprefixer
const autoprefixer = require('gulp-autoprefixer');
//require clean-css
const cleancss = require('gulp-clean-css');
//require image-min
const imagemin = require('gulp-imagemin');
//require newer
const newer = require('gulp-newer');
//require del
const del = require('del');


//general browserSync logic
function browsersync() {
    browserSync.init({
        server: { baseDir: 'app/'},
        notify: false,
        online: true
    });
}


//format scripts
function scripts() {
    return src([
        'app/js/*.js'
    ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js/'))
    .pipe(browserSync.stream())
}

//format style
function style() {
    return src('app/sass/style.sass')
    .pipe(sass())
    .pipe(concat('app.min.css'))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
    .pipe(cleancss({level: {1: {specialComments: 0}}}))
    .pipe(dest('app/css/'))
    .pipe(browserSync.stream())
}

//format img
function images(){
    return src('app/img/src/**/*')
    // .pipe(newer())
    .pipe(imagemin())
    .pipe(dest('app/img/dest'))
}

function cleanimg() {
	return del('app/img/dest/**/*', { force: true });
}

//reload page on code save
function startWatch() {
    watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
    watch('app/sass/**/*.sass', style);
    watch('app/*.html').on('change', browserSync.reload);
    watch('app/img/src/**/*', images);
}

//build function
function buildcopy() {
	return src([ 
		'app/css/**/*.min.css',
		'app/js/**/*.js',
		'app/img/dest/**/*',
		'app/libs/**/*',
		'app/**/*.html',
		'app/favicon.ico',
		], { base: 'app' }) 
	.pipe(dest('dist'))
}


//functions to tasks export

exports.browsersync = browsersync;

exports.scripts = scripts;

exports.style = style;

exports.images = images;

exports.cleanimg = cleanimg;

//****************build task*****************
exports.build = series(style, scripts, images, buildcopy);

exports.default = parallel(style, scripts, images,  browsersync, startWatch);
