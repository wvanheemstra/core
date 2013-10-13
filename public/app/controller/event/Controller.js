/**
 * The EventController acts as the command with asynchronous callback methods for successful
 * and failed event service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.event.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.event.Event",
        "FlowMVC.mvc.service.rpc.Responder",
        "nineam.locale.store.LocalesStore",
        "nineam.locale.event.LocaleEvent"		
    ],

    inject: [
        "eventService",
        "eventStore",
		"dateStore",
		"groupStore",
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
        this.eventBus.addGlobalEventListener(Core.event.event.Event.READ_EVENTS, this.onReadEvents, this);		
        this.eventBus.addGlobalEventListener(Core.event.event.Event.CREATE_EVENT, this.onCreateEvent, this);
        this.eventBus.addGlobalEventListener(Core.event.event.Event.UPDATE_EVENT, this.onUpdateEvent, this);
        this.eventBus.addGlobalEventListener(Core.event.event.Event.DELETE_EVENT, this.onDeleteEvent, this);
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
                {id: "en_gb", label: "English GB", url: "locale/event/en_gb.json"},
                {id: "en_us", label: "English US", url: "locale/event/en_us.json"},
                {id: "es_us", label: "Spanish", url: "locale/event/es_us.json"},
                {id: "nl_nl", label: "Dutch", url: "locale/event/nl_nl.json"},
                {id: "de_de", label: "Deutsch", url: "locale/event/de_de.json"}
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
     * Performs create event by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.event.Model} event The event to create.
     */
    createEvent: function(event) {
        this.logger.debug("createEvent");
        this.executeServiceCall(this.eventService, this.eventService.createEvent, [event], this.createEventSuccess, this.createEventFailure, this);
    },

    /**
     * Performs update event by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.event.Model} event The event to update.
     */
    updateEvent: function(event) {
        this.logger.debug("updateEvent");
        this.executeServiceCall(this.eventService, this.eventService.updateEvent, [event], this.updateEventSuccess, this.updateEventFailure, this);
    },

    /**
     * Performs delete event by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.event.Model} event The event to delete.
     */
    deleteEvent: function(event) {
        this.logger.debug("deleteEvent");
        this.executeServiceCall(this.eventService, this.eventService.deleteEvent, [event], this.deleteEventSuccess, this.deleteEventFailure, this);
    },

    /**
     * Performs read events by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    readEvents: function() {
        this.logger.debug("readEvents");
        this.executeServiceCall(this.eventService, this.eventService.readEvents, null, this.readEventsSuccess, this.readEventsFailure, this);
    },	
	
    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////
	
    /**
     * Handles the successful create event service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createEventSuccess: function(response) {
        this.logger.info("createEventSuccess");	
		
        this.eventStore.add(response);

        var evt = Ext.create("Core.event.event.Event", Core.event.event.Event.CREATE_EVENT_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create event service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createEventFailure: function(response) {
        this.logger.warn("createEventFailure");	
		
        var evt = Ext.create("Core.event.event.Event", Core.event.event.Event.CREATE_EVENT_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update event service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateEventSuccess: function(response) {
        this.logger.info("updateEventSuccess");
		
		this.eventStore.update(response);

        var evt = Ext.create("Core.event.event.Event", Core.event.event.Event.UPDATE_EVENT_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update event service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateEventFailure: function(response) {
        this.logger.warn("updateEventFailure");
		
        var evt = Ext.create("Core.event.event.Event", Core.event.event.Event.UPDATE_EVENT_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete event service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteEventSuccess: function(response) {
        this.logger.info("deleteEventSuccess");	
		
        this.eventStore.setSelectedRecord(null);
        var event = this.eventStore.findRecord("kp_EventID", response.data.kp_EventID);
        this.eventStore.remove(event);

        var evt = Ext.create("Core.event.event.Event", Core.event.event.Event.DELETE_EVENT_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete event service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteEventFailure: function(response) {
        this.logger.warn("deleteEventFailure");	
		
        var evt = Ext.create("Core.event.event.Event", Core.event.event.Event.DELETE_EVENT_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

	/**
	 * Handles the successful read events service call and takes the response data packet as a parameter.
	 * Fires off the corresponding success event on the application-level event bus.
	 *
	 * @param {Object} response The response data packet from the successful service call.
	 */
	readEventsSuccess: function(response) {
		this.logger.info("readEventsSuccess");
		
		this.eventStore.setData(response.events); // eventStore will have already been loaded at Success, 
													// so need to check for this, and not overwrite. TO DO

		var evt = Ext.create("Core.event.event.Event", Core.event.event.Event.READ_EVENTS_SUCCESS);
		this.eventBus.dispatchGlobalEvent(evt);
	},	
	
    /**
     * Handles the failed read events service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    readEventsFailure: function(response) {
        this.logger.warn("readEventsFailure");	

        var evt = Ext.create("Core.event.event.Event", Core.event.event.Event.READ_EVENTS_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

	/**
     * Handles the successful read dates service call.
     * Fires off the corresponding success event on the application-level event bus.
     *
     */
    readDatesSuccess: function(response) {
        this.logger.info("readDatesSuccess");
		
        this.dateStore.load();

        var evt = Ext.create("Core.event.date.Event", Core.event.date.Event.READ_DATES_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed read dates service call.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     */
    readDatesFailure: function(response) {
        this.logger.warn("readDatesFailure");
		
        var evt = Ext.create("Core.event.date.Event", Core.event.date.Event.READ_DATES_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////
	
    /**
     * Handles the create event event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.event.Event} event Reference to the event event. Contains a reference to the
     * event.
     */
    onCreateEvent: function(event) {
        this.logger.debug("onCreateEvent");

        this.createEvent(event.event);
    },

    /**
     * Handles the update event event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.event.Event} event Reference to the event event. Contains a reference to the
     * event.
     */
    onUpdateEvent: function(event) {
        this.logger.debug("onUpdateEvent");

        this.updateEvent(event.event);
    },

    /**
     * Handles the delete event event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.event.Event} event Reference to the event event. Contains a reference to the
     * event.
     */
    onDeleteEvent: function(event) {
        this.logger.debug("onDeleteEvent");

        this.deleteEvent(event.event);
    },

    /**
     * Handles the read events event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.event.Event} event Reference to the event event.
     */
    onReadEvents: function(event) {
        this.logger.debug("onReadEvents");

        this.readEvents();
    }
    
});    