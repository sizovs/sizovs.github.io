// Rewrite URIs
module.exports = {
  html: ['<%= yeoman.dist %>/{,*/}*.html'],
  css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
  options: {
    assetsDirs: ['<%= yeoman.dist %>'],
	patterns: {
		css: [[/(?:src=|url\(\s*)['"]?\.\.\/([^'"\)\?]+)['"]?\s*\)?/gm, 'Replacing references to relative images one level up in the file tree']]
	}    
  }
}

