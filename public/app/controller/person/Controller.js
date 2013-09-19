/**
 * The PersonController acts as the command with asynchronous callback methods for successful
 * and failed person service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.person.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.person.Event",
        "FlowMVC.mvc.service.rpc.Responder",
        "nineam.locale.store.LocalesStore",
        "nineam.locale.event.LocaleEvent"		
    ],

    inject: [
        "personService",
        "personStore",
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
        this.eventBus.addGlobalEventListener(Core.event.person.Event.GET_PERSON_SLIDE, this.onGetPersonSlide, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.GET_PERSON_LIST, this.onGetPersonList, this); 
        this.eventBus.addGlobalEventListener(Core.event.person.Event.GET_PERSON_TILE, this.onGetPersonTile, this);        this.eventBus.addGlobalEventListener(Core.event.person.Event.GET_PERSON_MODAL, this.onGetPersonModal, this);               
        this.eventBus.addGlobalEventListener(Core.event.person.Event.CREATE_PERSON, this.onCreatePerson, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.UPDATE_PERSON, this.onUpdatePerson, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.DELETE_PERSON, this.onDeletePerson, this);
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
                {id: "en_gb", label: "English GB", url: "locale/person/en_gb.json"},
                {id: "en_us", label: "English US", url: "locale/person/en_us.json"},
                {id: "es_us", label: "Spanish", url: "locale/person/es_us.json"},
                {id: "nl_nl", label: "Dutch", url: "locale/person/nl_nl.json"},
                {id: "de_de", label: "Deutsch", url: "locale/person/de_de.json"}
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
     * Performs get person by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getPersonSlide: function() {
        this.logger.debug("getPersonSlide");
        this.executeServiceCall(this.personService, this.personService.getPersonSlide, null, this.getPersonSlideSuccess, this.getPersonSlideFailure, this);
    },	
	
    /**
     * Performs get person by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getPersonList: function() {
        this.logger.debug("getPersonList");
        this.executeServiceCall(this.personService, this.personService.getPersonList, null, this.getPersonListSuccess, this.getPersonListFailure, this);
    },

    /**
     * Performs get person by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getPersonTile: function() {
        this.logger.debug("getPersonTile");
        this.executeServiceCall(this.personService, this.personService.getPersonTile, null, this.getPersonTileSuccess, this.getPersonTileFailure, this);
    },

    /**
     * Performs get person by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getPersonModal: function() {
        this.logger.debug("getPersonModal");
        this.executeServiceCall(this.personService, this.personService.getPersonModal, null, this.getPersonModalSuccess, this.getPersonModalFailure, this);
    },	
	
    /**
     * Performs create person by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.person.Model} person The person to create.
     */
    createPerson: function(person) {
        this.logger.debug("createPerson");
        this.executeServiceCall(this.personService, this.personService.createPerson, [person], this.createPersonSuccess, this.createPersonFailure, this);
    },

    /**
     * Performs update person by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.person.Model} person The person to update.
     */
    updatePerson: function(person) {
        this.logger.debug("updatePerson");
        this.executeServiceCall(this.personService, this.personService.updatePerson, [person], this.updatePersonSuccess, this.updatePersonFailure, this);
    },

    /**
     * Performs delete person by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.person.Model} person The person to delete.
     */
    deletePerson: function(person) {
        this.logger.debug("deletePerson");
        this.executeServiceCall(this.personService, this.personService.deletePerson, [person], this.deletePersonSuccess, this.deletePersonFailure, this);
    },

    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the successful get person service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getPersonSlideSuccess: function(response) {
        this.logger.info("getPersonSlideSuccess");

		this.personStore.setData(response.personSlide);

        var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.GET_PERSON_SLIDE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the successful get person service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getPersonListSuccess: function(response) {
        this.logger.info("getPersonListSuccess");

        this.personStore.setData(response.personList);

        var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.GET_PERSON_LIST_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get person service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getPersonTileSuccess: function(response) {
        this.logger.info("getPersonTileSuccess");

        this.personStore.setData(response.personTile);

        var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.GET_PERSON_TILE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get person service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getPersonModalSuccess: function(response) {
        this.logger.info("getPersonModalSuccess");

        this.personStore.setData(response.personModal);

        var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.GET_PERSON_MODAL_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the failed get person service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getPersonSlideFailure: function(response) {
        this.logger.warn("getPersonSlideFailure");

        var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.GET_PERSON_SLIDE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    /**
     * Handles the failed get person service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getPersonListFailure: function(response) {
        this.logger.warn("getPersonListFailure");

        var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.GET_PERSON_LIST_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get person service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getPersonTileFailure: function(response) {
        this.logger.warn("getPersonTileFailure");

        var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.GET_PERSON_TILE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get person service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getPersonModalFailure: function(response) {
        this.logger.warn("getPersonModalFailure");

        var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.GET_PERSON_MODAL_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 	
	
    /**
     * Handles the successful create person service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createPersonSuccess: function(response) {
        this.logger.info("createPersonSuccess");

        this.personStore.add(response);

        var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.CREATE_PERSON_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create person service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createPersonFailure: function(response) {
        this.logger.warn("createPersonFailure");

        var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.CREATE_PERSON_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update person service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updatePersonSuccess: function(response) {
        this.logger.info("updatePersonSuccess");

        this.personStore.update(response);

        var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.UPDATE_PERSON_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update person service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updatePersonFailure: function(response) {
        this.logger.warn("updatePersonFailure");

        var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.UPDATE_PERSON_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete person service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deletePersonSuccess: function(response) {
        this.logger.info("deletePersonSuccess");

        this.personStore.setSelectedRecord(null);
        var person = this.personStore.findRecord("id", response.data.id);
        this.personStore.remove(person);

        var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.DELETE_PERSON_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete person service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deletePersonFailure: function(response) {
        this.logger.warn("deletePersonFailure");

        var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.DELETE_PERSON_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
    
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the get person event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.person.Event} event Reference to the person event.
     */
    onGetPersonSlide: function(event) {
        this.logger.debug("onGetPersonSlide");

        this.getPersonSlide();
    },
	
    /**
     * Handles the get person event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.person.Event} event Reference to the person event.
     */
    onGetPersonList: function(event) {
        this.logger.debug("onGetPersonList");

        this.getPersonList();
    },    

    /**
     * Handles the get person event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.person.Event} event Reference to the person event.
     */
    onGetPersonTile: function(event) {
        this.logger.debug("onGetPersonTile");

        this.getPersonTile();
    }, 

    /**
     * Handles the get person event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.person.Event} event Reference to the person event.
     */
    onGetPersonModal: function(event) {
        this.logger.debug("onGetPersonModal");

        this.getPersonModal();
    },
	
    /**
     * Handles the create person event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.person.Event} event Reference to the person event. Contains a reference to the
     * person.
     */
    onCreatePerson: function(event) {
        this.logger.debug("onCreatePerson");

        this.createPerson(event.person);
    },

    /**
     * Handles the update person event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.person.Event} event Reference to the person event. Contains a reference to the
     * person.
     */
    onUpdatePerson: function(event) {
        this.logger.debug("onUpdatePerson");

        this.updatePerson(event.person);
    },

    /**
     * Handles the delete person event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.person.Event} event Reference to the person event. Contains a reference to the
     * person.
     */
    onDeletePerson: function(event) {
        this.logger.debug("onDeletePerson");

        this.deletePerson(event.person);
    }
    
});    