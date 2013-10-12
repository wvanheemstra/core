/**
 * The person list mediator essentially fulfils the passive view pattern for the person list view.
 */
Ext.define("Core.mediator.touch.person.list.Mediator", {
    extend: "Core.mediator.touch.person.base.Mediator",

    // set up view event to mediator mapping
    control: {
    	titlebar: {
    		painted: "onPainted",
			resize: "onResizeToolbar"
    	},
        logoutButton: {
            tap: "onLogoutButtonTap"
        },
        newPersonButton: {
            tap: "onNewPersonButtonTap"
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
        READ_PERSONS_SUCCESS:    	false,
        READ_SALUTATIONS_SUCCESS:	false,			
        READ_GENDERS_SUCCESS:		false,
        READ_NATIONALITIES_SUCCESS:	false,	
		READ_DATES_SUCCESS:			false,
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
        this.eventBus.addGlobalEventListener(Core.event.person.Event.READ_PERSONS_SUCCESS, this.onReadPersonsSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.READ_PERSONS_FAILURE, this.onReadPersonsFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.UPDATE_PERSON_SUCCESS, this.onUpdatePersonSuccess, this);		
        this.eventBus.addGlobalEventListener(Core.event.salutation.Event.READ_SALUTATIONS_SUCCESS, this.onReadSalutationsSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.salutation.Event.READ_SALUTATIONS_FAILURE, this.onReadSalutationsFailure, this);		
        this.eventBus.addGlobalEventListener(Core.event.gender.Event.READ_GENDERS_SUCCESS, this.onReadGendersSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.gender.Event.READ_GENDERS_FAILURE, this.onReadGendersFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.nationality.Event.READ_NATIONALITIES_SUCCESS, this.onReadNationalitiesSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.nationality.Event.READ_NATIONALITIES_FAILURE, this.onReadNationalitiesFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.date.Event.READ_DATES_SUCCESS, this.onReadDatesSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.date.Event.READ_DATES_FAILURE, this.onReadDatesFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.membership.Event.READ_MEMBERSHIPS_SUCCESS, this.onReadMembershipsSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.membership.Event.READ_MEMBERSHIPS_FAILURE, this.onReadMembershipsFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.group.Event.READ_GROUPS_SUCCESS, this.onReadGroupsSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.group.Event.READ_GROUPS_FAILURE, this.onReadGroupsFailure, this);				
    },
	
    /**
     * Refreshes the list of persons.
     */	
	refreshPersonList: function() {
        this.logger.debug("refreshPersonList");	
		this.getList().refresh();
	},

    /**
     * Dispatches the application event to get the list of persons.
     */
    getPersonListData: function() {
        this.logger.debug("getPersonListData");
        this.getView().setMasked({
            xtype: "loadmask",
            message: nineam.locale.LocaleManager.getProperty("personList.loading")
        });

        var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.READ_PERSONS);
        this.eventBus.dispatchGlobalEvent(evt);		
		
		var evt = Ext.create("Core.event.salutation.Event", Core.event.salutation.Event.READ_SALUTATIONS);
        this.eventBus.dispatchGlobalEvent(evt); 
		
		var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.READ_GENDERS);
        this.eventBus.dispatchGlobalEvent(evt); 
		
		var evt = Ext.create("Core.event.nationality.Event", Core.event.nationality.Event.READ_NATIONALITIES);
        this.eventBus.dispatchGlobalEvent(evt); 

		var evt = Ext.create("Core.event.date.Event", Core.event.date.Event.READ_DATES);
        this.eventBus.dispatchGlobalEvent(evt); 

		var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.READ_MEMBERSHIPS);
        this.eventBus.dispatchGlobalEvent(evt);

		var evt = Ext.create("Core.event.group.Event", Core.event.group.Event.READ_GROUPS);
        this.eventBus.dispatchGlobalEvent(evt);			
		
    },

    /**
     * Creates and returns a new Person record.
     *
     */
    createNewPerson: function() {
    	this.logger.debug("createNewPerson");
		var person = null;
		var salutation = this.getSalutation(0);
		var salutationData = salutation.getData();
		var gender = this.getGender(0);
		var genderData = gender.getData();
		var nationality = this.getNationality(0);
		var nationalityData = nationality.getData();	
		var date = this.createNewDate();
		var dateData = date.getData();		
		person = Ext.create("Core.model.person.Model", {
			//kp_PersonID = // Is set automatically
			kf_SalutationID: salutationData['kp_SalutationID'],
			kf_GenderID: genderData['kp_GenderID'],
			kf_NationalityID: nationalityData['kp_NationalityID'],		
			kf_DateID: dateData['kp_DateID'],
		});
		var personData = person.getData();
		personData['Salutation'] = salutationData;
		personData['Gender'] = genderData;
		personData['Nationality'] = nationalityData;	
		personData['Date'] = dateData;
		this.personStore.insert( person, false );
		return person;
	},

    /**
     * Creates and returns a new Date record.
     *
     */
    createNewDate: function() {
    	this.logger.debug("createNewDate");
		var date = null;
		date = Ext.create("Core.model.date.Model", {
			//kf_DateID = // Is set automatically
		});
		this.dateStore.insert( date, false );
		return date;
	},

    /**
     * Gets and returns the Gender record at index.
     *
     */
    getGender: function(index) {
    	this.logger.debug("getGender");
		if(!index) { 
			index = 0;
		}
		var gender = null;
		gender = this.genderStore.getAt(index);
		return gender;
	},

    /**
     * Gets and returns the Salutation record at index.
     *
     */
    getSalutation: function(index) {
    	this.logger.debug("getSalutation");
		if(!index) { 
			index = 0;
		}
		var salutation = null;
		salutation = this.salutationStore.getAt(index);
		return salutation;
	},

    /**
     * Gets and returns the Nationality record at index.
     *
     */
    getNationality: function(index) {
    	this.logger.debug("getNationality");
		if(!index) { 
			index = 0;
		}
		var nationality = null;
		nationality = this.nationalityStore.getAt(index);
		return nationality;
	},
	
    /**
     * Handles the show person detail event from the person list view. Grab the data model
     * from the selected item in the list and set it as the data provider for the detail view.
     * Finally, slide the detail view onto stage.
     *
     * @param record    The record is the data model for the item in the list currently selected.
     */
    showPersonDetail: function(record) {
    	this.logger.debug("showPersonDetail");	
        var logMsg = (record != null)
            ? ": kp_PersonID = " + record.get("kp_PersonID") 
			+ ", person = " + record.get("PersonFirstName") + " " + record.get("PersonLastName") 
            + ", gender = " + record.get("Gender")["GenderName"] 
			+ ", nationality = " + record.get("Nationality")["NationalityName"]
			+ ", date = " + record.get("Date")["DateStart"] : "new person";
        this.logger.debug("showPersonDetail = " + logMsg);
		Core.config.person.Config.setPreviousView('personlist');
        this.navigate(Core.event.navigation.Event.ACTION_SHOW_PERSON_DETAIL);
        this.personStore.setSelectedRecord(record);
    },
    
    /**
     * Shows the list once all reads have been successful. 
     *
     */	 
	showPersonList: function(){
    	this.logger.debug("showPersonList");	
		if(this.self.READ_PERSONS_SUCCESS 
			&& this.self.READ_SALUTATIONS_SUCCESS
			&& this.self.READ_GENDERS_SUCCESS
			&& this.self.READ_NATIONALITIES_SUCCESS
			&& this.self.READ_DATES_SUCCESS
			&& this.self.READ_MEMBERSHIPS_SUCCESS
			&& this.self.READ_GROUPS_SUCCESS){
			this.getView().setMasked(false);
			this.getList().setStore(this.personStore);
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
     * Handles the login success application-level event. Slide the person list view
     * onto stage.
     */
    onLoginSuccess: function() {
        this.logger.debug("onLoginSuccess");        
		if(Core.config.person.Config.getNextView()==='personlist') {
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
     * Handles the read persons success event.
     */
    onReadPersonsSuccess: function() {
        this.logger.debug("onReadPersonsSuccess");
		this.self.READ_PERSONS_SUCCESS = true;
        this.showPersonList();
    },

    /**
     * Handles the read persons failure event.
     */
    onReadPersonsFailure: function() {
        this.logger.debug("onReadPersonsFailure");
		this.self.READ_PERSONS_SUCCESS = false;
        this.getView().setMasked(false);
    },	

    /**
     * Handles the update person success event.
     */
    onUpdatePersonSuccess: function() {
        this.logger.debug("onUpdatePersonSuccess");
        this.refreshPersonList();
    },
	
    /**
     * Handles the read salutations success event.
     */
    onReadSalutationsSuccess: function() {
        this.logger.debug("onReadSalutationsSuccess");
		this.self.READ_SALUTATIONS_SUCCESS = true;		
        this.showPersonList();
    },

    /**
     * Handles the read salutations failure event.
     */
    onReadSalutationsFailure: function() {
        this.logger.debug("onReadSalutationsFailure");
		this.self.READ_SALUTATIONS_SUCCESS = false;
        this.getView().setMasked(false);
    },		
	
    /**
     * Handles the read genders success event.
     */
    onReadGendersSuccess: function() {
        this.logger.debug("onReadGendersSuccess");
		this.self.READ_GENDERS_SUCCESS = true;		
        this.showPersonList();
    },

    /**
     * Handles the read genders failure event.
     */
    onReadGendersFailure: function() {
        this.logger.debug("onReadGendersFailure");
		this.self.READ_GENDERS_SUCCESS = false;
        this.getView().setMasked(false);
    },	
	
    /**
     * Handles the read nationalities success event.
     */
    onReadNationalitiesSuccess: function() {
        this.logger.debug("onReadNationalitiesSuccess");
		this.self.READ_NATIONALITIES_SUCCESS = true;		
        this.showPersonList();
    },

    /**
     * Handles the read nationalities failure event.
     */
    onReadNationalitiesFailure: function() {
        this.logger.debug("onReadNationalitiesFailure");
		this.self.READ_NATIONALITIES_SUCCESS = false;
        this.getView().setMasked(false);
    },	
	
    /**
     * Handles the read dates success event.
     */
    onReadDatesSuccess: function() {
        this.logger.debug("onReadDatesSuccess");
		this.self.READ_DATES_SUCCESS = true;		
        this.showPersonList();
    },

    /**
     * Handles the read dates failure event.
     */
    onReadDatesFailure: function() {
        this.logger.debug("onReadDatesFailure");
		this.self.READ_DATES_SUCCESS = false;
        this.getView().setMasked(false);
    },	

    /**
     * Handles the read memberships success event.
     */
    onReadMembershipsSuccess: function() {
        this.logger.debug("onReadMembershipsSuccess");
		this.self.READ_MEMBERSHIPS_SUCCESS = true;
        this.showPersonList();
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
        this.showPersonList();
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
    	if(Core.config.person.Config.getCurrentView()==='personlist') {      	
	        this.logger.debug("onLogoutButtonTap");
	        var evt = Ext.create("Core.event.authentication.Event", Core.event.authentication.Event.LOGOUT);
	        this.eventBus.dispatchGlobalEvent(evt);
    	}	        
    },

    /**
     * Handles the tap of the new person button. 
	 * Creates a new Date record and adds the key to the new Person record.
	 * Shows the person detail view.
     */
    onNewPersonButtonTap: function() {
    	if(Core.config.person.Config.getCurrentView()==='personlist') {     	
	        this.logger.debug("onNewPersonButtonTap");
			var record = this.createNewPerson();
	        this.showPersonDetail(record);
    	}
    },

    /**
     * Handles the list disclose of an person list item. Shows the person detail view passing in a reference to
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
    	if(Core.config.person.Config.getCurrentView()==='personlist') {      	
	        this.logger.debug("onListDisclose");
	        this.personStore.setSelectedRecord(record);
	        this.showPersonDetail(record);
    	}
    },

    /**
     * Handles the clear icon tap event on the search field. Clears all filter on the list's store.
     */
    onSearchClearIconTap: function() {
    	if(Core.config.person.Config.getCurrentView()==='personlist') {    	
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
    	if(Core.config.person.Config.getCurrentView()==='personlist') {
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
							didMatch = record.get("PersonFirstName").match(search) ||
	                            record.get("PersonLastName").match(search);
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