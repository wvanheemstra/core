/**
 * The membership service object. Contains concrete Ajax calls.
 */
Ext.define("Core.service.membership.Service", {
    extend: "FlowMVC.mvc.service.AbstractService",

    inject: [
        "logger"
    ],

    /**
     * The getMembershipList ajax service call. Hits a json service and handles the success and fault accordingly.
     */
    getMembershipList: function() {
        this.logger.debug("getMembershipList");

        //ORIGINAL var deferred = Ext.create("Deft.promise.Deferred");
		var token = this.getTokenOrPromise(); // NEW
        var me = this;
		
        Ext.Ajax.request({
            url: "data/getmembershiplist-success.json",
//            url: "http://localhost:8080/SenchaDemo",
            method: "get", // For a local file, we will have to use "get", when retrieving it from a remote location we use "post"
            params: {
            //    j_username: username,
            //    j_password: password
            },

            success: function(response) {
                //this.logger.debug("getMembershipList.success"); // logger is undefined here
				console.log("getMembershipList.success");
				if(typeof response.responseText !== 'undefined'){
					// Covert the string Array to an Object
					response = JSON.parse(response.responseText);
				}
                //ORIGINAL me.success(response, deferred);
				me.success(response, token); // NEW
            },

            failure: function(response) {
                //this.logger.debug("getMembershipList.failure"); // logger is undefined here
				console.log("getMembershipList.failure");
				if(typeof response.responseText !== 'undefined'){
					// Covert the string Array to an Object
					response = JSON.parse(response.responseText);
				}
                //ORIGINAL me.failure(response, deferred);
				me.failure(response, token); // NEW
            }
        });		
		
        //ORIGINAL return deferred.promise;
		return token; // NEW
    }
	
});    