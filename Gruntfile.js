module.exports = function(grunt) {
  // Load all grunt tasks we have installed:
  require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    scsslint: {
      dist: {
        src: ["assets/styles/**/*.scss"],
        options: {
          bundleExec: true,
          colorizeOutput: true,
          config: '.scss-lint.yml',
          exclude: ['assets/styles/app.scss', 'assets/styles/utils/_fonts.scss', 'assets/styles/utils/_mixins.scss', 'assets/styles/utils/_reset.scss', 'assets/styles/utils/_variables.scss'],
          force: true
        }
      }
    },
    watch: {
      scripts: {
        files: ['assets/styles/**/*.scss'],
        tasks: ['scsslint'],
        options: {
          livereload: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['scsslint', 'watch']);
  grunt.registerTask('build', ['scsslint']);
};
