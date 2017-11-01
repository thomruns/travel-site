var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(); //these are gulp plugins

gulp.task('watch', function() { 
    browserSync.init({
        notify: false,
        server: {
            base: "travel-site"
        }
    });

    watch('./index.html', function() {
        browserSync.reload();
    });
    
    watch('./assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./temp/styles/styles.css')
    .pipe(browserSync.stream());
});