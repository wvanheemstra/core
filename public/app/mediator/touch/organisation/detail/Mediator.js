/**
 * The organisation detail mediator essentially fulfils the passive view pattern for the organisation detail view.
 */
Ext.define("Core.mediator.touch.organisation.detail.Mediator", {
    extend: "Core.mediator.touch.organisation.base.Mediator",

    requires: [
        "Core.event.navigation.Event"
    ],

    // set up view event to mediator mapping
    control: {
    	titlebar: {
    		painted: "onPainted"
    	},    	
        backButton: {
            tap: "onBackButtonTap"
        },
        saveOrganisationButton: {
            tap: "onSaveOrganisationButtonTap"
        },
        deleteButton: {
            tap: "onDeleteButtonTap"
        }
    },

    // set up injected object event listening
    observe: {
        organisationStore: {
            selectedRecordChange: "onSelectedRecordChange"
        }
    },

    /**
     * Sets up global event bus handlers. Called by the parent superclass during the initialization phase.
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
        this.eventBus.addGlobalEventListener(Core.event.ui.Event.SET_UI_SUCCESS, this.onSetUISuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.CREATE_ORGANISATION_SUCCESS, this.onCreateOrganisationSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.UPDATE_ORGANISATION_SUCCESS, this.onUpdateOrganisationSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.DELETE_ORGANISATION_SUCCESS, this.onDeleteOrganisationSuccess, this);
    },

    /**
     * Functional method to save a organisation. Determines if the organisation is new and it needs to be
     * created, or existing and needs to be updated and fires off the corresponding application-level event.
     *
     * @param organisation    The organisation is the data model for the item in the list currently selected.
     */
    saveOrganisation: function(organisation) {
        this.logger.debug("saveOrganisation");
        var evt;
        var msg;
        if(organisation != null) {
            var id = organisation.id;
            if( (id != null) && (id != "") ) {
                evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.UPDATE_ORGANISATION);
                msg = nineam.locale.LocaleManager.getProperty("organisationDetail.updatingOrganisation");
            } else {
                evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.CREATE_ORGANISATION);
                msg = nineam.locale.LocaleManager.getProperty("organisationDetail.creatingOrganisation");
            }
            this.getView().setMasked({
                xtype: "loadmask",
                message: msg
            });
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
        if(organisation != null) {
            this.getView().setMasked({
                xtype: "loadmask",
                message: nineam.locale.LocaleManager.getProperty("organisationDetail.deletingOrganisation")
            });
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
        this.getView().setMasked(false);
        this.getView().setRecord(null);
        this.getView().reset();
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
        this.logger.debug("onCreateOrganisationSuccess");
        this.getView().setMasked(false);
        this.backToPrevious(Core.config.organisation.Config.getPreviousView());
    },

    /**
     * Handles the update organisation success application-level event. Navigates back to the organisation list view.
     */
    onUpdateOrganisationSuccess: function() {
        this.logger.debug("onUpdateOrganisationSuccess");
        this.getView().setMasked(false);
        this.backToPrevious(Core.config.organisation.Config.getPreviousView());
    },

    /**
     * Handles the delete organisation success application-level event. Navigates back to the organisation list view.
     */
    onDeleteOrganisationSuccess: function() {
        this.logger.debug("onDeleteOrganisationSuccess");
        this.reset();
        this.backToPrevious(Core.config.organisation.Config.getPreviousView());
    },

    /**
     * Handles the change of the selected record in the organisation store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.organisation.Store} store The store that has the selected record.
     * @param {Core.model.organisation.Model} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
        var logMsg = (record != null)
            ? ": id = " + record.get("id") + ", organisation = " + record.get("OrganisationName")
            : "new organisation";
        this.logger.debug("onSelectedRecordChange = " + logMsg);
        if (record) {
            this.getView().setRecord(record);
        } else {
            this.reset();
        }
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the back button tap event. Navigates back to the previous organisation view.
     */
    onBackButtonTap: function() {
        this.logger.debug("onBackButtonTap");
        this.backToPrevious(Core.config.organisation.Config.getPreviousView());
    },

    /**
     * Handles the save button tap event. Grabs the view's current organisation data and passes the record
     * to the functional save method.
     */
    onSaveOrganisationButtonTap: function() {
        this.logger.debug("onSaveOrganisationButtonTap");
        var organisation = this.getView().getRecord();
        var newOrganisation = this.getView().getValues();
        // if this is a new organisation record, there's no id available
        if(organisation != null) {
            newOrganisation.id = organisation.data.id;
        }
        this.saveOrganisation(newOrganisation);
    },

    /**
     * Handles the delete button tap event. Grabs the view's current organisation data and passes the record
     * to the functional delete method.
     */
    onDeleteButtonTap: function() {
        this.logger.debug("onDeleteButtonTap");
        var organisation = this.getView().getRecord();
	    if(organisation) {
		    this.deleteOrganisation(organisation.data);
	    }
    }
});