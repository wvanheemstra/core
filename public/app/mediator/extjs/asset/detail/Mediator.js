/**
 * The asset detail mediator essentially fulfils the passive view pattern for the asset detail view.
 */
Ext.define("Core.mediator.extjs.asset.detail.Mediator", {
    extend: "Core.mediator.extjs.asset.base.Mediator",

    // set up view event to mediator mapping
    control: {
    	toolbar: {
    		painted: "onPainted"
    	},	
        backButton: {
            click: "onBackButtonClick"
        },
        saveAssetButton: {
            click: "onSaveAssetButtonClick"
        },
        deleteButton: {
            click: "onDeleteButtonClick"
        }
    },

    // set up injected object event listening
    observe: {
        assetStore: {
            selectedRecordChange: "onSelectedRecordChange"
        }
    },

    /**
     * Functional method to save an asset. Determines if the asset is new and it needs to be
     * created, or existing and needs to be updated and fires off the corresponding application-level event.
     *
     * @param asset    The asset is the data model for the item in the list currently selected.
     */
    saveAsset: function(asset) {
        this.logger.debug("saveAsset");
        var evt;
        var msg;
        if(asset !== null) {
            var id = asset.id;
            if( (id !== null) && (id !== "") ) {
                evt = Ext.create("Core.event.asset.Event", Core.event.asset.Event.UPDATE_ASSET);
                msg = nineam.locale.LocaleManager.getProperty("assetDetail.updatingAsset");
            } else {
                evt = Ext.create("Core.event.asset.Event", Core.event.asset.Event.CREATE_ASSET);
                msg = nineam.locale.LocaleManager.getProperty("assetDetail.creatingAsset");
            }
            this.getView().setLoading(msg);
            evt.asset = asset;
            this.eventBus.dispatchGlobalEvent(evt);
        }
    },

    /**
     * Functional method to delete a asset. Fires off the corresponding application-level event.
     *
     * @param asset    The asset is the data model for the item in the list currently selected.
     */
    deleteAsset: function(asset) {
        this.logger.debug("deleteAsset");
        if(asset !== null) {
            this.getView().setLoading(nineam.locale.LocaleManager.getProperty("assetDetail.deletingAsset"));
            var evt = Ext.create("Core.event.asset.Event", Core.event.asset.Event.DELETE_ASSET);
            evt.asset = asset;
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
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_ASSET_SLIDE);
    },	
	
    /**
     * Simple navigation method used to navigate back to the asset list view.
     */
    backToAssetList: function() {
        this.logger.debug("backToAssetList");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_ASSET_LIST);
    },

    /**
     * Simple navigation method used to navigate back to the asset tile view.
     */
    backToAssetTile: function() {
        this.logger.debug("backToAssetTile");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_ASSET_TILE);
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
     * Handles the painted application-level event. Set the asset detail view
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
     * Handles the create asset success application-level event. Navigates back to the asset list view.
     */
    onCreateAssetSuccess: function() {
		if(Core.config.asset.Config.getCurrentView()==='assetdetail') {
			this.logger.debug("onCreateAssetSuccess");
			this.getView().setLoading(false);
			this.backToPrevious(Core.config.asset.Config.getPreviousView());
		}
    },

    /**
     * Handles the update asset success application-level event. Navigates back to the asset list view.
     */
    onUpdateAssetSuccess: function() {
		if(Core.config.asset.Config.getCurrentView()==='assetdetail') {	
			this.logger.debug("onUpdateAssetFailure");
			this.getView().setLoading(false);
			this.backToPrevious(Core.config.asset.Config.getPreviousView());
		}
    },

    /**
     * Handles the delete asset success application-level event. Navigates back to the asset list view.
     */
    onDeleteAssetSuccess: function() {
		if(Core.config.asset.Config.getCurrentView()==='assetdetail') {
			this.logger.debug("onDeleteAssetSuccess");
			this.reset();
			this.backToPrevious(Core.config.asset.Config.getPreviousView());
		}
    },	
	
    /**
     * Handles the change of the selected record in the asset store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.asset.Store} store The store that has the selected record.
     * @param {Core.model.asset.Model} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
		//Do not put within if() statement 
		var logMsg = (record !== null)
			? ": kp_AssetID = " + record.get("kp_AssetID") + ", AssetName = " + record.get("AssetName")
			: "new asset";
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
     * Handles the back button tap event. Navigates back to the asset list view.
     */
    onBackButtonClick: function() {
        this.logger.debug("onBackButtonClick");
        this.backToPrevious(Core.config.asset.Config.getPreviousView());
    },

    /**
     * Handles the save button tap event. Grabs the view's current asset data and passes the record
     * to the functional save method.
     */
    onSaveAssetButtonClick: function() {
        this.logger.debug("onSaveAssetButtonClick");
        var asset = this.getView().getRecord();
        var newAsset = this.getView().getValues();
        // if this is a new asset record, there's no id available
        if(asset !== null) {
            newAsset.id = asset.data.id;
        }
        this.saveAsset(newAsset);
    },

    /**
     * Handles the delete button tap event. Grabs the view's current asset data and passes the record
     * to the functional delete method.
     */
    onDeleteButtonClick: function() {
        this.logger.debug("onDeleteButtonClick");
        var asset = this.getView().getRecord();
	    if(asset) {
		    this.deleteAsset(asset.data);
	    }
    }
});