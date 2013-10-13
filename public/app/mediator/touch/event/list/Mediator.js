/**
 * The event list mediator essentially fulfils the passive view pattern for the event list view.
 */
Ext.define("Core.mediator.touch.event.list.Mediator", {
    extend: "Core.mediator.touch.event.base.Mediator",

    // set up view event to mediator mapping
    control: {
    	titlebar: {
			resize: "onResizeToolbar"
    	},
        logoutButton: {
            tap: "onLogoutButtonTap"
        },
        newEventButton: {
            tap: "onNewEventButtonTap"
        },
        searchInput :{
            keyup:          "onSearchKeyUp",
            clearicontap:   "onSearchClearIconTap"
        },
        list: {
            disclose: "onListDisclose"
        }
    },
	
	statics: {
        READ_EVENTS_SUCCESS:    	false,
		READ_MEMBERSHIPS_SUCCESS:	false,
		READ_GROUPS_SUCCESS:		false		
	},	
	
    /**
     * Sets up global event bus handlers. Called by the parent superclass during the initialization phase.
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
        this.eventBus.addGlobalEventListener(Core.event.ui.Event.SET_UI_SUCCESS, this.onSetUISuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.authentication.Event.LOGIN_SUCCESS, this.onLoginSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.event.Event.READ_EVENTS_SUCCESS, this.onReadEventsSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.event.Event.READ_EVENTS_FAILURE, this.onReadEventsFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.event.Event.UPDATE_EVENT_SUCCESS, this.onUpdateEventSuccess, this);				
        this.eventBus.addGlobalEventListener(Core.event.membership.Event.READ_MEMBERSHIPS_SUCCESS, this.onReadMembershipsSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.membership.Event.READ_MEMBERSHIPS_FAILURE, this.onReadMembershipsFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.group.Event.READ_GROUPS_SUCCESS, this.onReadGroupsSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.group.Event.READ_GROUPS_FAILURE, this.onReadGroupsFailure, this);				
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
     * Refreshes the list of events.
     */	
	refreshEventList: function() {
        this.logger.debug("refreshEventList");	
		this.getList().refresh();
	},

    /**
     * Dispatches the application event to get the list of events.
     */
    getEventListData: function() {
        this.logger.debug("getEventListData");
        this.getView().setMasked({
            xtype: "loadmask",
            message: nineam.locale.LocaleManager.getProperty("eventList.loading")
        });

        var evt = Ext.create("Core.event.event.Event", Core.event.event.Event.READ_EVENTS);
        this.eventBus.dispatchGlobalEvent(evt);	

		var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.READ_MEMBERSHIPS);
        this.eventBus.dispatchGlobalEvent(evt);

		var evt = Ext.create("Core.event.group.Event", Core.event.group.Event.READ_GROUPS);
        this.eventBus.dispatchGlobalEvent(evt);			
		
    },

    /**
     * Creates and returns a new Event record.
     *
     */
    createNewEvent: function() {
    	this.logger.debug("createNewEvent");
		var event = null;		
		event = Ext.create("Core.model.event.Model", {
			//kp_EventID = // Is set automatically
		});
		var eventData = event.getData();
		this.eventStore.insert( event, false );
		return event;
	},
	
    /**
     * Handles the show event detail event from the event list view. Grab the data model
     * from the selected item in the list and set it as the data provider for the detail view.
     * Finally, slide the detail view onto stage.
     *
     * @param record    The record is the data model for the item in the list currently selected.
     */
    showEventDetail: function(record) {
    	this.logger.debug("showEventDetail");	
        var logMsg = (record != null)
            ? ": kp_EventID = " + record.get("kp_EventID") 
			+ ", event = " + record.get("EventName") : "new event";
        this.logger.debug("showEventDetail = " + logMsg);
		Core.config.event.Config.setPreviousView('eventlist');
        this.navigate(Core.event.navigation.Event.ACTION_SHOW_EVENT_DETAIL);
        this.eventStore.setSelectedRecord(record);
    },
    
    /**
     * Shows the list once all reads have been successful. 
     *
     */	 
	showEventList: function(){
    	this.logger.debug("showEventList");	
		if(this.self.READ_EVENTS_SUCCESS 
			&& this.self.READ_MEMBERSHIPS_SUCCESS
			&& this.self.READ_GROUPS_SUCCESS){
			this.getView().setMasked(false);
			this.getList().setStore(this.eventStore);
			this.setFocusOnSearchInput();
		}
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
     * Handles the resize toolbar application-level event. 
     */    
    onResizeToolbar: function(toolbar) {
	    this.logger.debug("onResizeToolbar");
		var id = toolbar.id;
		var component = Ext.getCmp(id);
		var maxWidthToolbar = Math.max(component.element.dom["clientWidth"], component.element.dom["scrollWidth"], component.element.dom["offsetWidth"]);
		//console.log("maxWidthToolbar = " + maxWidthToolbar);
		// subtract the total width of any elements (except spacer or title) within the toolbar from max width of the toolbar
		var allItemsWidth = 0;
		var clientWidth = 0;
		var scrollWidth = 0; 
		var offsetWidth = 0;
		component.items.each(function(item){ 
			// Omit spacers
			var isNotSpacer;
			var itemId = item.id;
			var indexSpacer = itemId.indexOf("spacer");
			//console.log("indexSpacer = " + indexSpacer);
			if (indexSpacer < 0) {
				isNotSpacer = true;
			} else {
				isNotSpacer = false;
			}
			//console.log("isNotSpacer = " + isNotSpacer);
			// Omit titles
			var isNotTitle;
			var itemId = item.id;
			var indexTitle = itemId.indexOf("title");
			//console.log("indexTitle = " + indexTitle);
			if (indexTitle < 0) {
				isNotTitle = true;
			} else {
				isNotTitle = false;
			}
			//console.log("isNotTitle = " + isNotTitle);
			// Measure width of all others
			if(item.element.dom["clientWidth"] > 0 && isNotSpacer && isNotTitle ) { 
				clientWidth = item.element.dom["clientWidth"];
			} else {
				clientWidth = 0;
			}
			//console.log(item.id + ": clientWidth = " + clientWidth);				
			if(item.element.dom["scrollWidth"] > 0 && isNotSpacer && isNotTitle ) { 
				scrollWidth = item.element.dom["scrollWidth"];
			} else {
				scrollWidth = 0;
			}
			//console.log(item.id + ": scrollWidth = " + scrollWidth);			
			if(item.element.dom["offsetWidth"] > 0 && isNotSpacer && isNotTitle ) { 
				offsetWidth = item.element.dom["offsetWidth"];
			} else {
				offsetWidth = 0;
			}
			//console.log(item.id + ": offsetWidth = " + offsetWidth);
			var maxWidthItem = Math.max(clientWidth, scrollWidth, offsetWidth);
			allItemsWidth = allItemsWidth + maxWidthItem;
		});
		//console.log("allItemsWidth = " + allItemsWidth);
		// adjust the width of the spacer
		var spacer = component.down("#spacer");
		if(spacer) {
			var spacerWidth = maxWidthToolbar - allItemsWidth;
			spacer.setWidth(spacerWidth);
			//console.log("spacerWidth = " + spacerWidth);
		}
    },

    /**
     * Handles the login success application-level event. Slide the event list view
     * onto stage.
     */
    onLoginSuccess: function() {
        this.logger.debug("onLoginSuccess");        
		if(Core.config.event.Config.getNextView()==='eventlist') {
        	this.navigate(Core.event.authentication.Event.LOGIN_SUCCESS);
        	this.getEventListData();
		}
    },

    /**
     * Handles the set ui success application-level event. Update the components for the ui.
     */
    onSetUISuccess: function() {
        this.logger.debug("onSetUISuccess");
        this.setUI(Core.config.event.Config.getUi());
    },

    /**
     * Handles the read events success event.
     */
    onReadEventsSuccess: function() {
        this.logger.debug("onReadEventsSuccess");
		this.self.READ_EVENTS_SUCCESS = true;
        this.showEventList();
    },

    /**
     * Handles the read events failure event.
     */
    onReadEventsFailure: function() {
        this.logger.debug("onReadEventsFailure");
		this.self.READ_EVENTS_SUCCESS = false;
        this.getView().setMasked(false);
    },	

    /**
     * Handles the update event success event.
     */
    onUpdateEventSuccess: function() {
        this.logger.debug("onUpdateEventSuccess");
        this.refreshEventList();
    },			

    /**
     * Handles the read memberships success event.
     */
    onReadMembershipsSuccess: function() {
        this.logger.debug("onReadMembershipsSuccess");
		this.self.READ_MEMBERSHIPS_SUCCESS = true;
        this.showEventList();
    },

    /**
     * Handles the read memberships failure event.
     */
    onReadMembershipsFailure: function() {
        this.logger.debug("onReadMembershipsFailure");
		this.self.READ_MEMBERSHIPS_SUCCESS = false;
        this.getView().setMasked(false);
    },

    /**
     * Handles the read groups success event.
     */
    onReadGroupsSuccess: function() {
        this.logger.debug("onReadGroupsSuccess");
		this.self.READ_GROUPS_SUCCESS = true;
        this.showEventList();
    },

    /**
     * Handles the read groups failure event.
     */
    onReadGroupsFailure: function() {
        this.logger.debug("onReadGroupsFailure");
		this.self.READ_GROUPS_SUCCESS = false;
        this.getView().setMasked(false);
    },	
	
    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the tap of the logout button. Dispatches the logout application-level event.
     */
    onLogoutButtonTap: function() {
    	if(Core.config.event.Config.getCurrentView()==='eventlist') {      	
	        this.logger.debug("onLogoutButtonTap");
	        var evt = Ext.create("Core.event.authentication.Event", Core.event.authentication.Event.LOGOUT);
	        this.eventBus.dispatchGlobalEvent(evt);
    	}	        
    },

    /**
     * Handles the tap of the new event button. 
	 * Creates a new Date record and adds the key to the new Event record.
	 * Shows the event detail view.
     */
    onNewEventButtonTap: function() {
    	if(Core.config.event.Config.getCurrentView()==='eventlist') {     	
	        this.logger.debug("onNewEventButtonTap");
			var record = this.createNewEvent();
	        this.showEventDetail(record);
    	}
    },

    /**
     * Handles the list disclose of an event list item. Shows the event detail view passing in a reference to
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
    	if(Core.config.event.Config.getCurrentView()==='eventlist') {      	
	        this.logger.debug("onListDisclose");
	        this.eventStore.setSelectedRecord(record);
	        this.showEventDetail(record);
    	}
    },

    /**
     * Handles the clear icon tap event on the search field. Clears all filter on the list's store.
     */
    onSearchClearIconTap: function() {
    	if(Core.config.event.Config.getCurrentView()==='eventlist') {    	
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
    	if(Core.config.event.Config.getCurrentView()==='eventlist') {
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
							didMatch = record.get("EventName").match(search);
	                    //if it matched the first or last name, push it into the matches array
	                    matched.push(didMatch);
	                }
	                //if nothing was found, return false (dont so in the store)
	                if (regexps.length > 1 && matched.indexOf(false) != -1) {
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