/**
 * The `server` task starts a Browsersync server to enable previewing the
 * site locally, with live reloading when files change.
 */
const argv = require("yargs").argv;

module.exports = (gulp, shared) => {
  gulp.task("server:browsersync", () => {
    shared.browserSync.init({
      notify: false,
      open: !argv.noopen,
      server: {
        baseDir: "_site"
      }
    });
  });

  gulp.task(
    "server",
    gulp.series(
      "build",
      gulp.parallel("jekyll:watch", "sass:watch", "server:browsersync")
    )
  );
};
