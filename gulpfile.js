var gulp = require('gulp'),
watch = require('gulp-watch'), //these are gulp plugins
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();

gulp.task('default', function() {
    console.log("Gulp task created");
});

gulp.task('html' , function() {
    console.log("A change occurred to the HTML");
});
//pipe the postcss file
gulp.task('styles' , function() {
    return gulp.src('./assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./temp/styles'));
});

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