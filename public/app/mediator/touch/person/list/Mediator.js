/**
 * The person list mediator essentially fulfils the passive view pattern for the person list view.
 */
Ext.define("Core.mediator.touch.person.list.Mediator", {
    extend: "Core.mediator.touch.person.base.Mediator",

    // set up view event to mediator mapping
    control: {
    	titlebar: {
    		painted: "onPainted"
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
		READ_DATES_SUCCESS:	false
	},	
	
    /**
     * Sets up global event bus handlers. Called by the parent superclass during the initialization phase.
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
        this.eventBus.addGlobalEventListener(Core.event.ui.Event.SET_UI_SUCCESS, this.onSetUISuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.authentication.Event.LOGIN_SUCCESS, this.onLoginSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.GET_PERSON_LIST_SUCCESS, this.onGetPersonListSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.GET_PERSON_LIST_FAILURE, this.onGetPersonListFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.salutation.Event.READ_SALUTATIONS_SUCCESS, this.onReadSalutationsSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.salutation.Event.READ_SALUTATIONS_FAILURE, this.onReadSalutationsFailure, this);		
        this.eventBus.addGlobalEventListener(Core.event.gender.Event.READ_GENDERS_SUCCESS, this.onReadGendersSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.gender.Event.READ_GENDERS_FAILURE, this.onReadGendersFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.nationality.Event.READ_NATIONALITIES_SUCCESS, this.onReadNationalitiesSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.nationality.Event.READ_NATIONALITIES_FAILURE, this.onReadNationalitiesFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.date.Event.READ_DATES_SUCCESS, this.onReadDatesSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.date.Event.READ_DATES_FAILURE, this.onReadDatesFailure, this);		
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
        var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.GET_PERSON_LIST);
        this.eventBus.dispatchGlobalEvent(evt);

		var evt = Ext.create("Core.event.salutation.Event", Core.event.salutation.Event.READ_SALUTATIONS);
        this.eventBus.dispatchGlobalEvent(evt); 
		
		var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.READ_GENDERS);
        this.eventBus.dispatchGlobalEvent(evt); 
		
		var evt = Ext.create("Core.event.nationality.Event", Core.event.nationality.Event.READ_NATIONALITIES);
        this.eventBus.dispatchGlobalEvent(evt); 

		var evt = Ext.create("Core.event.date.Event", Core.event.date.Event.READ_DATES);
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
			&& this.self.READ_DATES_SUCCESS){
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
     * Handles the get persons application-level event.
     */
    onGetPersonListSuccess: function() {
        this.logger.debug("onGetPersonListSuccess");
		this.self.READ_PERSONS_SUCCESS = true;
        this.showPersonList();
    },

    /**
     * Handles the get persons failure event.
     */
    onGetPersonListFailure: function() {
        this.logger.debug("onGetPersonListFailure");
		this.self.READ_PERSONS_SUCCESS = false;
        this.getView().setMasked(false);
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
     * Handles the tap of the new person button. Shows the person detail view.
     */
    onNewPersonButtonTap: function() {
    	if(Core.config.person.Config.getCurrentView()==='personlist') {     	
	        this.logger.debug("onNewPersonButtonTap");
	        this.showPersonDetail();
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