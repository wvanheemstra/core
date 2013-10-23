/**
 * The product detail mediator essentially fulfils the passive view pattern for the product detail view.
 */
Ext.define("Core.mediator.extjs.product.detail.Mediator", {
    extend: "Core.mediator.extjs.product.base.Mediator",

    // set up view event to mediator mapping
    control: {
    	toolbar: {
    		painted: "onPainted"
    	},	
        backButton: {
            click: "onBackButtonClick"
        },
        saveProductButton: {
            click: "onSaveProductButtonClick"
        },
        deleteButton: {
            click: "onDeleteButtonClick"
        }
    },

    // set up injected object event listening
    observe: {
        productStore: {
            selectedRecordChange: "onSelectedRecordChange"
        }
    },

    /**
     * Functional method to save an product. Determines if the product is new and it needs to be
     * created, or existing and needs to be updated and fires off the corresponding application-level event.
     *
     * @param product    The product is the data model for the item in the list currently selected.
     */
    saveProduct: function(product) {
        this.logger.debug("saveProduct");
        var evt;
        var msg;
        if(product !== null) {
            var id = product.id;
            if( (id !== null) && (id !== "") ) {
                evt = Ext.create("Core.event.product.Event", Core.event.product.Event.UPDATE_PRODUCT);
                msg = nineam.locale.LocaleManager.getProperty("productDetail.updatingProduct");
            } else {
                evt = Ext.create("Core.event.product.Event", Core.event.product.Event.CREATE_PRODUCT);
                msg = nineam.locale.LocaleManager.getProperty("productDetail.creatingProduct");
            }
            this.getView().setLoading(msg);
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
        if(product !== null) {
            this.getView().setLoading(nineam.locale.LocaleManager.getProperty("productDetail.deletingProduct"));
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
        this.getView().setLoading(false);
        // TODO: there doesn't appear to be an easy way to reset the currently loaded record in a form so we're hacking this. Might need to be updated for future vrs of ExtJS
        // resets the visual side so we're tapping into some u
        this.getView().getForm()._record = null;
//        this.getView().getForm().setRecord(null); // doesn't work as expected
//        this.getView().getForm().loadRecord(null); // doesn't work as expected
        this.getView().getForm().reset();
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
            this.getView().items.getAt(i).setUI(ui);
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
		if(Core.config.product.Config.getCurrentView()==='productdetail') {
			this.logger.debug("onCreateProductSuccess");
			this.getView().setLoading(false);
			this.backToPrevious(Core.config.product.Config.getPreviousView());
		}
    },

    /**
     * Handles the update product success application-level event. Navigates back to the product list view.
     */
    onUpdateProductSuccess: function() {
		if(Core.config.product.Config.getCurrentView()==='productdetail') {	
			this.logger.debug("onUpdateProductFailure");
			this.getView().setLoading(false);
			this.backToPrevious(Core.config.product.Config.getPreviousView());
		}
    },

    /**
     * Handles the delete product success application-level event. Navigates back to the product list view.
     */
    onDeleteProductSuccess: function() {
		if(Core.config.product.Config.getCurrentView()==='productdetail') {
			this.logger.debug("onDeleteProductSuccess");
			this.reset();
			this.backToPrevious(Core.config.product.Config.getPreviousView());
		}
    },

    /**
     * Handles the change of the selected record in the product store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.product.Store} store The store that has the selected record.
     * @param {Core.model.product.Model} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
		//Do not put within if() statement 
		var logMsg = (record !== null)
			? ": id = " + record.get("id") + ", product = " + record.get("name")
			: "new product";
		this.logger.debug("onSelectedRecordChange = " + logMsg);
		if (record) {
			this.getView().loadRecord(record);
		} else {
			this.reset();
		}
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the back button tap event. Navigates back to the product list view.
     */
    onBackButtonClick: function() {
        this.logger.debug("onBackButtonClick");
        this.backToPrevious(Core.config.product.Config.getPreviousView());
    },

    /**
     * Handles the save button tap event. Grabs the view's current product data and passes the record
     * to the functional save method.
     */
    onSaveProductButtonClick: function() {
        this.logger.debug("onSaveProductButtonClick");
        var product = this.getView().getRecord();
        var newProduct = this.getView().getValues();
        // if this is a new product record, there's no id available
        if(product !== null) {
            newProduct.id = product.data.id;
        }
        this.saveProduct(newProduct);
    },

    /**
     * Handles the delete button tap event. Grabs the view's current product data and passes the record
     * to the functional delete method.
     */
    onDeleteButtonClick: function() {
        this.logger.debug("onDeleteButtonClick");
        var product = this.getView().getRecord();
	    if(product) {
		    this.deleteProduct(product.data);
	    }
    }
});