const run = require('gulp-run');

module.exports = (gulp, shared) => {
  // Rebuild the site when changes are made
  gulp.task('jekyll:watch', done => {
    gulp.watch([
      'assets/dist/scripts/**/*.js',
      'images/**/*',
      '**/*.{md,html,yml}', // Templates and content
      '!node_modules/**/*',
      '!_site/**/*'
    ], ['jekyll:rebuild']);
  });

  /**
   * Generate the static HTML pages. This can also be run from the command line
   * as `bundle exec jekyll build`.
   */
  gulp.task('jekyll:build', done => {
    const shellCommand = 'bundle exec jekyll build';
    return gulp.src('./').pipe(run(shellCommand));
  });

  gulp.task('jekyll:rebuild', ['jekyll:build'], () => {
    shared.browserSync.reload();
  });
};
