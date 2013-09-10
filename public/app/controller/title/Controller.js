/**
 * The TITLEController acts like a service controller with asynchronous callback methods for successful
 * and failed title service calls.
 */
Ext.define("Core.controller.title.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.title.Event",
        "FlowMVC.mvc.service.rpc.Responder"
    ],

    inject: [
        "titleService",
        "titleServiceClass",
        "logger"
    ],

    /**
     * @event Core.event.title.Event.SET_SUCCESS
     * Fired when the title service is successful.
     */

    /**
     * @event Core.event.title.Event.SET_FAILURE
     * Fired when the title service fails.
     */

    /**
     * Sets up global event bus handlers.
     * @protected
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");

        this.eventBus.addGlobalEventListener(Core.event.title.Event.SET_TITLE, this.onSet, this);
    },

    /**
     * Performs title by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {String} title The title being passed to set the title.
     */
    set: function(title) {
        this.logger.debug("set: title = " + title);

//        var service = this.getService(this.titleServiceClass);
//        this.titleService.setUsePromise(true);
        this.executeServiceCall(this.titleService, this.titleService.set, [title], this.setSuccess, this.setFailure, this);
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
     * Handles the successful title service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    setSuccess: function(response) {
        this.logger.info("setSuccess");

        // The server will send a token that can be used throughout the app to confirm that the title is set.
        // this.setSessionToken(response.sessionToken);

        var evt = Ext.create("Core.event.title.Event", Core.event.title.Event.SET_TITLE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed title service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    setFailure: function(response) {
        this.logger.warn("setFailure");

        //this.resetSessionData();

        var evt = Ext.create("Core.event.title.Event", Core.event.title.Event.SET_TITLE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the set event on the application-level event bus. Grabs the title
     * and calls a functional method that's more testable than this event handler.
     *
     * @param {Core.event.title.Event} event Reference to the set event. Contains the title.
     */
    onSet: function(event) {
        var title = event.title;
        this.logger.debug("onSet");

        this.set(title);
    }

});