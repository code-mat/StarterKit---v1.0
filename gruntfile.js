
'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: ['js/respond.js', 'js/modernizr-2.8.3.min.js', 'js/main.js', 'js/plugins.js',
				'js/jquery.corner.js', 'js/jquery.placeholder.min.js', 'css/normalize.css',
				'css/font-awesome.min.css', 'css/main.css', 'css/ie-main.css'],
				tasks: ['uglify', 'cssmin', 'autoprefixer']
			}
		},
		uglify: {
			options: {
				banner: '// <%=pkg.author %> 2015\n// <%= pkg.name %> - <%= pkg.description %>\n' +
						'//----------------------------------------------------------\n\n'
			},
			my_target: {
				files: {
					'js/output.min.js': ['js/plugins.js', 'js/main.js'],
					'js/ie-scripts.min.js': ['js/jquery.corner.js', 'js/jquery.placeholder.min.js', 'js/main.js']
				}
			}
		},
		cssmin: {
			combine: {
				files: {
					'css/output.min.css': ['css/normalize.css', 'css/font-awesome.min.css', 'css/main.css'],
					'css/ie-main.min.css': ['css/ie-main.css']
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie 8', 'ie 9']
			},
			main: {
				expand: true,
				flatten: true,
				src: 'scss/main.scss',
				dest: 'scss/'
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', ['cssmin', 'uglify', 'autoprefixer']);

};