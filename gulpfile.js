var gulp = require("gulp"),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    minifyCSS = require('gulp-minify-css');

var appSrcPath = "src/app/",
    distPath = "dist/";

gulp.task('app-js', function() {
    gulp.src([appSrcPath + "**/*.module.js", appSrcPath + "**/*.js"])
	.pipe(sourcemaps.init())
        .pipe(concat('app.bundle.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
    .pipe(sourcemaps.write('maps/'))
    .pipe(gulp.dest(distPath + 'js/'));
});

gulp.task('build', ['app-js']);