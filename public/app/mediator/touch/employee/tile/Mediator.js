/**
 * The employee list mediator essentially fulfils the passive view pattern for the employee list view.
 */
Ext.define("Core.mediator.touch.employee.tile.Mediator", {
    extend: "Core.mediator.touch.employee.base.Mediator",

    // set up view event to mediator mapping
    control: {
    	titlebar: {
    		painted: "onPainted"
    	},
        logoutButton: {
            tap: "onLogoutButtonTap"
        },
        newEmployeeButton: {
            tap: "onNewEmployeeButtonTap"
        },
// CURRENTLY WE DO NOT HAVE A SEARCH IN THE TILE VIEW
        searchInput :{
            keyup:          "onSearchKeyUp",
            clearicontap:   "onSearchClearIconTap"
        },
        tile: {
            disclose: "onTileDisclose"
        }
    },

    /**
     * Sets up global event bus handlers. Called by the parent superclass during the initialization phase.
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
		this.eventBus.addGlobalEventListener(Core.event.ui.Event.SET_UI_SUCCESS, this.onSetUISuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.authentication.Event.LOGIN_SUCCESS, this.onLoginSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.employee.Event.GET_EMPLOYEE_TILE_SUCCESS, this.onGetEmployeeTileSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.employee.Event.GET_EMPLOYEE_TILE_FAILURE, this.onGetEmployeeTileFailure, this);
    },

    /**
     * Dispatches the application event to get the tile of employees.
     */
    getEmployeeTileData: function() {
        this.logger.debug("getEmployeeTileData");
        this.getView().setMasked({
            xtype: "loadmask",
            message: nineam.locale.LocaleManager.getProperty("employeeTile.loading")
        });
        var evt = Ext.create("Core.event.employee.Event", Core.event.employee.Event.GET_EMPLOYEE_TILE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the show employee detail event from the employee list view. Grab the data model
     * from the selected item in the list and set it as the data provider for the detail view.
     * Finally, slide the detail view onto stage.
     *
     * @param record    The record is the data model for the item in the list currently selected.
     */
    showEmployeeDetail: function(record) {
        var logMsg = (record !== null)
            ? ": id = " + record.get("id") + ", employee = " + record.get("firstName")
            : "new employee";
        this.logger.debug("showEmployeeDetail = " + logMsg);
		Core.config.global.Config.setPreviousView('employeetile');
        this.navigate(Core.event.navigation.Event.ACTION_SHOW_EMPLOYEE_DETAIL);
        this.employeeStore.setSelectedRecord(record);
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
            this.items.getAt(i).setUi(ui);
        }
    },    

    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the painted application-level event. Set the employee tile view
     * as the current view.
     */    
    onPainted: function() {
		this.logger.debug("onPainted");
    },

    /**
     * Handles the login success application-level event. Slide the employee tile view
     * onto stage.
     */
    onLoginSuccess: function() {
        this.logger.debug("onLoginSuccess");               
		if(Core.config.global.Config.getNextView()==='employeetile') {
        	this.navigate(Core.event.authentication.Event.LOGIN_SUCCESS);
        	this.getEmployeeTileData();
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
     * Handles the get employees application-level event.
     */
    onGetEmployeeTileSuccess: function() {
        this.logger.debug("onGetEmployeeTileSuccess");
        this.getView().setMasked(false);
        this.getTile().setStore(this.employeeStore);
    },

    /**
     * Handles the get employees failure event from the login controller.
     */
    onGetEmployeeTileFailure: function() {
        this.logger.debug("onGetEmployeeTileFailure");
        this.getView().setMasked(false);
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the tap of the logout button. Dispatches the logout application-level event.
     */
    onLogoutButtonTap: function() {
    	if(Core.config.global.Config.getCurrentView()==='employeetile') {    	
	        this.logger.debug("onLogoutButtonTap");
	        var evt = Ext.create("Core.event.authentication.Event", Core.event.authentication.Event.LOGOUT);
	        this.eventBus.dispatchGlobalEvent(evt);
    	}	        
    },

    /**
     * Handles the tap of the new employee button. Shows the employee detail view.
     */
    onNewEmployeeButtonTap: function() {
    	if(Core.config.global.Config.getCurrentView()==='employeetile') {    	
	        this.logger.debug("onNewEmployeeButtonTap");
	        this.showEmployeeDetail();
    	}
    },

    /**
     * Handles the tile disclose of an employee tile item. Shows the employee detail view passing in a reference to
     * the selected item in the tile.
     *
     * @param {Ext.dataview.List} list  Reference to the visual list component.
     * @param {Object/Ext.data.Model} record Reference to the selected item in the list.
     * @param {Object} target The item in the list that's selected.
     * @param {Number} index The index of the selected item.
     * @param {Object/Event} evt the event that triggered the handler.
     * @param {Object} options ???
     */
    onTileDisclose: function(tile, record, target, index, evt, options) {
    	if(Core.config.global.Config.getCurrentView()==='employeetile') {      	
	        this.logger.debug("onTileDisclose");
	        this.employeeStore.setSelectedRecord(record);
	        this.showEmployeeDetail(record);
    	}
    },

    /**
     * Handles the clear icon tap event on the search field. Clears all filter on the tile's store.
     */
    onSearchClearIconTap: function() {
    	if(Core.config.global.Config.getCurrentView()==='employeetile') {    	
	        this.logger.debug("onSearchClearIconTap");
	        var store = this.getTile().getStore();
	        store.clearFilter();
    	}  
    },

    /**
     * Handles the key up event on the search field. Filters the tile component's store by the value in the
     * search field and determining if it matches the first or last name elements of each record in the tile.
     *
     * @param {Ext.field.Search} field Reference to the search field.
     *
     * TODO: BMR: 02/28/13: clean this up. pulled directly from another example with minor changes: http://www.phs4j.com/2012/05/add-a-searchfield-to-a-sencha-touch-2-list-mvc/
     */
    onSearchKeyUp: function(field) {
    	if(Core.config.global.Config.getCurrentView()==='employeetile') {
	        this.logger.debug("onSearchKeyUp");
	        //get the store and the value of the field
	        var value = field.getValue();
	        var store = this.getTile().getStore();
	        //first clear any current filters on the store
	        store.clearFilter();
	        //check if a value is set first, as if it isn't we don't have to do anything
	        if (value) {
	            //the user could have entered spaces, so we must split them so we can loop through them all
	            var searches = value.split(" "),
	                regexps = [],
	                i;
	            //loop them all
	            for (i = 0; i < searches.length; i++) {
	                //if it is nothing, continue
	                if (!searches[i]) continue;
	                //if found, create a new regular expression which is case insenstive
	                regexps.push(new RegExp(searches[i], "i"));
	            }
	            //now filter the store by passing a method
	            //the passed method will be called for each record in the store
	            store.filter(function(record) {
	                var matched = [];
	                //loop through each of the regular expressions
	                for (i = 0; i < regexps.length; i++) {
	                    var search = regexps[i],
	                        didMatch = record.get("firstName").match(search) ||
	                            record.get("lastName").match(search);
	
	                    //if it matched the first or last name, push it into the matches array
	                    matched.push(didMatch);
	                }
	                //if nothing was found, return false (dont so in the store)
	                if (regexps.length > 1 && matched.indexOf(false) !== -1) {
	                    return false;
	                } else {
	                    //else true true (show in the store)
	                    return matched[0];
	                }
	            });
	        }
    	}//eof if
    }
});