/**
 * The individual detail mediator essentially fulfils the passive view pattern for the individual detail view.
 */
Ext.define("Core.mediator.extjs.individual.detail.Mediator", {
    extend: "Core.mediator.extjs.individual.base.Mediator",

    // set up view event to mediator mapping
    control: {
    	toolbar: {
    		painted: "onPainted"
    	},	
        backButton: {
            click: "onBackButtonClick"
        },
        saveIndividualButton: {
            click: "onSaveIndividualButtonClick"
        },
        deleteButton: {
            click: "onDeleteButtonClick"
        }
    },

    // set up injected object event listening
    observe: {
        individualStore: {
            selectedRecordChange: "onSelectedRecordChange"
        }
    },

    /**
     * Functional method to save an individual. Determines if the individual is new and it needs to be
     * created, or existing and needs to be updated and fires off the corresponding application-level event.
     *
     * @param individual    The individual is the data model for the item in the list currently selected.
     */
    saveIndividual: function(individual) {
        this.logger.debug("saveIndividual");
        var evt;
        var msg;
        if(individual !== null) {
            var id = individual.id;
            if( (id !== null) && (id !== "") ) {
                evt = Ext.create("Core.event.individual.Event", Core.event.individual.Event.UPDATE_INDIVIDUAL);
                msg = nineam.locale.LocaleManager.getProperty("individualDetail.updatingIndividual");
            } else {
                evt = Ext.create("Core.event.individual.Event", Core.event.individual.Event.CREATE_INDIVIDUAL);
                msg = nineam.locale.LocaleManager.getProperty("individualDetail.creatingIndividual");
            }
            this.getView().setLoading(msg);
            evt.individual = individual;
            this.eventBus.dispatchGlobalEvent(evt);
        }
    },

    /**
     * Functional method to delete a individual. Fires off the corresponding application-level event.
     *
     * @param individual    The individual is the data model for the item in the list currently selected.
     */
    deleteIndividual: function(individual) {
        this.logger.debug("deleteIndividual");
        if(individual !== null) {
            this.getView().setLoading(nineam.locale.LocaleManager.getProperty("individualDetail.deletingIndividual"));
            var evt = Ext.create("Core.event.individual.Event", Core.event.individual.Event.DELETE_INDIVIDUAL);
            evt.individual = individual;
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
            case 'individualslide':
            	this.backToIndividualSlide();
                break;
			case 'individuallist':
            	this.backToIndividualList();
                break;
            case 'individualtile':
            	this.backToIndividualTile();
                break;               
        }
    },

    /**
     * Simple navigation method used to navigate back to the individual slide view.
     */
    backToIndividualSlide: function() {
        this.logger.debug("backToIndividualSlide");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_INDIVIDUAL_SLIDE);
    },	
	
    /**
     * Simple navigation method used to navigate back to the individual list view.
     */
    backToIndividualList: function() {
        this.logger.debug("backToIndividualList");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_INDIVIDUAL_LIST);
    },

    /**
     * Simple navigation method used to navigate back to the individual tile view.
     */
    backToIndividualTile: function() {
        this.logger.debug("backToIndividualTile");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_INDIVIDUAL_TILE);
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
     * Handles the painted application-level event. Set the individual detail view
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
        this.setUI(Core.config.individual.Config.getUi());
    },
	
    /**
     * Handles the create individual success application-level event. Navigates back to the individual list view.
     */
    onCreateIndividualSuccess: function() {
		if(Core.config.individual.Config.getCurrentView()==='individualdetail') {
			this.logger.debug("onCreateIndividualSuccess");
			this.getView().setLoading(false);
			this.backToPrevious(Core.config.individual.Config.getPreviousView());
		}
    },

    /**
     * Handles the update individual success application-level event. Navigates back to the individual list view.
     */
    onUpdateIndividualSuccess: function() {
		if(Core.config.individual.Config.getCurrentView()==='individualdetail') {	
			this.logger.debug("onUpdateIndividualFailure");
			this.getView().setLoading(false);
			this.backToPrevious(Core.config.individual.Config.getPreviousView());
		}
    },

    /**
     * Handles the delete individual success application-level event. Navigates back to the individual list view.
     */
    onDeleteIndividualSuccess: function() {
		if(Core.config.individual.Config.getCurrentView()==='individualdetail') {
			this.logger.debug("onDeleteIndividualSuccess");
			this.reset();
			this.backToPrevious(Core.config.individual.Config.getPreviousView());
		}
    },	
	
    /**
     * Handles the change of the selected record in the individual store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.individual.Store} store The store that has the selected record.
     * @param {Core.model.individual.Model} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
		//Do not put within if() statement 
		var logMsg = (record !== null)
			? ": kp_IndividualID = " + record.get("kp_IndividualID") + ", IndividualName = " + record.get("IndividualName")
			: "new individual";
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
     * Handles the back button tap event. Navigates back to the individual list view.
     */
    onBackButtonClick: function() {
        this.logger.debug("onBackButtonClick");
        this.backToPrevious(Core.config.individual.Config.getPreviousView());
    },

    /**
     * Handles the save button tap event. Grabs the view's current individual data and passes the record
     * to the functional save method.
     */
    onSaveIndividualButtonClick: function() {
        this.logger.debug("onSaveIndividualButtonClick");
        var individual = this.getView().getRecord();
        var newIndividual = this.getView().getValues();
        // if this is a new individual record, there's no id available
        if(individual !== null) {
            newIndividual.id = individual.data.id;
        }
        this.saveIndividual(newIndividual);
    },

    /**
     * Handles the delete button tap event. Grabs the view's current individual data and passes the record
     * to the functional delete method.
     */
    onDeleteButtonClick: function() {
        this.logger.debug("onDeleteButtonClick");
        var individual = this.getView().getRecord();
	    if(individual) {
		    this.deleteIndividual(individual.data);
	    }
    }
});