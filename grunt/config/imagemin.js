// Minify images in "dist" directory
module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= yeoman.app %>/images',
      src: '{,*/}*.{png,jpg,jpeg,gif}',
      dest: '<%= yeoman.dist %>/images'
    }]
  }	
}