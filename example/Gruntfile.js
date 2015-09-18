module.exports = function(grunt) {
  var webpack = require("webpack");
  var webpackConfig = require("./webpack.config.js");

  // Load all grunt tasks we have installed:
  require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    webpack: {
      app: webpackConfig
    },
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
        files: ["src/**/*"],
        tasks: ["webpack"],
        options: { spawn: false }
      }
    }
  });

  // Default task watches for changes:
  grunt.registerTask("default", ["watch:app"]);

  // Simple webpack build task:
  grunt.registerTask("build", ["webpack", "sass"]);
};