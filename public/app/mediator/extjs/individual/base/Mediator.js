/**
 * The individual base mediator.
 */
Ext.define("Core.mediator.extjs.individual.base.Mediator", {
    extend: "Core.mediator.abstract.Mediator",

    requires: [
		"Core.event.ui.Event",
		"Core.event.url.Event",
		"Core.event.company.Event",
		"Core.event.background.Event",
		"Core.event.authentication.Event",
        "Core.event.individual.Event"		
    ],

    inject: [
        "individualStore",
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
		
        this.eventBus.addGlobalEventListener(Core.event.individual.Event.GET_INDIVIDUAL_LIST_SUCCESS, this.onGetIndividualListSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.individual.Event.GET_INDIVIDUAL_LIST_FAILURE, this.onGetIndividualListFailure, this);		
        this.eventBus.addGlobalEventListener(Core.event.individual.Event.		GET_INDIVIDUAL_DETAIL_SUCCESS, this.onGetIndividualDetailSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.individual.Event.GET_INDIVIDUAL_DETAIL_FAILURE, this.onGetIndividualDetailFailure, this);		
		
        this.eventBus.addGlobalEventListener(Core.event.individual.Event.READ_INDIVIDUALS_SUCCESS, this.onReadIndividualsSuccess, this);		
        this.eventBus.addGlobalEventListener(Core.event.individual.Event.UPDATE_INDIVIDUAL_SUCCESS, this.onUpdateIndividualSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.individual.Event.DELETE_INDIVIDUAL_SUCCESS, this.onDeleteIndividualSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.individual.Event.CREATE_INDIVIDUAL_SUCCESS, this.onCreateIndividualSuccess, this);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the painted application-level event. Set the individual detail view
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
     * Handles the login success application-level event. Slide the individual list view
     * onto stage.
     */
    onLoginSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get individuals success application-level event.
     */
    onGetIndividualListSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get individuals failure application-level event.
     */
    onGetIndividualListFailure: function() {
        // placeholder
    },

	/**
     * Handles the get individuals success application-level event.
     */
    onGetIndividualDetailSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get individuals failure application-level event.
     */
    onGetIndividualDetailFailure: function() {
        // placeholder
    },
	
    /**
     * Handles the create individual success application-level event. Navigates back to the individual list view.
     */
    onCreateIndividualSuccess: function() {
        // placeholder
    },

    /**
     * Handles the update individual success application-level event. Navigates back to the individual list view.
     */
    onUpdateIndividualSuccess: function() {
        // placeholder
    },

    /**
     * Handles the delete individual success application-level event. Navigates back to the individual list view.
     */
    onDeleteIndividualSuccess: function() {
        // placeholder
    },

    /**
     * Handles the read individuals success application-level event. 
     */
    onReadIndividualsSuccess: function() {
        // placeholder
    },	
	
    /**
     * Handles the change of the selected record in the individual store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.individual.Store} store The store that has the selected record.
     * @param {Core.model.individual.Model} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
		// placeholder
    },	
    
});