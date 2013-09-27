/**
 * The SalutationController acts as the command with asynchronous callback methods for successful
 * and failed salutation service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.salutation.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.salutation.Event",
        "FlowMVC.mvc.service.rpc.Responder",
        "nineam.locale.store.LocalesStore",
        "nineam.locale.event.LocaleEvent"		
    ],

    inject: [
        "salutationService",
        "salutationStore",
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
        this.eventBus.addGlobalEventListener(Core.event.salutation.Event.GET_SALUTATION_SLIDE, this.onGetSalutationSlide, this);
        this.eventBus.addGlobalEventListener(Core.event.salutation.Event.GET_SALUTATION_LIST, this.onGetSalutationList, this); 
        this.eventBus.addGlobalEventListener(Core.event.salutation.Event.GET_SALUTATION_TILE, this.onGetSalutationTile, this);
		this.eventBus.addGlobalEventListener(Core.event.salutation.Event.GET_SALUTATION_MODAL, this.onGetSalutationModal, this)               
        this.eventBus.addGlobalEventListener(Core.event.salutation.Event.CREATE_SALUTATION, this.onCreateSalutation, this);
        this.eventBus.addGlobalEventListener(Core.event.salutation.Event.UPDATE_SALUTATION, this.onUpdateSalutation, this);
        this.eventBus.addGlobalEventListener(Core.event.salutation.Event.DELETE_SALUTATION, this.onDeleteSalutation, this);
		this.eventBus.addGlobalEventListener(Core.event.salutation.Event.READ_SALUTATIONS, this.onReadSalutations, this);
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
                // {id: "en_gb", label: "English GB", url: "locale/salutation/en_gb.json"},
                // {id: "en_us", label: "English US", url: "locale/salutation/en_us.json"},
                // {id: "es_us", label: "Spanish", url: "locale/salutation/es_us.json"},
                // {id: "nl_nl", label: "Dutch", url: "locale/salutation/nl_nl.json"},
                // {id: "de_de", label: "Deutsch", url: "locale/salutation/de_de.json"}
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
     * Performs get salutation by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getSalutationSlide: function() {
        this.logger.debug("getSalutationSlide");
        this.executeServiceCall(this.salutationService, this.salutationService.getSalutationSlide, null, this.getSalutationSlideSuccess, this.getSalutationSlideFailure, this);
    },	
	
    /**
     * Performs get salutation by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getSalutationList: function() {
        this.logger.debug("getSalutationList");
        this.executeServiceCall(this.salutationService, this.salutationService.getSalutationList, null, this.getSalutationListSuccess, this.getSalutationListFailure, this);
    },

    /**
     * Performs get salutation by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getSalutationTile: function() {
        this.logger.debug("getSalutationTile");
        this.executeServiceCall(this.salutationService, this.salutationService.getSalutationTile, null, this.getSalutationTileSuccess, this.getSalutationTileFailure, this);
    },

    /**
     * Performs get salutation by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getSalutationModal: function() {
        this.logger.debug("getSalutationModal");
        this.executeServiceCall(this.salutationService, this.salutationService.getSalutationModal, null, this.getSalutationModalSuccess, this.getSalutationModalFailure, this);
    },	
	
    /**
     * Performs create salutation by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.salutation.Model} salutation The salutation to create.
     */
    createSalutation: function(salutation) {
        this.logger.debug("createSalutation");
        this.executeServiceCall(this.salutationService, this.salutationService.createSalutation, [salutation], this.createSalutationSuccess, this.createSalutationFailure, this);
    },

    /**
     * Performs update salutation by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.salutation.Model} salutation The salutation to update.
     */
    updateSalutation: function(salutation) {
        this.logger.debug("updateSalutation");
        this.executeServiceCall(this.salutationService, this.salutationService.updateSalutation, [salutation], this.updateSalutationSuccess, this.updateSalutationFailure, this);
    },

    /**
     * Performs delete salutation by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.salutation.Model} salutation The salutation to delete.
     */
    deleteSalutation: function(salutation) {
        this.logger.debug("deleteSalutation");
        this.executeServiceCall(this.salutationService, this.salutationService.deleteSalutation, [salutation], this.deleteSalutationSuccess, this.deleteSalutationFailure, this);
    },

    /**
     * Performs read salutations by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     */
    readSalutations: function() {
        this.logger.debug("readSalutations");
        this.executeServiceCall(this.salutationService, this.salutationService.readSalutations, null, this.readSalutationsSuccess, this.readSalutationsFailure, this);
    },	
	
    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the successful get salutation service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getSalutationSlideSuccess: function(response) {
        this.logger.info("getSalutationSlideSuccess");

		this.salutationStore.setData(response.salutationSlide);

        var evt = Ext.create("Core.event.salutation.Event", Core.event.salutation.Event.GET_SALUTATION_SLIDE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the successful get salutation service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getSalutationListSuccess: function(response) {
        this.logger.info("getSalutationListSuccess");

        this.salutationStore.setData(response.salutationList);

        var evt = Ext.create("Core.event.salutation.Event", Core.event.salutation.Event.GET_SALUTATION_LIST_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get salutation service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getSalutationTileSuccess: function(response) {
        this.logger.info("getSalutationTileSuccess");

        this.salutationStore.setData(response.salutationTile);

        var evt = Ext.create("Core.event.salutation.Event", Core.event.salutation.Event.GET_SALUTATION_TILE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get salutation service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getSalutationModalSuccess: function(response) {
        this.logger.info("getSalutationModalSuccess");

        this.salutationStore.setData(response.salutationModal);

        var evt = Ext.create("Core.event.salutation.Event", Core.event.salutation.Event.GET_SALUTATION_MODAL_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the failed get salutation service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getSalutationSlideFailure: function(response) {
        this.logger.warn("getSalutationSlideFailure");

        var evt = Ext.create("Core.event.salutation.Event", Core.event.salutation.Event.GET_SALUTATION_SLIDE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    /**
     * Handles the failed get salutation service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getSalutationListFailure: function(response) {
        this.logger.warn("getSalutationListFailure");

        var evt = Ext.create("Core.event.salutation.Event", Core.event.salutation.Event.GET_SALUTATION_LIST_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get salutation service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getSalutationTileFailure: function(response) {
        this.logger.warn("getSalutationTileFailure");

        var evt = Ext.create("Core.event.salutation.Event", Core.event.salutation.Event.GET_SALUTATION_TILE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get salutation service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getSalutationModalFailure: function(response) {
        this.logger.warn("getSalutationModalFailure");

        var evt = Ext.create("Core.event.salutation.Event", Core.event.salutation.Event.GET_SALUTATION_MODAL_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 	
	
    /**
     * Handles the successful create salutation service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createSalutationSuccess: function(response) {
        this.logger.info("createSalutationSuccess");

        this.salutationStore.add(response);

        var evt = Ext.create("Core.event.salutation.Event", Core.event.salutation.Event.CREATE_SALUTATION_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create salutation service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createSalutationFailure: function(response) {
        this.logger.warn("createSalutationFailure");

        var evt = Ext.create("Core.event.salutation.Event", Core.event.salutation.Event.CREATE_SALUTATION_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update salutation service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateSalutationSuccess: function(response) {
        this.logger.info("updateSalutationSuccess");

        this.salutationStore.update(response);

        var evt = Ext.create("Core.event.salutation.Event", Core.event.salutation.Event.UPDATE_SALUTATION_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update salutation service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateSalutationFailure: function(response) {
        this.logger.warn("updateSalutationFailure");

        var evt = Ext.create("Core.event.salutation.Event", Core.event.salutation.Event.UPDATE_SALUTATION_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete salutation service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteSalutationSuccess: function(response) {
        this.logger.info("deleteSalutationSuccess");

        this.salutationStore.setSelectedRecord(null);
        var salutation = this.salutationStore.findRecord("kp_SalutationID", response.data.kp_SalutationID);
        this.salutationStore.remove(salutation);

        var evt = Ext.create("Core.event.salutation.Event", Core.event.salutation.Event.DELETE_SALUTATION_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete salutation service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteSalutationFailure: function(response) {
        this.logger.warn("deleteSalutationFailure");

        var evt = Ext.create("Core.event.salutation.Event", Core.event.salutation.Event.DELETE_SALUTATION_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful read salutations service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     */
    readSalutationsSuccess: function(response) {
        this.logger.info("readSalutationsSuccess");

		this.salutationStore.setData(response.salutations);

        var evt = Ext.create("Core.event.salutation.Event", Core.event.salutation.Event.READ_SALUTATIONS_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed read salutations service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    readSalutationsFailure: function(response) {
        this.logger.warn("readSalutationsFailure");

        var evt = Ext.create("Core.event.salutation.Event", Core.event.salutation.Event.READ_SALUTATIONS_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the get salutation event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.salutation.Event} event Reference to the salutation event.
     */
    onGetSalutationSlide: function(event) {
        this.logger.debug("onGetSalutationSlide");

        this.getSalutationSlide();
    },
	
    /**
     * Handles the get salutation event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.salutation.Event} event Reference to the salutation event.
     */
    onGetSalutationList: function(event) {
        this.logger.debug("onGetSalutationList");

        this.getSalutationList();
    },    

    /**
     * Handles the get salutation event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.salutation.Event} event Reference to the salutation event.
     */
    onGetSalutationTile: function(event) {
        this.logger.debug("onGetSalutationTile");

        this.getSalutationTile();
    }, 

    /**
     * Handles the get salutation event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.salutation.Event} event Reference to the salutation event.
     */
    onGetSalutationModal: function(event) {
        this.logger.debug("onGetSalutationModal");

        this.getSalutationModal();
    },
	
    /**
     * Handles the create salutation event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.salutation.Event} event Reference to the salutation event. Contains a reference to the
     * salutation.
     */
    onCreateSalutation: function(event) {
        this.logger.debug("onCreateSalutation");

        this.createSalutation(event.salutation);
    },

    /**
     * Handles the update salutation event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.salutation.Event} event Reference to the salutation event. Contains a reference to the
     * salutation.
     */
    onUpdateSalutation: function(event) {
        this.logger.debug("onUpdateSalutation");

        this.updateSalutation(event.salutation);
    },

    /**
     * Handles the delete salutation event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.salutation.Event} event Reference to the salutation event. Contains a reference to the
     * salutation.
     */
    onDeleteSalutation: function(event) {
        this.logger.debug("onDeleteSalutation");

        this.deleteSalutation(event.salutation);
    },
	
	/**
     * Handles the read salutations event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.salutation.Event} event Reference to the salutation event. Contains a reference to the
     * salutations.
     */
    onReadSalutations: function(event) {
        this.logger.debug("onReadSalutations");

        this.readSalutations();
    }
    
});    