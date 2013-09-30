/**
 * The DateController acts as the command with asynchronous callback methods for successful
 * and failed gender service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.gender.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.gender.Event",
        "FlowMVC.mvc.service.rpc.Responder",
        "nineam.locale.store.LocalesStore",
        "nineam.locale.event.LocaleEvent"		
    ],

    inject: [
        "genderService",
        "genderStore",
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
        this.eventBus.addGlobalEventListener(Core.event.gender.Event.GET_DATE_SLIDE, this.onGetDateSlide, this);
        this.eventBus.addGlobalEventListener(Core.event.gender.Event.GET_DATE_LIST, this.onGetDateList, this); 
        this.eventBus.addGlobalEventListener(Core.event.gender.Event.GET_DATE_TILE, this.onGetDateTile, this);
		this.eventBus.addGlobalEventListener(Core.event.gender.Event.GET_DATE_MODAL, this.onGetDateModal, this)               
        this.eventBus.addGlobalEventListener(Core.event.gender.Event.CREATE_DATE, this.onCreateDate, this);
        this.eventBus.addGlobalEventListener(Core.event.gender.Event.UPDATE_DATE, this.onUpdateDate, this);
        this.eventBus.addGlobalEventListener(Core.event.gender.Event.DELETE_DATE, this.onDeleteDate, this);
		this.eventBus.addGlobalEventListener(Core.event.gender.Event.READ_DATES, this.onReadDates, this);
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
                // {id: "en_gb", label: "English GB", url: "locale/gender/en_gb.json"},
                // {id: "en_us", label: "English US", url: "locale/gender/en_us.json"},
                // {id: "es_us", label: "Spanish", url: "locale/gender/es_us.json"},
                // {id: "nl_nl", label: "Dutch", url: "locale/gender/nl_nl.json"},
                // {id: "de_de", label: "Deutsch", url: "locale/gender/de_de.json"}
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
     * Performs get gender by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getDateSlide: function() {
        this.logger.debug("getDateSlide");
        this.executeServiceCall(this.genderService, this.genderService.getDateSlide, null, this.getDateSlideSuccess, this.getDateSlideFailure, this);
    },	
	
    /**
     * Performs get gender by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getDateList: function() {
        this.logger.debug("getDateList");
        this.executeServiceCall(this.genderService, this.genderService.getDateList, null, this.getDateListSuccess, this.getDateListFailure, this);
    },

    /**
     * Performs get gender by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getDateTile: function() {
        this.logger.debug("getDateTile");
        this.executeServiceCall(this.genderService, this.genderService.getDateTile, null, this.getDateTileSuccess, this.getDateTileFailure, this);
    },

    /**
     * Performs get gender by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getDateModal: function() {
        this.logger.debug("getDateModal");
        this.executeServiceCall(this.genderService, this.genderService.getDateModal, null, this.getDateModalSuccess, this.getDateModalFailure, this);
    },	
	
    /**
     * Performs create gender by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.gender.Model} gender The gender to create.
     */
    createDate: function(gender) {
        this.logger.debug("createDate");
        this.executeServiceCall(this.genderService, this.genderService.createDate, [gender], this.createDateSuccess, this.createDateFailure, this);
    },

    /**
     * Performs update gender by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.gender.Model} gender The gender to update.
     */
    updateDate: function(gender) {
        this.logger.debug("updateDate");
        this.executeServiceCall(this.genderService, this.genderService.updateDate, [gender], this.updateDateSuccess, this.updateDateFailure, this);
    },

    /**
     * Performs delete gender by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.gender.Model} gender The gender to delete.
     */
    deleteDate: function(gender) {
        this.logger.debug("deleteDate");
        this.executeServiceCall(this.genderService, this.genderService.deleteDate, [gender], this.deleteDateSuccess, this.deleteDateFailure, this);
    },

    /**
     * Performs read genders by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     */
    readDates: function() {
        this.logger.debug("readDates");
        this.executeServiceCall(this.genderService, this.genderService.readDates, null, this.readDatesSuccess, this.readDatesFailure, this);
    },	
	
    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the successful get gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getDateSlideSuccess: function(response) {
        this.logger.info("getDateSlideSuccess");

		this.genderStore.setData(response.genderSlide);

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.GET_DATE_SLIDE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the successful get gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getDateListSuccess: function(response) {
        this.logger.info("getDateListSuccess");

        this.genderStore.setData(response.genderList);

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.GET_DATE_LIST_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getDateTileSuccess: function(response) {
        this.logger.info("getDateTileSuccess");

        this.genderStore.setData(response.genderTile);

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.GET_DATE_TILE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getDateModalSuccess: function(response) {
        this.logger.info("getDateModalSuccess");

        this.genderStore.setData(response.genderModal);

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.GET_DATE_MODAL_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the failed get gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getDateSlideFailure: function(response) {
        this.logger.warn("getDateSlideFailure");

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.GET_DATE_SLIDE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    /**
     * Handles the failed get gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getDateListFailure: function(response) {
        this.logger.warn("getDateListFailure");

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.GET_DATE_LIST_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getDateTileFailure: function(response) {
        this.logger.warn("getDateTileFailure");

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.GET_DATE_TILE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getDateModalFailure: function(response) {
        this.logger.warn("getDateModalFailure");

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.GET_DATE_MODAL_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 	
	
    /**
     * Handles the successful create gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createDateSuccess: function(response) {
        this.logger.info("createDateSuccess");

        this.genderStore.add(response);

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.CREATE_DATE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createDateFailure: function(response) {
        this.logger.warn("createDateFailure");

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.CREATE_DATE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateDateSuccess: function(response) {
        this.logger.info("updateDateSuccess");

        this.genderStore.update(response);

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.UPDATE_DATE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateDateFailure: function(response) {
        this.logger.warn("updateDateFailure");

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.UPDATE_DATE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteDateSuccess: function(response) {
        this.logger.info("deleteDateSuccess");

        this.genderStore.setSelectedRecord(null);
        var gender = this.genderStore.findRecord("kp_DateID", response.data.kp_DateID);
        this.genderStore.remove(gender);

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.DELETE_DATE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteDateFailure: function(response) {
        this.logger.warn("deleteDateFailure");

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.DELETE_DATE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful read genders service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     */
    readDatesSuccess: function(response) {
        this.logger.info("readDatesSuccess");

		this.genderStore.setData(response.genders);

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.READ_DATES_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed read genders service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    readDatesFailure: function(response) {
        this.logger.warn("readDatesFailure");

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.READ_DATES_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the get gender event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.gender.Event} event Reference to the gender event.
     */
    onGetDateSlide: function(event) {
        this.logger.debug("onGetDateSlide");

        this.getDateSlide();
    },
	
    /**
     * Handles the get gender event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.gender.Event} event Reference to the gender event.
     */
    onGetDateList: function(event) {
        this.logger.debug("onGetDateList");

        this.getDateList();
    },    

    /**
     * Handles the get gender event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.gender.Event} event Reference to the gender event.
     */
    onGetDateTile: function(event) {
        this.logger.debug("onGetDateTile");

        this.getDateTile();
    }, 

    /**
     * Handles the get gender event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.gender.Event} event Reference to the gender event.
     */
    onGetDateModal: function(event) {
        this.logger.debug("onGetDateModal");

        this.getDateModal();
    },
	
    /**
     * Handles the create gender event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.gender.Event} event Reference to the gender event. Contains a reference to the
     * gender.
     */
    onCreateDate: function(event) {
        this.logger.debug("onCreateDate");

        this.createDate(event.gender);
    },

    /**
     * Handles the update gender event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.gender.Event} event Reference to the gender event. Contains a reference to the
     * gender.
     */
    onUpdateDate: function(event) {
        this.logger.debug("onUpdateDate");

        this.updateDate(event.gender);
    },

    /**
     * Handles the delete gender event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.gender.Event} event Reference to the gender event. Contains a reference to the
     * gender.
     */
    onDeleteDate: function(event) {
        this.logger.debug("onDeleteDate");

        this.deleteDate(event.gender);
    },
	
	/**
     * Handles the read genders event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.gender.Event} event Reference to the gender event. Contains a reference to the
     * genders.
     */
    onReadDates: function(event) {
        this.logger.debug("onReadDates");

        this.readDates();
    }
    
});    