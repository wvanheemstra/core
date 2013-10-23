/**
 * The mock authentication service object.
 */
Ext.define("Core.service.authentication.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],

    /**
     * The mock login service call.
     *
     * @param {String} username The username being authenticated.
     * @param {String} password The password being authenticated.
     */
    authenticate: function(username, password) {
        this.logger.debug("authenticate: username = " + username + ", password = " + password);

        if(password === "password") { // only allow 'password' for now

            var response = {
                success: true,
                sessionToken: "qwerty1234567890",
                user: {
					userName: username, // return the same username as provided				
                    firstName:"John",
                    lastName:"Doe"
                }
            };

            return this.delayedSuccess(response);
        }
        else {

            var response = {
                success: false
            };

            return this.delayedFailure(response);
        }
    },

    /**
     * The mock logout service call.
     */
    logout: function() {
        this.logger.debug("logout");

        var response = {
            success: true
        };

        return this.delayedSuccess(response, 0);
    }
});

