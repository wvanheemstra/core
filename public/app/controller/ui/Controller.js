/**
 * The UIController acts like a service controller with asynchronous callback methods for successful
 * and failed ui service calls.
 */
Ext.define("Core.controller.ui.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.ui.Event",
        "FlowMVC.mvc.service.rpc.Responder"
    ],

    inject: [
        "uiService",
    //    "uiServiceClass",
        "logger"
    ],

    /**
     * @event Core.event.ui.Event.SET_SUCCESS
     * Fired when the ui service is successful.
     */

    /**
     * @event Core.event.ui.Event.SET_FAILURE
     * Fired when the ui service fails.
     */

    /**
     * Sets up global event bus handlers.
     * @protected
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");

        this.eventBus.addGlobalEventListener(Core.event.ui.Event.SET_UI, this.onSet, this);
    },

    /**
     * Performs ui by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {String} ui The ui being passed to set the ui.
     */
    set: function(ui) {
        this.logger.debug("set: ui = " + ui);

//        var service = this.getService(this.uiServiceClass);
//        this.uiService.setUsePromise(true);
        this.executeServiceCall(this.uiService, this.uiService.set, [ui], this.setSuccess, this.setFailure, this);
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
     * Handles the successful ui service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    setSuccess: function(response) {
        this.logger.info("setSuccess");

        // The server will send a token that can be used throughout the app to confirm that the ui is set.
        //this.setSessionToken(response.sessionToken);

        var evt = Ext.create("Core.event.ui.Event", Core.event.ui.Event.SET_UI_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed ui service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    setFailure: function(response) {
        this.logger.warn("setFailure");

        //this.resetSessionData();

        var evt = Ext.create("Core.event.ui.Event", Core.event.ui.Event.SET_UI_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the set event on the application-level event bus. Grabs the ui
     * and calls a functional method that's more testable than this event handler.
     *
     * @param {Core.event.ui.Event} event Reference to the set event. Contains the ui.
     */
    onSet: function(event) {
        var ui = event.ui;
        this.logger.debug("onSet");

        this.set(ui);
    }

});