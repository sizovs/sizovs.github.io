'use strict';

module.exports = function (grunt) {

  // Loads NPM tasks automatically. Does not require explicit NPM task loading
  require('load-grunt-tasks') (grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt') (grunt);

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'bower-install',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'bower-install',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngmin',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'rev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('deploy', [
    'build',
    'buildcontrol:pages'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'build'
  ]);

  function configLoader(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', {cwd: path}).forEach(function(option) {
      key = option.replace(/\.js$/,'');
      object[key] = require(path + option);
    });
    return object;
  }

  grunt.initConfig(configLoader('./grunt/config/'));

};
