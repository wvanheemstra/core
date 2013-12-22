/**
 * The individual service object. Contains concrete Ajax calls.
 */
Ext.define("Core.service.individual.Service", {
    extend: "FlowMVC.mvc.service.AbstractService",

    inject: [
        "logger",
		"individualStore"
    ],
	
    /**
     * The readIndividuals ajax service call. Hits a json service and handles the success and fault accordingly.
     */
    readIndividuals: function() {
        this.logger.debug("readIndividuals");

        //ORIGINAL var deferred = Ext.create("Deft.promise.Deferred");
		var token = this.getTokenOrPromise(); // NEW
        var me = this;
		
		// Set the JSON data for the request
		var jsonData = {
			"pagination" :  {
				"page": 0,
				"limit": 50,
				"sort": "IndividualName",
				"dir": "ASC"
			},
			"basicInfo" : {
				"ccoId": "Core",
				"prefLang": "eng_GB",
				"requestStartDate": (new Date()).toISOString(),
				"requesterApp": "Individual"
			},
			"mql" : {
				"query" : [{
					"type": "/core/individual",
					"kp_IndividualID": null,
					"IndividualName": null					
				}]
			},
			"debug_info" : {
				
			}
		};
		
		// Update the store for the JSON data
		var proxy = me.individualStore.getProxy();
		proxy['jsonData'] = jsonData;
		var operation = Ext.create('Ext.data.Operation');
			operation.setAction('read');
			operation.setUrl('http://localhost:5001/?api=individual&action=read');
		//	operation.setPassword(); // TO DO
		//	operation.setUsername(); // TO DO
		var callback = null;
		var scope = me;
		var request = me.individualStore.getProxy().doRequest(operation, callback, scope);
		
		// Now load the store
		me.individualStore.load({
			params: {}, //WAS {'id':d.data.category_id},
			scope: this,
			callback: function(records, operation, success) {
				if (success) {
					//this.logger.debug("readIndividuals.success"); // logger is undefined here
					console.log("readIndividuals.success");
					
					// since we receive records, not response, we create a response object temporarily
					var response = records;	
					
					//ORIGINAL me.success(response, deferred);
					me.success(response, token); // NEW
				} else {
					//this.logger.debug("readIndividuals.failure"); // logger is undefined here
					console.log("readIndividuals.failure");
					
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