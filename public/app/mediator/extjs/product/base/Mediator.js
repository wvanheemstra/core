/**
 * The product base mediator.
 */
Ext.define("Core.mediator.extjs.product.base.Mediator", {
    extend: "Core.mediator.abstract.Mediator",

    requires: [
		"Core.event.ui.Event",
		"Core.event.url.Event",
		"Core.event.company.Event",
		"Core.event.background.Event",
		"Core.event.authentication.Event",
        "Core.event.product.Event"		
    ],

    inject: [
        "productStore",
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
		
        this.eventBus.addGlobalEventListener(Core.event.product.Event.GET_PRODUCT_SLIDE_SUCCESS, this.onGetProductSlideSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.product.Event.GET_PRODUCT_SLIDE_FAILURE, this.onGetProductSlideFailure, this);		
        this.eventBus.addGlobalEventListener(Core.event.product.Event.GET_PRODUCT_LIST_SUCCESS, this.onGetProductListSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.product.Event.GET_PRODUCT_LIST_FAILURE, this.onGetProductListFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.product.Event.GET_PRODUCT_TILE_SUCCESS, this.onGetProductTileSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.product.Event.GET_PRODUCT_TILE_FAILURE, this.onGetProductTileFailure, this);	
        this.eventBus.addGlobalEventListener(Core.event.product.Event.GET_PRODUCT_MODAL_SUCCESS, this.onGetProductModalSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.product.Event.GET_PRODUCT_MODAL_FAILURE, this.onGetProductModalFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.product.Event.GET_PRODUCT_DETAIL_SUCCESS, this.onGetProductDetailSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.product.Event.GET_PRODUCT_DETAIL_FAILURE, this.onGetProductDetailFailure, this);		
		
        this.eventBus.addGlobalEventListener(Core.event.product.Event.UPDATE_PRODUCT_SUCCESS, this.onUpdateProductSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.product.Event.DELETE_PRODUCT_SUCCESS, this.onDeleteProductSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.product.Event.CREATE_PRODUCT_SUCCESS, this.onCreateProductSuccess, this);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the painted application-level event. Set the product detail view
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
     * Handles the login success application-level event. Slide the product list view
     * onto stage.
     */
    onLoginSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get products success application-level event.
     */
    onGetProductSlideSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get products failure event from the login controller.
     */
    onGetProductSlideFailure: function() {
        // placeholder
    },
	
    /**
     * Handles the get products success application-level event.
     */
    onGetProductListSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get products failure event from the login controller.
     */
    onGetProductListFailure: function() {
        // placeholder
    },

    /**
     * Handles the get products success application-level event.
     */
    onGetProductTileSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get products failure event from the login controller.
     */
    onGetProductTileFailure: function() {
        // placeholder
    },

    /**
     * Handles the get products success application-level event.
     */
    onGetProductDetailSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get products failure event from the login controller.
     */
    onGetProductDetailFailure: function() {
        // placeholder
    },

    /**
     * Handles the get products success application-level event.
     */
    onGetProductModalSuccess: function() {
        // placeholder
    },

    /**
     * Handles the get products failure event from the login controller.
     */
    onGetProductModalFailure: function() {
        // placeholder
    },
	
    /**
     * Handles the create product success application-level event. Navigates back to the product list view.
     */
    onCreateProductSuccess: function() {
        // placeholder
    },

    /**
     * Handles the update product success application-level event. Navigates back to the product list view.
     */
    onUpdateProductSuccess: function() {
        // placeholder
    },

    /**
     * Handles the delete product success application-level event. Navigates back to the product list view.
     */
    onDeleteProductSuccess: function() {
        // placeholder
    },

    /**
     * Handles the change of the selected record in the product store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.product.Store} store The store that has the selected record.
     * @param {Core.model.product.Model} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
		// placeholder
    },	
    
});