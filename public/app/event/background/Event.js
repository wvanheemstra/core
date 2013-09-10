/**
 * The background event contains data and event types to set the background.
 */
Ext.define("Core.event.background.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",

    statics: {

        /**
         * The set background event type.
         */
        SET_BACKGROUND:          "setBackground",

        /**
         * The set background success event type.
         */
        SET_BACKGROUND_SUCCESS:  "setBackgroundSuccess",

        /**
         * The set background failure event type.
         */
        SET_BACKGROUND_FAILURE:  "setBackgroundFailure"
    },

    /**
     * @property {String} background [readOnly=false]
     * The background property.
     */
    background: "",

    /**
     * Constructor.
     *
     * @param {String} type The event type.
     * @param {String} background The background being passed to set the background.
     */
    constructor: function(type, background) {
        this.callParent(arguments);

        this.background = background;
    }
})