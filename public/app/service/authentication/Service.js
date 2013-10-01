/**
 * The authentication service object. Contains concrete Ajax calls.
 */
Ext.define("Core.service.authentication.Service", {
    extend: "FlowMVC.mvc.service.AbstractService",

    inject: [
        "logger"
    ],

    /**
     * The login ajax service call. Hits a json service and handles the success and fault accordingly.
     *
     * @param {String} username The username being authenticated.
     * @param {String} password The password being authenticated.
     */
    authenticate: function(username, password) {
        this.logger.debug("authenticate: username = " + username + ", password = " + password);

        //ORIGINAL var deferred = Ext.create("Deft.promise.Deferred");
		var token = this.getTokenOrPromise(); // NEW
        var me = this;

        Ext.Ajax.request({
            url: "data/login-success.json",
//            url: "http://localhost:8080/SenchaDemo",
            method: "get", // For local files use 'get', for remote use 'post'
            params: {
                username: username,
                password: password
            },

            success: function(response) {
                console.log("authenticate.success"); // use console, as logger is undefined
                //ORIGINAL me.success(response, deferred);
				me.success(response, token); // NEW
            },

            failure: function(response) {
                console.log("authenticate.failure"); // use console, as logger is undefined
                //ORIGINAL me.failure(response, deferred);
				me.failure(response, token); // NEW
            }
        });

        //ORIGINAL return deferred.promise;
		return token; // NEW
    },

    /**
     * The logout ajax service call. Hits a json service and handles the success and fault accordingly.
     */
    logout: function() {
        this.logger.debug("logout");

		var token = this.getTokenOrPromise(); // NEW
        var me = this;

        Ext.Ajax.request({
            url: "data/logout-success.json",
            method: "get", // For local files use 'get', for remote use 'post'

            success: function(response) {
                console.log("logout.success"); // use console, as logger is undefined

                var response = Ext.JSON.decode(response.responseText);
                //ORIGINAL me.success(response);
				me.success(response, token); // NEW
            },

            failure: function(response) {
                console.log("logout.failure"); // use console, as logger is undefined
                //ORIGINAL me.failure(response);
				me.failure(response, token); // NEW
            }
        });
		return token; // NEW
    }
});

