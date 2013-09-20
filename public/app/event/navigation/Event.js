/**
 * The authentication event contains data and event types to login/out the user.
 */
Ext.define("Core.event.navigation.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",

    statics: {
        NAVIGATE:                           "navigate",

        RIGHT:                              "navigateRight",
        LEFT:                               "navigateLeft",
        
		// CAN WE MOVE THIS BELOW AWAY... IT SHOULDN'T BE PART OF NAVIGATE... STILL TO DO..FOR NOW navigate NEEDS IT HERE
		
    //    ACTION_BACK_SHOW_MAIN_LIST:     	"actionBackShowMainList",
    //    ACTION_BACK_SHOW_MAIN_TILE:     	"actionBackShowMainTile",
    //    ACTION_SHOW_MAIN_DETAIL:        	"actionShowMainDetail",  
    //    ACTION_SHOW_MAIN_MODAL:         	"actionShowMainModal",
		
		ACTION_BACK_SHOW_PERSON_LIST:     	"actionBackShowPersonList",
        ACTION_BACK_SHOW_PERSON_TILE:     	"actionBackShowPersonTile",
        ACTION_SHOW_PERSON_DETAIL:        	"actionShowPersonDetail",  
        ACTION_SHOW_PERSON_MODAL:         	"actionShowPersonModal",
		
		ACTION_BACK_SHOW_ORGANISATION_LIST: "actionBackShowOrganisationList",
        ACTION_BACK_SHOW_ORGANISATION_TILE: "actionBackShowOrganisationTile",
        ACTION_SHOW_ORGANISATION_DETAIL:    "actionShowOrganisationDetail",  
        ACTION_SHOW_ORGANISATION_MODAL:     "actionShowOrganisationModal"
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