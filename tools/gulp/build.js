module.exports = (gulp, shared) => {
  gulp.task('build', ['sass', 'jekyll:build']);
};
