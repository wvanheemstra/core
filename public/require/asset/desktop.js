/**
 * The asset desktop application class.
 *
 * See also: https://github.com/Alxandr/pipeline-js
 */
var app = 'asset';
console.log("app = " + app);	
var device = 'desktop';
console.log("device = " + device);
var lib = 'extjs';
console.log("lib = " + lib);
var state = {
	app: app, 
	device: device, 
	lib: lib
};

// CAN WE MOVE THE BELOW TO SOMEWHERE GENERAL, FOR REUSE ???
require({
    paths: {
		"pipeline": "../../resources/js/pipeline/src/pipeline",
		"ext-all": "../../resources/js/ext/ext-all",
		"sencha-touch-all": "../../resources/js/touch/sencha-touch-all",
		"SenchaCompatibility": "../../resources/js/sencha-compatibility/SenchaCompatibility",
		"glu-extjs-4": "../../resources/js/glu/glu-extjs-4",
		"deft": "../../resources/js/deft/deft",
		"flowmvc": "../../resources/js/flow-mvc/build/flowmvc",
		"moment": "../../resources/js/moment/min/moment-with-langs",
		"glu": "../../resources/js/glu/glu",
		"glu-test": "../../resources/js/glu/glu-test"
    }
}, ["pipeline"], function() {
	var pipeline = Pipeline().start(function() {
		// started
		console.log("PIPELINE: started");
	}).pipeAsync(function(state, callback) {
		console.log("PIPELINE: state = ");
		console.log(state);
		switch(state.lib)
		{
			case 'extjs':
			  	// EXT-ALL
				require(["ext-all"], function() {
					console.log("PIPELINE: ext-all");
					callback();
				});
				break;
			case 'touch':
			  	// TOUCH-ALL
				require(["sencha-touch-all"], function() {
					console.log("PIPELINE: sencha-touch-all");	
					callback();
				});
				break;
		}
	}).pipeAsync(function(state, callback) {
		// SENCHACOMPATIBILITY
		require(["SenchaCompatibility"], function() {
			console.log("PIPELINE: sencha-compatibility");
			callback();
		});
	}).pipeAsync(function(state, callback) {
		switch(state.lib)
		{
			case 'extjs':
			  	// GLU-EXTJS-4
				require(["glu-extjs-4"], function() {
					console.log("PIPELINE: glu-extjs-4");
					callback();
				});
				break;
			case 'touch':
			  	// GLU-EXTJS-4: Currently Touch is not supported in Glu
				require(["glu-extjs-4"], function() {
					console.log("PIPELINE: glu-extjs-4");	
					callback();
				});
				break;
		}
	}).pipeAsync(function(state, callback) {
		// DEFT
		require(["deft"], function() {
			console.log("PIPELINE: deft");	
			callback();
		});
	}).pipeAsync(function(state, callback) {
		// FLOWMVC
		require(["flowmvc"], function() {
			console.log("PIPELINE: flowmvc");	
			callback();
		});
	}).pipeAsync(function(state, callback) {
		// MOMENT
		require(["moment"], function(moment) {
			console.log("PIPELINE: moment");
			moment().format();
			callback();
		});
	}).pipeAsync(function(state, callback) {
		// GLU
		require(["glu"], function() {
			console.log("PIPELINE: glu");
			callback();
		});
	}).pipeAsync(function(state, callback) {
		// GLU-TEST
		require(["glu-test"], function() {
			console.log("PIPELINE: glu-test");
			callback();
		});
	}).pipeAsync(function(state, callback) {
		// LOADER
		var lib = state.lib;
		console.log("PIPELINE: app-loader");
		require(["./" + device + "/app-loader"], function() {
			callback();
		});
	}).pipe(function(state) {
		// APP
		var app = state.app;
		var lib = state.lib;
		console.log("PIPELINE: app");
		require(["./" + device + "/app"], function() {
			// empty
		}); 
	}).stop(function() {
		console.log("PIPELINE: stopped");
		// stopped
	}).create();
	pipeline(state); 
});