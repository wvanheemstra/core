/**
 * The IndividualController acts as the command with asynchronous callback methods for successful
 * and failed individual service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.individual.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.individual.Event",
        "FlowMVC.mvc.service.rpc.Responder",
        "nineam.locale.store.LocalesStore",
        "nineam.locale.event.LocaleEvent"		
    ],

    inject: [
        "individualService",
        "individualStore",
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
		this.eventBus.addGlobalEventListener(Core.event.individual.Event.READ_INDIVIDUALS, this.onReadIndividuals, this);
    //    this.eventBus.addGlobalEventListener(Core.event.individual.Event.GET_INDIVIDUAL_LIST, this.onGetIndividualList, this);		
        this.eventBus.addGlobalEventListener(Core.event.individual.Event.CREATE_INDIVIDUAL, this.onCreateIndividual, this);
        this.eventBus.addGlobalEventListener(Core.event.individual.Event.UPDATE_INDIVIDUAL, this.onUpdateIndividual, this);
        this.eventBus.addGlobalEventListener(Core.event.individual.Event.DELETE_INDIVIDUAL, this.onDeleteIndividual, this);
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
                {id: "en_gb", label: "English GB", url: "locale/individual/en_gb.json"},
                {id: "en_us", label: "English US", url: "locale/individual/en_us.json"},
                {id: "es_us", label: "Spanish", url: "locale/individual/es_us.json"},
                {id: "nl_nl", label: "Dutch", url: "locale/individual/nl_nl.json"},
                {id: "de_de", label: "Deutsch", url: "locale/individual/de_de.json"}
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
     * Performs create individual by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.individual.Model} individual The individual to create.
     */
    createIndividual: function(individual) {
        this.logger.debug("createIndividual");
        this.executeServiceCall(this.individualService, this.individualService.createIndividual, [individual], this.createIndividualSuccess, this.createIndividualFailure, this);
    },

    /**
     * Performs update individual by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.individual.Model} individual The individual to update.
     */
    updateIndividual: function(individual) {
        this.logger.debug("updateIndividual");
        this.executeServiceCall(this.individualService, this.individualService.updateIndividual, [individual], this.updateIndividualSuccess, this.updateIndividualFailure, this);
    },

    /**
     * Performs delete individual by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.individual.Model} individual The individual to delete.
     */
    deleteIndividual: function(individual) {
        this.logger.debug("deleteIndividual");
        this.executeServiceCall(this.individualService, this.individualService.deleteIndividual, [individual], this.deleteIndividualSuccess, this.deleteIndividualFailure, this);
    },

    /**
     * Performs read individuals by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    readIndividuals: function() {
        this.logger.debug("readIndividuals");
        this.executeServiceCall(this.individualService, this.individualService.readIndividuals, null, this.readIndividualsSuccess, this.readIndividualsFailure, this);
    },
	
    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////
	
    /**
     * Handles the successful create individual service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createIndividualSuccess: function(response) {
        this.logger.info("createIndividualSuccess");
		
        this.individualStore.add(response);

        var evt = Ext.create("Core.event.individual.Event", Core.event.individual.Event.CREATE_INDIVIDUAL_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create individual service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createIndividualFailure: function(response) {
        this.logger.warn("createIndividualFailure");		
		
        var evt = Ext.create("Core.event.individual.Event", Core.event.individual.Event.CREATE_INDIVIDUAL_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update individual service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateIndividualSuccess: function(response) {
        this.logger.info("updateIndividualSuccess");
		
		this.individualStore.update(response);

        var evt = Ext.create("Core.event.individual.Event", Core.event.individual.Event.UPDATE_INDIVIDUAL_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update individual service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateIndividualFailure: function(response) {
        this.logger.warn("updateIndividualFailure");

        var evt = Ext.create("Core.event.individual.Event", Core.event.individual.Event.UPDATE_INDIVIDUAL_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete individual service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteIndividualSuccess: function(response) {
        this.logger.info("deleteIndividualSuccess");
		
        this.individualStore.setSelectedRecord(null);
        var individual = this.individualStore.findRecord("kp_IndividualID", response.data.kp_IndividualID);
        this.individualStore.remove(individual);

        var evt = Ext.create("Core.event.individual.Event", Core.event.individual.Event.DELETE_INDIVIDUAL_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete individual service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteIndividualFailure: function(response) {
        this.logger.warn("deleteIndividualFailure");	
		
        var evt = Ext.create("Core.event.individual.Event", Core.event.individual.Event.DELETE_INDIVIDUAL_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

	/**
	 * Handles the successful read individuals service call and takes the response data packet as a parameter.
	 * Fires off the corresponding success event on the application-level event bus.
	 *
	 * @param {Object} response The response data packet from the successful service call.
	 */
	readIndividualsSuccess: function(response) {
		this.logger.info("readIndividualsSuccess");
		
		this.individualStore.setData(response.individuals); // individualStore will have already been loaded at Success, 
													// so need to check for this, and not overwrite. TO DO

		var evt = Ext.create("Core.event.individual.Event", Core.event.individual.Event.READ_INDIVIDUALS_SUCCESS);
		this.eventBus.dispatchGlobalEvent(evt);
	},	
	
    /**
     * Handles the failed read individuals service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    readIndividualsFailure: function(response) {
        this.logger.warn("readIndividualsFailure");

        var evt = Ext.create("Core.event.individual.Event", Core.event.individual.Event.READ_INDIVIDUALS_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////
	
    /**
     * Handles the create individual event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.individual.Event} event Reference to the individual event. Contains a reference to the
     * individual.
     */
    onCreateIndividual: function(event) {
        this.logger.debug("onCreateIndividual");

        this.createIndividual(event.individual);
    },

    /**
     * Handles the update individual event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.individual.Event} event Reference to the individual event. Contains a reference to the
     * individual.
     */
    onUpdateIndividual: function(event) {
        this.logger.debug("onUpdateIndividual");

        this.updateIndividual(event.individual);
    },

    /**
     * Handles the delete individual event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.individual.Event} event Reference to the individual event. Contains a reference to the
     * individual.
     */
    onDeleteIndividual: function(event) {
        this.logger.debug("onDeleteIndividual");

        this.deleteIndividual(event.individual);
    },

    /**
     * Handles the read individuals event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.individual.Event} event Reference to the individual event.
     */
    onReadIndividuals: function(event) {
        this.logger.debug("onReadIndividuals");

        this.readIndividuals();
    }
    
});    