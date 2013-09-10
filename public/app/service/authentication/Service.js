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

        var deferred = Ext.create("Deft.promise.Deferred");
        var me = this;

        Ext.Ajax.request({
            url: "data/login-success.json",
//            url: "http://localhost:8080/SenchaDemo",
            method: "post",
            params: {
                j_username: username,
                j_password: password
            },

            success: function(response) {
                this.logger.debug("authenticate.success");
                me.success(response, deferred);
            },

            failure: function(response) {
                this.logger.debug("authenticate.failure");
                me.failure(response, deferred);
            }
        });

        return deferred.promise;
    },

    /**
     * The logout ajax service call. Hits a json service and handles the success and fault accordingly.
     */
    logout: function() {
        this.logger.debug("logout");

        var me = this;

        Ext.Ajax.request({
            url: "data/logout-success.json",
            method: "post",

            success: function(response) {
                this.logger.debug("logout.success");

                var response = Ext.JSON.decode(response.responseText);
                me.success(response);
            },

            failure: function(response) {
                this.logger.debug("logout.failure");
                me.failure(response);
            }
        });
    }

});

