// Rewrite URIs
module.exports = {
  html: ['<%= yeoman.dist %>/{,*/}*.html'],
  css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
  js: ['<%= yeoman.dist %>/scripts/{,*/}*.js'],
  options: {
    assetsDirs: ['<%= yeoman.dist %>'],
	patterns: {
		css: [[/(?:url\(\s*)['"]?\.\.\/([^'"\)\?]+)['"]?\s*\)?/gm, 'Replacing references in CSS files']],
		js: [[/(?:img\:\s*)['"]?\.\.\/([^'"\)\?]+)['"]?\s*\)?/gm, 'Replacing references in JS files']],
	}    
  }
}

