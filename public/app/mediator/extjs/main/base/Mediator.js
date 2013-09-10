/**
 * The main base mediator.
 */
Ext.define("Core.mediator.extjs.main.base.Mediator", {
    extend: "Core.mediator.abstract.Mediator",

    requires: [
		"Core.event.ui.Event",
		"Core.event.url.Event",
		"Core.event.company.Event",
		"Core.event.background.Event",
		"Core.event.authentication.Event",
        "Core.event.main.Event"		
    ],

    inject: [
        "mainStore",
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
		
        this.eventBus.addGlobalEventListener(Core.event.main.Event.GET_MAIN_SLIDE_SUCCESS, this.onGetMainSlideSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.main.Event.GET_MAIN_SLIDE_FAILURE, this.onGetMainSlideFailure, this);		
        this.eventBus.addGlobalEventListener(Core.event.main.Event.GET_MAIN_LIST_SUCCESS, this.onGetMainListSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.main.Event.GET_MAIN_LIST_FAILURE, this.onGetMainListFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.main.Event.GET_MAIN_TILE_SUCCESS, this.onGetMainTileSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.main.Event.GET_MAIN_TILE_FAILURE, this.onGetMainTileFailure, this);	
        this.eventBus.addGlobalEventListener(Core.event.main.Event.GET_MAIN_MODAL_SUCCESS, this.onGetMainModalSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.main.Event.GET_MAIN_MODAL_FAILURE, this.onGetMainModalFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.main.Event.GET_MAIN_DETAIL_SUCCESS, this.onGetMainDetailSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.main.Event.GET_MAIN_DETAIL_FAILURE, this.onGetMainDetailFailure, this);		
		
        this.eventBus.addGlobalEventListener(Core.event.main.Event.UPDATE_MAIN_SUCCESS, this.onUpdateMainSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.main.Event.DELETE_MAIN_SUCCESS, this.onDeleteMainSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.main.Event.CREATE_MAIN_SUCCESS, this.onCreateMainSuccess, this);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the painted application-level event. Set the main detail view
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
     * Handles the login success application-level event. Slide the main list view
     * onto stage.
     */
    onLoginSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get mains success application-level event.
     */
    onGetMainSlideSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get mains failure event from the login controller.
     */
    onGetMainSlideFailure: function() {
        // placeholder
    },
	
    /**
     * Handles the get mains success application-level event.
     */
    onGetMainListSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get mains failure event from the login controller.
     */
    onGetMainListFailure: function() {
        // placeholder
    },

    /**
     * Handles the get mains success application-level event.
     */
    onGetMainTileSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get mains failure event from the login controller.
     */
    onGetMainTileFailure: function() {
        // placeholder
    },

    /**
     * Handles the get mains success application-level event.
     */
    onGetMainDetailSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get mains failure event from the login controller.
     */
    onGetMainDetailFailure: function() {
        // placeholder
    },

    /**
     * Handles the get mains success application-level event.
     */
    onGetMainModalSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get mains failure event from the login controller.
     */
    onGetMainModalFailure: function() {
        // placeholder
    },
	
    /**
     * Handles the create main success application-level event. Navigates back to the main list view.
     */
    onCreateMainSuccess: function() {
        // placeholder
    },

    /**
     * Handles the update main success application-level event. Navigates back to the main list view.
     */
    onUpdateMainSuccess: function() {
        // placeholder
    },

    /**
     * Handles the delete main success application-level event. Navigates back to the main list view.
     */
    onDeleteMainSuccess: function() {
        // placeholder
    },

    /**
     * Handles the change of the selected record in the main store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.main.Store} store The store that has the selected record.
     * @param {Core.model.main.Model} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
		// placeholder
    },	
    
});