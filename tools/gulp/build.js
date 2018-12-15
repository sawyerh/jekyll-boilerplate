module.exports = (gulp, shared) => {
  gulp.task("build", gulp.series("sass", "jekyll:build"));
};
