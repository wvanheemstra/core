/**
 * The title event contains data and event types to set the title.
 */
Ext.define("Core.event.title.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",

    statics: {

        /**
         * The set title event type.
         */
        SET_TITLE:          "setTITLE",

        /**
         * The set title success event type.
         */
        SET_TITLE_SUCCESS:  "setTITLESuccess",

        /**
         * The set title failure event type.
         */
        SET_TITLE_FAILURE:  "setTITLEFailure"
    },

    /**
     * @property {String} title [readOnly=false]
     * The title property.
     */
    title: "",

    /**
     * Constructor.
     *
     * @param {String} type The event type.
     * @param {String} title The title being passed to set the title.
     */
    constructor: function(type, title) {
        this.callParent(arguments);

        this.title = title;
    }
})