/**
 * The booking base mediator.
 */
Ext.define("Core.mediator.extjs.booking.base.Mediator", {
    extend: "Core.mediator.abstract.Mediator",

    requires: [
		"Core.event.ui.Event",
		"Core.event.url.Event",
		"Core.event.company.Event",
		"Core.event.background.Event",
		"Core.event.authentication.Event",
        "Core.event.booking.Event"		
    ],

    inject: [
        "bookingStore",
        "logger"
    ],
	
	/**
     * Sets up global event bus handlers. Called by the parent superclass during the initialization phase.
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
        this.eventBus.addGlobalEventListener(Core.event.ui.Event.SET_UI_SUCCESS, this.onSetUISuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.url.Event.SET_URL_SUCCESS, this.onSetURLSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.company.Event.SET_COMPANY_SUCCESS, this.onSetCompanySuccess, this);	
        this.eventBus.addGlobalEventListener(Core.event.background.Event.SET_BACKGROUND_SUCCESS, this.onSetBackgroundSuccess, this);			
		
        this.eventBus.addGlobalEventListener(Core.event.authentication.Event.LOGIN_SUCCESS, this.onLoginSuccess, this);
		
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.GET_BOOKING_SLIDE_SUCCESS, this.onGetBookingSlideSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.GET_BOOKING_SLIDE_FAILURE, this.onGetBookingSlideFailure, this);		
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.GET_BOOKING_LIST_SUCCESS, this.onGetBookingListSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.GET_BOOKING_LIST_FAILURE, this.onGetBookingListFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.GET_BOOKING_TILE_SUCCESS, this.onGetBookingTileSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.GET_BOOKING_TILE_FAILURE, this.onGetBookingTileFailure, this);	
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.GET_BOOKING_MODAL_SUCCESS, this.onGetBookingModalSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.GET_BOOKING_MODAL_FAILURE, this.onGetBookingModalFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.GET_BOOKING_DETAIL_SUCCESS, this.onGetBookingDetailSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.GET_BOOKING_DETAIL_FAILURE, this.onGetBookingDetailFailure, this);		
		
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.UPDATE_BOOKING_SUCCESS, this.onUpdateBookingSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.DELETE_BOOKING_SUCCESS, this.onDeleteBookingSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.CREATE_BOOKING_SUCCESS, this.onCreateBookingSuccess, this);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the painted application-level event. Set the booking detail view
     * as the current view.
     */    
    onPainted: function() {
		// placeholder
    },	

    /**
     * Handles the set ui success application-level event. Update the components for the ui.
     */
    onSetUISuccess: function() {
        // placeholder
    },

    /**
     * Handles the set url success application-level event. Update the components for the url.
     */
    onSetURLSuccess: function() {
        // placeholder
    },	

    /**
     * Handles the set background success application-level event. Update the components for the background.
     */
    onSetBackgroundSuccess: function() {
        // placeholder
    },

    /**
     * Handles the set company success application-level event. Update the components for the company.
     */
    onSetCompanySuccess: function() {
        // placeholder
    },
	
    /**
     * Handles the login success application-level event. Slide the booking list view
     * onto stage.
     */
    onLoginSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get bookings success application-level event.
     */
    onGetBookingSlideSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get bookings failure event from the login controller.
     */
    onGetBookingSlideFailure: function() {
        // placeholder
    },
	
    /**
     * Handles the get bookings success application-level event.
     */
    onGetBookingListSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get bookings failure event from the login controller.
     */
    onGetBookingListFailure: function() {
        // placeholder
    },

    /**
     * Handles the get bookings success application-level event.
     */
    onGetBookingTileSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get bookings failure event from the login controller.
     */
    onGetBookingTileFailure: function() {
        // placeholder
    },

    /**
     * Handles the get bookings success application-level event.
     */
    onGetBookingDetailSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get bookings failure event from the login controller.
     */
    onGetBookingDetailFailure: function() {
        // placeholder
    },

    /**
     * Handles the get bookings success application-level event.
     */
    onGetBookingModalSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get bookings failure event from the login controller.
     */
    onGetBookingModalFailure: function() {
        // placeholder
    },
	
    /**
     * Handles the create booking success application-level event. Navigates back to the booking list view.
     */
    onCreateBookingSuccess: function() {
        // placeholder
    },

    /**
     * Handles the update booking success application-level event. Navigates back to the booking list view.
     */
    onUpdateBookingSuccess: function() {
        // placeholder
    },

    /**
     * Handles the delete booking success application-level event. Navigates back to the booking list view.
     */
    onDeleteBookingSuccess: function() {
        // placeholder
    },

    /**
     * Handles the change of the selected record in the booking store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.booking.Store} store The store that has the selected record.
     * @param {Core.model.booking.Model} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
		// placeholder
    },	
    
});