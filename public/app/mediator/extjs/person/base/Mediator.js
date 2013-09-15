/**
 * The person base mediator.
 */
Ext.define("Core.mediator.extjs.person.base.Mediator", {
    extend: "Core.mediator.abstract.Mediator",

    requires: [
		"Core.event.ui.Event",
		"Core.event.url.Event",
		"Core.event.company.Event",
		"Core.event.background.Event",
		"Core.event.authentication.Event",
        "Core.event.person.Event"		
    ],

    inject: [
        "personStore",
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
		
        this.eventBus.addGlobalEventListener(Core.event.person.Event.GET_PERSON_SLIDE_SUCCESS, this.onGetPersonSlideSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.GET_PERSON_SLIDE_FAILURE, this.onGetPersonSlideFailure, this);		
        this.eventBus.addGlobalEventListener(Core.event.person.Event.GET_PERSON_LIST_SUCCESS, this.onGetPersonListSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.GET_PERSON_LIST_FAILURE, this.onGetPersonListFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.GET_PERSON_TILE_SUCCESS, this.onGetPersonTileSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.GET_PERSON_TILE_FAILURE, this.onGetPersonTileFailure, this);	
        this.eventBus.addGlobalEventListener(Core.event.person.Event.GET_PERSON_MODAL_SUCCESS, this.onGetPersonModalSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.GET_PERSON_MODAL_FAILURE, this.onGetPersonModalFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.GET_PERSON_DETAIL_SUCCESS, this.onGetPersonDetailSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.GET_PERSON_DETAIL_FAILURE, this.onGetPersonDetailFailure, this);		
		
        this.eventBus.addGlobalEventListener(Core.event.person.Event.UPDATE_PERSON_SUCCESS, this.onUpdatePersonSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.DELETE_PERSON_SUCCESS, this.onDeletePersonSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.CREATE_PERSON_SUCCESS, this.onCreatePersonSuccess, this);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the painted application-level event. Set the person detail view
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
     * Handles the login success application-level event. Slide the person list view
     * onto stage.
     */
    onLoginSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get persons success application-level event.
     */
    onGetPersonSlideSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get persons failure event from the login controller.
     */
    onGetPersonSlideFailure: function() {
        // placeholder
    },
	
    /**
     * Handles the get persons success application-level event.
     */
    onGetPersonListSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get persons failure event from the login controller.
     */
    onGetPersonListFailure: function() {
        // placeholder
    },

    /**
     * Handles the get persons success application-level event.
     */
    onGetPersonTileSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get persons failure event from the login controller.
     */
    onGetPersonTileFailure: function() {
        // placeholder
    },

    /**
     * Handles the get persons success application-level event.
     */
    onGetPersonDetailSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get persons failure event from the login controller.
     */
    onGetPersonDetailFailure: function() {
        // placeholder
    },

    /**
     * Handles the get persons success application-level event.
     */
    onGetPersonModalSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get persons failure event from the login controller.
     */
    onGetPersonModalFailure: function() {
        // placeholder
    },
	
    /**
     * Handles the create person success application-level event. Navigates back to the person list view.
     */
    onCreatePersonSuccess: function() {
        // placeholder
    },

    /**
     * Handles the update person success application-level event. Navigates back to the person list view.
     */
    onUpdatePersonSuccess: function() {
        // placeholder
    },

    /**
     * Handles the delete person success application-level event. Navigates back to the person list view.
     */
    onDeletePersonSuccess: function() {
        // placeholder
    },

    /**
     * Handles the change of the selected record in the person store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.person.Store} store The store that has the selected record.
     * @param {Core.model.person.Model} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
		// placeholder
    },	
    
});