/**
 * The url event contains data and event types to set the url.
 */
Ext.define("Core.event.url.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",

    statics: {

        /**
         * The set url event type.
         */
        SET_URL:          "setURL",

        /**
         * The set url success event type.
         */
        SET_URL_SUCCESS:  "setURLSuccess",

        /**
         * The set url failure event type.
         */
        SET_URL_FAILURE:  "setURLFailure"
    },

    /**
     * @property {String} url [readOnly=false]
     * The url property.
     */
    url: "",

    /**
     * Constructor.
     *
     * @param {String} type The event type.
     * @param {String} url The url being passed to set the url.
     */
    constructor: function(type, url) {
        this.callParent(arguments);

        this.url = url;
    }
})