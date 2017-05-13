const childProcess = require('child_process');
const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

module.exports = (gulp, shared) => {
  // Rebuild the site when changes are made
  gulp.task('jekyll:watch', done => {
    gulp.watch([
      'assets/dist/scripts/**/*.js',
      'assets/images/**/*',
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
    return childProcess.spawn(
      jekyll,
      ['build'],
      {stdio: 'inherit'}
    ).on('close', done);
  });

  gulp.task('jekyll:rebuild', ['jekyll:build'], () => {
    shared.browserSync.reload();
  });
};
