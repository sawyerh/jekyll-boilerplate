module.exports = function(grunt) {
  // Load all grunt tasks we have installed:
  require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'src/styles',
          src: ['*.scss'],
          dest: 'dist/styles',
          ext: '.css'
        }]
      }
    },
    watch: {
      app: {
        // Watch for any changes that happen within the src directory:
        files: ["src/**/*.scss"],
        tasks: ["sass"],
        options: { spawn: false }
      },
      livereload: {
        // Trigger LiveReload when a CSS/JS file is compiled
        options: {
          livereload: true
        },
        files: ['dist/**/*'],
      }
    }
  });

  // Default task watches for changes:
  grunt.registerTask("default", ["watch:app"]);

  // Simple webpack build task:
  grunt.registerTask("build", ["sass"]);
};