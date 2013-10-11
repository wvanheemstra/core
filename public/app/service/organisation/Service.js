/**
 * The organisation service object. Contains concrete Ajax calls.
 */
Ext.define("Core.service.organisation.Service", {
    extend: "FlowMVC.mvc.service.AbstractService",

    inject: [
        "logger",
		"organisationStore"
    ],
	
    /**
     * The readOrganisations ajax service call. Hits a json service and handles the success and fault accordingly.
     */
    readOrganisations: function() {
        this.logger.debug("readOrganisations");

        //ORIGINAL var deferred = Ext.create("Deft.promise.Deferred");
		var token = this.getTokenOrPromise(); // NEW
        var me = this;
		
		// Set the JSON data for the request
		var jsonData = {
			"pagination" :  {
				"page": 0,
				"limit": 50,
				"sort": "OrganisationName",
				"dir": "ASC"
			},
			"basicInfo" : {
				"ccoId": "Core",
				"prefLang": "eng_GB",
				"requestStartDate": (new Date()).toISOString(),
				"requesterApp": "Organisation"
			},
			"mql" : {
				"query" : [{
					"type": "/core/organisation",
					"kp_OrganisationID": null,
					"OrganisationName": null					
				}]
			},
			"debug_info" : {
				
			}
		};
		
		// Update the store for the JSON data
		var proxy = me.organisationStore.getProxy();
		proxy['jsonData'] = jsonData;
		var operation = Ext.create('Ext.data.Operation');
			operation.setAction('read');
			operation.setUrl('http://localhost:5001/?api=organisation&action=read');
		//	operation.setPassword(); // TO DO
		//	operation.setUsername(); // TO DO
		var callback = null;
		var scope = me;
		var request = me.organisationStore.getProxy().doRequest(operation, callback, scope);
		
		// Now load the store
		me.organisationStore.load({
			params: {}, //WAS {'id':d.data.category_id},
			scope: this,
			callback: function(records, operation, success) {
				if (success) {
					//this.logger.debug("readOrganisations.success"); // logger is undefined here
					console.log("readOrganisations.success");
					
					// since we receive records, not response, we create a response object temporarily
					var response = records;	
					
					//ORIGINAL me.success(response, deferred);
					me.success(response, token); // NEW
				} else {
					//this.logger.debug("readOrganisations.failure"); // logger is undefined here
					console.log("readOrganisations.failure");
					
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