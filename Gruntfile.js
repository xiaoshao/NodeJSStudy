module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		contat: {
			options: {
				seperator: ';'
			},
			dist{
				src: ['src/**/*.js'],
				dest: 'dist/<%= pkg.name%>.js'
			}
		},

		uglify:{
			options:{
				banner: '/*! <%= pkg.name%> <%= grunt.template.today("dd-mm-yyyy")%> */\n'
			},
			dist:{
				files:{
					'dist/<%= pkg.name%>.min.js': ['<%= contat.dist.dest%>']
				}
			}
		},
		quit: {
			files: ['test/**/*.html']
		}
	});
}