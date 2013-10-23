/**
 * The booking list mediator essentially fulfils the passive view pattern for the booking list view.
 */
Ext.define("Core.mediator.touch.booking.list.Mediator", {
    extend: "Core.mediator.touch.booking.base.Mediator",

    // set up view event to mediator mapping
    control: {
    	titlebar: {
    		painted: "onPainted"
    	},
        logoutButton: {
            tap: "onLogoutButtonTap"
        },
        newBookingButton: {
            tap: "onNewBookingButtonTap"
        },
        searchInput :{
            keyup:          "onSearchKeyUp",
            clearicontap:   "onSearchClearIconTap"
        },
        list: {
            disclose: "onListDisclose"
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
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.GET_BOOKING_LIST_SUCCESS, this.onGetBookingListSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.GET_BOOKING_LIST_FAILURE, this.onGetBookingListFailure, this);
    },

    /**
     * Sets the focus on search input.
     */
	setFocusOnSearchInput: function() {
		var field = this.getView().down("#searchInput");	
		setTimeout(function() { // Allow time for the view to complete 	
			field.focus();
		}, 10);
	},	
	
    /**
     * Dispatches the application event to get the list of bookings.
     */
    getBookingListData: function() {
        this.logger.debug("getBookingListData");
        this.getView().setMasked({
            xtype: "loadmask",
            message: nineam.locale.LocaleManager.getProperty("bookingList.loading")
        });
        var evt = Ext.create("Core.event.booking.Event", Core.event.booking.Event.GET_BOOKING_LIST);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the show booking detail event from the booking list view. Grab the data model
     * from the selected item in the list and set it as the data provider for the detail view.
     * Finally, slide the detail view onto stage.
     *
     * @param record    The record is the data model for the item in the list currently selected.
     */
    showBookingDetail: function(record) {
        var logMsg = (record !== null)
            ? ": id = " + record.get("id") + ", booking = " + record.get("name")
            : "new booking";
        this.logger.debug("showBookingDetail = " + logMsg);
		Core.config.booking.Config.setPreviousView('bookinglist');
        this.navigate(Core.event.navigation.Event.ACTION_SHOW_BOOKING_DETAIL);
        this.bookingStore.setSelectedRecord(record);
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
     * Handles the painted application-level event. 
     */    
    onPainted: function() {
	    this.logger.debug("onPainted");	
    },

    /**
     * Handles the login success application-level event. Slide the booking list view
     * onto stage.
     */
    onLoginSuccess: function() {
        this.logger.debug("onLoginSuccess");        
		if(Core.config.booking.Config.getNextView()==='bookinglist') {
        	this.navigate(Core.event.authentication.Event.LOGIN_SUCCESS);
        	this.getBookingListData();
		}
    },

    /**
     * Handles the set ui success application-level event. Update the components for the ui.
     */
    onSetUISuccess: function() {
        this.logger.debug("onSetUISuccess");
        this.setUI(Core.config.booking.Config.getUi());
    },

    /**
     * Handles the get bookings application-level event.
     */
    onGetBookingListSuccess: function() {
        this.logger.debug("onGetBookingListSuccess");
        this.getView().setMasked(false);
        this.getList().setStore(this.bookingStore);
    },

    /**
     * Handles the get bookings failure event from the login controller.
     */
    onGetBookingListFailure: function() {
        this.logger.debug("onGetBookingListFailure");
        this.getView().setMasked(false);
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the tap of the logout button. Dispatches the logout application-level event.
     */
    onLogoutButtonTap: function() {
    	if(Core.config.booking.Config.getCurrentView()==='bookinglist') {      	
	        this.logger.debug("onLogoutButtonTap");
	        var evt = Ext.create("Core.event.authentication.Event", Core.event.authentication.Event.LOGOUT);
	        this.eventBus.dispatchGlobalEvent(evt);
    	}	        
    },

    /**
     * Handles the tap of the new booking button. Shows the booking detail view.
     */
    onNewBookingButtonTap: function() {
    	if(Core.config.booking.Config.getCurrentView()==='bookinglist') {     	
	        this.logger.debug("onNewBookingButtonTap");
	        this.showBookingDetail();
    	}
    },

    /**
     * Handles the list disclose of an booking list item. Shows the booking detail view passing in a reference to
     * the selected item in the list.
     *
     * @param {Ext.dataview.List} list  Reference to the visual list component.
     * @param {Object/Ext.data.Model} record Reference to the selected item in the list.
     * @param {Object} target The item in the list that's selected.
     * @param {Number} index The index of the selected item.
     * @param {Object/Event} evt the event that triggered the handler.
     * @param {Object} options ???
     */
    onListDisclose: function(list, record, target, index, evt, options) {
    	if(Core.config.booking.Config.getCurrentView()==='bookinglist') {      	
	        this.logger.debug("onListDisclose");
	        this.bookingStore.setSelectedRecord(record);
	        this.showBookingDetail(record);
    	}
    },

    /**
     * Handles the clear icon tap event on the search field. Clears all filter on the list's store.
     */
    onSearchClearIconTap: function() {
    	if(Core.config.booking.Config.getCurrentView()==='bookinglist') {    	
	        this.logger.debug("onSearchClearIconTap");
	        var store = this.getList().getStore();
	        store.clearFilter();
    	}        
    },

    /**
     * Handles the key up event on the search field. Filters the list component's store by the value in the
     * search field and determining if it matches the name element of each record in the list.
     *
     * @param {Ext.field.Search} field Reference to the search field.
     *
     * TODO: BMR: 02/28/13: clean this up. pulled directly from another example with minor changes: http://www.phs4j.com/2012/05/add-a-searchfield-to-a-sencha-touch-2-list-mvc/
     */
    onSearchKeyUp: function(field) {
    	if(Core.config.booking.Config.getCurrentView()==='bookinglist') {
	        this.logger.debug("onSearchKeyUp");
	        //get the store and the value of the field
	        var value = field.getValue();
	        var store = this.getList().getStore();
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
	                //if found, create a new regular expression which is case insensitive
	                regexps.push(new RegExp(searches[i], "i"));
	            }
	            //now filter the store by passing a method
	            //the passed method will be called for each record in the store
	            store.filter(function(record) {
	                var matched = [];
	                //loop through each of the regular expressions
	                for (i = 0; i < regexps.length; i++) {
	                    var search = regexps[i],
	                        didMatch = record.get("name").match(search);
	                    //if it matched the name, push it into the matches array
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