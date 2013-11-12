/**
 * The asset modal mediator essentially fulfils the passive view pattern for the asset list view.
 */
Ext.define("Core.mediator.extjs.asset.modal.Mediator", {
    extend: "Core.mediator.extjs.asset.base.Mediator",

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
//        newAssetButton: {
//            click: "onNewAssetButtonClick"
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
            case 'assetslide':
            	this.backToAssetSlide();
                break;		
            case 'assetlist':
            	this.backToAssetList();
                break;
            case 'assettile':
            	this.backToAssetTile();
                break;               
        }
    },
	
    /**
     * Simple navigation method used to navigate back to the asset slide view.
     */
    backToAssetSlide: function() {
        this.logger.debug("backToAssetSlide");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_PERSON_SLIDE);
    },
	
    /**
     * Simple navigation method used to navigate back to the asset list view.
     */
    backToAssetList: function() {
        this.logger.debug("backToAssetList");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_PERSON_LIST);
    },

    /**
     * Simple navigation method used to navigate back to the asset tile view.
     */
    backToAssetTile: function() {
        this.logger.debug("backToAssetTile");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_PERSON_TILE);
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
     * Handles the painted application-level event. Set the asset list view
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
        this.setUI(Core.config.asset.Config.getUi());
    },	
	
    /**
     * Handles the get assets success application-level event.
     */
    onGetAssetModalSuccess: function() {
		if(Core.config.asset.Config.getNextView()==='assetmodal') {
			this.logger.debug("onGetAssetModalSuccess");
			this.getView().setLoading(false);
			//this.getList().getStore().loadRecords(this.assetStore.getRange());
		}
    },

    /**
     * Handles the get assets failure event from the login controller.
     */
    onGetAssetModalFailure: function() {
		if(Core.config.asset.Config.getNextView()==='assetmodal') {
			this.logger.debug("onGetAssetModalFailure");
			this.getView().setLoading(false);
		}
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the close button tap event. Navigates back to the previous asset view.
     */
    onCloseButtonTap: function() {
        this.logger.debug("onCloseButtonTap");
        this.backToPrevious(Core.config.asset.Config.getPreviousView());
    }

});

