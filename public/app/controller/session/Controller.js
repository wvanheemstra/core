/**
 * The SessionController acts like a service controller with asynchronous callback methods for successful
 * and failed session service calls.
 */
Ext.define("Core.controller.session.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.session.Event",
        "FlowMVC.mvc.service.rpc.Responder"
    ],

    inject: [
        "sessionService",
        "sessionStore",
    //    "sessionServiceClass",
        "logger"
    ],
    

    /**
     * Sets up global event bus handlers.
     * @protected
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");

        this.eventBus.addGlobalEventListener(Core.event.session.Event.SET_SESSION, this.onSetSession, this);
        this.eventBus.addGlobalEventListener(Core.event.session.Event.GET_SESSION, this.onGetSession, this);		
        this.eventBus.addGlobalEventListener(Core.event.session.Event.CLEAR_SESSION, this.onClearSession, this);
    },

    /**
     * Performs set session by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Int} id The id being passed to set the session.
     * @param {String} sessionId The sessionId being passed to set the session.
     */
    setSession: function(id, sessionId) {
        this.logger.debug("setSession: id = " + id + ", sessionId = " + sessionId);

//        var service = this.getService(this.sessionServiceClass);
//        this.sessionService.setUsePromise(true);
        this.executeServiceCall(this.sessionService, this.sessionService.setSession, [id, sessionId], this.setSessionSuccess, this.setSessionFailure, this);
    },

    /**
     * Performs get session by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Int} id The id being passed to get the session.
     * @param {String} sessionId The sessionId being passed to get the session.
     */
    getSession: function(id, sessionId) {
        this.logger.debug("getSession: id = " + id + ", sessionId = " + sessionId);

//        var service = this.getService(this.sessionServiceClass);
//        this.sessionService.setUsePromise(true);
        this.executeServiceCall(this.sessionService, this.sessionService.getSession, [id, sessionId], this.getSessionSuccess, this.getSessionFailure, this);
    },	
	
    /**
     * Performs clear session by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Int} id The id being passed to clear the session.
     * @param {String} sessionId The sessionId being passed to clear the session.     
     */
    clearSession: function(id, sessionId) {
        this.logger.debug("clearSession: id = " + id + ", sessionId = " + sessionId);

        this.executeServiceCall(this.sessionService, this.sessionService.clearSession, [id, sessionId], this.clearSessionSuccess, this.clearSessionFailure, this);
    },

    /**
     * Resets the session data.
     */
    resetSessionData: function() {
        this.logger.info("resetSessionData");

        this.setSessionToken(null);
        this.sessionStore.setData(null);
    },

    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the successful set session service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    setSessionSuccess: function(response) {
        this.logger.info("setSessionSuccess");

        // The server will send a token that can be used throughout the app to confirm that the session is set.
        this.setSessionToken(response.sessionToken);
		
		//Core.config.global.Config.setSessionID(response.sessionToken); // new by wvh

        var evt = Ext.create("Core.event.session.Event", Core.event.session.Event.SET_SESSION_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed set session service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    setSessionFailure: function(response) {
        this.logger.warn("setSessionFailure");

        this.resetSessionData();

        var evt = Ext.create("Core.event.session.Event", Core.event.session.Event.SET_SESSION_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get session service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getSessionSuccess: function(response) {
        this.logger.info("getSessionSuccess");

        // The server will send a token that can be used throughout the app to confirm that the session is get.
        this.getSessionToken(response.sessionToken);

        var evt = Ext.create("Core.event.session.Event", Core.event.session.Event.GET_SESSION_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed get session service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getSessionFailure: function(response) {
        this.logger.warn("getSessionFailure");

        this.resetSessionData();

        var evt = Ext.create("Core.event.session.Event", Core.event.session.Event.GET_SESSION_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the successful clear session service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus. Resets the session data.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    clearSessionSuccess: function(response) {
        this.logger.info("clearSessionSuccess");

        this.resetSessionData();

        var evt = Ext.create("Core.event.session.Event", Core.event.session.Event.CLEAR_SESSION_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed clear session service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    clearSessionFailure: function(response) {
        this.logger.warn("clearSessionFailure");

        this.resetSessionData();

        var evt = Ext.create("Core.event.session.Event", Core.event.session.Event.CLEAR_SESSION_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the set session event on the application-level event bus. Grabs the id and sessionId
     * and calls a functional method that's more testable than this event handler.
     *
     * @param {Core.event.session.Event} event Reference to the set session event. Contains the id and sessionId.
     */
    onSetSession: function(event) {
        var id = event.id;
        var sessionId = event.sessionId;
        this.logger.debug("onSetSession");
        this.setSession(id, sessionId);
    },

    /**
     * Handles the get session event on the application-level event bus. Grabs the id and sessionId
     * and calls a functional method that's more testable than this event handler.
     *
     * @param {Core.event.session.Event} event Reference to the get session event. Contains the id and sessionId.
     */
    onGetSession: function(event) {
        var id = event.id;
        var sessionId = event.sessionId;
        this.logger.debug("onGetSession");
        this.getSession(id, sessionId);
    },
	
    /**
     * Handles the clear session event on the application-level event bus and calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.session.Event} event Reference to the clear session event.
     */
    onClearSession: function(event) {
        var id = event.id;
        var sessionId = event.sessionId;    	
        this.logger.debug("onClearSession");
        this.clearSession(id, sessionId);
    }

});