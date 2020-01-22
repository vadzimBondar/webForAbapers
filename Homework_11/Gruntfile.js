module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      babel: {
          options: {
              sourceMaps: true
          },
          dest: {
              files: {
                  'dist/index.js': 'index.js',
                  'dist/User.js': 'src/User.js',
                  'dist/Worker.js': 'src/worker.js'
              }
          }
      },
      uglify: {
        my_target: {
            files: {
                'dist/index.min.js': ['dist/index.js'],
                'dist/User.min.js': ['dist/User.js'],
                'dist/Worker.min.js': ['dist/Worker.js'],
            }
        }
    }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['babel', 'uglify']);
  
  };