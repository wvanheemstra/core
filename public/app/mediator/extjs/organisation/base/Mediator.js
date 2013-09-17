/**
 * The organisation base mediator.
 */
Ext.define("Core.mediator.extjs.organisation.base.Mediator", {
    extend: "Core.mediator.abstract.Mediator",

    requires: [
		"Core.event.ui.Event",
		"Core.event.url.Event",
		"Core.event.company.Event",
		"Core.event.background.Event",
		"Core.event.authentication.Event",
        "Core.event.organisation.Event"		
    ],

    inject: [
        "organisationStore",
        "logger"
    ],
	
	/**
     * Sets up global event bus handlers. Called by the parent superclass during the initialization phase.
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
        this.eventBus.addGlobalEventListener(Core.event.ui.Event.SET_UI_SUCCESS, this.onSetUISuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.url.Event.SET_URL_SUCCESS, this.onSetURLSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.company.Event.SET_COMPANY_SUCCESS, this.onSetCompanySuccess, this);	
        this.eventBus.addGlobalEventListener(Core.event.background.Event.SET_BACKGROUND_SUCCESS, this.onSetBackgroundSuccess, this);			
		
        this.eventBus.addGlobalEventListener(Core.event.authentication.Event.LOGIN_SUCCESS, this.onLoginSuccess, this);
		
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.GET_ORGANISATION_SLIDE_SUCCESS, this.onGetOrganisationSlideSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.GET_ORGANISATION_SLIDE_FAILURE, this.onGetOrganisationSlideFailure, this);		
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.GET_ORGANISATION_LIST_SUCCESS, this.onGetOrganisationListSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.GET_ORGANISATION_LIST_FAILURE, this.onGetOrganisationListFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.GET_ORGANISATION_TILE_SUCCESS, this.onGetOrganisationTileSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.GET_ORGANISATION_TILE_FAILURE, this.onGetOrganisationTileFailure, this);	
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.GET_ORGANISATION_MODAL_SUCCESS, this.onGetOrganisationModalSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.GET_ORGANISATION_MODAL_FAILURE, this.onGetOrganisationModalFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.GET_ORGANISATION_DETAIL_SUCCESS, this.onGetOrganisationDetailSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.GET_ORGANISATION_DETAIL_FAILURE, this.onGetOrganisationDetailFailure, this);		
		
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.UPDATE_ORGANISATION_SUCCESS, this.onUpdateOrganisationSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.DELETE_ORGANISATION_SUCCESS, this.onDeleteOrganisationSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.CREATE_ORGANISATION_SUCCESS, this.onCreateOrganisationSuccess, this);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the painted application-level event. Set the organisation detail view
     * as the current view.
     */    
    onPainted: function() {
		// placeholder
    },	

    /**
     * Handles the set ui success application-level event. Update the components for the ui.
     */
    onSetUISuccess: function() {
        // placeholder
    },

    /**
     * Handles the set url success application-level event. Update the components for the url.
     */
    onSetURLSuccess: function() {
        // placeholder
    },	

    /**
     * Handles the set background success application-level event. Update the components for the background.
     */
    onSetBackgroundSuccess: function() {
        // placeholder
    },

    /**
     * Handles the set company success application-level event. Update the components for the company.
     */
    onSetCompanySuccess: function() {
        // placeholder
    },
	
    /**
     * Handles the login success application-level event. Slide the organisation list view
     * onto stage.
     */
    onLoginSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get organisations success application-level event.
     */
    onGetOrganisationSlideSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get organisations failure event from the login controller.
     */
    onGetOrganisationSlideFailure: function() {
        // placeholder
    },
	
    /**
     * Handles the get organisations success application-level event.
     */
    onGetOrganisationListSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get organisations failure event from the login controller.
     */
    onGetOrganisationListFailure: function() {
        // placeholder
    },

    /**
     * Handles the get organisations success application-level event.
     */
    onGetOrganisationTileSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get organisations failure event from the login controller.
     */
    onGetOrganisationTileFailure: function() {
        // placeholder
    },

    /**
     * Handles the get organisations success application-level event.
     */
    onGetOrganisationDetailSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get organisations failure event from the login controller.
     */
    onGetOrganisationDetailFailure: function() {
        // placeholder
    },

    /**
     * Handles the get organisations success application-level event.
     */
    onGetOrganisationModalSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get organisations failure event from the login controller.
     */
    onGetOrganisationModalFailure: function() {
        // placeholder
    },
	
    /**
     * Handles the create organisation success application-level event. Navigates back to the organisation list view.
     */
    onCreateOrganisationSuccess: function() {
        // placeholder
    },

    /**
     * Handles the update organisation success application-level event. Navigates back to the organisation list view.
     */
    onUpdateOrganisationSuccess: function() {
        // placeholder
    },

    /**
     * Handles the delete organisation success application-level event. Navigates back to the organisation list view.
     */
    onDeleteOrganisationSuccess: function() {
        // placeholder
    },

    /**
     * Handles the change of the selected record in the organisation store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.organisation.Store} store The store that has the selected record.
     * @param {Core.model.organisation.Model} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
		// placeholder
    },	
    
});