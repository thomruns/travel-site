var gulp = require('gulp'), //npm module
webpack = require('webpack'); //npm module site install

gulp.task('scripts', ['modernizr'], function(callback) {
    webpack(require('../../webpack.config.js'), function(err, stats){
        if (err) {
            console.log(err.toString());
        }
        console.log(stats.toString());
        callback();
    });
});