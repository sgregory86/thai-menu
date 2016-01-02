'use strict';

var gulp = require('gulp'),
    gls = require('gulp-live-server'),
    plug = require('gulp-load-plugins')();

gulp.task('htmlhint', function() {
    return gulp.src('index.html')
        .pipe(plug.htmlhint())
        .pipe(plug.htmlhint.reporter());
});

gulp.task('jshint', function() {
    return gulp.src('app/**/*.js')
        .pipe(plug.jshint())
        .pipe(plug.jshint.reporter());
});

gulp.task('watch', function() {
    gulp.watch('index.html', ['htmlhint']);
    gulp.watch('app/**/*.js', ['jshint']);
});

gulp.task('serve', function() {
    var server = gls.static('src', 8888);
    server.start();
});

gulp.task('default', ['htmlhint', 'jshint', 'watch']);