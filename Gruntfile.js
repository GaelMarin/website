module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      main: {
        files : {
          'public/js/index.min.js' : [
            'private/assets/jquery/jquery_3.3.1.min.js',
            'private/assets/anime/anime.min.js',
            'private/assets/count-up/countUp-jquery.js',
            'private/assets/count-up/countUp.js',
            'private/assets/materialize/js/materialize.min.js',
            'private/assets/particles/particles.min.js',
            'private/js/index.js']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
