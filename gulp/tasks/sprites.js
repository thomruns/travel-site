/*
* This uses a gulp npm include called gulp-svg-sprite
* to extract a series of svg files in a src directory
* and create a single sprite file placed in a newly-
* created dest directory, as well as create a css file
* for use in navigating the sprite
*/

var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite');

var config = {
    mode: {
        css: {
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }

        }
    }
}

gulp.task('createSprite', function() {
    return gulp.src('./assets/images/icons/**/*.svg') //folder where svg files live
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./temp/sprite/')); //where to put the assembled svg file
});