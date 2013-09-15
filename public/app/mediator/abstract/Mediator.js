/**
 * The abstract mediator provides base functionality for all CafeTownsend mediators.
 *
 * Most notable is the navigate method which broadcasts a navigate event that dives the screen/view creation
 * and show/hide.
 */
Ext.define("Core.mediator.abstract.Mediator", {
    extend: "FlowMVC.mvc.mediator.AbstractMediator",

    requires: [
        "Core.event.navigation.Event"
    ],

    inject: [
        "logger"
    ],

    /**
     * Broadcasts a navigate event on application-level event bus.
     *
     * @param {String} action   The action used to map the next navigation sequence.
     */
    navigate: function(action) {
        this.logger.debug("navigate");

        var evt = Ext.create("Core.event.navigation.Event", Core.event.navigation.Event.NAVIGATE, action);
        this.eventBus.dispatchGlobalEvent(evt);
    }

});

