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
        },

        /**
         * Sencha Jasmine
         *
         * Setup Jasmine and runs them using PhantomJS headlessly.
         */
        sencha_jasmine: {
            options: {
                specs: ["test/specs/**/*.js"],
                extFramework: "public/resources/js/ext",
                extLoaderPaths   : {
                    "Core" : "public/app" // Is this the right instruction?
                }
            },
            // app configuration is for when we want to test without code coverage
            app: {},
            // coverage configuration is for when you want code coverage on your files
            coverage: {
                options: {
                    extLoaderPaths: {
                        "Core": "build/output/coverage/www/app"
                    }
                }
            }
        }   
   
    });//eof initConfig 

	grunt.loadNpmTasks("grunt-contrib-jshint");	
    grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks('grunt-contrib-jasmine'); // TEMP, 
    //grunt.loadNpmTasks("grunt-sencha-jasmine");	// Extends grunt-contrib-jasmine

    grunt.registerTask("default", [
        "jshint", "clean:build"
    ]);	
	
	grunt.registerTask("test", ["jasmine:app"]);
	//grunt.registerTask("test", ["sencha_jasmine:app"]);
	
};