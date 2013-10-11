/**
 * The OrganisationController acts as the command with asynchronous callback methods for successful
 * and failed organisation service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.organisation.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.organisation.Event",
        "FlowMVC.mvc.service.rpc.Responder",
        "nineam.locale.store.LocalesStore",
        "nineam.locale.event.LocaleEvent"		
    ],

    inject: [
        "organisationService",
        "organisationStore",
		"membershipStore",
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
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.READ_ORGANISATIONS, this.onReadOrganisations, this);		
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.CREATE_ORGANISATION, this.onCreateOrganisation, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.UPDATE_ORGANISATION, this.onUpdateOrganisation, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.DELETE_ORGANISATION, this.onDeleteOrganisation, this);
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
                {id: "en_gb", label: "English GB", url: "locale/organisation/en_gb.json"},
                {id: "en_us", label: "English US", url: "locale/organisation/en_us.json"},
                {id: "es_us", label: "Spanish", url: "locale/organisation/es_us.json"},
                {id: "nl_nl", label: "Dutch", url: "locale/organisation/nl_nl.json"},
                {id: "de_de", label: "Deutsch", url: "locale/organisation/de_de.json"}
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
     * Performs create organisation by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.organisation.Model} organisation The organisation to create.
     */
    createOrganisation: function(organisation) {
        this.logger.debug("createOrganisation");
        this.executeServiceCall(this.organisationService, this.organisationService.createOrganisation, [organisation], this.createOrganisationSuccess, this.createOrganisationFailure, this);
    },

    /**
     * Performs update organisation by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.organisation.Model} organisation The organisation to update.
     */
    updateOrganisation: function(organisation) {
        this.logger.debug("updateOrganisation");
        this.executeServiceCall(this.organisationService, this.organisationService.updateOrganisation, [organisation], this.updateOrganisationSuccess, this.updateOrganisationFailure, this);
    },

    /**
     * Performs delete organisation by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.organisation.Model} organisation The organisation to delete.
     */
    deleteOrganisation: function(organisation) {
        this.logger.debug("deleteOrganisation");
        this.executeServiceCall(this.organisationService, this.organisationService.deleteOrganisation, [organisation], this.deleteOrganisationSuccess, this.deleteOrganisationFailure, this);
    },

    /**
     * Performs read organisations by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    readOrganisations: function() {
        this.logger.debug("readOrganisations");
        this.executeServiceCall(this.organisationService, this.organisationService.readOrganisations, null, this.readOrganisationsSuccess, this.readOrganisationsFailure, this);
    },	
	
    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////
	
    /**
     * Handles the successful create organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createOrganisationSuccess: function(response) {
        this.logger.info("createOrganisationSuccess");	
		
        this.organisationStore.add(response);

        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.CREATE_ORGANISATION_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createOrganisationFailure: function(response) {
        this.logger.warn("createOrganisationFailure");	
		
        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.CREATE_ORGANISATION_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateOrganisationSuccess: function(response) {
        this.logger.info("updateOrganisationSuccess");
		
		this.organisationStore.update(response);

        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.UPDATE_ORGANISATION_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateOrganisationFailure: function(response) {
        this.logger.warn("updateOrganisationFailure");
		
        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.UPDATE_ORGANISATION_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteOrganisationSuccess: function(response) {
        this.logger.info("deleteOrganisationSuccess");	
		
        this.organisationStore.setSelectedRecord(null);
        var organisation = this.organisationStore.findRecord("kp_OrganisationID", response.data.kp_OrganisationID);
        this.organisationStore.remove(organisation);

        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.DELETE_ORGANISATION_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteOrganisationFailure: function(response) {
        this.logger.warn("deleteOrganisationFailure");	
		
        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.DELETE_ORGANISATION_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

	/**
	 * Handles the successful read organisations service call and takes the response data packet as a parameter.
	 * Fires off the corresponding success event on the application-level event bus.
	 *
	 * @param {Object} response The response data packet from the successful service call.
	 */
	readOrganisationsSuccess: function(response) {
		this.logger.info("readOrganisationsSuccess");
		
		this.organisationStore.setData(response.organisations); // organisationStore will have already been loaded at Success, 
													// so need to check for this, and not overwrite. TO DO

		var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.READ_ORGANISATIONS_SUCCESS);
		this.eventBus.dispatchGlobalEvent(evt);
	},	
	
    /**
     * Handles the failed read organisations service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    readOrganisationsFailure: function(response) {
        this.logger.warn("readOrganisationsFailure");	

        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.READ_ORGANISATIONS_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

	/**
     * Handles the successful read memberships service call.
     * Fires off the corresponding success event on the application-level event bus.
     *
     */
    readMembershipsSuccess: function(response) {
        this.logger.info("readMembershipsSuccess");
		
        this.membershipStore.load();

        var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.READ_MEMBERSHIPS_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed read memberships service call.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     */
    readMembershipsFailure: function(response) {
        this.logger.warn("readMembershipsFailure");
		
        var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.READ_MEMBERSHIPS_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////
	
    /**
     * Handles the create organisation event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.organisation.Event} event Reference to the organisation event. Contains a reference to the
     * organisation.
     */
    onCreateOrganisation: function(event) {
        this.logger.debug("onCreateOrganisation");

        this.createOrganisation(event.organisation);
    },

    /**
     * Handles the update organisation event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.organisation.Event} event Reference to the organisation event. Contains a reference to the
     * organisation.
     */
    onUpdateOrganisation: function(event) {
        this.logger.debug("onUpdateOrganisation");

        this.updateOrganisation(event.organisation);
    },

    /**
     * Handles the delete organisation event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.organisation.Event} event Reference to the organisation event. Contains a reference to the
     * organisation.
     */
    onDeleteOrganisation: function(event) {
        this.logger.debug("onDeleteOrganisation");

        this.deleteOrganisation(event.organisation);
    },

    /**
     * Handles the read organisations event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.organisation.Event} event Reference to the organisation event.
     */
    onReadOrganisations: function(event) {
        this.logger.debug("onReadOrganisations");

        this.readOrganisations();
    }
    
});    