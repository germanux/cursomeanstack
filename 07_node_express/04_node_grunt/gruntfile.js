module.exports = function (grunt) {
	var configuracionGrunt = {
		"pkg": grunt.file.readJSON("package.json"),
		"uglify": {
			"min": {
				"src": "<%= pkg.name %>.js",
				"dest": "<%= pkg.name %>.min.js"
			}
		},
		concat: {
			options: {
				separator: "\n", //add a new line after each file
				banner: "", //added before everything
				footer: "" //added after everything
			},
			dist: {
				// the files to concatenate
				src: [
					//include libs
					//'libs/somelib/somelib.js',
					//'libs/otherlib/otherlib.js',

					//own classes and files
					//'src/**/!(base).js',

					//the last script I need
					'./*.js'
				],
				// the location of the resulting JS file
				dest: '<%= pkg.name %>.todo.js'
			}
		},
		watch: {
			scripts: {
				files: ["./*.js"],
				tasks: ["uglify"],
				options: {
					spawn: false
				}
			}
		}
	};
	grunt.initConfig(configuracionGrunt);
	
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-concat");
	
	grunt.registerTask("comprime", ["uglify"]);
	grunt.registerTask("dev-watch", ["concat:dist"]);
	grunt.registerTask("default", ["watch"]);
	
	function enUnCambio(accion, rutaFichero, destino) {
		grunt.log.writeln(destino+":"+rutaFichero+" tiene " + accion);
	}
	grunt.event.on("watch", enUnCambio);
	
	
}

