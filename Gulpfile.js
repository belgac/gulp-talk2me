var del = require('del');
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var runSequence = require('run-sequence');

gulp.task('default',function(){
  console.log('This is the default task');
})

gulp.task('delete',function(callback){
   del('dist/**/*', callback());
})
gulp.task('test',function(){
  return gulp.src('src/**/*.spec.js', {read: false})
    .pipe(mocha());
})

gulp.task('build',function(callback){
  runSequence('delete','copy',callback);
})

gulp.task('copy',function(){
  return gulp.src(['src/**/*.js','!src/**/*.spec.js'])
    .pipe(gulp.dest('dist'));
})