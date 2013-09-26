/**
 * The person detail mediator essentially fulfils the passive view pattern for the person detail view.
 */
Ext.define("Core.mediator.extjs.person.detail.Mediator", {
    extend: "Core.mediator.extjs.person.base.Mediator",

    // set up view event to mediator mapping
    control: {
    	toolbar: {
    		painted: "onPainted"
    	},	
        backButton: {
            click: "onBackButtonClick"
        },
        savePersonButton: {
            click: "onSavePersonButtonClick"
        },
        deleteButton: {
            click: "onDeleteButtonClick"
        },
		salutationAbbreviationTextField: {
			focus: "onSalutationAbbreviationTextFieldFocus"
		}
    },

    // set up injected object event listening
    observe: {
        personStore: {
            selectedRecordChange: "onSelectedRecordChange"
        }
    },

    /**
     * Functional method to save an person. Determines if the person is new and it needs to be
     * created, or existing and needs to be updated and fires off the corresponding application-level event.
     *
     * @param person    The person is the data model for the item in the list currently selected.
     */
    savePerson: function(person) {
        this.logger.debug("savePerson");
        var evt;
        var msg;
        if(person != null) {
            var id = person.id;
            if( (id != null) && (id != "") ) {
                evt = Ext.create("Core.event.person.Event", Core.event.person.Event.UPDATE_PERSON);
                msg = nineam.locale.LocaleManager.getProperty("personDetail.updatingPerson");
            } else {
                evt = Ext.create("Core.event.person.Event", Core.event.person.Event.CREATE_PERSON);
                msg = nineam.locale.LocaleManager.getProperty("personDetail.creatingPerson");
            }
            this.getView().setLoading(msg);
            evt.person = person;
            this.eventBus.dispatchGlobalEvent(evt);
        }
    },

    /**
     * Functional method to delete a person. Fires off the corresponding application-level event.
     *
     * @param person    The person is the data model for the item in the list currently selected.
     */
    deletePerson: function(person) {
        this.logger.debug("deletePerson");
        if(person != null) {
            this.getView().setLoading(nineam.locale.LocaleManager.getProperty("personDetail.deletingPerson"));
            var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.DELETE_PERSON);
            evt.person = person;
            this.eventBus.dispatchGlobalEvent(evt);
        }
    },
	
    /**
     * Functional method to read salutations. Fires off the corresponding application-level event.
     *
     */
	readSalutations: function() {
        this.logger.debug("readSalutations");
		var salutationPicker = this.getView().getSalutationPicker();
        if(salutationPicker == null) {
            this.getView().setMasked({
                xtype: "loadmask",
                message: nineam.locale.LocaleManager.getProperty("personDetail.readingSalutations")
            });
            var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.READ_SALUTATIONS);
            this.eventBus.dispatchGlobalEvent(evt);
        }
		else{
			salutationPicker.show();
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
            case 'personslide':
            	this.backToPersonSlide();
                break;
			case 'personlist':
            	this.backToPersonList();
                break;
            case 'persontile':
            	this.backToPersonTile();
                break;               
        }
    },

    /**
     * Simple navigation method used to navigate back to the person slide view.
     */
    backToPersonSlide: function() {
        this.logger.debug("backToPersonSlide");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_PERSON_SLIDE);
    },	
	
    /**
     * Simple navigation method used to navigate back to the person list view.
     */
    backToPersonList: function() {
        this.logger.debug("backToPersonList");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_PERSON_LIST);
    },

    /**
     * Simple navigation method used to navigate back to the person tile view.
     */
    backToPersonTile: function() {
        this.logger.debug("backToPersonTile");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_PERSON_TILE);
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
     * Handles the painted application-level event. Set the person detail view
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
        this.setUI(Core.config.person.Config.getUi());
    },
	
    /**
     * Handles the create person success application-level event. Navigates back to the person list view.
     */
    onCreatePersonSuccess: function() {
		if(Core.config.person.Config.getCurrentView()==='persondetail') {
			this.logger.debug("onCreatePersonSuccess");
			this.getView().setLoading(false);
			this.backToPrevious(Core.config.person.Config.getPreviousView());
		}
    },

    /**
     * Handles the update person success application-level event. Navigates back to the person list view.
     */
    onUpdatePersonSuccess: function() {
		if(Core.config.person.Config.getCurrentView()==='persondetail') {	
			this.logger.debug("onUpdatePersonFailure");
			this.getView().setLoading(false);
			this.backToPrevious(Core.config.person.Config.getPreviousView());
		}
    },

    /**
     * Handles the delete person success application-level event. Navigates back to the person list view.
     */
    onDeletePersonSuccess: function() {
		if(Core.config.person.Config.getCurrentView()==='persondetail') {
			this.logger.debug("onDeletePersonSuccess");
			this.reset();
			this.backToPrevious(Core.config.person.Config.getPreviousView());
		}
    },
	
	/**
     * Handles the read salutations success application-level event.
     */
    onReadSalutationsSuccess: function() {
		if(Core.config.person.Config.getCurrentView()==='persondetail') {
			this.logger.debug("onReadSalutationsSuccess");
			// to do ...
			
			this.getView().setMasked(false);
		}
    },

    /**
     * Handles the read salutations failure application-level event.
     */
    onReadSalutationsFailure: function() {
		if(Core.config.person.Config.getCurrentView()==='persondetail') {
			this.logger.debug("onReadSalutationsFailure");
			this.getView().setLoading(false);
		}
    },	
	
    /**
     * Handles the change of the selected record in the person store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.person.Store} store The store that has the selected record.
     * @param {Core.model.person.Model} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
		//Do not put within if() statement 
		var logMsg = (record != null)
			? ": id = " + record.get("id") + ", person = " + record.get("name")
			: "new person";
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
     * Handles the back button tap event. Navigates back to the person list view.
     */
    onBackButtonClick: function() {
        this.logger.debug("onBackButtonClick");
        this.backToPrevious(Core.config.person.Config.getPreviousView());
    },

    /**
     * Handles the save button tap event. Grabs the view's current person data and passes the record
     * to the functional save method.
     */
    onSavePersonButtonClick: function() {
        this.logger.debug("onSavePersonButtonClick");
        var person = this.getView().getRecord();
        var newPerson = this.getView().getValues();
        // if this is a new person record, there's no id available
        if(person != null) {
            newPerson.id = person.data.id;
        }
        this.savePerson(newPerson);
    },

    /**
     * Handles the delete button tap event. Grabs the view's current person data and passes the record
     * to the functional delete method.
     */
    onDeleteButtonClick: function() {
        this.logger.debug("onDeleteButtonClick");
        var person = this.getView().getRecord();
	    if(person) {
		    this.deletePerson(person.data);
	    }
    },

    /**
     * Handles the salutation abbreviation text field focus event. 
     * 
     */
    onSalutationAbbreviationTextFieldFocus: function() {
        this.logger.debug("onSalutationAbbreviationTextFieldFocus");
		this.readSalutations();
    }
});