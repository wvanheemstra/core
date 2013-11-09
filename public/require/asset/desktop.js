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
var models = ['asset'];
console.log("models = " + models);
var viewmodels = ['main', 'asset', 'asset/set', 'options'];
console.log("viewmodels = " + viewmodels);
var views = ['main', 'asset', 'asset/set', 'asset/schedule', 'asset/summary', 'options'];
console.log("views = " + views);
var locales = ['locale_en'];
console.log("locales = " + locales);
var state = {
	app: app, 
	device: device, 
	lib: lib, 
	models: models, 
	viewmodels: viewmodels, 
	views: views,
	locales: locales
};

// Moment
/* require({
    paths: {
        "moment": "../../resources/js/moment/moment-with-langs",
    }
}, ["moment"], function (moment) {
    moment().format();
}); */


// CAN WE MOVE THE BELOW TO SOMEWHERE GENERAL, FOR REUSE ???
require({
    paths: {
		"pipeline": "../../resources/js/pipeline/src/pipeline",
		"ext-all": "../../resources/js/ext/ext-all",
		"sencha-touch-all": "../../resources/js/touch/sencha-touch-all",
		"SenchaCompatibility": "../../resources/js/sencha-compatibility/SenchaCompatibility",
		"glu-extjs-4": "../../resources/js/glu/glu-extjs-4",
		"deft": "../../resources/js/deft/deft",
		"flowmvc": "../../resources/js/flow-mvc/flowmvc",
		"moment-with-langs": "../../resources/js/moment/moment-with-langs",
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
		require(["moment-with-langs"], function(moment) {
			console.log("PIPELINE: moment");
			
		//	moment().format(); // WHY IS moment UNDEFINED ???
			
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
	}).pipe(function(state) {
		// MODELS	
		var models = state.models;
		for (key in models){
			console.log("PIPELINE: " + models[key] + " model");
			require(["../../app/model/" + models[key] + "/Model"], function() {
				// empty
			});
		}
	}).pipe(function(state) {
		// VIEWMODELS
		var viewmodels = state.viewmodels;		
		for (key in viewmodels){
			console.log("PIPELINE: " + viewmodels[key] + " view model");
			require(["../../app/viewmodel/" + viewmodels[key] + "/ViewModel"], function() {
				// empty
			});
		}
	}).pipe(function(state) {
		// VIEWS
		var views = state.views;
		var lib = state.lib;
		for (key in views){
			console.log("PIPELINE: " + views[key] + " view");	
			require(["../../app/view/" + lib + "/" + views[key] + "/View"], function() {
				// empty
			});
		}
	}).pipeAsync(function(state, callback) {
		// SPECS
		require(["../../app/spec/Backend"], function() {
			console.log("PIPELINE: Backend");
			callback();
		});
	}).pipeAsync(function(state, callback) {
		// LOADER
		var lib = state.lib;
		console.log("PIPELINE: app-loader-" + lib);
		require(["../../app/app-loader-" + lib], function() {
			callback();
		});
	}).pipeAsync(function(state, callback) {
		// LOCALES
		var locales = state.locales;
		for (key in locales){
			console.log("PIPELINE: " + locales[key] + " locale");	
			require(["../../app/locale/" + locales[key]], function() {
				callback();
			});
		}
	}).pipe(function(state) {
		// APP
		var app = state.app;
		var lib = state.lib;
		console.log("PIPELINE: " + app + "-" + lib);
		require(["./" + device + "/app"], function() {
			// empty
		}); 
	}).stop(function() {
		console.log("PIPELINE: stopped");
		// stopped
	}).create();
	pipeline(state); 
});