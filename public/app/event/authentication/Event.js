/**
 * The authentication event contains data and event types to login/out the user.
 */
Ext.define("Core.event.authentication.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",

    statics: {

        /**
         * The login event type.
         */
        LOGIN:          "login",

        /**
         * The login success event type.
         */
        LOGIN_SUCCESS:  "loginSuccess",

        /**
         * The login failure event type.
         */
        LOGIN_FAILURE:  "loginFailure",

        /**
         * The logout event type.
         */
        LOGOUT:         "logout",

        /**
         * The logout success event type.
         */
        LOGOUT_SUCCESS: "logoutSuccess",

        /**
         * The logout failure event type.
         */
        LOGOUT_FAILURE: "logoutFailure"
    },

    /**
     * @property {String} username [readOnly=false]
     * The username property usually associated with user login.
     */
    username: "",

    /**
     * @property {String} password [readOnly=false]
     * The password property usually associated with user login.
     */
    password: "",

    /**
     * Constructor. Allows the username and password for authentication to be set on the event.
     *
     * @param {String} type The event type.
     * @param {String} username The username being passed to authenticate the user.
     * @param {String} password The password being passed to authenticate the user.
     */
    constructor: function(type, username, password) {
        this.callParent(arguments);

        this.username = username;
        this.password = password;
    }
})