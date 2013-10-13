/**
 * The event group event contains data and event types to perform CRUD operations on event groups.
 */
Ext.define("Core.event.event.group.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {	
		
        /**
         * The get event group event type.
         */
        GET_EVENT_GROUP:               "getEventGroup",

        /**
         * The get event group success event type.
         */
        GET_EVENT_GROUP_SUCCESS:       "getEventGroupSuccess",

        /**
         * The get event group failure event type.
         */
        GET_EVENT_GROUP_FAILURE:       "getEventGroupFailure",

        /**
         * The create event group event type.
         */
        CREATE_EVENT_GROUP:            "createEventGroup",

        /**
         * The create event group success event type.
         */
        CREATE_EVENT_GROUP_SUCCESS:    "createEventGroupSuccess",

        /**
         * The create event group failure event type.
         */
        CREATE_EVENT_GROUP_FAILURE:    "createEventGroupFailure",

        /**
         * The update event group event type.
         */
        UPDATE_EVENT_GROUP:            "updateEventGroup",

        /**
         * The update event group success event type.
         */
        UPDATE_EVENT_GROUP_SUCCESS:    "updateEventGroupSuccess",

        /**
         * The update event group failure event type.
         */
        UPDATE_EVENT_GROUP_FAILURE:    "updateEventGroupFailure",

        /**
         * The delete event group event type.
         */
        DELETE_EVENT_GROUP:            "deleteEventGroup",

        /**
         * The delete event group success event type.
         */
        DELETE_EVENT_GROUP_SUCCESS:    "deleteEventGroupSuccess",

        /**
         * The delete event group failure event type.
         */
        DELETE_EVENT_GROUP_FAILURE:    "deleteEventGroupFailure",
		
		/**
         * The read event groups event type.
         */
        READ_EVENT_GROUPS:            "readEventGroups",

        /**
         * The read event groups success event type.
         */
        READ_EVENT_GROUPS_SUCCESS:    "readEventGroupsSuccess",

        /**
         * The read event groups failure event type.
         */
        READ_EVENT_GROUPS_FAILURE:    "readEventGroupsFailure"
		
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a event group.
     */
    id: null,

    /**
     * @property {Core.model.event.group.Model} eventGroup [readOnly=false]
     * A event group to perform CRUD actions on.
     */
    eventGroup: null,

    /**
     * Constructor. 
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the event group the CRUD operation is acting on.
     * @param {Core.model.event.group.Model} eventGroup The event group the CRUD operation is acting on.     
     */
    constructor: function(type, id, eventGroup) {
        this.callParent(arguments);

        this.id = id;
        this.eventGroup = eventGroup;
    }
})	