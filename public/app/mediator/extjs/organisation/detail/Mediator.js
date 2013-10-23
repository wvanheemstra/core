/**
 * The organisation detail mediator essentially fulfils the passive view pattern for the organisation detail view.
 */
Ext.define("Core.mediator.extjs.organisation.detail.Mediator", {
    extend: "Core.mediator.extjs.organisation.base.Mediator",

    // set up view event to mediator mapping
    control: {
    	toolbar: {
    		painted: "onPainted"
    	},	
        backButton: {
            click: "onBackButtonClick"
        },
        saveOrganisationButton: {
            click: "onSaveOrganisationButtonClick"
        },
        deleteButton: {
            click: "onDeleteButtonClick"
        }
    },

    // set up injected object event listening
    observe: {
        organisationStore: {
            selectedRecordChange: "onSelectedRecordChange"
        }
    },

    /**
     * Functional method to save an organisation. Determines if the organisation is new and it needs to be
     * created, or existing and needs to be updated and fires off the corresponding application-level event.
     *
     * @param organisation    The organisation is the data model for the item in the list currently selected.
     */
    saveOrganisation: function(organisation) {
        this.logger.debug("saveOrganisation");
        var evt;
        var msg;
        if(organisation !== null) {
            var id = organisation.id;
            if( (id !== null) && (id !== "") ) {
                evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.UPDATE_ORGANISATION);
                msg = nineam.locale.LocaleManager.getProperty("organisationDetail.updatingOrganisation");
            } else {
                evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.CREATE_ORGANISATION);
                msg = nineam.locale.LocaleManager.getProperty("organisationDetail.creatingOrganisation");
            }
            this.getView().setLoading(msg);
            evt.organisation = organisation;
            this.eventBus.dispatchGlobalEvent(evt);
        }
    },

    /**
     * Functional method to delete a organisation. Fires off the corresponding application-level event.
     *
     * @param organisation    The organisation is the data model for the item in the list currently selected.
     */
    deleteOrganisation: function(organisation) {
        this.logger.debug("deleteOrganisation");
        if(organisation !== null) {
            this.getView().setLoading(nineam.locale.LocaleManager.getProperty("organisationDetail.deletingOrganisation"));
            var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.DELETE_ORGANISATION);
            evt.organisation = organisation;
            this.eventBus.dispatchGlobalEvent(evt);
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
            case 'organisationslide':
            	this.backToOrganisationSlide();
                break;
			case 'organisationlist':
            	this.backToOrganisationList();
                break;
            case 'organisationtile':
            	this.backToOrganisationTile();
                break;               
        }
    },

    /**
     * Simple navigation method used to navigate back to the organisation slide view.
     */
    backToOrganisationSlide: function() {
        this.logger.debug("backToOrganisationSlide");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_ORGANISATION_SLIDE);
    },	
	
    /**
     * Simple navigation method used to navigate back to the organisation list view.
     */
    backToOrganisationList: function() {
        this.logger.debug("backToOrganisationList");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_ORGANISATION_LIST);
    },

    /**
     * Simple navigation method used to navigate back to the organisation tile view.
     */
    backToOrganisationTile: function() {
        this.logger.debug("backToOrganisationTile");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_ORGANISATION_TILE);
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
     * Handles the painted application-level event. Set the organisation detail view
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
        this.setUI(Core.config.organisation.Config.getUi());
    },
	
    /**
     * Handles the create organisation success application-level event. Navigates back to the organisation list view.
     */
    onCreateOrganisationSuccess: function() {
		if(Core.config.organisation.Config.getCurrentView()==='organisationdetail') {
			this.logger.debug("onCreateOrganisationSuccess");
			this.getView().setLoading(false);
			this.backToPrevious(Core.config.organisation.Config.getPreviousView());
		}
    },

    /**
     * Handles the update organisation success application-level event. Navigates back to the organisation list view.
     */
    onUpdateOrganisationSuccess: function() {
		if(Core.config.organisation.Config.getCurrentView()==='organisationdetail') {	
			this.logger.debug("onUpdateOrganisationFailure");
			this.getView().setLoading(false);
			this.backToPrevious(Core.config.organisation.Config.getPreviousView());
		}
    },

    /**
     * Handles the delete organisation success application-level event. Navigates back to the organisation list view.
     */
    onDeleteOrganisationSuccess: function() {
		if(Core.config.organisation.Config.getCurrentView()==='organisationdetail') {
			this.logger.debug("onDeleteOrganisationSuccess");
			this.reset();
			this.backToPrevious(Core.config.organisation.Config.getPreviousView());
		}
    },

    /**
     * Handles the change of the selected record in the organisation store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.organisation.Store} store The store that has the selected record.
     * @param {Core.model.organisation.Model} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
		//Do not put within if() statement 
		var logMsg = (record !== null)
			? ": id = " + record.get("id") + ", organisation = " + record.get("name")
			: "new organisation";
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
     * Handles the back button tap event. Navigates back to the organisation list view.
     */
    onBackButtonClick: function() {
        this.logger.debug("onBackButtonClick");
        this.backToPrevious(Core.config.organisation.Config.getPreviousView());
    },

    /**
     * Handles the save button tap event. Grabs the view's current organisation data and passes the record
     * to the functional save method.
     */
    onSaveOrganisationButtonClick: function() {
        this.logger.debug("onSaveOrganisationButtonClick");
        var organisation = this.getView().getRecord();
        var newOrganisation = this.getView().getValues();
        // if this is a new organisation record, there's no id available
        if(organisation !== null) {
            newOrganisation.id = organisation.data.id;
        }
        this.saveOrganisation(newOrganisation);
    },

    /**
     * Handles the delete button tap event. Grabs the view's current organisation data and passes the record
     * to the functional delete method.
     */
    onDeleteButtonClick: function() {
        this.logger.debug("onDeleteButtonClick");
        var organisation = this.getView().getRecord();
	    if(organisation) {
		    this.deleteOrganisation(organisation.data);
	    }
    }
});