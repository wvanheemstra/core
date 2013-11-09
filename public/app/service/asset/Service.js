/**
 * The asset service object. Contains concrete Ajax calls.
 */
Ext.define("Core.service.asset.Service", {
    extend: "FlowMVC.mvc.service.AbstractService",

    inject: [
        "logger",
		"assetStore"
    ],
	
    /**
     * The readAssets ajax service call. Hits a json service and handles the success and fault accordingly.
     */
    readAssets: function() {
        this.logger.debug("readAssets");

        //ORIGINAL var deferred = Ext.create("Deft.promise.Deferred");
		var token = this.getTokenOrPromise(); // NEW
        var me = this;
		
		// Set the JSON data for the request
		var jsonData = {
			"pagination" :  {
				"page": 0,
				"limit": 50,
				"sort": "AssetName",
				"dir": "ASC"
			},
			"basicInfo" : {
				"ccoId": "Core",
				"prefLang": "eng_GB",
				"requestStartDate": (new Date()).toISOString(),
				"requesterApp": "Asset"
			},
			"mql" : {
				"query" : [{
					"type": "/core/asset",
					"kp_AssetID": null,
					"AssetName": null					
				}]
			},
			"debug_info" : {
				
			}
		};
		
		// Update the store for the JSON data
		var proxy = me.assetStore.getProxy();
		proxy['jsonData'] = jsonData;
		var operation = Ext.create('Ext.data.Operation');
			operation.setAction('read');
			operation.setUrl('http://localhost:5001/?api=asset&action=read');
		//	operation.setPassword(); // TO DO
		//	operation.setUsername(); // TO DO
		var callback = null;
		var scope = me;
		var request = me.assetStore.getProxy().doRequest(operation, callback, scope);
		
		// Now load the store
		me.assetStore.load({
			params: {}, //WAS {'id':d.data.category_id},
			scope: this,
			callback: function(records, operation, success) {
				if (success) {
					//this.logger.debug("readAssets.success"); // logger is undefined here
					console.log("readAssets.success");
					
					// since we receive records, not response, we create a response object temporarily
					var response = records;	
					
					//ORIGINAL me.success(response, deferred);
					me.success(response, token); // NEW
				} else {
					//this.logger.debug("readAssets.failure"); // logger is undefined here
					console.log("readAssets.failure");
					
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