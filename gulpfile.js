var gulp = require('gulp'),
watch = require('gulp-watch'), //these are gulp plugins
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('default', function() {
    console.log("Gulp task created");
});

gulp.task('html' , function() {
    console.log("A change occurred to the HTML");
});

gulp.task('styles' , function() {
    return gulp.src('./assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./temp/styles'));
});

gulp.task('watch', function() {
    watch('./index.html', function() {
        gulp.start('html');
    });

    watch('./assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});