/**
 * The GenderController acts as the command with asynchronous callback methods for successful
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
        this.eventBus.addGlobalEventListener(Core.event.gender.Event.GET_GENDER_SLIDE, this.onGetGenderSlide, this);
        this.eventBus.addGlobalEventListener(Core.event.gender.Event.GET_GENDER_LIST, this.onGetGenderList, this); 
        this.eventBus.addGlobalEventListener(Core.event.gender.Event.GET_GENDER_TILE, this.onGetGenderTile, this);
		this.eventBus.addGlobalEventListener(Core.event.gender.Event.GET_GENDER_MODAL, this.onGetGenderModal, this)               
        this.eventBus.addGlobalEventListener(Core.event.gender.Event.CREATE_GENDER, this.onCreateGender, this);
        this.eventBus.addGlobalEventListener(Core.event.gender.Event.UPDATE_GENDER, this.onUpdateGender, this);
        this.eventBus.addGlobalEventListener(Core.event.gender.Event.DELETE_GENDER, this.onDeleteGender, this);
		this.eventBus.addGlobalEventListener(Core.event.gender.Event.READ_GENDERS, this.onReadGenders, this);
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
    getGenderSlide: function() {
        this.logger.debug("getGenderSlide");
        this.executeServiceCall(this.genderService, this.genderService.getGenderSlide, null, this.getGenderSlideSuccess, this.getGenderSlideFailure, this);
    },	
	
    /**
     * Performs get gender by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getGenderList: function() {
        this.logger.debug("getGenderList");
        this.executeServiceCall(this.genderService, this.genderService.getGenderList, null, this.getGenderListSuccess, this.getGenderListFailure, this);
    },

    /**
     * Performs get gender by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getGenderTile: function() {
        this.logger.debug("getGenderTile");
        this.executeServiceCall(this.genderService, this.genderService.getGenderTile, null, this.getGenderTileSuccess, this.getGenderTileFailure, this);
    },

    /**
     * Performs get gender by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getGenderModal: function() {
        this.logger.debug("getGenderModal");
        this.executeServiceCall(this.genderService, this.genderService.getGenderModal, null, this.getGenderModalSuccess, this.getGenderModalFailure, this);
    },	
	
    /**
     * Performs create gender by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.gender.Model} gender The gender to create.
     */
    createGender: function(gender) {
        this.logger.debug("createGender");
        this.executeServiceCall(this.genderService, this.genderService.createGender, [gender], this.createGenderSuccess, this.createGenderFailure, this);
    },

    /**
     * Performs update gender by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.gender.Model} gender The gender to update.
     */
    updateGender: function(gender) {
        this.logger.debug("updateGender");
        this.executeServiceCall(this.genderService, this.genderService.updateGender, [gender], this.updateGenderSuccess, this.updateGenderFailure, this);
    },

    /**
     * Performs delete gender by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.gender.Model} gender The gender to delete.
     */
    deleteGender: function(gender) {
        this.logger.debug("deleteGender");
        this.executeServiceCall(this.genderService, this.genderService.deleteGender, [gender], this.deleteGenderSuccess, this.deleteGenderFailure, this);
    },

    /**
     * Performs read genders by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     */
    readGenders: function() {
        this.logger.debug("readGenders");
        this.executeServiceCall(this.genderService, this.genderService.readGenders, null, this.readGendersSuccess, this.readGendersFailure, this);
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
    getGenderSlideSuccess: function(response) {
        this.logger.info("getGenderSlideSuccess");

		this.genderStore.setData(response.genderSlide);

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.GET_GENDER_SLIDE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the successful get gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getGenderListSuccess: function(response) {
        this.logger.info("getGenderListSuccess");

        this.genderStore.setData(response.genderList);

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.GET_GENDER_LIST_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getGenderTileSuccess: function(response) {
        this.logger.info("getGenderTileSuccess");

        this.genderStore.setData(response.genderTile);

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.GET_GENDER_TILE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getGenderModalSuccess: function(response) {
        this.logger.info("getGenderModalSuccess");

        this.genderStore.setData(response.genderModal);

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.GET_GENDER_MODAL_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the failed get gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getGenderSlideFailure: function(response) {
        this.logger.warn("getGenderSlideFailure");

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.GET_GENDER_SLIDE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    /**
     * Handles the failed get gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getGenderListFailure: function(response) {
        this.logger.warn("getGenderListFailure");

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.GET_GENDER_LIST_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getGenderTileFailure: function(response) {
        this.logger.warn("getGenderTileFailure");

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.GET_GENDER_TILE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getGenderModalFailure: function(response) {
        this.logger.warn("getGenderModalFailure");

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.GET_GENDER_MODAL_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 	
	
    /**
     * Handles the successful create gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createGenderSuccess: function(response) {
        this.logger.info("createGenderSuccess");

        this.genderStore.add(response);

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.CREATE_GENDER_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createGenderFailure: function(response) {
        this.logger.warn("createGenderFailure");

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.CREATE_GENDER_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateGenderSuccess: function(response) {
        this.logger.info("updateGenderSuccess");

        this.genderStore.update(response);

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.UPDATE_GENDER_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateGenderFailure: function(response) {
        this.logger.warn("updateGenderFailure");

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.UPDATE_GENDER_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteGenderSuccess: function(response) {
        this.logger.info("deleteGenderSuccess");

        this.genderStore.setSelectedRecord(null);
        var gender = this.genderStore.findRecord("kp_GenderID", response.data.kp_GenderID);
        this.genderStore.remove(gender);

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.DELETE_GENDER_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete gender service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteGenderFailure: function(response) {
        this.logger.warn("deleteGenderFailure");

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.DELETE_GENDER_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful read genders service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     */
    readGendersSuccess: function(response) {
        this.logger.info("readGendersSuccess");

		this.genderStore.setData(response.genders);

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.READ_GENDERS_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed read genders service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    readGendersFailure: function(response) {
        this.logger.warn("readGendersFailure");

        var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.READ_GENDERS_FAILURE);
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
    onGetGenderSlide: function(event) {
        this.logger.debug("onGetGenderSlide");

        this.getGenderSlide();
    },
	
    /**
     * Handles the get gender event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.gender.Event} event Reference to the gender event.
     */
    onGetGenderList: function(event) {
        this.logger.debug("onGetGenderList");

        this.getGenderList();
    },    

    /**
     * Handles the get gender event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.gender.Event} event Reference to the gender event.
     */
    onGetGenderTile: function(event) {
        this.logger.debug("onGetGenderTile");

        this.getGenderTile();
    }, 

    /**
     * Handles the get gender event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.gender.Event} event Reference to the gender event.
     */
    onGetGenderModal: function(event) {
        this.logger.debug("onGetGenderModal");

        this.getGenderModal();
    },
	
    /**
     * Handles the create gender event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.gender.Event} event Reference to the gender event. Contains a reference to the
     * gender.
     */
    onCreateGender: function(event) {
        this.logger.debug("onCreateGender");

        this.createGender(event.gender);
    },

    /**
     * Handles the update gender event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.gender.Event} event Reference to the gender event. Contains a reference to the
     * gender.
     */
    onUpdateGender: function(event) {
        this.logger.debug("onUpdateGender");

        this.updateGender(event.gender);
    },

    /**
     * Handles the delete gender event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.gender.Event} event Reference to the gender event. Contains a reference to the
     * gender.
     */
    onDeleteGender: function(event) {
        this.logger.debug("onDeleteGender");

        this.deleteGender(event.gender);
    },
	
	/**
     * Handles the read genders event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.gender.Event} event Reference to the gender event. Contains a reference to the
     * genders.
     */
    onReadGenders: function(event) {
        this.logger.debug("onReadGenders");

        this.readGenders();
    }
    
});    