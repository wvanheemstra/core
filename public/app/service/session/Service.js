/**
 * The session service object. Contains concrete Ajax calls.
 */
Ext.define("Core.service.session.Service", {
    extend: "FlowMVC.mvc.service.AbstractService",

    inject: [
		"sessionStore",
        "logger"
    ],

    /**
     * The get session ajax service call. Hits a json service and handles the success and fault accordingly.
     *
     * @param {Int} id The id being get.
     * @param {String} sessionId The sessionId being get.
     */
    getSession: function(id, sessionId) {
        this.logger.debug("get session: id = " + id + ", sessionId = " + sessionId);

        var deferred = Ext.create("Deft.promise.Deferred");
        var me = this;
		me.id = id;
        me.sessionId = sessionId;

        Ext.Ajax.request({
            url: "data/getsession-success.json",
//            url: "http://localhost:8080/SenchaDemo",
            method: "get", // For local files use 'get', for remote use 'post'
            params: {
                j_id: me.id,
                j_sessionId: me.sessionId
            },

            success: function(response) {
                this.logger.debug("getSession.success");
				if(typeof response.responseText !== 'undefined'){
					// Covert the string Array to an Object
					response = JSON.parse(response.responseText);
				}
                me.success(response, deferred);
            },

            failure: function(response) {
                this.logger.debug("getSession.failure");
				if(typeof response.responseText !== 'undefined'){
					// Covert the string Array to an Object
					response = JSON.parse(response.responseText);
				}
                me.failure(response, deferred);
            }
        });

        return deferred.promise;
    },

    /**
     * The set session ajax service call. Hits a json service and handles the success and fault accordingly.
	 *
     * @param {Int} id The id being set.
     * @param {String} sessionId The sessionId being set.
     */
    setSession: function(id, sessionId) {
        this.logger.debug("set session: id = " + id + ", sessionId = " + sessionId");

        var me = this;
		me.id = id;
        me.sessionId = sessionId;

        Ext.Ajax.request({
            url: "data/setsession-success.json",
            method: "get", // For local files use 'get', for remote use 'post'
            params: {
                j_id: me.id,
                j_sessionId: me.sessionId
            },

            success: function(response) {
                this.logger.debug("setSession.success");

                //WAS var response = Ext.JSON.decode(response.responseText);
				if(typeof response.responseText !== 'undefined'){
					// Covert the string Array to an Object
					response = JSON.parse(response.responseText);
				}
                me.success(response);
            },

            failure: function(response) {
                this.logger.debug("setSession.failure");
				if(typeof response.responseText !== 'undefined'){
					// Covert the string Array to an Object
					response = JSON.parse(response.responseText);
				}
                me.failure(response);
            }
        });
    }

});

