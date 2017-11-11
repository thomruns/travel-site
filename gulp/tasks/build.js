var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();


//for testing purposes only before deployment
gulp.task('previewDist', function() {
    browserSync.init({
        notify: false,
        server: {
            base: "docs"
        }
    });
});

gulp.task('deleteDistFolder', ['icons'], function() {
    return del('./docs');
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function(){
    var pathsToCopy = [
        './**/*',
        '!./index.html',
        '!./assets/images/**',
        '!./assets/styles/**',
        '!./assets/scripts/**',
        '!./temp',
        '!./temp/**',
        '!./node_modules',
        '!./node_modules/**',
        '!./package.json',
        '!./gulp',
        '!./gulp/**',
        '!./*.js'

    ]

    return gulp.src(pathsToCopy)
    .pipe(gulp.dest('./docs'));
});


gulp.task('optimizeImages', ['deleteDistFolder'], function() {
    return gulp.src(['./assets/images/**/*', '!./assets/images/icons', '!./assets/images/icons/**/*'])
    .pipe(imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
    }))    
    .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
    gulp.start('usemin');
});

gulp.task('usemin', ['styles', 'scripts'], function() {
    return gulp.src('./index.html')
    .pipe(usemin({
        css: [function(){return rev()}, function(){return cssnano()}],
        js:[function(){return rev()}, function(){return uglify()}]
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);