/**
 * The membership event contains data and event types to perform CRUD operations on memberships.
 */
Ext.define("Core.event.membership.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {

		/**
		 * Moved to here from Navigate Event, but isn't as yet used by Navigate Event
		 */
		ACTION_BACK_SHOW_MEMBERSHIP_LIST:     	"actionBackShowMembershipList",
        ACTION_BACK_SHOW_MEMBERSHIP_TILE:     	"actionBackShowMembershipTile",
        ACTION_SHOW_MEMBERSHIP_DETAIL:        	"actionShowMembershipDetail",  
        ACTION_SHOW_MEMBERSHIP_MODAL:         	"actionShowMembershipModal",	
	
        /**
         * The get membership slide event type.
         */
        GET_MEMBERSHIP_SLIDE:          "getMembershipSlide",
    	
        /**
         * The get membership slide success event type.
         */
        GET_MEMBERSHIP_SLIDE_SUCCESS:  "getMembershipSlideSuccess",

        /**
         * The get membership slide failure event type.
         */
        GET_MEMBERSHIP_SLIDE_FAILURE:  "getMembershipSlideFailure",	
	
        /**
         * The get membership list event type.
         */
        GET_MEMBERSHIP_LIST:          "getMembershipList",
    	
        /**
         * The get membership list success event type.
         */
        GET_MEMBERSHIP_LIST_SUCCESS:  "getMembershipListSuccess",

        /**
         * The get membership list failure event type.
         */
        GET_MEMBERSHIP_LIST_FAILURE:  "getMembershipListFailure",
        
        /**
         * The get membership tile event type.
         */
        GET_MEMBERSHIP_TILE:          "getMembershipTile",
    	
        /**
         * The get membership tile success event type.
         */
        GET_MEMBERSHIP_TILE_SUCCESS:  "getMembershipTileSuccess",

        /**
         * The get membership tile failure event type.
         */
        GET_MEMBERSHIP_TILE_FAILURE:  "getMembershipTileFailure",        

        /**
         * The get membership modal event type.
         */
        GET_MEMBERSHIP_MODAL:          "getMembershipModal",
    	
        /**
         * The get membership modal success event type.
         */
        GET_MEMBERSHIP_MODAL_SUCCESS:  "getMembershipModalSuccess",

        /**
         * The get membership modal failure event type.
         */
        GET_MEMBERSHIP_MODAL_FAILURE:  "getMembershipModalFailure",	
		
        /**
         * The get membership event type.
         */
        GET_MEMBERSHIP:               "getMembership",

        /**
         * The get membership success event type.
         */
        GET_MEMBERSHIP_SUCCESS:       "getMembershipSuccess",

        /**
         * The get membership failure event type.
         */
        GET_MEMBERSHIP_FAILURE:       "getMembershipFailure",

        /**
         * The create membership event type.
         */
        CREATE_MEMBERSHIP:            "createMembership",

        /**
         * The create membership success event type.
         */
        CREATE_MEMBERSHIP_SUCCESS:    "createMembershipSuccess",

        /**
         * The create membership failure event type.
         */
        CREATE_MEMBERSHIP_FAILURE:    "createMembershipFailure",

        /**
         * The update membership event type.
         */
        UPDATE_MEMBERSHIP:            "updateMembership",

        /**
         * The update membership success event type.
         */
        UPDATE_MEMBERSHIP_SUCCESS:    "updateMembershipSuccess",

        /**
         * The update membership failure event type.
         */
        UPDATE_MEMBERSHIP_FAILURE:    "updateMembershipFailure",

        /**
         * The delete membership event type.
         */
        DELETE_MEMBERSHIP:            "deleteMembership",

        /**
         * The delete membership success event type.
         */
        DELETE_MEMBERSHIP_SUCCESS:    "deleteMembershipSuccess",

        /**
         * The delete membership failure event type.
         */
        DELETE_MEMBERSHIP_FAILURE:    "deleteMembershipFailure",
		
		/**
         * The read memberships event type.
         */
        READ_MEMBERSHIPS:            "readMemberships",

        /**
         * The read memberships success event type.
         */
        READ_MEMBERSHIPS_SUCCESS:    "readMembershipsSuccess",

        /**
         * The read memberships failure event type.
         */
        READ_MEMBERSHIPS_FAILURE:    "readMembershipsFailure"
		
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a membership.
     */
    id: null,

    /**
     * @property {Core.model.membership.Model} membership [readOnly=false]
     * A membership to perform CRUD actions on.
     */
    membership: null,

    /**
     * Constructor. Allows the username and password for authentication to be set on the event.
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the membership the CRUD operation is acting on.
     * @param {Core.model.membership.Model} membership The membership the CRUD operation is acting on.     
     */
    constructor: function(type, id, membership) {
        this.callParent(arguments);

        this.id = id;
        this.membership = membership;
    }
});	