/**
 * Add any new task groups below to expose them to the runner. If anything
 * needs shared between task groups, add it to the `shared` object, which
 * gets passed to each task group function.
 */
const argv = require('yargs').argv;

module.exports = (gulp) => {
  const shared = {
    browserSync: require('browser-sync').create(),
    env: argv.env
  };

  [
    'build',
    'lint',
    'jekyll',
    'sass',
    'server'
  ].forEach(taskGroup => {
    require(`./${taskGroup}.js`)(gulp, shared);
  });
};
