/**
 * The person list mediator essentially fulfils the passive view pattern for the person list view.
 */
Ext.define("Core.mediator.extjs.person.list.Mediator", {
    extend: "Core.mediator.extjs.person.base.Mediator",

    // set up view event to mediator mapping
    control: {
    	toolbar: {
    		painted: "onPainted"
    	},	
        logoutButton: {
            click: "onLogoutButtonClick"
        },
        newPersonButton: {
            click: "onNewPersonButtonClick"
        },
        list: {
            itemclick: "onListSelect"
        }
    },

    /**
     * Dispatches the application event to get the list of persons.
     */
    getPersonListData: function() {
        this.logger.debug("getPersonListData");
        this.getView().setLoading(nineam.locale.LocaleManager.getProperty("personList.loading"));
        var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.GET_PERSON_LIST);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the show person detail event from the person list view. Grab the data model
     * from the selected item in the list and set it as the data provider for the detail view.
     * Finally, slide the detail view onto stage.
     *
     * @param record    The record is the data model for the item in the list currently selected.
     */
    showPersonDetail: function(record) {
        var logMsg = (record !== null)
            ? ": id = " + record.get("id") + ", person = " + record.get("name")
            : "";
        this.logger.debug("showPersonDetail = " + logMsg);
		Core.config.person.Config.setPreviousView('personlist');
        this.personStore.setSelectedRecord(record);
		
		console.log("selected record:");
		console.log(this.personStore.getSelectedRecord());
		
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
     * Handles the painted application-level event. Set the person list view
     * as the current view.
     */    
    onPainted: function() {
        this.logger.debug("onPainted");	
    },
	
    /**
     * Handles the login success application-level event. Slide the person list view
     * onto stage.
     */
    onLoginSuccess: function() {
		if(Core.config.person.Config.getNextView()==='personlist') {
			this.logger.debug("onLoginSuccess");		
        	this.navigate(Core.event.authentication.Event.LOGIN_SUCCESS);
        	this.getPersonListData();
		}
    },

    /**
     * Handles the set ui success application-level event. Update the components for the ui.
     */
    onSetUISuccess: function() {
        this.logger.debug("onSetUISuccess");
        this.setUI(Core.config.person.Config.getUi());
    },	
	
    /**
     * Handles the get persons success application-level event.
     */
    onGetPersonListSuccess: function() {
		if(Core.config.person.Config.getNextView()==='personlist') {
			this.logger.debug("onGetPersonListSuccess");
			this.getView().setLoading(false);
			this.getList().getStore().loadRecords(this.personStore.getRange());
		}
    },

    /**
     * Handles the get persons failure event from the login controller.
     */
    onGetPersonListFailure: function() {
		if(Core.config.person.Config.getNextView()==='personlist') {
			this.logger.debug("onGetPersonListFailure");
			this.getView().setLoading(false);
		}
    },

    /**
     * Handles the delete of a person by refreshing the grid
     * Touch takes care of this for you, not so ext
     */
    onDeletePersonSuccess: function() {
		if(Core.config.person.Config.getNextView()==='personlist') {
			this.logger.debug("onDeletePersonSuccess");
			this.getList().getStore().loadRecords(this.personStore.getRange());
		}
    },
	
	/**
     * Handles the update person success application-level event.
     */
    onUpdatePersonSuccess: function() {
		if(Core.config.person.Config.getNextView()==='personlist') {
			this.logger.debug("onUpdatePersonSuccess");
			this.getView().setLoading(false);
			this.getList().getStore().loadRecords(this.personStore.getRange());
		}
    },

    /**
     * Handles the add of a person by refreshing the grid
     * Touch takes care of this for you, not so ext
     */
    onCreatePersonSuccess: function() {
		if(Core.config.person.Config.getNextView()==='personlist') {
			this.logger.debug("onCreatePersonSuccess");
			this.getList().getStore().loadRecords(this.personStore.getRange());
		}
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the tap of the logout button. Dispatches the logout application-level event.
     */
    onLogoutButtonClick: function() {
    	if(Core.config.person.Config.getCurrentView()==='personlist') {	
			this.logger.debug("onLogoutButtonClick");
			var evt = Ext.create("Core.event.authentication.Event", Core.event.authentication.Event.LOGOUT);
			this.eventBus.dispatchGlobalEvent(evt);
    	}	
    },

    /**
     * Handles the tap of the new person button. Shows the person detail view.
     */
    onNewPersonButtonClick: function() {
    	if(Core.config.person.Config.getCurrentView()==='personlist') { 	
			this.logger.debug("onNewPersonButtonClick");
			this.showPersonDetail(null);
    	}		
    },

    /**
     * Handles the list select of a person list item. Shows the person detail view passing in a reference to
     * the selected item in the list.
     *
     * @param {Ext.dataview.List} list  Reference to the visual list component.
     * @param {Object/Ext.data.Model} record Reference to the selected item in the list.
     * @param {Number} index The index of the selected item.
     * @param {Object} options ???
     */
    onListSelect: function(list, record, index, options) {
    	if(Core.config.person.Config.getCurrentView()==='personlist') {	
			this.logger.debug("onListSelect");
			this.showPersonDetail(record);
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
//                if (regexps.length > 1 && matched.indexOf(false) !== -1) {
//                    return false;
//                } else {
//                    //else true true (show in the store)
//                    return matched[0];
//                }
//            });
//        }
//    }
});

