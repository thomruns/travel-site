var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin');

gulp.task('deleteDistFolder', function() {
    return del('./dist');
});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
    return gulp.src(['./assets/images/**/*', '!./assets/images/icons', '!./assets/images/icons/**/*'])
    .pipe(imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
    }))    
    .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('usemin', ['deleteDistFolder'], function() {
    return gulp.src('./index.html')
    .pipe(usemin())
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['deleteDistFolder','optimizeImages', 'usemin']);