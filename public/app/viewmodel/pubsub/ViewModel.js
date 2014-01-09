glu.defModel('Core.assets.pubsub', {
	alias:'widget.pubsubViewModel',
//    warnings : true,
//    offMaintenanceWarning : false,
//    missingWarning : false,

	/*
	 * Formulas - Calculated properties that respond to changes in properties or other formulas. 
	 * By their nature, they are read-only so they typically represent the app 'responding' to user interaction. 
	 * Glu will analyze the formula and keep it updated when input properties change.
	 * To declare a formula, put a $ at the end of the name (this won't become part of its name but is just a flag) 
	 * and then supply a function that returns a value.
	 */	
//    offMaintenanceWarningIsEnabled$ : function(){
//		console.log("offMaintenanceWarningIsEnabled$");	
//        return this.warnings;
//    },
//    missingWarningIsEnabled$ : function(){
//		console.log("missingWarningIsEnabled$");		
//        return this.warnings;
//    }

	// call below function from a browser console like so:
	// Core.assets.viewmodels.pubsub.testPubSub(1)
	testPubSub: function(id, options, callback) {
		console.log("TESTING PUB SUB IN VIEW MODEL");
		//var postal = require("postal");
		//console.log("postal:");
		//console.log(postal);
		this.requestData( {id: id}, function(err, result) {
			if (err) {
				return callback(err);
			}
			// Do something with the result before executing callback
			callback(null, result);
		});
		
		//postal.subscribe("breakfastComplete", function(data, envelope) {
		//	alert("Breakfast is Served!  Let's eat some tasty " + data.item + "!");
		//});
		// publish a message
		//postal.publish("breakfastComplete", { item: "bacon" } );
	},
	
	// Example taken from:
	// http://appendto.com/blog/2013/04/request-response-pattern-in-postal-js/
	requestData: function(data, callback){
		console.log("requestData");
	
		var postal = require("postal");
		var uuid = require("uuid");
	
		var replyTo = {
			channel: "model.data",
			topic: "get." + uuid.v1()
		};
		
		console.log("replyTo:");
		console.log(replyTo);
		
		postal.subscribe({
			channel: replyTo.channel,
			topic: replyTo.topic,
			callback: function(msg, envelope) {
				console.log("Subscribed");
				callback(msg.err, msg.data);
			}
		}).once();
		
		postal.publish({
			channel: "model.data",
			topic: "get",
			replyTo: replyTo,
			data: data
		});
	}

});