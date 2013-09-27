/**
 * The NationalityController acts as the command with asynchronous callback methods for successful
 * and failed nationality service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.nationality.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.nationality.Event",
        "FlowMVC.mvc.service.rpc.Responder",
        "nineam.locale.store.LocalesStore",
        "nineam.locale.event.LocaleEvent"		
    ],

    inject: [
        "nationalityService",
        "nationalityStore",
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
        this.eventBus.addGlobalEventListener(Core.event.nationality.Event.GET_NATIONALITY_SLIDE, this.onGetNationalitySlide, this);
        this.eventBus.addGlobalEventListener(Core.event.nationality.Event.GET_NATIONALITY_LIST, this.onGetNationalityList, this); 
        this.eventBus.addGlobalEventListener(Core.event.nationality.Event.GET_NATIONALITY_TILE, this.onGetNationalityTile, this);
		this.eventBus.addGlobalEventListener(Core.event.nationality.Event.GET_NATIONALITY_MODAL, this.onGetNationalityModal, this)               
        this.eventBus.addGlobalEventListener(Core.event.nationality.Event.CREATE_NATIONALITY, this.onCreateNationality, this);
        this.eventBus.addGlobalEventListener(Core.event.nationality.Event.UPDATE_NATIONALITY, this.onUpdateNationality, this);
        this.eventBus.addGlobalEventListener(Core.event.nationality.Event.DELETE_NATIONALITY, this.onDeleteNationality, this);
		this.eventBus.addGlobalEventListener(Core.event.nationality.Event.READ_NATIONALITYS, this.onReadNationalitys, this);
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
                // {id: "en_gb", label: "English GB", url: "locale/nationality/en_gb.json"},
                // {id: "en_us", label: "English US", url: "locale/nationality/en_us.json"},
                // {id: "es_us", label: "Spanish", url: "locale/nationality/es_us.json"},
                // {id: "nl_nl", label: "Dutch", url: "locale/nationality/nl_nl.json"},
                // {id: "de_de", label: "Deutsch", url: "locale/nationality/de_de.json"}
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
     * Performs get nationality by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getNationalitySlide: function() {
        this.logger.debug("getNationalitySlide");
        this.executeServiceCall(this.nationalityService, this.nationalityService.getNationalitySlide, null, this.getNationalitySlideSuccess, this.getNationalitySlideFailure, this);
    },	
	
    /**
     * Performs get nationality by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getNationalityList: function() {
        this.logger.debug("getNationalityList");
        this.executeServiceCall(this.nationalityService, this.nationalityService.getNationalityList, null, this.getNationalityListSuccess, this.getNationalityListFailure, this);
    },

    /**
     * Performs get nationality by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getNationalityTile: function() {
        this.logger.debug("getNationalityTile");
        this.executeServiceCall(this.nationalityService, this.nationalityService.getNationalityTile, null, this.getNationalityTileSuccess, this.getNationalityTileFailure, this);
    },

    /**
     * Performs get nationality by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getNationalityModal: function() {
        this.logger.debug("getNationalityModal");
        this.executeServiceCall(this.nationalityService, this.nationalityService.getNationalityModal, null, this.getNationalityModalSuccess, this.getNationalityModalFailure, this);
    },	
	
    /**
     * Performs create nationality by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.nationality.Model} nationality The nationality to create.
     */
    createNationality: function(nationality) {
        this.logger.debug("createNationality");
        this.executeServiceCall(this.nationalityService, this.nationalityService.createNationality, [nationality], this.createNationalitySuccess, this.createNationalityFailure, this);
    },

    /**
     * Performs update nationality by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.nationality.Model} nationality The nationality to update.
     */
    updateNationality: function(nationality) {
        this.logger.debug("updateNationality");
        this.executeServiceCall(this.nationalityService, this.nationalityService.updateNationality, [nationality], this.updateNationalitySuccess, this.updateNationalityFailure, this);
    },

    /**
     * Performs delete nationality by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.nationality.Model} nationality The nationality to delete.
     */
    deleteNationality: function(nationality) {
        this.logger.debug("deleteNationality");
        this.executeServiceCall(this.nationalityService, this.nationalityService.deleteNationality, [nationality], this.deleteNationalitySuccess, this.deleteNationalityFailure, this);
    },

    /**
     * Performs read nationalitys by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     */
    readNationalitys: function() {
        this.logger.debug("readNationalitys");
        this.executeServiceCall(this.nationalityService, this.nationalityService.readNationalitys, null, this.readNationalitysSuccess, this.readNationalitysFailure, this);
    },	
	
    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the successful get nationality service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getNationalitySlideSuccess: function(response) {
        this.logger.info("getNationalitySlideSuccess");

		this.nationalityStore.setData(response.nationalitySlide);

        var evt = Ext.create("Core.event.nationality.Event", Core.event.nationality.Event.GET_NATIONALITY_SLIDE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the successful get nationality service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getNationalityListSuccess: function(response) {
        this.logger.info("getNationalityListSuccess");

        this.nationalityStore.setData(response.nationalityList);

        var evt = Ext.create("Core.event.nationality.Event", Core.event.nationality.Event.GET_NATIONALITY_LIST_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get nationality service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getNationalityTileSuccess: function(response) {
        this.logger.info("getNationalityTileSuccess");

        this.nationalityStore.setData(response.nationalityTile);

        var evt = Ext.create("Core.event.nationality.Event", Core.event.nationality.Event.GET_NATIONALITY_TILE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get nationality service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getNationalityModalSuccess: function(response) {
        this.logger.info("getNationalityModalSuccess");

        this.nationalityStore.setData(response.nationalityModal);

        var evt = Ext.create("Core.event.nationality.Event", Core.event.nationality.Event.GET_NATIONALITY_MODAL_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the failed get nationality service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getNationalitySlideFailure: function(response) {
        this.logger.warn("getNationalitySlideFailure");

        var evt = Ext.create("Core.event.nationality.Event", Core.event.nationality.Event.GET_NATIONALITY_SLIDE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    /**
     * Handles the failed get nationality service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getNationalityListFailure: function(response) {
        this.logger.warn("getNationalityListFailure");

        var evt = Ext.create("Core.event.nationality.Event", Core.event.nationality.Event.GET_NATIONALITY_LIST_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get nationality service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getNationalityTileFailure: function(response) {
        this.logger.warn("getNationalityTileFailure");

        var evt = Ext.create("Core.event.nationality.Event", Core.event.nationality.Event.GET_NATIONALITY_TILE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get nationality service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getNationalityModalFailure: function(response) {
        this.logger.warn("getNationalityModalFailure");

        var evt = Ext.create("Core.event.nationality.Event", Core.event.nationality.Event.GET_NATIONALITY_MODAL_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 	
	
    /**
     * Handles the successful create nationality service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createNationalitySuccess: function(response) {
        this.logger.info("createNationalitySuccess");

        this.nationalityStore.add(response);

        var evt = Ext.create("Core.event.nationality.Event", Core.event.nationality.Event.CREATE_NATIONALITY_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create nationality service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createNationalityFailure: function(response) {
        this.logger.warn("createNationalityFailure");

        var evt = Ext.create("Core.event.nationality.Event", Core.event.nationality.Event.CREATE_NATIONALITY_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update nationality service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateNationalitySuccess: function(response) {
        this.logger.info("updateNationalitySuccess");

        this.nationalityStore.update(response);

        var evt = Ext.create("Core.event.nationality.Event", Core.event.nationality.Event.UPDATE_NATIONALITY_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update nationality service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateNationalityFailure: function(response) {
        this.logger.warn("updateNationalityFailure");

        var evt = Ext.create("Core.event.nationality.Event", Core.event.nationality.Event.UPDATE_NATIONALITY_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete nationality service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteNationalitySuccess: function(response) {
        this.logger.info("deleteNationalitySuccess");

        this.nationalityStore.setSelectedRecord(null);
        var nationality = this.nationalityStore.findRecord("kp_NationalityID", response.data.kp_NationalityID);
        this.nationalityStore.remove(nationality);

        var evt = Ext.create("Core.event.nationality.Event", Core.event.nationality.Event.DELETE_NATIONALITY_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete nationality service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteNationalityFailure: function(response) {
        this.logger.warn("deleteNationalityFailure");

        var evt = Ext.create("Core.event.nationality.Event", Core.event.nationality.Event.DELETE_NATIONALITY_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful read nationalitys service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     */
    readNationalitysSuccess: function(response) {
        this.logger.info("readNationalitysSuccess");

		this.nationalityStore.setData(response.nationalitys);

        var evt = Ext.create("Core.event.nationality.Event", Core.event.nationality.Event.READ_NATIONALITYS_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed read nationalitys service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    readNationalitysFailure: function(response) {
        this.logger.warn("readNationalitysFailure");

        var evt = Ext.create("Core.event.nationality.Event", Core.event.nationality.Event.READ_NATIONALITYS_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the get nationality event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.nationality.Event} event Reference to the nationality event.
     */
    onGetNationalitySlide: function(event) {
        this.logger.debug("onGetNationalitySlide");

        this.getNationalitySlide();
    },
	
    /**
     * Handles the get nationality event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.nationality.Event} event Reference to the nationality event.
     */
    onGetNationalityList: function(event) {
        this.logger.debug("onGetNationalityList");

        this.getNationalityList();
    },    

    /**
     * Handles the get nationality event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.nationality.Event} event Reference to the nationality event.
     */
    onGetNationalityTile: function(event) {
        this.logger.debug("onGetNationalityTile");

        this.getNationalityTile();
    }, 

    /**
     * Handles the get nationality event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.nationality.Event} event Reference to the nationality event.
     */
    onGetNationalityModal: function(event) {
        this.logger.debug("onGetNationalityModal");

        this.getNationalityModal();
    },
	
    /**
     * Handles the create nationality event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.nationality.Event} event Reference to the nationality event. Contains a reference to the
     * nationality.
     */
    onCreateNationality: function(event) {
        this.logger.debug("onCreateNationality");

        this.createNationality(event.nationality);
    },

    /**
     * Handles the update nationality event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.nationality.Event} event Reference to the nationality event. Contains a reference to the
     * nationality.
     */
    onUpdateNationality: function(event) {
        this.logger.debug("onUpdateNationality");

        this.updateNationality(event.nationality);
    },

    /**
     * Handles the delete nationality event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.nationality.Event} event Reference to the nationality event. Contains a reference to the
     * nationality.
     */
    onDeleteNationality: function(event) {
        this.logger.debug("onDeleteNationality");

        this.deleteNationality(event.nationality);
    },
	
	/**
     * Handles the read nationalitys event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.nationality.Event} event Reference to the nationality event. Contains a reference to the
     * nationalitys.
     */
    onReadNationalitys: function(event) {
        this.logger.debug("onReadNationalitys");

        this.readNationalitys();
    }
    
});    