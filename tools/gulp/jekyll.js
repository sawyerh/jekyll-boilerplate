const childProcess = require('child_process');
const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

module.exports = (gulp, shared) => {
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
