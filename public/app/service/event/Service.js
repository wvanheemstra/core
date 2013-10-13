/**
 * The event service object. Contains concrete Ajax calls.
 */
Ext.define("Core.service.event.Service", {
    extend: "FlowMVC.mvc.service.AbstractService",

    inject: [
        "logger",
		"eventStore"
    ],
	
    /**
     * The readEvents ajax service call. Hits a json service and handles the success and fault accordingly.
     */
    readEvents: function() {
        this.logger.debug("readEvents");

        //ORIGINAL var deferred = Ext.create("Deft.promise.Deferred");
		var token = this.getTokenOrPromise(); // NEW
        var me = this;
		
		// Set the JSON data for the request
		var jsonData = {
			"pagination" :  {
				"page": 0,
				"limit": 50,
				"sort": "EventName",
				"dir": "ASC"
			},
			"basicInfo" : {
				"ccoId": "Core",
				"prefLang": "eng_GB",
				"requestStartDate": (new Date()).toISOString(),
				"requesterApp": "Event"
			},
			"mql" : {
				"query" : [{
					"type": "/core/event",
					"kp_EventID": null,
					"EventName": null					
				}]
			},
			"debug_info" : {
				
			}
		};
		
		// Update the store for the JSON data
		var proxy = me.eventStore.getProxy();
		proxy['jsonData'] = jsonData;
		var operation = Ext.create('Ext.data.Operation');
			operation.setAction('read');
			operation.setUrl('http://localhost:5001/?api=event&action=read');
		//	operation.setPassword(); // TO DO
		//	operation.setUsername(); // TO DO
		var callback = null;
		var scope = me;
		var request = me.eventStore.getProxy().doRequest(operation, callback, scope);
		
		// Now load the store
		me.eventStore.load({
			params: {}, //WAS {'id':d.data.category_id},
			scope: this,
			callback: function(records, operation, success) {
				if (success) {
					//this.logger.debug("readEvents.success"); // logger is undefined here
					console.log("readEvents.success");
					
					// since we receive records, not response, we create a response object temporarily
					var response = records;	
					
					//ORIGINAL me.success(response, deferred);
					me.success(response, token); // NEW
				} else {
					//this.logger.debug("readEvents.failure"); // logger is undefined here
					console.log("readEvents.failure");
					
					// since we receive records, not response, we create a response object temporarily
					var response = records; 
									
					//ORIGINAL me.failure(response, deferred);
					me.failure(response, token); // NEW
				}
			}
		});
		
        //ORIGINAL return deferred.promise;
		return token; // NEW
    }    
});    