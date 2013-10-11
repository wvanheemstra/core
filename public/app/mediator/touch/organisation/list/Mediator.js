/**
 * The organisation list mediator essentially fulfils the passive view pattern for the organisation list view.
 */
Ext.define("Core.mediator.touch.organisation.list.Mediator", {
    extend: "Core.mediator.touch.organisation.base.Mediator",

    // set up view event to mediator mapping
    control: {
    	titlebar: {
    		painted: "onPainted"
    	},
        logoutButton: {
            tap: "onLogoutButtonTap"
        },
        newOrganisationButton: {
            tap: "onNewOrganisationButtonTap"
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
        READ_ORGANISATIONS_SUCCESS:    	false,
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
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.READ_ORGANISATIONS_SUCCESS, this.onReadOrganisationsSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.READ_ORGANISATIONS_FAILURE, this.onReadOrganisationsFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.UPDATE_ORGANISATION_SUCCESS, this.onUpdateOrganisationSuccess, this);				
        this.eventBus.addGlobalEventListener(Core.event.membership.Event.READ_MEMBERSHIPS_SUCCESS, this.onReadMembershipsSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.membership.Event.READ_MEMBERSHIPS_FAILURE, this.onReadMembershipsFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.group.Event.READ_GROUPS_SUCCESS, this.onReadGroupsSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.group.Event.READ_GROUPS_FAILURE, this.onReadGroupsFailure, this);				
    },
	
    /**
     * Refreshes the list of organisations.
     */	
	refreshOrganisationList: function() {
        this.logger.debug("refreshOrganisationList");	
		this.getList().refresh();
	},

    /**
     * Dispatches the application event to get the list of organisations.
     */
    getOrganisationListData: function() {
        this.logger.debug("getOrganisationListData");
        this.getView().setMasked({
            xtype: "loadmask",
            message: nineam.locale.LocaleManager.getProperty("organisationList.loading")
        });

        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.READ_ORGANISATIONS);
        this.eventBus.dispatchGlobalEvent(evt);	

		var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.READ_MEMBERSHIPS);
        this.eventBus.dispatchGlobalEvent(evt);

		var evt = Ext.create("Core.event.group.Event", Core.event.group.Event.READ_GROUPS);
        this.eventBus.dispatchGlobalEvent(evt);			
		
    },

    /**
     * Creates and returns a new Organisation record.
     *
     */
    createNewOrganisation: function() {
    	this.logger.debug("createNewOrganisation");
		var organisation = null;		
		organisation = Ext.create("Core.model.organisation.Model", {
			//kp_OrganisationID = // Is set automatically
		});
		var organisationData = organisation.getData();
		this.organisationStore.insert( organisation, false );
		return organisation;
	},
	
    /**
     * Handles the show organisation detail event from the organisation list view. Grab the data model
     * from the selected item in the list and set it as the data provider for the detail view.
     * Finally, slide the detail view onto stage.
     *
     * @param record    The record is the data model for the item in the list currently selected.
     */
    showOrganisationDetail: function(record) {
    	this.logger.debug("showOrganisationDetail");	
        var logMsg = (record != null)
            ? ": kp_OrganisationID = " + record.get("kp_OrganisationID") 
			+ ", organisation = " + record.get("OrganisationName") : "new organisation";
        this.logger.debug("showOrganisationDetail = " + logMsg);
		Core.config.organisation.Config.setPreviousView('organisationlist');
        this.navigate(Core.event.navigation.Event.ACTION_SHOW_ORGANISATION_DETAIL);
        this.organisationStore.setSelectedRecord(record);
    },
    
    /**
     * Shows the list once all reads have been successful. 
     *
     */	 
	showOrganisationList: function(){
    	this.logger.debug("showOrganisationList");	
		if(this.self.READ_ORGANISATIONS_SUCCESS 
			&& this.self.READ_MEMBERSHIPS_SUCCESS
			&& this.self.READ_GROUPS_SUCCESS){
			this.getView().setMasked(false);
			this.getList().setStore(this.organisationStore);
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
     * Handles the painted application-level event. 
     */    
    onPainted: function() {
	    this.logger.debug("onPainted");	
    },

    /**
     * Handles the login success application-level event. Slide the organisation list view
     * onto stage.
     */
    onLoginSuccess: function() {
        this.logger.debug("onLoginSuccess");        
		if(Core.config.organisation.Config.getNextView()==='organisationlist') {
        	this.navigate(Core.event.authentication.Event.LOGIN_SUCCESS);
        	this.getOrganisationListData();
		}
    },

    /**
     * Handles the set ui success application-level event. Update the components for the ui.
     */
    onSetUISuccess: function() {
        this.logger.debug("onSetUISuccess");
        this.setUI(Core.config.organisation.Config.getUi());
    },

    /**
     * Handles the read organisations success event.
     */
    onReadOrganisationsSuccess: function() {
        this.logger.debug("onReadOrganisationsSuccess");
		this.self.READ_ORGANISATIONS_SUCCESS = true;
        this.showOrganisationList();
    },

    /**
     * Handles the read organisations failure event.
     */
    onReadOrganisationsFailure: function() {
        this.logger.debug("onReadOrganisationsFailure");
		this.self.READ_ORGANISATIONS_SUCCESS = false;
        this.getView().setMasked(false);
    },	

    /**
     * Handles the update organisation success event.
     */
    onUpdateOrganisationSuccess: function() {
        this.logger.debug("onUpdateOrganisationSuccess");
        this.refreshOrganisationList();
    },			

    /**
     * Handles the read memberships success event.
     */
    onReadMembershipsSuccess: function() {
        this.logger.debug("onReadMembershipsSuccess");
		this.self.READ_MEMBERSHIPS_SUCCESS = true;
        this.showOrganisationList();
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
        this.showOrganisationList();
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
    	if(Core.config.organisation.Config.getCurrentView()==='organisationlist') {      	
	        this.logger.debug("onLogoutButtonTap");
	        var evt = Ext.create("Core.event.authentication.Event", Core.event.authentication.Event.LOGOUT);
	        this.eventBus.dispatchGlobalEvent(evt);
    	}	        
    },

    /**
     * Handles the tap of the new organisation button. 
	 * Creates a new Date record and adds the key to the new Organisation record.
	 * Shows the organisation detail view.
     */
    onNewOrganisationButtonTap: function() {
    	if(Core.config.organisation.Config.getCurrentView()==='organisationlist') {     	
	        this.logger.debug("onNewOrganisationButtonTap");
			var record = this.createNewOrganisation();
	        this.showOrganisationDetail(record);
    	}
    },

    /**
     * Handles the list disclose of an organisation list item. Shows the organisation detail view passing in a reference to
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
    	if(Core.config.organisation.Config.getCurrentView()==='organisationlist') {      	
	        this.logger.debug("onListDisclose");
	        this.organisationStore.setSelectedRecord(record);
	        this.showOrganisationDetail(record);
    	}
    },

    /**
     * Handles the clear icon tap event on the search field. Clears all filter on the list's store.
     */
    onSearchClearIconTap: function() {
    	if(Core.config.organisation.Config.getCurrentView()==='organisationlist') {    	
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
    	if(Core.config.organisation.Config.getCurrentView()==='organisationlist') {
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
							didMatch = record.get("OrganisationName").match(search);
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