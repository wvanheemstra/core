/**
 * The session event contains data and event types to set/clear the session.
 */
Ext.define("Core.event.session.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",

    statics: {

        /**
         * The set session event type.
         */
        SET_SESSION:    "setSession",

        /**
         * The set session success event type.
         */
        SET_SESSION_SUCCESS:  "setSessionSuccess",

        /**
         * The set session failure event type.
         */
        SET_SESSION_FAILURE:  "setSessionFailure",

        /**
         * The get session event type.
         */
        GET_SESSION:    "getSession",

        /**
         * The get session success event type.
         */
        GET_SESSION_SUCCESS:  "getSessionSuccess",

        /**
         * The get session failure event type.
         */
        GET_SESSION_FAILURE:  "getSessionFailure",

        /**
         * The clear session event type.
         */
        CLEAR_SESSION:         "clearSession",

        /**
         * The clear session success event type.
         */
        CLEAR_SESSION_SUCCESS: "clearSessionSuccess",

        /**
         * The clear session failure event type.
         */
        CLEAR_SESSION_FAILURE: "clearSessionFailure"
    },

    /**
     * @property {Int} id [readOnly=false]
     * The id property usually associated with a session.
     */
    id: "",

    /**
     * @property {String} sessionId [readOnly=false]
     * The sessionId property usually associated with a session.
     */
    sessionId: "",

    /**
     * Constructor. Allows the id and sessionId for session to be set on the event.
     *
     * @param {String} type The event type.
     * @param {Int} id The id being passed to set the session.
     * @param {String} sessionId The sessionId being passed to set the session.
     */
    constructor: function(type, id, sessionId) {
        this.callParent(arguments);

        this.id = id;
        this.sessionId = sessionId;
    }
})