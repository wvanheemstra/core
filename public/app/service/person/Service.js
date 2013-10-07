/**
 * The person service object. Contains concrete Ajax calls.
 */
Ext.define("Core.service.person.Service", {
    extend: "FlowMVC.mvc.service.AbstractService",

    inject: [
        "logger",
		"personStore"
    ],
	
    /**
     * The readPersons ajax service call. Hits a json service and handles the success and fault accordingly.
     */
    readPersons: function() {
        this.logger.debug("readPersons");

        //ORIGINAL var deferred = Ext.create("Deft.promise.Deferred");
		var token = this.getTokenOrPromise(); // NEW
        var me = this;
		
		// Set the JSON data for the request
		var jsonData = {
			"pagination" :  {
				"page": 0,
				"limit": 50,
				"sort": "PersonLastName",
				"dir": "ASC"
			},
			"basicInfo" : {
				"ccoId": "Core",
				"prefLang": "eng_GB",
				"requestStartDate": (new Date()).toISOString(),
				"requesterApp": "Person"
			},
			"mql" : {
				"query" : [{
					"type": "/core/person",
					"kp_PersonID": null,
					"PersonFirstName": null,				
					"PersonLastName": null,
					"kf_SalutationID": null,
					"kf_GenderID": null,
					"kf_NationalityID": null					
				}]
			},
			"debug_info" : {
				
			}
		};
		
		// Update the store for the JSON data
		var proxy = me.personStore.getProxy();
		proxy['jsonData'] = jsonData;
		var operation = Ext.create('Ext.data.Operation');
			operation.setAction('read');
			operation.setUrl('http://localhost:5001/?api=person&action=read');
		//	operation.setPassword(); // TO DO
		//	operation.setUsername(); // TO DO
		var callback = null;
		var scope = me;
		var request = me.personStore.getProxy().doRequest(operation, callback, scope);
		
		// Now load the store
		me.personStore.load({
			params: {}, //WAS {'id':d.data.category_id},
			scope: this,
			callback: function(records, operation, success) {
				if (success) {
					//this.logger.debug("readPersons.success"); // logger is undefined here
					console.log("readPersons.success");
					
					// since we receive records, not response, we create a response object temporarily
					var response = records;	
					
					//ORIGINAL me.success(response, deferred);
					me.success(response, token); // NEW
				} else {
					//this.logger.debug("readPersons.failure"); // logger is undefined here
					console.log("readPersons.failure");
					
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