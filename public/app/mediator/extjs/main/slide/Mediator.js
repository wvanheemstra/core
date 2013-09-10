/**
 * The main slide mediator essentially fulfils the passive view pattern for the main slide view.
 */
Ext.define("Core.mediator.extjs.main.slide.Mediator", {
    extend: "Core.mediator.extjs.main.base.Mediator",
	
	refs: {
		slideNav: "mainSlideView"
	},

    // set up view event to mediator mapping
    control: {
    	toolbar: {
    		painted: "onPainted"
    	},	
        logoutButton: {
            click: "onLogoutButtonClick"
        },
        newMainButton: {
            click: "onNewMainButtonClick"
        },
        slide: {
            itemclick: "onSlideSelect"
        }
    },

    /**
     * Dispatches the application event to get the slide of mains.
     */
    getMainSlideData: function() {
        this.logger.debug("getMainSlideData");
        this.getView().setLoading(nineam.locale.LocaleManager.getProperty("mainSlide.loading"));
        var evt = Ext.create("Core.event.main.Event", Core.event.main.Event.GET_MAIN_SLIDE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the show main detail event from the main list view. Grab the data model
     * from the selected item in the list and set it as the data provider for the detail view.
     * Finally, slide the detail view onto stage.
     *
     * @param record    The record is the data model for the item in the list currently selected.
     */
    showMainDetail: function(record) {
        var logMsg = (record != null)
            ? ": id = " + record.get("id") + ", main = " + record.get("name")
            : "";
        this.logger.debug("showMainDetail = " + logMsg);
		Core.config.global.Config.setPreviousView('mainslide');
        this.mainStore.setSelectedRecord(record);
		
		console.log("selected record:");
		console.log(this.mainStore.getSelectedRecord());
		
        this.navigate(Core.event.navigation.Event.ACTION_SHOW_MAIN_DETAIL);
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
     * Handles the painted application-level event. Set the main list view
     * as the current view.
     */    
    onPainted: function() {
        this.logger.debug("onPainted");	
    },
	
    /**
     * Handles the login success application-level event. Slide the main list view
     * onto stage.
     */
    onLoginSuccess: function() {
		if(Core.config.global.Config.getNextView()==='mainslide') {
			this.logger.debug("onLoginSuccess");		
        	this.navigate(Core.event.authentication.Event.LOGIN_SUCCESS);
        	this.getMainSlideData();
		}
    },

    /**
     * Handles the set ui success application-level event. Update the components for the ui.
     */
    onSetUISuccess: function() {
        this.logger.debug("onSetUISuccess");
        this.setUI(Core.config.global.Config.getUi());
    },	
	
    /**
     * Handles the get mains success application-level event.
     */
    onGetMainSlideSuccess: function() {
		if(Core.config.global.Config.getNextView()==='mainslide') {
			this.logger.debug("onGetMainSlideSuccess");
			this.getView().setLoading(false);
			this.getSlide().getStore().loadRecords(this.mainStore.getRange());
		}
    },

    /**
     * Handles the get mains failure event from the login controller.
     */
    onGetMainSlideFailure: function() {
		if(Core.config.global.Config.getNextView()==='mainslide') {
			this.logger.debug("onGetMainSlideFailure");
			this.getView().setLoading(false);
		}
    },

    /**
     * Handles the delete of a main by refreshing the grid
     * Touch takes care of this for you, not so ext
     */
    onDeleteMainSuccess: function() {
		if(Core.config.global.Config.getNextView()==='mainslide') {
			this.logger.debug("onDeleteMainSuccess");
			this.getSlide().getStore().loadRecords(this.mainStore.getRange());
		}
    },
	
	/**
     * Handles the update main success application-level event.
     */
    onUpdateMainSuccess: function() {
		if(Core.config.global.Config.getNextView()==='mainslide') {
			this.logger.debug("onUpdateMainSuccess");
			this.getView().setLoading(false);
			this.getSlide().getStore().loadRecords(this.mainStore.getRange());
		}
    },

    /**
     * Handles the add of a main by refreshing the grid
     * Touch takes care of this for you, not so ext
     */
    onCreateMainSuccess: function() {
		if(Core.config.global.Config.getNextView()==='mainslide') {
			this.logger.debug("onCreateMainSuccess");
			this.getSlide().getStore().loadRecords(this.mainStore.getRange());
		}
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the tap of the logout button. Dispatches the logout application-level event.
     */
    onLogoutButtonClick: function() {
    	if(Core.config.global.Config.getCurrentView()==='mainslide') {	
			this.logger.debug("onLogoutButtonClick");
			var evt = Ext.create("Core.event.authentication.Event", Core.event.authentication.Event.LOGOUT);
			this.eventBus.dispatchGlobalEvent(evt);
    	}	
    },

    /**
     * Handles the tap of the new main button. Shows the main detail view.
     */
    onNewMainButtonClick: function() {
    	if(Core.config.global.Config.getCurrentView()==='mainslide') { 	
			this.logger.debug("onNewMainButtonClick");
			this.showMainDetail(null);
    	}		
    },

    /**
     * Handles the list select of a main list item. Shows the main detail view passing in a reference to
     * the selected item in the list.
     *
     * @param {Ext.dataview.List} list  Reference to the visual list component.
     * @param {Object/Ext.data.Model} record Reference to the selected item in the list.
     * @param {Number} index The index of the selected item.
     * @param {Object} options ???
     */
    onSlideSelect: function(slide, record, index, options) {
    	if(Core.config.global.Config.getCurrentView()==='mainslide') {	
			this.logger.debug("onSlideSelect");
			this.showMainDetail(record);
    	}	
    }

    /**
     * Handles the clear icon tap event on the search field. Clears all filter on the list's store.
     */
//    onSearchClearIconTap: function() {
//        this.logger.debug("onSearchClearIconTap");
//
//        var store = this.getView().getStore();
//        store.clearFilter();
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
//                        didMatch = record.get("firstName").match(search) ||
//                            record.get("lastName").match(search);
//
//
//                    //if it matched the first or last name, push it into the matches array
//                    matched.push(didMatch);
//                }
//
//
//                //if nothing was found, return false (dont so in the store)
//                if (regexps.length > 1 && matched.indexOf(false) != -1) {
//                    return false;
//                } else {
//                    //else true true (show in the store)
//                    return matched[0];
//                }
//            });
//        }
//    }
});

