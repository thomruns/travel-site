var gulp = require('gulp');
var modernizr = require('gulp-modernizr'); //to create a custom modernizr file w only the code the site's css and js need

//line 8 selects the sites css and js files in an array
//lines 9-13 pipe these files through modernizr and select which options should be run
//third line pipes the results and creates the custom modernizr file
//with only the needed classes
gulp.task('modernizr', function(){
    return gulp.src(['./assets/styles/**/*.css','./assets/scripts/**/*.js']) 
    .pipe(modernizr({
        "options": [
            "setClasses"
        ]
    }))
    .pipe(gulp.dest('./temp/scripts/'));
});