var gulp = require("gulp"),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    minifyCSS = require('gulp-minify-css');

var appSrcPath = "src/app/",
    distPath = "dist/";

gulp.task('app-js', function() {
    gulp.src(appJSsources)
	.pipe(sourcemaps.init())
        .pipe(concat('app.bundle.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
	.pipe(sourcemaps.write())
        .pipe(gulp.dest(dPath + 'js/'))
});
