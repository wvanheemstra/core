/**
 * The booking event contains data and event types to perform CRUD operations on bookings.
 */
Ext.define("Core.event.booking.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {

		/**
		 * Moved to here from Navigate Event, but isn't as yet used by Navigate Event
		 */
		ACTION_BACK_SHOW_BOOKING_LIST:     	"actionBackShowBookingList",
        ACTION_BACK_SHOW_BOOKING_TILE:     	"actionBackShowBookingTile",
        ACTION_SHOW_BOOKING_DETAIL:        	"actionShowBookingDetail",  
        ACTION_SHOW_BOOKING_MODAL:         	"actionShowBookingModal",	
	
        /**
         * The get booking slide event type.
         */
        GET_BOOKING_SLIDE:          "getBookingSlide",
    	
        /**
         * The get booking slide success event type.
         */
        GET_BOOKING_SLIDE_SUCCESS:  "getBookingSlideSuccess",

        /**
         * The get booking slide failure event type.
         */
        GET_BOOKING_SLIDE_FAILURE:  "getBookingSlideFailure",	
	
        /**
         * The get booking list event type.
         */
        GET_BOOKING_LIST:          "getBookingList",
    	
        /**
         * The get booking list success event type.
         */
        GET_BOOKING_LIST_SUCCESS:  "getBookingListSuccess",

        /**
         * The get booking list failure event type.
         */
        GET_BOOKING_LIST_FAILURE:  "getBookingListFailure",
        
        /**
         * The get booking tile event type.
         */
        GET_BOOKING_TILE:          "getBookingTile",
    	
        /**
         * The get booking tile success event type.
         */
        GET_BOOKING_TILE_SUCCESS:  "getBookingTileSuccess",

        /**
         * The get booking tile failure event type.
         */
        GET_BOOKING_TILE_FAILURE:  "getBookingTileFailure",        

        /**
         * The get booking modal event type.
         */
        GET_BOOKING_MODAL:          "getBookingModal",
    	
        /**
         * The get booking modal success event type.
         */
        GET_BOOKING_MODAL_SUCCESS:  "getBookingModalSuccess",

        /**
         * The get booking modal failure event type.
         */
        GET_BOOKING_MODAL_FAILURE:  "getBookingModalFailure",	
		
        /**
         * The get booking event type.
         */
        GET_BOOKING:               "getBooking",

        /**
         * The get booking success event type.
         */
        GET_BOOKING_SUCCESS:       "getBookingSuccess",

        /**
         * The get booking failure event type.
         */
        GET_BOOKING_FAILURE:       "getBookingFailure",

        /**
         * The create booking event type.
         */
        CREATE_BOOKING:            "createBooking",

        /**
         * The create booking success event type.
         */
        CREATE_BOOKING_SUCCESS:    "createBookingSuccess",

        /**
         * The create booking failure event type.
         */
        CREATE_BOOKING_FAILURE:    "createBookingFailure",

        /**
         * The update booking event type.
         */
        UPDATE_BOOKING:            "updateBooking",

        /**
         * The update booking success event type.
         */
        UPDATE_BOOKING_SUCCESS:    "updateBookingSuccess",

        /**
         * The update booking failure event type.
         */
        UPDATE_BOOKING_FAILURE:    "updateBookingFailure",

        /**
         * The delete booking event type.
         */
        DELETE_BOOKING:            "deleteBooking",

        /**
         * The delete booking success event type.
         */
        DELETE_BOOKING_SUCCESS:    "deleteBookingSuccess",

        /**
         * The delete booking failure event type.
         */
        DELETE_BOOKING_FAILURE:    "deleteBookingFailure"
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a booking.
     */
    id: null,

    /**
     * @property {Core.model.booking.Model} booking [readOnly=false]
     * A booking to perform CRUD actions on.
     */
    booking: null,

    /**
     * Constructor. Allows the username and password for authentication to be set on the event.
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the booking the CRUD operation is acting on.
     * @param {Core.model.booking.Model} booking The booking the CRUD operation is acting on.     
     */
    constructor: function(type, id, booking) {
        this.callParent(arguments);

        this.id = id;
        this.booking = booking;
    }
})	