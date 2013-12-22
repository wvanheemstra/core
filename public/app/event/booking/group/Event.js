/**
 * The booking group event contains data and event types to perform CRUD operations on booking groups.
 */
Ext.define("Core.event.booking.group.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {	
		
        /**
         * The get booking group event type.
         */
        GET_BOOKING_GROUP:               "getBookingGroup",

        /**
         * The get booking group success event type.
         */
        GET_BOOKING_GROUP_SUCCESS:       "getBookingGroupSuccess",

        /**
         * The get booking group failure event type.
         */
        GET_BOOKING_GROUP_FAILURE:       "getBookingGroupFailure",

        /**
         * The create booking group event type.
         */
        CREATE_BOOKING_GROUP:            "createBookingGroup",

        /**
         * The create booking group success event type.
         */
        CREATE_BOOKING_GROUP_SUCCESS:    "createBookingGroupSuccess",

        /**
         * The create booking group failure event type.
         */
        CREATE_BOOKING_GROUP_FAILURE:    "createBookingGroupFailure",

        /**
         * The update booking group event type.
         */
        UPDATE_BOOKING_GROUP:            "updateBookingGroup",

        /**
         * The update booking group success event type.
         */
        UPDATE_BOOKING_GROUP_SUCCESS:    "updateBookingGroupSuccess",

        /**
         * The update booking group failure event type.
         */
        UPDATE_BOOKING_GROUP_FAILURE:    "updateBookingGroupFailure",

        /**
         * The delete booking group event type.
         */
        DELETE_BOOKING_GROUP:            "deleteBookingGroup",

        /**
         * The delete booking group success event type.
         */
        DELETE_BOOKING_GROUP_SUCCESS:    "deleteBookingGroupSuccess",

        /**
         * The delete booking group failure event type.
         */
        DELETE_BOOKING_GROUP_FAILURE:    "deleteBookingGroupFailure",
		
		/**
         * The read booking groups event type.
         */
        READ_BOOKING_GROUPS:            "readBookingGroups",

        /**
         * The read booking groups success event type.
         */
        READ_BOOKING_GROUPS_SUCCESS:    "readBookingGroupsSuccess",

        /**
         * The read booking groups failure event type.
         */
        READ_BOOKING_GROUPS_FAILURE:    "readBookingGroupsFailure"
		
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a booking group.
     */
    id: null,

    /**
     * @property {Core.model.booking.group.Model} bookingGroup [readOnly=false]
     * A booking group to perform CRUD actions on.
     */
    bookingGroup: null,

    /**
     * Constructor. 
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the booking group the CRUD operation is acting on.
     * @param {Core.model.booking.group.Model} bookingGroup The booking group the CRUD operation is acting on.     
     */
    constructor: function(type, id, bookingGroup) {
        this.callParent(arguments);

        this.id = id;
        this.bookingGroup = bookingGroup;
    }
});	