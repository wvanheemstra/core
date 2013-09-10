/**
 * The authentication event contains data and event types to login/out the user.
 */
Ext.define("Core.event.navigation.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",

    statics: {
        NAVIGATE:                           "navigate",

        RIGHT:                              "navigateRight",
        LEFT:                               "navigateLeft",

        ACTION_BACK_SHOW_EMPLOYEE_LIST:     "actionBackShowEmployeeList",
        ACTION_BACK_SHOW_EMPLOYEE_TILE:     "actionBackShowEmployeeTile",
        ACTION_SHOW_EMPLOYEE_DETAIL:        "actionShowEmployeeDetail",
        
        ACTION_BACK_SHOW_MAIN_LIST:     "actionBackShowMainList",
        ACTION_BACK_SHOW_MAIN_TILE:     "actionBackShowMainTile",
        ACTION_SHOW_MAIN_DETAIL:        "actionShowMainDetail",  
        ACTION_SHOW_MAIN_MODAL:         "actionShowMainModal"	
    },

    action: "",
    direction: "",

    /**
     * Constructor. Provides details on how the application should navigate and to what screen.
     *
     * @param {String} type The event type.
     * @param {String} action The string action that maps to the navigation.
     * @param {String} direction An optional direction property for navigation.
     */
    constructor: function(type, action, direction) {
        this.callParent(arguments);

        this.action = action;
        this.direction = direction;
    }
})