/*
* This uses a gulp npm include called gulp-svg-sprite
* to extract a series of svg files in a src directory
* and create a single sprite file placed in a newly-
* created dest directory, as well as create a css file
* for use in navigating the sprite
*/

var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename');

var config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }

        }
    }
}
//create the sprite file from a folder of svg images
gulp.task('createSprite', function() {
    return gulp.src('./assets/images/icons/**/*.svg') /*folder where svg files live*/
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./temp/sprite/')); /*where to put the assembled svg file*/
});

gulp.task('copySpriteGraphic', ['createSprite'], function() {
    return gulp.src('./temp/sprite/css/**/*.svg')
        .pipe(gulp.dest('./assets/images/sprites'));
});

//rename the resulting css file to conform to modular schema
gulp.task('copySpriteCSS', ['createSprite'], function() { //name in [] is a dependency
    return gulp.src('./temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./assets/styles/modules'));
});
/*combine the above tasks into single command
* note that copySpriteCSS has a dependency of createSprite that
* runs first. Then, copySprite is run after that task is complete
*/
gulp.task('icons', ['createSprite', 'copySpriteGraphic', 'copySpriteCSS']); 