/**
 * The DateController acts as the command with asynchronous callback methods for successful
 * and failed date service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.date.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.date.Event",
        "FlowMVC.mvc.service.rpc.Responder",
        "nineam.locale.store.LocalesStore",
        "nineam.locale.event.LocaleEvent"		
    ],

    inject: [
        "dateService",
        "dateStore",
        "logger"
    ],
    
    /**
     * Sets up global event bus handlers.
     * @protected
     */
    init: function() {
        this.callParent();
        this.logger.debug("init");

    //    this.initLocaleManager();
    },
    
    /**
     * Sets up global event bus handlers.
     * @protected
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
        this.eventBus.addGlobalEventListener(Core.event.date.Event.GET_DATE_SLIDE, this.onGetDateSlide, this);
        this.eventBus.addGlobalEventListener(Core.event.date.Event.GET_DATE_LIST, this.onGetDateList, this); 
        this.eventBus.addGlobalEventListener(Core.event.date.Event.GET_DATE_TILE, this.onGetDateTile, this);
		this.eventBus.addGlobalEventListener(Core.event.date.Event.GET_DATE_MODAL, this.onGetDateModal, this)               
        this.eventBus.addGlobalEventListener(Core.event.date.Event.CREATE_DATE, this.onCreateDate, this);
        this.eventBus.addGlobalEventListener(Core.event.date.Event.UPDATE_DATE, this.onUpdateDate, this);
        this.eventBus.addGlobalEventListener(Core.event.date.Event.DELETE_DATE, this.onDeleteDate, this);
		this.eventBus.addGlobalEventListener(Core.event.date.Event.READ_DATES, this.onReadDates, this);
    },

    /**
     * Initializes the Localization Manager loading in the languages available.
     */
    // initLocaleManager: function() {
        // var lm = nineam.locale.LocaleManager;
        // lm.addListener(nineam.locale.event.LocaleEvent.INITIALIZED, this.localeManagerInitializedEventHandler, this);

		// var currentApp = Core.config.global.Config.getCurrentApp();
		// if(currentApp !== '') { 
			// currentApp = currentApp + "/"; 
		// }
		
        // var locales = Ext.create("nineam.locale.store.LocalesStore", {
            // data: [
                // {id: "en_gb", label: "English GB", url: "locale/date/en_gb.json"},
                // {id: "en_us", label: "English US", url: "locale/date/en_us.json"},
                // {id: "es_us", label: "Spanish", url: "locale/date/es_us.json"},
                // {id: "nl_nl", label: "Dutch", url: "locale/date/nl_nl.json"},
                // {id: "de_de", label: "Deutsch", url: "locale/date/de_de.json"}
            // ]
        // });
        // lm.setLocales(locales);

        // var locale = lm.getPersistedLocale();
        
	//	locale = "de_de"; // for testing only
        
        // this.logger.debug("locale: " + locale);
        
        
        // locale = locale ? locale : Core.config.global.Config.getLocale();  // WAS "en_uk"
        // this.logger.debug("initLocaleManager: locale = " + locale);
        // lm.setLocale(locale);
    // },

    /**
     * LocaleManager initialized event handler
     */
    // localeManagerInitializedEventHandler: function() {
    //   Ext.getBody().unmask(); // TODO: not for touch
    // },
	
    /**
     * Performs get date by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getDateSlide: function() {
        this.logger.debug("getDateSlide");
        this.executeServiceCall(this.dateService, this.dateService.getDateSlide, null, this.getDateSlideSuccess, this.getDateSlideFailure, this);
    },	
	
    /**
     * Performs get date by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getDateList: function() {
        this.logger.debug("getDateList");
        this.executeServiceCall(this.dateService, this.dateService.getDateList, null, this.getDateListSuccess, this.getDateListFailure, this);
    },

    /**
     * Performs get date by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getDateTile: function() {
        this.logger.debug("getDateTile");
        this.executeServiceCall(this.dateService, this.dateService.getDateTile, null, this.getDateTileSuccess, this.getDateTileFailure, this);
    },

    /**
     * Performs get date by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getDateModal: function() {
        this.logger.debug("getDateModal");
        this.executeServiceCall(this.dateService, this.dateService.getDateModal, null, this.getDateModalSuccess, this.getDateModalFailure, this);
    },	
	
    /**
     * Performs create date by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.date.Model} date The date to create.
     */
    createDate: function(date) {
        this.logger.debug("createDate");
        this.executeServiceCall(this.dateService, this.dateService.createDate, [date], this.createDateSuccess, this.createDateFailure, this);
    },

    /**
     * Performs update date by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.date.Model} date The date to update.
     */
    updateDate: function(date) {
        this.logger.debug("updateDate");
        this.executeServiceCall(this.dateService, this.dateService.updateDate, [date], this.updateDateSuccess, this.updateDateFailure, this);
    },

    /**
     * Performs delete date by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.date.Model} date The date to delete.
     */
    deleteDate: function(date) {
        this.logger.debug("deleteDate");
        this.executeServiceCall(this.dateService, this.dateService.deleteDate, [date], this.deleteDateSuccess, this.deleteDateFailure, this);
    },

    /**
     * Performs read dates by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     */
    readDates: function() {
        this.logger.debug("readDates");
        this.executeServiceCall(this.dateService, this.dateService.readDates, null, this.readDatesSuccess, this.readDatesFailure, this);
    },	
	
    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the successful get date service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getDateSlideSuccess: function(response) {
        this.logger.info("getDateSlideSuccess");

		this.dateStore.setData(response.dateSlide);

        var evt = Ext.create("Core.event.date.Event", Core.event.date.Event.GET_DATE_SLIDE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the successful get date service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getDateListSuccess: function(response) {
        this.logger.info("getDateListSuccess");

        this.dateStore.setData(response.dateList);

        var evt = Ext.create("Core.event.date.Event", Core.event.date.Event.GET_DATE_LIST_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get date service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getDateTileSuccess: function(response) {
        this.logger.info("getDateTileSuccess");

        this.dateStore.setData(response.dateTile);

        var evt = Ext.create("Core.event.date.Event", Core.event.date.Event.GET_DATE_TILE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get date service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getDateModalSuccess: function(response) {
        this.logger.info("getDateModalSuccess");

        this.dateStore.setData(response.dateModal);

        var evt = Ext.create("Core.event.date.Event", Core.event.date.Event.GET_DATE_MODAL_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the failed get date service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getDateSlideFailure: function(response) {
        this.logger.warn("getDateSlideFailure");

        var evt = Ext.create("Core.event.date.Event", Core.event.date.Event.GET_DATE_SLIDE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    /**
     * Handles the failed get date service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getDateListFailure: function(response) {
        this.logger.warn("getDateListFailure");

        var evt = Ext.create("Core.event.date.Event", Core.event.date.Event.GET_DATE_LIST_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get date service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getDateTileFailure: function(response) {
        this.logger.warn("getDateTileFailure");

        var evt = Ext.create("Core.event.date.Event", Core.event.date.Event.GET_DATE_TILE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get date service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getDateModalFailure: function(response) {
        this.logger.warn("getDateModalFailure");

        var evt = Ext.create("Core.event.date.Event", Core.event.date.Event.GET_DATE_MODAL_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 	
	
    /**
     * Handles the successful create date service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createDateSuccess: function(response) {
        this.logger.info("createDateSuccess");

        this.dateStore.add(response);

        var evt = Ext.create("Core.event.date.Event", Core.event.date.Event.CREATE_DATE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create date service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createDateFailure: function(response) {
        this.logger.warn("createDateFailure");

        var evt = Ext.create("Core.event.date.Event", Core.event.date.Event.CREATE_DATE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update date service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateDateSuccess: function(response) {
        this.logger.info("updateDateSuccess");

        this.dateStore.update(response);

        var evt = Ext.create("Core.event.date.Event", Core.event.date.Event.UPDATE_DATE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update date service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateDateFailure: function(response) {
        this.logger.warn("updateDateFailure");

        var evt = Ext.create("Core.event.date.Event", Core.event.date.Event.UPDATE_DATE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete date service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteDateSuccess: function(response) {
        this.logger.info("deleteDateSuccess");

        this.dateStore.setSelectedRecord(null);
        var date = this.dateStore.findRecord("kp_DateID", response.data.kp_DateID);
        this.dateStore.remove(date);

        var evt = Ext.create("Core.event.date.Event", Core.event.date.Event.DELETE_DATE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete date service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteDateFailure: function(response) {
        this.logger.warn("deleteDateFailure");

        var evt = Ext.create("Core.event.date.Event", Core.event.date.Event.DELETE_DATE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful read dates service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     */
    readDatesSuccess: function(response) {
        this.logger.info("readDatesSuccess");

		this.dateStore.setData(response.dates);

        var evt = Ext.create("Core.event.date.Event", Core.event.date.Event.READ_DATES_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed read dates service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
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
     * Handles the get date event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.date.Event} event Reference to the date event.
     */
    onGetDateSlide: function(event) {
        this.logger.debug("onGetDateSlide");

        this.getDateSlide();
    },
	
    /**
     * Handles the get date event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.date.Event} event Reference to the date event.
     */
    onGetDateList: function(event) {
        this.logger.debug("onGetDateList");

        this.getDateList();
    },    

    /**
     * Handles the get date event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.date.Event} event Reference to the date event.
     */
    onGetDateTile: function(event) {
        this.logger.debug("onGetDateTile");

        this.getDateTile();
    }, 

    /**
     * Handles the get date event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.date.Event} event Reference to the date event.
     */
    onGetDateModal: function(event) {
        this.logger.debug("onGetDateModal");

        this.getDateModal();
    },
	
    /**
     * Handles the create date event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.date.Event} event Reference to the date event. Contains a reference to the
     * date.
     */
    onCreateDate: function(event) {
        this.logger.debug("onCreateDate");

        this.createDate(event.date);
    },

    /**
     * Handles the update date event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.date.Event} event Reference to the date event. Contains a reference to the
     * date.
     */
    onUpdateDate: function(event) {
        this.logger.debug("onUpdateDate");

        this.updateDate(event.date);
    },

    /**
     * Handles the delete date event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.date.Event} event Reference to the date event. Contains a reference to the
     * date.
     */
    onDeleteDate: function(event) {
        this.logger.debug("onDeleteDate");

        this.deleteDate(event.date);
    },
	
	/**
     * Handles the read dates event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.date.Event} event Reference to the date event. Contains a reference to the
     * dates.
     */
    onReadDates: function(event) {
        this.logger.debug("onReadDates");

        this.readDates();
    }
    
});    