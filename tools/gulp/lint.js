const changedInPlace = require('gulp-changed-in-place');
const count = require('gulp-count');
const eslint = require('gulp-eslint');
const stylelint = require('gulp-stylelint');
const stylelintConfig = require('../../stylelint.config');

module.exports = (gulp, shared) => {
  // Lint Sass files using stylelint. Further configuration for CSS linting
  // can be handled in stylelint.config.js
  function runStylelint(src) {
    return gulp.src(src)
      .pipe(changedInPlace({ firstPass: true }))
      .pipe(stylelint({
        config: stylelintConfig,
        failAfterError: false,
        reporters: [
          {
            formatter: 'string',
            console: true
          }
        ],
        syntax: 'scss'
      }))
      .pipe(count('## Sass files linted'));
  }

  function runEslint(src) {
    return gulp.src(src)
      .pipe(changedInPlace({ firstPass: true }))
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(count(`## JS files linted`));
  }

  gulp.task('lint:styles', () => runStylelint([
    'assets/src/styles/**/*.scss',
    '!assets/src/styles/app.scss',
    '!assets/src/styles/vendor/**/*.scss'
  ]));

  gulp.task('lint:scripts', () => runEslint([
    'assets/src/scripts/**/*.{js,jsx}',
    '!assets/src/scripts/vendor/**/*.js'
  ]));

  gulp.task('lint', ['lint:scripts', 'lint:styles']);
};
