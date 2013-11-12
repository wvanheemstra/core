/**
 * The asset tile mediator essentially fulfils the passive view pattern for the asset tile view.
 */
Ext.define("Core.mediator.extjs.asset.tile.Mediator", {
    extend: "Core.mediator.extjs.asset.base.Mediator",

    // set up view event to mediator mapping
    control: {
	    toolbar: {
    		painted: "onPainted"
    	},
        logoutButton: {
            click: "onLogoutButtonClick"
        },
        newAssetButton: {
            click: "onNewAssetButtonClick"
        },
        tile: {
        	itemclick: "onTileSelect"
        }
    },

    /**
     * Dispatches the application event to get the tile of assets.
     */
    getAssetTileData: function() {
        this.logger.debug("getAssetTileData");
        this.getView().setLoading(nineam.locale.LocaleManager.getProperty("assetTile.loading"));
        var evt = Ext.create("Core.event.asset.Event", Core.event.asset.Event.GET_PERSON_TILE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the show asset detail event from the asset tile view. Grab the data model
     * from the selected item in the list and set it as the data provider for the detail view.
     * Finally, slide the detail view onto stage.
     *
     * @param record    The record is the data model for the item in the list currently selected.
     */
    showAssetDetail: function(record) {
        var logMsg = (record !== null)
            ? ": id = " + record.get("id") + ", asset = " + record.get("name")
            : "";
        this.logger.debug("showAssetDetail = " + logMsg);
		Core.config.asset.Config.setPreviousView('assettile');
        this.assetStore.setSelectedRecord(record);
        this.navigate(Core.event.navigation.Event.ACTION_SHOW_PERSON_DETAIL);
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
     * Handles the painted application-level event. 
     * 
     */    
    onPainted: function() {
		this.logger.debug("onPainted");
    },	
	
    /**
     * Handles the login success application-level event. Slide the asset tile view
     * onto stage.
     */
    onLoginSuccess: function() {
		if(Core.config.asset.Config.getNextView()==='assettile') {
		    this.logger.debug("onLoginSuccess");
        	this.navigate(Core.event.authentication.Event.LOGIN_SUCCESS);
        	this.getAssetTileData();
		}
    },

    /**
     * Handles the set ui success application-level event. Update the components for the ui.
     */
    onSetUISuccess: function() {
        this.logger.debug("onSetUISuccess");
        this.setUI(Core.config.asset.Config.getUi());
    },	
	
    /**
     * Handles the get assets application-level event.
     */
    onGetAssetTileSuccess: function() {
		if(Core.config.asset.Config.getCurrentView()==='assettile') {
			this.logger.debug("onGetAssetTileSuccess");
			this.getView().setLoading(false);
			this.getTile().getStore().loadRecords(this.assetStore.getRange());
		}
    },

    /**
     * Handles the get assets failure event from the login controller.
     */
    onGetAssetTileFailure: function() {
	    if(Core.config.asset.Config.getCurrentView()==='assettile') {
			this.logger.debug("onGetAssetTileFailure");
			this.getView().setLoading(false);
		}
    },

    /**
     * Handles the update assets application-level event.
     */
    onUpdateAssetSuccess: function() {
		if(Core.config.asset.Config.getCurrentView()==='assettile') {
			this.logger.debug("onUpdateAssetSuccess");
			this.getView().setLoading(false);
			this.getTile().getStore().loadRecords(this.assetStore.getRange());
		}
    },	
	
    /**
     * Handles the delete of a asset by refreshing the grid
     * Touch takes care of this for you, not so ext
     */
    onDeleteAssetSuccess: function() {
		if(Core.config.asset.Config.getCurrentView()==='assettile') {
			this.logger.debug("onDeleteAssetSuccess");
			this.getTile().getStore().loadRecords(this.assetStore.getRange());
		}
    },

    /**
     * Handles the add of a asset by refreshing the grid
     * Touch takes care of this for you, not so ext
     */
    onCreateAssetSuccess: function() {
    	if(Core.config.asset.Config.getCurrentView()==='assettile') {	
			this.logger.debug("onCreateAssetSuccess");
			this.getTile().getStore().loadRecords(this.assetStore.getRange());
		}
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the tap of the logout button. Dispatches the logout application-level event.
     */
    onLogoutButtonClick: function() {
    	if(Core.config.asset.Config.getCurrentView()==='assettile') {	
			this.logger.debug("onLogoutButtonClick");
			var evt = Ext.create("Core.event.authentication.Event", Core.event.authentication.Event.LOGOUT);
			this.eventBus.dispatchGlobalEvent(evt);
    	}			
    },

    /**
     * Handles the tap of the new asset button. Shows the asset detail view.
     */
    onNewAssetButtonClick: function() {
    	if(Core.config.asset.Config.getCurrentView()==='assettile') {	
			this.logger.debug("onNewAssetButtonClick");
			this.showAssetDetail(null);
    	}		
    },

    /**
     * Handles the tile select of a asset tile item. Shows the asset detail view passing in a reference to
     * the selected item in the tile.
     *
     * @param {Ext.dataview.List} list  Reference to the visual list component.
     * @param {Object/Ext.data.Model} record Reference to the selected item in the list.
     * @param {Number} index The index of the selected item.
     * @param {Object} options ???
     */
    onTileSelect: function(tile, record, index, options) {
    	if(Core.config.asset.Config.getCurrentView()==='assettile') { 	
			this.logger.debug("onTileSelect");
			this.showAssetDetail(record);
    	}			
    }

    /**
     * Handles the clear icon tap event on the search field. Clears all filter on the list's store.
     */
//    onSearchClearIconTap: function() {
//    	if(Core.config.asset.Config.getCurrentView()==='assetTileView') {
//	        this.logger.debug("onSearchClearIconTap");
//
//          var store = this.getView().getStore();
//          store.clearFilter();
//    	}	
//    },

    /**
     * Handles the key up event on the search field. Filters the list component's store by the value in the
     * search field and determining if it matches the first or last name elements of each record in the list.
     *
     * @param {Ext.field.Search} field Reference to the search field.
     *
     * TODO: BMR: 02/28/13: clean this up. pulled directly from another example with minor changes: http://www.phs4j.com/2012/05/add-a-searchfield-to-a-sencha-touch-2-list-mvc/
     */
//    onSearchKeyUp: function(field) {
//    	if(Core.config.asset.Config.getCurrentView()==='assetTileView') {
//        this.logger.debug("onSearchKeyUp");
//
//        //get the store and the value of the field
//        var value = field.getValue();
//        var store = this.getView().getStore();
//
//        //first clear any current filters on the store
//        store.clearFilter();
//
//        //check if a value is set first, as if it isn't we don't have to do anything
//        if (value) {
//            //the user could have entered spaces, so we must split them so we can loop through them all
//            var searches = value.split(' '),
//                regexps = [],
//                i;
//
//
//            //loop them all
//            for (i = 0; i < searches.length; i++) {
//                //if it is nothing, continue
//                if (!searches[i]) continue;
//
//
//                //if found, create a new regular expression which is case insenstive
//                regexps.push(new RegExp(searches[i], "i"));
//            }
//
//
//            //now filter the store by passing a method
//            //the passed method will be called for each record in the store
//            store.filter(function(record) {
//                var matched = [];
//
//
//                //loop through each of the regular expressions
//                for (i = 0; i < regexps.length; i++) {
//                    var search = regexps[i],
//                        didMatch = record.get("name").match(search);
//
//
//                    //if it matched the name, push it into the matches array
//                    matched.push(didMatch);
//                }
//
//
//                //if nothing was found, return false (dont so in the store)
//                if (regexps.length > 1 && matched.indexOf(false) !== -1) {
//                    return false;
//                } else {
//                    //else true true (show in the store)
//                    return matched[0];
//                }
//            });
//        }
//    	}//eof if
//    },
});

