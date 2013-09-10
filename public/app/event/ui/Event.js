/**
 * The ui event contains data and event types to set the ui.
 */
Ext.define("Core.event.ui.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",

    statics: {

        /**
         * The set ui event type.
         */
        SET_UI:          "setUI",

        /**
         * The set ui success event type.
         */
        SET_UI_SUCCESS:  "setUISuccess",

        /**
         * The set ui failure event type.
         */
        SET_UI_FAILURE:  "setUIFailure"
    },

    /**
     * @property {String} ui [readOnly=false]
     * The ui property.
     */
    ui: "",

    /**
     * Constructor. Allows the username and password for authentication to be set on the event.
     *
     * @param {String} type The event type.
     * @param {String} ui The ui being passed to set the ui.
     */
    constructor: function(type, ui) {
        this.callParent(arguments);

        this.ui = ui;
    }
})