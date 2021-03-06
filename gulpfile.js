const gulp = require('gulp');
const gutil = require('gulp-util');
const runSequence = require('run-sequence');
const nodemon = require('gulp-nodemon');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');
const environment = process.env.ENVIRONMENT || 'dev';

const appName = 'indigo-backend';


gulp.task('default', (callback) => {
  return runSequence(
    'clean-dist',  'compile', 'test',
    callback
  );
});
