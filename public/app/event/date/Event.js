/**
 * The date event contains data and event types to perform CRUD operations on dates.
 */
Ext.define("Core.event.date.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {

		/**
		 * Moved to here from Navigate Event, but isn't as yet used by Navigate Event
		 */
		ACTION_BACK_SHOW_DATE_LIST:     	"actionBackShowDateList",
        ACTION_BACK_SHOW_DATE_TILE:     	"actionBackShowDateTile",
        ACTION_SHOW_DATE_DETAIL:        	"actionShowDateDetail",  
        ACTION_SHOW_DATE_MODAL:         	"actionShowDateModal",	
	
        /**
         * The get date slide event type.
         */
        GET_DATE_SLIDE:          "getDateSlide",
    	
        /**
         * The get date slide success event type.
         */
        GET_DATE_SLIDE_SUCCESS:  "getDateSlideSuccess",

        /**
         * The get date slide failure event type.
         */
        GET_DATE_SLIDE_FAILURE:  "getDateSlideFailure",	
	
        /**
         * The get date list event type.
         */
        GET_DATE_LIST:          "getDateList",
    	
        /**
         * The get date list success event type.
         */
        GET_DATE_LIST_SUCCESS:  "getDateListSuccess",

        /**
         * The get date list failure event type.
         */
        GET_DATE_LIST_FAILURE:  "getDateListFailure",
        
        /**
         * The get date tile event type.
         */
        GET_DATE_TILE:          "getDateTile",
    	
        /**
         * The get date tile success event type.
         */
        GET_DATE_TILE_SUCCESS:  "getDateTileSuccess",

        /**
         * The get date tile failure event type.
         */
        GET_DATE_TILE_FAILURE:  "getDateTileFailure",        

        /**
         * The get date modal event type.
         */
        GET_DATE_MODAL:          "getDateModal",
    	
        /**
         * The get date modal success event type.
         */
        GET_DATE_MODAL_SUCCESS:  "getDateModalSuccess",

        /**
         * The get date modal failure event type.
         */
        GET_DATE_MODAL_FAILURE:  "getDateModalFailure",	
		
        /**
         * The get date event type.
         */
        GET_DATE:               "getDate",

        /**
         * The get date success event type.
         */
        GET_DATE_SUCCESS:       "getDateSuccess",

        /**
         * The get date failure event type.
         */
        GET_DATE_FAILURE:       "getDateFailure",

        /**
         * The create date event type.
         */
        CREATE_DATE:            "createDate",

        /**
         * The create date success event type.
         */
        CREATE_DATE_SUCCESS:    "createDateSuccess",

        /**
         * The create date failure event type.
         */
        CREATE_DATE_FAILURE:    "createDateFailure",

        /**
         * The update date event type.
         */
        UPDATE_DATE:            "updateDate",

        /**
         * The update date success event type.
         */
        UPDATE_DATE_SUCCESS:    "updateDateSuccess",

        /**
         * The update date failure event type.
         */
        UPDATE_DATE_FAILURE:    "updateDateFailure",

        /**
         * The delete date event type.
         */
        DELETE_DATE:            "deleteDate",

        /**
         * The delete date success event type.
         */
        DELETE_DATE_SUCCESS:    "deleteDateSuccess",

        /**
         * The delete date failure event type.
         */
        DELETE_DATE_FAILURE:    "deleteDateFailure",
		
		/**
         * The read dates event type.
         */
        READ_DATES:            "readDates",

        /**
         * The read dates success event type.
         */
        READ_DATES_SUCCESS:    "readDatesSuccess",

        /**
         * The read dates failure event type.
         */
        READ_DATES_FAILURE:    "readDatesFailure"
		
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a date.
     */
    id: null,

    /**
     * @property {Core.model.date.Model} date [readOnly=false]
     * A date to perform CRUD actions on.
     */
    date: null,

    /**
     * Constructor. Allows the username and password for authentication to be set on the event.
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the date the CRUD operation is acting on.
     * @param {Core.model.date.Model} date The date the CRUD operation is acting on.     
     */
    constructor: function(type, id, date) {
        this.callParent(arguments);

        this.id = id;
        this.date = date;
    }
});	