var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
    console.log("Gulp task created");
});

gulp.task('html' , function() {
    console.log("A change occurred to the HTML");
});

gulp.task('styles' , function() {
    console.log("Imagine Sass or PostCSS tasks running here");
});

gulp.task('watch', function() {
    watch('./index.html', function() {
        gulp.start('html');
    });

    watch('./assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});