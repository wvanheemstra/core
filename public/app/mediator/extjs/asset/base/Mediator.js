/**
 * The asset base mediator.
 */
Ext.define("Core.mediator.extjs.asset.base.Mediator", {
    extend: "Core.mediator.abstract.Mediator",

    requires: [
		"Core.event.ui.Event",
		"Core.event.url.Event",
		"Core.event.company.Event",
		"Core.event.background.Event",
		"Core.event.authentication.Event",
        "Core.event.asset.Event"		
    ],

    inject: [
        "assetStore",
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
        this.eventBus.addGlobalEventListener(Core.event.asset.Event.READ_ASSETS_SUCCESS, this.onReadAssetsSuccess, this);		
        this.eventBus.addGlobalEventListener(Core.event.asset.Event.UPDATE_ASSET_SUCCESS, this.onUpdateAssetSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.asset.Event.DELETE_ASSET_SUCCESS, this.onDeleteAssetSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.asset.Event.CREATE_ASSET_SUCCESS, this.onCreateAssetSuccess, this);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the painted application-level event. Set the asset detail view
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
     * Handles the login success application-level event. Slide the asset list view
     * onto stage.
     */
    onLoginSuccess: function() {
        // placeholder
    },
	
    /**
     * Handles the create asset success application-level event. Navigates back to the asset list view.
     */
    onCreateAssetSuccess: function() {
        // placeholder
    },

    /**
     * Handles the update asset success application-level event. Navigates back to the asset list view.
     */
    onUpdateAssetSuccess: function() {
        // placeholder
    },

    /**
     * Handles the delete asset success application-level event. Navigates back to the asset list view.
     */
    onDeleteAssetSuccess: function() {
        // placeholder
    },

    /**
     * Handles the read assets success application-level event. 
     */
    onReadAssetsSuccess: function() {
        // placeholder
    },	
	
    /**
     * Handles the change of the selected record in the asset store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.asset.Store} store The store that has the selected record.
     * @param {Core.model.asset.Model} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
		// placeholder
    },	
    
});