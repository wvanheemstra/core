/*global module, global*/
module.exports = function (grunt) {
	"use strict";
	
	var dateFormat = require("dateformat");
	var tests = "test/**/*.js";
	var tasks = "task/**/*.js";
	var reportDir = "build/reports/" + dateFormat(new Date(), "yyyymmdd-HHMMss");

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
		 * Watch
		 *
		 */
		watch: {
			files: [ tasks, tests ],
			tasks: "default"
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
	//			"public/**/*.js", // TEMP commented out
				tasks,
				tests,
				"!public/resources/**/*.js"
			],
			options: {
				jshintrc: ".jshintrc"
			},
			globals: {}
		},

		/**
		 * Instrument
		 *
		 */
		instrument: {
			files: tasks,
			options: {
				lazy: true,
				basePath: "build/instrument/"
			}
		},

		/**
		 * Reload Tasks
		 *
		 */
		reloadTasks: {
			rootPath: "build/instrument/tasks"
		},
		
		/**
		 * Store Coverage
		 *
		 */		
		storeCoverage: {
			options: {
				dir: reportDir
			}
		},

		/**
		 * Make Report
		 *
		 */
		makeReport: {
			src: "build/reports/**/*.json",
			options: {
				type: "lcov",
				dir: reportDir,
				print: "detail"
			}
		},

		/**
		 * Sencha Dependencies
		 *
		 * Get ordered project Sencha dependencies
		 * See https://github.com/mattgoldspink/grunt-sencha-dependencies
		 * 
		*/
		sencha_dependencies: {
			asset_desktop: {
				options : {
					appFile: "require/asset/desktop.js",
					pageToProcess: "asset-desktop.html",
					pageRoot: "public",
					senchaDir: "resources/js/ext"
				}
			},
			asset_phone: {
				options : {
					appFile: "require/asset/phone.js",
					pageToProcess: "asset-phone.html",
					pageRoot: "public",
					senchaDir: "resources/js/touch"
				}
			},
			asset_tablet: {
				options : {
					appFile: "require/asset/tablet.js",
					pageToProcess: "asset-tablet.html",
					pageRoot: "public",
					senchaDir: "resources/js/touch"
				}
			}
        },	
		
        /**
         * Jasmine
         *
         * Setup Jasmine and runs them using PhantomJS headlessly.
         */		
		jasmine: {
			asset_desktop: {
				src: "<%= sencha_dependencies_asset_desktop_app %>",
				options: {
					specs: "test/specs/app/view/extjs/viewport/asset/View.js"
				}
			},
			asset_phone: {
				src: "<%= sencha_dependencies_asset_phone_app %>",
				options: {
					specs: "test/specs/app/mediator/touch/viewport/asset/Mediator.js"
				}
			},
			asset_tablet: {
				src: "<%= sencha_dependencies_asset_tablet_app %>",
				options: {
					specs: "test/specs/app/mediator/touch/viewport/asset/Mediator.js"
				}
			}			
		},		
		
		/**
		 * JSDuck
		 *
		 * Creates JSDuckumentation
		 */
		jsduck: {
			asset_desktop: {
				src: [
					"public/app/config/global/Config.js",
					"public/app/config/asset/**/*.js",
					"public/app/view/extjs/login/**/*.js",
					"public/app/view/extjs/asset/**/*.js",
					"public/app/view/extjs/viewport/asset/**/*.js"
				],
				dest: "public/app/doc/asset/desktop",
				options: {
					"title": "Core - Asset [desktop]"
				}
			},
			asset_phone: {
				src: [
					"public/app/config/global/Config.js",
					"public/app/config/asset/**/*.js",
					"public/app/view/touch/login/**/*.js",
					"public/app/view/touch/asset/**/*.js",
					"public/app/mediator/touch/asset/**/*.js",			
					"public/app/mediator/touch/viewport/asset/**/*.js"
				],
				dest: "public/app/doc/asset/phone",
				options: {
					"title": "Core - Asset [phone]"
				}
			},
			asset_tablet: {
				src: [
					"public/app/config/global/Config.js",
					"public/app/config/asset/**/*.js",
					"public/app/view/touch/login/**/*.js",
					"public/app/view/touch/asset/**/*.js",
					"public/app/mediator/touch/asset/**/*.js",
					"public/app/mediator/touch/viewport/asset/**/*.js"
				],
				dest: "public/app/doc/asset/tablet",
				options: {
					"title": "Core - Asset [tablet]"
				}
			}
		}

	});//eof initConfig 

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-sencha-dependencies");
	grunt.loadNpmTasks("grunt-contrib-jasmine");
	grunt.loadNpmTasks("grunt-jsduck");
	grunt.loadNpmTasks("grunt-istanbul");

	grunt.registerTask("default", ["jshint", "clean:build"]);
	grunt.registerTask("test_asset_desktop", ["sencha_dependencies:asset_desktop", "jasmine:asset_desktop"]);
	grunt.registerTask("test_asset_phone", ["sencha_dependencies:asset_phone", "jasmine:asset_phone"]);
	grunt.registerTask("test_asset_tablet", ["sencha_dependencies:asset_tablet", "jasmine:asset_tablet"]);
	grunt.registerTask("test_all", ["sencha_dependencies:asset_desktop", "jasmine:asset_desktop"]);
	grunt.registerTask("doc_asset_desktop", ["jsduck:asset_desktop"]);
	grunt.registerTask("doc_asset_phone", ["jsduck:asset_phone"]);
	grunt.registerTask("doc_asset_tablet", ["jsduck:asset_tablet"]);
	grunt.registerTask("doc_asset_all", ["jsduck:asset_desktop", "jsduck:asset_phone", "jsduck:asset_tablet"]);
	
	grunt.registerTask('cover', 
							[
								'clean',
								'instrument',
								'reloadTasks',
								'test_all',
								'storeCoverage',
								'makeReport' 
							]
						);
};