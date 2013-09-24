/**
 * The AuthenticationController acts like a service controller with asynchronous callback methods for successful
 * and failed authentication service calls.
 */
Ext.define("Core.controller.authentication.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.authentication.Event",
        "FlowMVC.mvc.service.rpc.Responder"
    ],

    inject: [
        "authenticationService",
    //    "authenticationServiceClass",
        "logger"
    ],

    /**
     * @event Core.event.authentication.Event.LOGIN_SUCCESS
     * Fired when the login service is successful.
     */

    /**
     * @event Core.event.authentication.Event.LOGIN_FAILURE
     * Fired when the login service fails.
     */

    /**
     * @event Core.event.authentication.Event.LOGOUT_SUCCESS
     * Fired when the logout service is successful.
     */

    /**
     * @event Core.event.authentication.Event.LOGOUT_FAILURE
     * Fired when the logout service fails.
     */

    /**
     * Sets up global event bus handlers.
     * @protected
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");

        this.eventBus.addGlobalEventListener(Core.event.authentication.Event.LOGIN, this.onLogin, this);
        this.eventBus.addGlobalEventListener(Core.event.authentication.Event.LOGOUT, this.onLogout, this);
    },

    /**
     * Performs authentication by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {String} username The username being passed to authenticate the user.
     * @param {String} password The password being passed to authenticate the user.
     */
    login: function(username, password) {
        this.logger.debug("login: username = " + username + ", password = " + password);

//        var service = this.getService(this.authenticationServiceClass);
//        this.authenticationService.setUsePromise(true);
        this.executeServiceCall(this.authenticationService, this.authenticationService.authenticate, [username, password], this.loginSuccess, this.loginFailure, this);
    },

    /**
     * Performs logout by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    logout: function() {
        this.logger.debug("logout");

        this.executeServiceCall(this.authenticationService, this.authenticationService.logout, null, this.logoutSuccess, this.logoutFailure, this);
    },

    /**
     * Resets the session data.
     */
    resetSessionData: function() {
        this.logger.info("resetSessionData");
        this.setSessionToken(null);
    },

    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the successful login service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    loginSuccess: function(response) {
        this.logger.info("loginSuccess");

        // The server will send a token that can be used throughout the app to confirm that the user is authenticated.
        this.setSessionToken(response.sessionToken);

        var evt = Ext.create("Core.event.authentication.Event", Core.event.authentication.Event.LOGIN_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed login service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    loginFailure: function(response) {
        this.logger.warn("loginFailure");

        this.resetSessionData();

        var evt = Ext.create("Core.event.authentication.Event", Core.event.authentication.Event.LOGIN_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful logout service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus. Resets the session data.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    logoutSuccess: function(response) {
        this.logger.info("logoutSuccess");

        this.resetSessionData();

        var evt = Ext.create("Core.event.authentication.Event", Core.event.authentication.Event.LOGOUT_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed logout service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    logoutFailure: function(response) {
        this.logger.warn("logoutFailure");

        this.resetSessionData();

        var evt = Ext.create("Core.event.authentication.Event", Core.event.authentication.Event.LOGOUT_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the login event on the application-level event bus. Grabs the username and password
     * and calls a functional method that's more testable than this event handler.
     *
     * @param {Core.event.AuthenticationEvent} event Reference to the login event. Contains the username and password.
     */
    onLogin: function(event) {
        var username = event.username;
        var password = event.password;
        this.logger.debug("onLogin");

        this.login(username, password);
    },

    /**
     * Handles the simple logout event on the application-level event bus and calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.AuthenticationEvent} event Reference to the logout event.
     */
    onLogout: function(event) {
        this.logger.debug("onLogout");

        this.logout();
    }

});
