/*global module, global*/
module.exports = function (grunt) {
	"use strict";

	var dateFormat = require("dateformat");
	var tests = "tests/**/*.js";
	var tasks = "tasks/**/*.js";
	var reportDir = "build/reports/" + dateFormat(new Date(), "yyyymmdd-HHMMss");

	grunt.initConfig({
		/**
		 * Clean
		 *
		 * Before generating any new files, remove any previously-created output files.
		 *
		 * Can be called as follows:
		 * grunt clean:build		 
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
		 *
		 * Can be called as follows:
		 * grunt jshint:all
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
			sanity: {
				options: {
					appFile: "require/sanity.js",
					pageToProcess: "sanity.html",
					pageRoot: "public",
					senchaDir: "resources/js/ext"
				}
			},		
			asset_desktop: {
				options: {
					appFile: "require/asset/desktop.js",
					pageToProcess: "asset-desktop.html",
					pageRoot: "public",
					senchaDir: "resources/js/ext"
				}
			},
			asset_phone: {
				options: {
					appFile: "require/asset/phone.js",
					pageToProcess: "asset-phone.html",
					pageRoot: "public",
					senchaDir: "resources/js/touch"
				}
			},
			asset_tablet: {
				options: {
					appFile: "require/asset/tablet.js",
					pageToProcess: "asset-tablet.html",
					pageRoot: "public",
					senchaDir: "resources/js/touch"
				}
			},		
			individual_desktop: {
				options: {
					appFile: "require/individual/desktop.js",
					pageToProcess: "individual-desktop.html",
					pageRoot: "public",
					senchaDir: "resources/js/ext"
				}
			},
			individual_phone: {
				options: {
					appFile: "require/individual/phone.js",
					pageToProcess: "individual-phone.html",
					pageRoot: "public",
					senchaDir: "resources/js/touch"
				}
			},
			individual_tablet: {
				options: {
					appFile: "require/individual/tablet.js",
					pageToProcess: "individual-tablet.html",
					pageRoot: "public",
					senchaDir: "resources/js/touch"
				}
			}
        },	
		
        /**
         * Jasmine
         *
         * Setup Jasmine and runs them using PhantomJS headlessly.
		 *
		 * Can be called as follows:
		 * grunt jasmine:sanity		 
         */		
		jasmine: {
			sanity: {
				src: ["<%= sencha_dependencies_sanity_app %>"],
				options: {
					specs: "tests/specs/app/sanity.js"
				}
			},
			asset_desktop: {
				src: "<%= sencha_dependencies_asset_desktop_app %>",
				options: {
					specs: "tests/specs/app/asset_desktop.js"
				}
			},
			asset_phone: {
				src: "<%= sencha_dependencies_asset_phone_app %>",
				options: {
					specs: "tests/specs/app/asset_phone.js"
				}
			},
			asset_tablet: {
				src: "<%= sencha_dependencies_asset_tablet_app %>",
				options: {
					specs: "tests/specs/app/asset_tablet.js"
				}
			},
			individual_desktop: {
				src: "<%= sencha_dependencies_individual_desktop_app %>",
				options: {
					specs: "tests/specs/app/individual_desktop.js"
				}
			},
			individual_phone: {
				src: "<%= sencha_dependencies_individual_phone_app %>",
				options: {
					specs: "tests/specs/app/individual_phone.js"
				}
			},
			individual_tablet: {
				src: "<%= sencha_dependencies_individual_tablet_app %>",
				options: {
					specs: "tests/specs/app/individual_tablet.js"
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
			},
			individual_desktop: {
				src: [
					"public/app/config/global/Config.js",
					"public/app/config/individual/**/*.js",
					"public/app/view/extjs/login/**/*.js",
					"public/app/view/extjs/individual/**/*.js",
					"public/app/view/extjs/viewport/individual/**/*.js"
				],
				dest: "public/app/doc/individual/desktop",
				options: {
					"title": "Core - Individual [desktop]"
				}
			},
			individual_phone: {
				src: [
					"public/app/config/global/Config.js",
					"public/app/config/individual/**/*.js",
					"public/app/view/touch/login/**/*.js",
					"public/app/view/touch/individual/**/*.js",
					"public/app/mediator/touch/individual/**/*.js",			
					"public/app/mediator/touch/viewport/individual/**/*.js"
				],
				dest: "public/app/doc/individual/phone",
				options: {
					"title": "Core - Individual [phone]"
				}
			},
			individual_tablet: {
				src: [
					"public/app/config/global/Config.js",
					"public/app/config/individual/**/*.js",
					"public/app/view/touch/login/**/*.js",
					"public/app/view/touch/individual/**/*.js",
					"public/app/mediator/touch/individual/**/*.js",
					"public/app/mediator/touch/viewport/individual/**/*.js"
				],
				dest: "public/app/doc/individual/tablet",
				options: {
					"title": "Core - Individual [tablet]"
				}
			}
		}

	});//eof initConfig 

	grunt.loadTasks("tasks");

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-sencha-dependencies");
	grunt.loadNpmTasks("grunt-contrib-jasmine");
	grunt.loadNpmTasks("grunt-jsduck");
	grunt.loadNpmTasks("grunt-istanbul");
	/*
	 * DEFAULT
	 */
	grunt.registerTask("default", ["jshint", "clean:build"]);
	/*
	 * TEST
	 */
	grunt.registerTask("test_sanity", ["sencha_dependencies:sanity", "jasmine:sanity"]);
	
	grunt.registerTask("test_asset_desktop", ["sencha_dependencies:asset_desktop", "jasmine:asset_desktop"]);
	grunt.registerTask("test_asset_phone", ["sencha_dependencies:asset_phone", "jasmine:asset_phone"]);
	grunt.registerTask("test_asset_tablet", ["sencha_dependencies:asset_tablet", "jasmine:asset_tablet"]);
	
	grunt.registerTask("test_individual_desktop", ["sencha_dependencies:individual_desktop", "jasmine:individual_desktop"]);
	grunt.registerTask("test_individual_phone", ["sencha_dependencies:individual_phone", "jasmine:individual_phone"]);
	grunt.registerTask("test_individual_tablet", ["sencha_dependencies:individual_tablet", "jasmine:individual_tablet"]);
	
	grunt.registerTask("test_all", [
		"sencha_dependencies:asset_desktop", "jasmine:asset_desktop",
		"sencha_dependencies:individual_desktop", "jasmine:individual_desktop"
	]);
	/*
	 * DOC
	 */	
	grunt.registerTask("doc_asset_desktop", ["jsduck:asset_desktop"]);
	grunt.registerTask("doc_asset_phone", ["jsduck:asset_phone"]);
	grunt.registerTask("doc_asset_tablet", ["jsduck:asset_tablet"]);
	grunt.registerTask("doc_asset_all", ["jsduck:asset_desktop", "jsduck:asset_phone", "jsduck:asset_tablet"]);
	
	grunt.registerTask("doc_individual_desktop", ["jsduck:individual_desktop"]);
	grunt.registerTask("doc_individual_phone", ["jsduck:individual_phone"]);
	grunt.registerTask("doc_individual_tablet", ["jsduck:individual_tablet"]);
	grunt.registerTask("doc_individual_all", ["jsduck:individual_desktop", "jsduck:individual_phone", "jsduck:individual_tablet"]);
	
	grunt.registerTask("doc_all", [
		"jsduck:asset_desktop", "jsduck:asset_phone", "jsduck:asset_tablet",
		"jsduck:individual_desktop", "jsduck:individual_phone", "jsduck:individual_tablet"
	]);
	/*
	 * COVER
	 */	
	grunt.registerTask("cover", 
		[
			"clean",
			"instrument",
			"reloadTasks",
			"test_all",
			"storeCoverage",
			"makeReport" 
		]
	);
	/*
	 * Usage:
	 *
	 * From a command prompt in the same directory as Gruntfile.js
	 * type e.g.:   grunt test_all --verbose --force
	 */
};