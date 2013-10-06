/**
 * The group service object. Contains concrete Ajax calls.
 */
Ext.define("Core.service.group.Service", {
    extend: "FlowMVC.mvc.service.AbstractService",

    inject: [
        "logger"
    ],
	
    /**
     * The readGroups ajax service call. Hits a json service and handles the success and fault accordingly.
     */
    readGroups: function() {
        this.logger.debug("readGroups");

        //ORIGINAL var deferred = Ext.create("Deft.promise.Deferred");
		var token = this.getTokenOrPromise(); // NEW
        var me = this;
		
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
                //ORIGINAL me.success(response, deferred);
				me.success(response, token); // NEW
            },

            failure: function(response) {
                //this.logger.debug("readGroups.failure"); // logger is undefined here
				console.log("readGroups.failure");
                //ORIGINAL me.failure(response, deferred);
				me.failure(response, token); // NEW
            }
        });		
		
        //ORIGINAL return deferred.promise;
		return token; // NEW
    }    
});    