/**
 * The event event contains data and event types to perform CRUD operations on events.
 */
Ext.define("Core.event.event.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {

		/**
		 * Moved to here from Navigate Event, but isn't as yet used by Navigate Event
		 */
		ACTION_BACK_SHOW_EVENT_LIST:     	"actionBackShowEventList",
        ACTION_BACK_SHOW_EVENT_TILE:     	"actionBackShowEventTile",
        ACTION_SHOW_EVENT_DETAIL:        	"actionShowEventDetail",  
        ACTION_SHOW_EVENT_MODAL:         	"actionShowEventModal",	
	
	
		///////////////////////////  ALL REPLACED BY READ_EVENTS_etc
	
			/**
			 * The get event slide event type.
			 */
			GET_EVENT_SLIDE:          "getEventSlide",
			
			/**
			 * The get event slide success event type.
			 */
			GET_EVENT_SLIDE_SUCCESS:  "getEventSlideSuccess",

			/**
			 * The get event slide failure event type.
			 */
			GET_EVENT_SLIDE_FAILURE:  "getEventSlideFailure",	
		
			/**
			 * The get event list event type.
			 */
			GET_EVENT_LIST:          "getEventList",
			
			/**
			 * The get event list success event type.
			 */
			GET_EVENT_LIST_SUCCESS:  "getEventListSuccess",

			/**
			 * The get event list failure event type.
			 */
			GET_EVENT_LIST_FAILURE:  "getEventListFailure",
			
			/**
			 * The get event tile event type.
			 */
			GET_EVENT_TILE:          "getEventTile",
			
			/**
			 * The get event tile success event type.
			 */
			GET_EVENT_TILE_SUCCESS:  "getEventTileSuccess",

			/**
			 * The get event tile failure event type.
			 */
			GET_EVENT_TILE_FAILURE:  "getEventTileFailure",        

			/**
			 * The get event modal event type.
			 */
			GET_EVENT_MODAL:          "getEventModal",
			
			/**
			 * The get event modal success event type.
			 */
			GET_EVENT_MODAL_SUCCESS:  "getEventModalSuccess",

			/**
			 * The get event modal failure event type.
			 */
			GET_EVENT_MODAL_FAILURE:  "getEventModalFailure",	
			
			/**
			 * The get event event type.
			 */
			GET_EVENT:               "getEvent",

			/**
			 * The get event success event type.
			 */
			GET_EVENT_SUCCESS:       "getEventSuccess",

			/**
			 * The get event failure event type.
			 */
			GET_EVENT_FAILURE:       "getEventFailure",
		
		
		//////////////////////////
		

        /**
         * The create event event type.
         */
        CREATE_EVENT:            "createEvent",

        /**
         * The create event success event type.
         */
        CREATE_EVENT_SUCCESS:    "createEventSuccess",

        /**
         * The create event failure event type.
         */
        CREATE_EVENT_FAILURE:    "createEventFailure",

        /**
         * The update event event type.
         */
        UPDATE_EVENT:            "updateEvent",

        /**
         * The update event success event type.
         */
        UPDATE_EVENT_SUCCESS:    "updateEventSuccess",

        /**
         * The update event failure event type.
         */
        UPDATE_EVENT_FAILURE:    "updateEventFailure",

        /**
         * The delete event event type.
         */
        DELETE_EVENT:            "deleteEvent",

        /**
         * The delete event success event type.
         */
        DELETE_EVENT_SUCCESS:    "deleteEventSuccess",

        /**
         * The delete event failure event type.
         */
        DELETE_EVENT_FAILURE:    "deleteEventFailure",
		
        /**
         * The read events event type.
         */
        READ_EVENTS:            "readEvents",

        /**
         * The read events success event type.
         */
        READ_EVENTS_SUCCESS:    "readEventsSuccess",

        /**
         * The read events failure event type.
         */
        READ_EVENTS_FAILURE:    "readEventsFailure"		
		
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a event.
     */
    id: null,

    /**
     * @property {Core.model.event.Model} event [readOnly=false]
     * A event to perform CRUD actions on.
     */
    event: null,

    /**
     * Constructor.
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the event the CRUD operation is acting on.
     * @param {Core.model.event.Model} event The event the CRUD operation is acting on.     
     */
    constructor: function(type, id, event) {
        this.callParent(arguments);

        this.id = id;
        this.event = event;
    }
});	