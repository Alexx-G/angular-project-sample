var gulp = require("gulp"),
    minifyHTML = require('gulp-minify-html'),
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

gulp.task('app-css', function() {
    gulp.src('src/css/*.css')
      .pipe(concat('styles.min.css'))
      .pipe(minifyCSS())
      .pipe(gulp.dest(distPath + 'css/'));
});

gulp.task('app-views', function() {
    var options = {
        empty: true,  // Do not remove emptry atributes
    }
    gulp.src('src/app/**/*.html', {base: appSrcPath})
      .pipe(minifyHTML(options))
      .pipe(gulp.dest(distPath + 'views/'));
});

gulp.task('build', ['app-js', 'app-css', 'app-views']);