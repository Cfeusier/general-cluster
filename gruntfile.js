'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      options: {
        mangle: false
      },
      js: {
        files: {
          'dist/general-cluster.min.js': ['src/general-cluster.js']
        }
      }
    }
  });
  // load task plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // register main tasks
  grunt.registerTask('build', ['uglify']);
};
