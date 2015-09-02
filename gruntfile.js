
'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '// <%=pkg.author %> 2015\n// <%= pkg.name %> - <%= pkg.description %>\n' +
						'//----------------------------------------------------------\n\n'
			},
			my_target: {
				files: {
					'js/output.min.js': ['js/bootstrap.min.js', 'js/plugins.js', 'js/main.js']
				}
			}
		},
		cssmin: {
			combine: {
				files: {
					'css/output.min.css': ['css/bootstrap.min.css', 'css/normalize.css',
					'css/main.css', 'css/font-awesome.min.css']
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

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', ['cssmin', 'uglify', 'autoprefixer']);

};