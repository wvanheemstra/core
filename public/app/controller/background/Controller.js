/**
 * The BackgroundController acts like a service controller with asynchronous callback methods for successful
 * and failed background service calls.
 */
Ext.define("Core.controller.background.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.background.Event",
        "FlowMVC.mvc.service.rpc.Responder"
    ],

    inject: [
        "backgroundService",
        "backgroundServiceClass",
        "logger"
    ],

    /**
     * @event Core.event.background.Event.SET_SUCCESS
     * Fired when the background service is successful.
     */

    /**
     * @event Core.event.background.Event.SET_FAILURE
     * Fired when the background service fails.
     */

    /**
     * Sets up global event bus handlers.
     * @protected
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");

        this.eventBus.addGlobalEventListener(Core.event.background.Event.SET_BACKGROUND, this.onSet, this);
    },

    /**
     * Performs background by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {String} background The background being passed to set the background.
     */
    set: function(background) {
        this.logger.debug("set: background = " + background);

//        var service = this.getService(this.backgroundServiceClass);
//        this.backgroundService.setUsePromise(true);
        this.executeServiceCall(this.backgroundService, this.backgroundService.set, [background], this.setSuccess, this.setFailure, this);
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
     * Handles the successful background service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    setSuccess: function(response) {
        this.logger.info("setSuccess");

        // The server will send a token that can be used throughout the app to confirm that the background is set.
        //this.setSessionToken(response.sessionToken);

        var evt = Ext.create("Core.event.background.Event", Core.event.background.Event.SET_BACKGROUND_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed background service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    setFailure: function(response) {
        this.logger.warn("setFailure");

        //this.resetSessionData();

        var evt = Ext.create("Core.event.background.Event", Core.event.background.Event.SET_BACKGROUND_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the set event on the application-level event bus. Grabs the background
     * and calls a functional method that's more testable than this event handler.
     *
     * @param {Core.event.background.Event} event Reference to the set event. Contains the background.
     */
    onSet: function(event) {
        var background = event.background;
        this.logger.debug("onSet");

        this.set(background);
    }

});