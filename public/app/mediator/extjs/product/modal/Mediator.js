/**
 * The product modal mediator essentially fulfils the passive view pattern for the product list view.
 */
Ext.define("Core.mediator.extjs.product.modal.Mediator", {
    extend: "Core.mediator.extjs.product.base.Mediator",

    // set up view event to mediator mapping
    control: {
	
	    closeButton: {
            tap: "onCloseButtonTap"
        }	
	
//    	toolbar: {
//    		painted: "onPainted"
//    	},	
//        logoutButton: {
//            click: "onLogoutButtonClick"
//        },
//        newProductButton: {
//            click: "onNewProductButtonClick"
//        },
//        list: {
//            itemclick: "onListSelect"
//        }
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
     * Handles the set UI event. 
	 *
     * @param ui    The ui to be set.
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
     * Handles the painted application-level event. Set the product list view
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
     * Handles the get products success application-level event.
     */
    onGetProductModalSuccess: function() {
		if(Core.config.product.Config.getNextView()==='productmodal') {
			this.logger.debug("onGetProductModalSuccess");
			this.getView().setLoading(false);
			//this.getList().getStore().loadRecords(this.productStore.getRange());
		}
    },

    /**
     * Handles the get products failure event from the login controller.
     */
    onGetProductModalFailure: function() {
		if(Core.config.product.Config.getNextView()==='productmodal') {
			this.logger.debug("onGetProductModalFailure");
			this.getView().setLoading(false);
		}
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the close button tap event. Navigates back to the previous product view.
     */
    onCloseButtonTap: function() {
        this.logger.debug("onCloseButtonTap");
        this.backToPrevious(Core.config.product.Config.getPreviousView());
    }

});

