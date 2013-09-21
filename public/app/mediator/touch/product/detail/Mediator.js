/**
 * The product detail mediator essentially fulfils the passive view pattern for the product detail view.
 */
Ext.define("Core.mediator.touch.product.detail.Mediator", {
    extend: "Core.mediator.touch.product.base.Mediator",

    requires: [
        "Core.event.navigation.Event"
    ],

    // set up view event to mediator mapping
    control: {
    	titlebar: {
    		painted: "onPainted"
    	},    	
        backButton: {
            tap: "onBackButtonTap"
        },
        saveProductButton: {
            tap: "onSaveProductButtonTap"
        },
        deleteButton: {
            tap: "onDeleteButtonTap"
        }
    },

    // set up injected object event listening
    observe: {
        productStore: {
            selectedRecordChange: "onSelectedRecordChange"
        }
    },

    /**
     * Sets up global event bus handlers. Called by the parent superclass during the initialization phase.
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
        this.eventBus.addGlobalEventListener(Core.event.ui.Event.SET_UI_SUCCESS, this.onSetUISuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.product.Event.CREATE_PRODUCT_SUCCESS, this.onCreateProductSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.product.Event.UPDATE_PRODUCT_SUCCESS, this.onUpdateProductSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.product.Event.DELETE_PRODUCT_SUCCESS, this.onDeleteProductSuccess, this);
    },

    /**
     * Functional method to save a product. Determines if the product is new and it needs to be
     * created, or existing and needs to be updated and fires off the corresponding application-level event.
     *
     * @param product    The product is the data model for the item in the list currently selected.
     */
    saveProduct: function(product) {
        this.logger.debug("saveProduct");
        var evt;
        var msg;
        if(product != null) {
            var id = product.id;
            if( (id != null) && (id != "") ) {
                evt = Ext.create("Core.event.product.Event", Core.event.product.Event.UPDATE_PRODUCT);
                msg = nineam.locale.LocaleManager.getProperty("productDetail.updatingProduct");
            } else {
                evt = Ext.create("Core.event.product.Event", Core.event.product.Event.CREATE_PRODUCT);
                msg = nineam.locale.LocaleManager.getProperty("productDetail.creatingProduct");
            }
            this.getView().setMasked({
                xtype: "loadmask",
                message: msg
            });
            evt.product = product;
            this.eventBus.dispatchGlobalEvent(evt);
        }
    },

    /**
     * Functional method to delete a product. Fires off the corresponding application-level event.
     *
     * @param product    The product is the data model for the item in the list currently selected.
     */
    deleteProduct: function(product) {
        this.logger.debug("deleteProduct");
        if(product != null) {
            this.getView().setMasked({
                xtype: "loadmask",
                message: nineam.locale.LocaleManager.getProperty("productDetail.deletingProduct")
            });
            var evt = Ext.create("Core.event.product.Event", Core.event.product.Event.DELETE_PRODUCT);
            evt.product = product;
            this.eventBus.dispatchGlobalEvent(evt);
        }
    },

    /**
     * Simple navigation method used to navigate back, depending on the previous view.
	 *
	 * @param view	The view to go back to.
     */
    backToPrevious: function(view) {
    	this.logger.debug("backToPrevious view: " + view);
        switch(view) {
            case 'productslide':
            	this.backToProductSlide();
                break;		
            case 'productlist':
            	this.backToProductList();
                break;
            case 'producttile':
            	this.backToProductTile();
                break;               
        }
    },
	
    /**
     * Simple navigation method used to navigate back to the product slide view.
     */
    backToProductSlide: function() {
        this.logger.debug("backToProductSlide");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_PRODUCT_SLIDE);
    },
	
    /**
     * Simple navigation method used to navigate back to the product list view.
     */
    backToProductList: function() {
        this.logger.debug("backToProductList");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_PRODUCT_LIST);
    },

    /**
     * Simple navigation method used to navigate back to the product tile view.
     */
    backToProductTile: function() {
        this.logger.debug("backToProductTile");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_PRODUCT_TILE);
    },

    /**
     * Rests the view to it's default state -- no record set on the view's fields.
     */
    reset: function() {
        this.logger.debug("reset");
        this.getView().setMasked(false);
        this.getView().setRecord(null);
        this.getView().reset();
    },

    /**
     * Handles the set UI event. 
     *
     * @param ui    The ui to set.	 
     */
    setUI: function(ui) {
		this.logger.debug("setUI: ui = " + ui);
    	for ( var i=0; i<this.getView().items.length; i++)
        {
            this.getView().items.getAt(i).setUi(ui);
        }
    }, 

    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the painted application-level event. Set the product detail view
     * as the current view.
     */    
    onPainted: function() {
		this.logger.debug("onPainted");
    },

    /**
     * Handles the set ui success application-level event. Update the components for the ui.
     */
    onSetUISuccess: function() {
        this.logger.debug("onSetUISuccess");
        this.setUI(Core.config.product.Config.getUi());
    },

    /**
     * Handles the create product success application-level event. Navigates back to the product list view.
     */
    onCreateProductSuccess: function() {
        this.logger.debug("onCreateProductSuccess");
        this.getView().setMasked(false);
        this.backToPrevious(Core.config.product.Config.getPreviousView());
    },

    /**
     * Handles the update product success application-level event. Navigates back to the product list view.
     */
    onUpdateProductSuccess: function() {
        this.logger.debug("onUpdateProductSuccess");
        this.getView().setMasked(false);
        this.backToPrevious(Core.config.product.Config.getPreviousView());
    },

    /**
     * Handles the delete product success application-level event. Navigates back to the product list view.
     */
    onDeleteProductSuccess: function() {
        this.logger.debug("onDeleteProductSuccess");
        this.reset();
        this.backToPrevious(Core.config.product.Config.getPreviousView());
    },

    /**
     * Handles the change of the selected record in the product store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.product.Store} store The store that has the selected record.
     * @param {Core.model.product.Model} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
        var logMsg = (record != null)
            ? ": id = " + record.get("id") + ", product = " + record.get("name")
            : "new product";
        this.logger.debug("onSelectedRecordChange = " + logMsg);
        if (record) {
            this.getView().setRecord(record);
        } else {
            this.reset();
        }
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the back button tap event. Navigates back to the previous product view.
     */
    onBackButtonTap: function() {
        this.logger.debug("onBackButtonTap");
        this.backToPrevious(Core.config.product.Config.getPreviousView());
    },

    /**
     * Handles the save button tap event. Grabs the view's current product data and passes the record
     * to the functional save method.
     */
    onSaveProductButtonTap: function() {
        this.logger.debug("onSaveProductButtonTap");
        var product = this.getView().getRecord();
        var newProduct = this.getView().getValues();
        // if this is a new product record, there's no id available
        if(product != null) {
            newProduct.id = product.data.id;
        }
        this.saveProduct(newProduct);
    },

    /**
     * Handles the delete button tap event. Grabs the view's current product data and passes the record
     * to the functional delete method.
     */
    onDeleteButtonTap: function() {
        this.logger.debug("onDeleteButtonTap");
        var product = this.getView().getRecord();
	    if(product) {
		    this.deleteProduct(product.data);
	    }
    }
});