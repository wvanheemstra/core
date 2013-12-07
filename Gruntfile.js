/*global module, global*/
module.exports = function (grunt) {
	"use strict";
	grunt.initConfig({
        /**
         * Clean
         *
         * Before generating any new files, remove any previously-created output files.
         */
        clean: {
            build: ["build"]
        },

        /**
         * JSHint
         *
         * Validate the source code files to ensure they follow our coding convention and
         * don"t contain any common errors.
         */
        jshint: {
            all: [
                "Gruntfile.js",
                "public/**/*.js",
                "!public/resources/**/*.js"
            ],
            options: {
                jshintrc: ".jshintrc"
            }
        }   
   
    });//eof initConfig 

	grunt.loadNpmTasks("grunt-contrib-jshint");	
    grunt.loadNpmTasks("grunt-contrib-clean");

    grunt.registerTask("default", [
        "jshint", "clean:build"
    ]);	
	
};