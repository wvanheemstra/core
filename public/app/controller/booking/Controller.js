/**
 * The BookingController acts as the command with asynchronous callback methods for successful
 * and failed booking service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.booking.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.booking.Event",
        "FlowMVC.mvc.service.rpc.Responder",
        "nineam.locale.store.LocalesStore",
        "nineam.locale.event.LocaleEvent"		
    ],

    inject: [
        "bookingService",
        "bookingStore",
        "logger"
    ],
    
    /**
     * Sets up global event bus handlers.
     * @protected
     */
    init: function() {
        this.callParent();
        this.logger.debug("init");

        this.initLocaleManager();
    },
    
    /**
     * Sets up global event bus handlers.
     * @protected
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.GET_BOOKING_SLIDE, this.onGetBookingSlide, this);
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.GET_BOOKING_LIST, this.onGetBookingList, this); 
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.GET_BOOKING_TILE, this.onGetBookingTile, this);        this.eventBus.addGlobalEventListener(Core.event.booking.Event.GET_BOOKING_MODAL, this.onGetBookingModal, this);               
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.CREATE_BOOKING, this.onCreateBooking, this);
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.UPDATE_BOOKING, this.onUpdateBooking, this);
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.DELETE_BOOKING, this.onDeleteBooking, this);
    },

    /**
     * Initializes the Localization Manager loading in the languages available.
     */
    initLocaleManager: function() {
        var lm = nineam.locale.LocaleManager;
        lm.addListener(nineam.locale.event.LocaleEvent.INITIALIZED, this.localeManagerInitializedEventHandler, this);

		var currentApp = Core.config.global.Config.getCurrentApp();
		if(currentApp !== '') { 
			currentApp = currentApp + "/"; 
		}
		
        var locales = Ext.create("nineam.locale.store.LocalesStore", {
            data: [
                {id: "en_gb", label: "English GB", url: "locale/booking/en_gb.json"},
                {id: "en_us", label: "English US", url: "locale/booking/en_us.json"},
                {id: "es_us", label: "Spanish", url: "locale/booking/es_us.json"},
                {id: "nl_nl", label: "Dutch", url: "locale/booking/nl_nl.json"},
                {id: "de_de", label: "Deutsch", url: "locale/booking/de_de.json"}
            ]
        });
        lm.setLocales(locales);

        var locale = lm.getPersistedLocale();
        
		//locale = "de_de"; // for testing only
        
        this.logger.debug("locale: " + locale);
        
        
        locale = locale ? locale : Core.config.global.Config.getLocale();  // WAS "en_uk"
        this.logger.debug("initLocaleManager: locale = " + locale);
        lm.setLocale(locale);
    },

    /**
     * LocaleManager initialized event handler
     */
    localeManagerInitializedEventHandler: function() {
//        Ext.getBody().unmask(); // TODO: not for touch
    },
	
    /**
     * Performs get booking by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getBookingSlide: function() {
        this.logger.debug("getBookingSlide");
        this.executeServiceCall(this.bookingService, this.bookingService.getBookingSlide, null, this.getBookingSlideSuccess, this.getBookingSlideFailure, this);
    },	
	
    /**
     * Performs get booking by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getBookingList: function() {
        this.logger.debug("getBookingList");
        this.executeServiceCall(this.bookingService, this.bookingService.getBookingList, null, this.getBookingListSuccess, this.getBookingListFailure, this);
    },

    /**
     * Performs get booking by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getBookingTile: function() {
        this.logger.debug("getBookingTile");
        this.executeServiceCall(this.bookingService, this.bookingService.getBookingTile, null, this.getBookingTileSuccess, this.getBookingTileFailure, this);
    },

    /**
     * Performs get booking by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getBookingModal: function() {
        this.logger.debug("getBookingModal");
        this.executeServiceCall(this.bookingService, this.bookingService.getBookingModal, null, this.getBookingModalSuccess, this.getBookingModalFailure, this);
    },	
	
    /**
     * Performs create booking by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.booking.Model} booking The booking to create.
     */
    createBooking: function(booking) {
        this.logger.debug("createBooking");
        this.executeServiceCall(this.bookingService, this.bookingService.createBooking, [booking], this.createBookingSuccess, this.createBookingFailure, this);
    },

    /**
     * Performs update booking by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.booking.Model} booking The booking to update.
     */
    updateBooking: function(booking) {
        this.logger.debug("updateBooking");
        this.executeServiceCall(this.bookingService, this.bookingService.updateBooking, [booking], this.updateBookingSuccess, this.updateBookingFailure, this);
    },

    /**
     * Performs delete booking by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.booking.Model} booking The booking to delete.
     */
    deleteBooking: function(booking) {
        this.logger.debug("deleteBooking");
        this.executeServiceCall(this.bookingService, this.bookingService.deleteBooking, [booking], this.deleteBookingSuccess, this.deleteBookingFailure, this);
    },

    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the successful get booking service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getBookingSlideSuccess: function(response) {
        this.logger.info("getBookingSlideSuccess");

		this.bookingStore.setData(response.bookingSlide);

        var evt = Ext.create("Core.event.booking.Event", Core.event.booking.Event.GET_BOOKING_SLIDE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the successful get booking service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getBookingListSuccess: function(response) {
        this.logger.info("getBookingListSuccess");

        this.bookingStore.setData(response.bookingList);

        var evt = Ext.create("Core.event.booking.Event", Core.event.booking.Event.GET_BOOKING_LIST_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get booking service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getBookingTileSuccess: function(response) {
        this.logger.info("getBookingTileSuccess");

        this.bookingStore.setData(response.bookingTile);

        var evt = Ext.create("Core.event.booking.Event", Core.event.booking.Event.GET_BOOKING_TILE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get booking service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getBookingModalSuccess: function(response) {
        this.logger.info("getBookingModalSuccess");

        this.bookingStore.setData(response.bookingModal);

        var evt = Ext.create("Core.event.booking.Event", Core.event.booking.Event.GET_BOOKING_MODAL_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the failed get booking service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getBookingSlideFailure: function(response) {
        this.logger.warn("getBookingSlideFailure");

        var evt = Ext.create("Core.event.booking.Event", Core.event.booking.Event.GET_BOOKING_SLIDE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    /**
     * Handles the failed get booking service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getBookingListFailure: function(response) {
        this.logger.warn("getBookingListFailure");

        var evt = Ext.create("Core.event.booking.Event", Core.event.booking.Event.GET_BOOKING_LIST_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get booking service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getBookingTileFailure: function(response) {
        this.logger.warn("getBookingTileFailure");

        var evt = Ext.create("Core.event.booking.Event", Core.event.booking.Event.GET_BOOKING_TILE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get booking service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getBookingModalFailure: function(response) {
        this.logger.warn("getBookingModalFailure");

        var evt = Ext.create("Core.event.booking.Event", Core.event.booking.Event.GET_BOOKING_MODAL_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 	
	
    /**
     * Handles the successful create booking service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createBookingSuccess: function(response) {
        this.logger.info("createBookingSuccess");

        this.bookingStore.add(response);

        var evt = Ext.create("Core.event.booking.Event", Core.event.booking.Event.CREATE_BOOKING_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create booking service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createBookingFailure: function(response) {
        this.logger.warn("createBookingFailure");

        var evt = Ext.create("Core.event.booking.Event", Core.event.booking.Event.CREATE_BOOKING_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update booking service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateBookingSuccess: function(response) {
        this.logger.info("updateBookingSuccess");

        this.bookingStore.update(response);

        var evt = Ext.create("Core.event.booking.Event", Core.event.booking.Event.UPDATE_BOOKING_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update booking service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateBookingFailure: function(response) {
        this.logger.warn("updateBookingFailure");

        var evt = Ext.create("Core.event.booking.Event", Core.event.booking.Event.UPDATE_BOOKING_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete booking service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteBookingSuccess: function(response) {
        this.logger.info("deleteBookingSuccess");

        this.bookingStore.setSelectedRecord(null);
        var booking = this.bookingStore.findRecord("id", response.data.id);
        this.bookingStore.remove(booking);

        var evt = Ext.create("Core.event.booking.Event", Core.event.booking.Event.DELETE_BOOKING_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete booking service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteBookingFailure: function(response) {
        this.logger.warn("deleteBookingFailure");

        var evt = Ext.create("Core.event.booking.Event", Core.event.booking.Event.DELETE_BOOKING_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
    
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the get booking event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.booking.Event} event Reference to the booking event.
     */
    onGetBookingSlide: function(event) {
        this.logger.debug("onGetBookingSlide");

        this.getBookingSlide();
    },
	
    /**
     * Handles the get booking event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.booking.Event} event Reference to the booking event.
     */
    onGetBookingList: function(event) {
        this.logger.debug("onGetBookingList");

        this.getBookingList();
    },    

    /**
     * Handles the get booking event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.booking.Event} event Reference to the booking event.
     */
    onGetBookingTile: function(event) {
        this.logger.debug("onGetBookingTile");

        this.getBookingTile();
    }, 

    /**
     * Handles the get booking event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.booking.Event} event Reference to the booking event.
     */
    onGetBookingModal: function(event) {
        this.logger.debug("onGetBookingModal");

        this.getBookingModal();
    },
	
    /**
     * Handles the create booking event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.booking.Event} event Reference to the booking event. Contains a reference to the
     * booking.
     */
    onCreateBooking: function(event) {
        this.logger.debug("onCreateBooking");

        this.createBooking(event.booking);
    },

    /**
     * Handles the update booking event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.booking.Event} event Reference to the booking event. Contains a reference to the
     * booking.
     */
    onUpdateBooking: function(event) {
        this.logger.debug("onUpdateBooking");

        this.updateBooking(event.booking);
    },

    /**
     * Handles the delete booking event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.booking.Event} event Reference to the booking event. Contains a reference to the
     * booking.
     */
    onDeleteBooking: function(event) {
        this.logger.debug("onDeleteBooking");

        this.deleteBooking(event.booking);
    }
    
});    