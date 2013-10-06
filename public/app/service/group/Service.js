/**
 * The group service object. Contains concrete Ajax calls.
 */
Ext.define("Core.service.group.Service", {
    extend: "FlowMVC.mvc.service.AbstractService",

    inject: [
        "logger",
		"groupStore"
    ],
	
    /**
     * The readGroups ajax service call. Hits a json service and handles the success and fault accordingly.
     */
    readGroups: function() {
        this.logger.debug("readGroups");

        //ORIGINAL var deferred = Ext.create("Deft.promise.Deferred");
		var token = this.getTokenOrPromise(); // NEW
        var me = this;
		
		// Set the JSON data for the request
		var jsonData = {
			"pagination" :  {
				"page": 0,
				"limit": 50,
				"sort": "GroupName",
				"dir": "ASC"
			},
			"basicInfo" : {
				"ccoId": "Core",
				"prefLang": "eng_GB",
				"requestStartDate": (new Date()).toISOString(),
				"requesterApp": "Group"
			},
			"mql" : {
				"query" : [{
					"type": "/core/group",
					"kp_GroupID": null,
					"GroupName": null
				}]
			},
			"debug_info" : {
				
			}
		};
		
		// Update the store for the JSON data
		var proxy = me.groupStore.getProxy();
		proxy['jsonData'] = jsonData;
		var operation = Ext.create('Ext.data.Operation');
			operation.setAction('read');
			operation.setUrl('http://localhost:5001/?api=group&action=read');
		//	operation.setPassword(); // TO DO
		//	operation.setUsername(); // TO DO
		var callback = null;
		var scope = me;
		var request = me.groupStore.getProxy().doRequest(operation, callback, scope);
		
		// Now load the store
		me.groupStore.load({
			params: {}, //WAS {'id':d.data.category_id},
			scope: this,
			callback: function(records, operation, success) {
				if (success) {
					//WAS console.log("Category: " + category.get('name'));
					//this.logger.debug("readGroups.success"); // logger is undefined here
					console.log("readGroups.success");
					
					// since we receive records, not response, we create a response object temporarily
					var response = records;	
					
				//	if(typeof response.responseText !== 'undefined'){
				//		// Covert the string Array to an Object
				//		response = JSON.parse(response.responseText);
				//	}
					//ORIGINAL me.success(response, deferred);
					me.success(response, token); // NEW
				} else {
					//WAS console.log('error');
					//this.logger.debug("readGroups.failure"); // logger is undefined here
					console.log("readGroups.failure");
					
					// since we receive records, not response, we create a response object temporarily
					var response = records; 
					
				//	if(typeof response.responseText !== 'undefined'){
				//		// Covert the string Array to an Object
				//		response = JSON.parse(response.responseText);
				//	}				
					//ORIGINAL me.failure(response, deferred);
					me.failure(response, token); // NEW
				}
			}
		});
		
		// No more need for an Ajax request here....
		// But how do we catch success or failure??
		/*
		
        Ext.Ajax.request({
            url: "data/read-groups-success.json",
//            url: "http://localhost:8080/SenchaDemo",
            method: "get", // For a local file, we will have to use "get", when retrieving it from a remote location we use "post"
            params: {
            //    j_username: username,
            //    j_password: password
            },

            success: function(response) {
                //this.logger.debug("readGroups.success"); // logger is undefined here
				console.log("readGroups.success");
				if(typeof response.responseText !== 'undefined'){
					// Covert the string Array to an Object
					response = JSON.parse(response.responseText);
				}
				//ORIGINAL me.success(response, deferred);
				me.success(response, token); // NEW
            },

            failure: function(response) {
                //this.logger.debug("readGroups.failure"); // logger is undefined here
				console.log("readGroups.failure");
				if(typeof response.responseText !== 'undefined'){
					// Covert the string Array to an Object
					response = JSON.parse(response.responseText);
				}				
                //ORIGINAL me.failure(response, deferred);
				me.failure(response, token); // NEW
            }
        });		
		*/
		
        //ORIGINAL return deferred.promise;
		return token; // NEW
    }    
});    