const autoprefixer = require('autoprefixer');
const changed = require('gulp-changed');
const count = require('gulp-count');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');
const gulpIf = require('gulp-if');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const paths = {
  dest: 'assets/dist/styles',
  src: 'assets/src/styles/**/*.scss'
};

module.exports = (gulp, shared) => {
  gulp.task('sass:watch', () => {
    gulp.watch(paths.src, ['sass']);
  });

  gulp.task('sass', () => {
    const createSourcemaps = shared.env === 'development';
    const postcssPlugins = [
      autoprefixer(),  // add any necessary vendor prefixes
      postcssImport()  // inline imports
    ];

    const sassCompiler = sass({
      outputStyle: 'expanded',
      includePaths: ['node_modules']
    }).on('error', sass.logError);

    if (shared.env !== 'development') {
      postcssPlugins.push(cssnano()); // minify css
    }

    return gulp
      .src(paths.src)
      .pipe(
        changed(paths.dest, {
          extension: '.css',
          // compare contents so files that import the updated file also get piped through
          hasChanged: changed.compareSha1Digest
        })
      )
      .pipe(gulpIf(createSourcemaps, sourcemaps.init()))
      .pipe(sassCompiler)
      .pipe(gulpIf(createSourcemaps, sourcemaps.write()))
      .pipe(postcss(postcssPlugins))
      .pipe(gulp.dest(`_site/${paths.dest}`))
      .pipe(count('## Sass files processed'))
      .pipe(shared.browserSync.stream({match: '**/styles/*.css'})) // Auto-inject into docs
      .pipe(gulp.dest(paths.dest));
  });
};
