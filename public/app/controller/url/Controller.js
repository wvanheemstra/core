/**
 * The URLController acts like a service controller with asynchronous callback methods for successful
 * and failed url service calls.
 */
Ext.define("Core.controller.url.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.url.Event",
        "FlowMVC.mvc.service.rpc.Responder"
    ],

    inject: [
        "urlService",
    //    "urlServiceClass",
        "logger"
    ],

    /**
     * @event Core.event.url.Event.SET_SUCCESS
     * Fired when the url service is successful.
     */

    /**
     * @event Core.event.url.Event.SET_FAILURE
     * Fired when the url service fails.
     */

    /**
     * Sets up global event bus handlers.
     * @protected
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");

        this.eventBus.addGlobalEventListener(Core.event.url.Event.SET_URL, this.onSet, this);
    },

    /**
     * Performs url by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {String} url The url being passed to set the url.
     */
    set: function(url) {
        this.logger.debug("set: url = " + url);

//        var service = this.getService(this.urlServiceClass);
//        this.urlService.setUsePromise(true);
        this.executeServiceCall(this.urlService, this.urlService.set, [url], this.setSuccess, this.setFailure, this);
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
     * Handles the successful url service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    setSuccess: function(response) {
        this.logger.info("setSuccess");

        // The server will send a token that can be used throughout the app to confirm that the url is set.
        // this.setSessionToken(response.sessionToken);

        var evt = Ext.create("Core.event.url.Event", Core.event.url.Event.SET_URL_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed url service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    setFailure: function(response) {
        this.logger.warn("setFailure");

        //this.resetSessionData();

        var evt = Ext.create("Core.event.url.Event", Core.event.url.Event.SET_URL_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the set event on the application-level event bus. Grabs the url
     * and calls a functional method that's more testable than this event handler.
     *
     * @param {Core.event.url.Event} event Reference to the set event. Contains the url.
     */
    onSet: function(event) {
        var url = event.url;
        this.logger.debug("onSet");

        this.set(url);
    }

});