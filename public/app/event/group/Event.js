/**
 * The group event contains data and event types to perform CRUD operations on groups.
 */
Ext.define("Core.event.group.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {

		/**
		 * Moved to here from Navigate Event, but isn't as yet used by Navigate Event
		 */
		ACTION_BACK_SHOW_GROUP_LIST:     	"actionBackShowGroupList",
        ACTION_BACK_SHOW_GROUP_TILE:     	"actionBackShowGroupTile",
        ACTION_SHOW_GROUP_DETAIL:        	"actionShowGroupDetail",  
        ACTION_SHOW_GROUP_MODAL:         	"actionShowGroupModal",	
	
        /**
         * The get group slide event type.
         */
        GET_GROUP_SLIDE:          "getGroupSlide",
    	
        /**
         * The get group slide success event type.
         */
        GET_GROUP_SLIDE_SUCCESS:  "getGroupSlideSuccess",

        /**
         * The get group slide failure event type.
         */
        GET_GROUP_SLIDE_FAILURE:  "getGroupSlideFailure",	
	
        /**
         * The get group list event type.
         */
        GET_GROUP_LIST:          "getGroupList",
    	
        /**
         * The get group list success event type.
         */
        GET_GROUP_LIST_SUCCESS:  "getGroupListSuccess",

        /**
         * The get group list failure event type.
         */
        GET_GROUP_LIST_FAILURE:  "getGroupListFailure",
        
        /**
         * The get group tile event type.
         */
        GET_GROUP_TILE:          "getGroupTile",
    	
        /**
         * The get group tile success event type.
         */
        GET_GROUP_TILE_SUCCESS:  "getGroupTileSuccess",

        /**
         * The get group tile failure event type.
         */
        GET_GROUP_TILE_FAILURE:  "getGroupTileFailure",        

        /**
         * The get group modal event type.
         */
        GET_GROUP_MODAL:          "getGroupModal",
    	
        /**
         * The get group modal success event type.
         */
        GET_GROUP_MODAL_SUCCESS:  "getGroupModalSuccess",

        /**
         * The get group modal failure event type.
         */
        GET_GROUP_MODAL_FAILURE:  "getGroupModalFailure",	
		
        /**
         * The get group event type.
         */
        GET_GROUP:               "getGroup",

        /**
         * The get group success event type.
         */
        GET_GROUP_SUCCESS:       "getGroupSuccess",

        /**
         * The get group failure event type.
         */
        GET_GROUP_FAILURE:       "getGroupFailure",

        /**
         * The create group event type.
         */
        CREATE_GROUP:            "createGroup",

        /**
         * The create group success event type.
         */
        CREATE_GROUP_SUCCESS:    "createGroupSuccess",

        /**
         * The create group failure event type.
         */
        CREATE_GROUP_FAILURE:    "createGroupFailure",

        /**
         * The update group event type.
         */
        UPDATE_GROUP:            "updateGroup",

        /**
         * The update group success event type.
         */
        UPDATE_GROUP_SUCCESS:    "updateGroupSuccess",

        /**
         * The update group failure event type.
         */
        UPDATE_GROUP_FAILURE:    "updateGroupFailure",

        /**
         * The delete group event type.
         */
        DELETE_GROUP:            "deleteGroup",

        /**
         * The delete group success event type.
         */
        DELETE_GROUP_SUCCESS:    "deleteGroupSuccess",

        /**
         * The delete group failure event type.
         */
        DELETE_GROUP_FAILURE:    "deleteGroupFailure",
		
		/**
         * The read groups event type.
         */
        READ_GROUPS:            "readGroups",

        /**
         * The read groups success event type.
         */
        READ_GROUPS_SUCCESS:    "readGroupsSuccess",

        /**
         * The read groups failure event type.
         */
        READ_GROUPS_FAILURE:    "readGroupsFailure"
		
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a group.
     */
    id: null,

    /**
     * @property {Core.model.group.Model} group [readOnly=false]
     * A group to perform CRUD actions on.
     */
    group: null,

    /**
     * Constructor. Allows the username and password for authentication to be set on the event.
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the group the CRUD operation is acting on.
     * @param {Core.model.group.Model} group The group the CRUD operation is acting on.     
     */
    constructor: function(type, id, group) {
        this.callParent(arguments);

        this.id = id;
        this.group = group;
    }
});	