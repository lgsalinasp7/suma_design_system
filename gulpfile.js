var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var run = require('gulp-run');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var version= require('./package.json');

gulp.task('try', function(done) {
  console.log('Hola todo anda bien ');
  done();
});

gulp.task('style_min', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(minifyCSS())
    .pipe(concat('style_main_'+version.version+'.min.css'))
    .pipe(gulp.dest('public/stylesheets/min'))
});

gulp.task('watch', function (){
  gulp.watch('scss/**/*.scss', gulp.series('style_min'));
});
gulp.task('default', gulp.series('try', 'style_min', 'watch'));