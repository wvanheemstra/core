/**
 * The main detail mediator essentially fulfils the passive view pattern for the main detail view.
 */
Ext.define("Core.mediator.extjs.main.detail.Mediator", {
    extend: "Core.mediator.extjs.main.base.Mediator",

    // set up view event to mediator mapping
    control: {
    	toolbar: {
    		painted: "onPainted"
    	},	
        backButton: {
            click: "onBackButtonClick"
        },
        saveMainButton: {
            click: "onSaveMainButtonClick"
        },
        deleteButton: {
            click: "onDeleteButtonClick"
        }
    },

    // set up injected object event listening
    observe: {
        mainStore: {
            selectedRecordChange: "onSelectedRecordChange"
        }
    },

    /**
     * Functional method to save an main. Determines if the main is new and it needs to be
     * created, or existing and needs to be updated and fires off the corresponding application-level event.
     *
     * @param main    The main is the data model for the item in the list currently selected.
     */
    saveMain: function(main) {
        this.logger.debug("saveMain");
        var evt;
        var msg;
        if(main != null) {
            var id = main.id;
            if( (id != null) && (id != "") ) {
                evt = Ext.create("Core.event.main.Event", Core.event.main.Event.UPDATE_MAIN);
                msg = nineam.locale.LocaleManager.getProperty("mainDetail.updatingMain");
            } else {
                evt = Ext.create("Core.event.main.Event", Core.event.main.Event.CREATE_MAIN);
                msg = nineam.locale.LocaleManager.getProperty("mainDetail.creatingMain");
            }
            this.getView().setLoading(msg);
            evt.main = main;
            this.eventBus.dispatchGlobalEvent(evt);
        }
    },

    /**
     * Functional method to delete a main. Fires off the corresponding application-level event.
     *
     * @param main    The main is the data model for the item in the list currently selected.
     */
    deleteMain: function(main) {
        this.logger.debug("deleteMain");
        if(main != null) {
            this.getView().setLoading(nineam.locale.LocaleManager.getProperty("mainDetail.deletingMain"));
            var evt = Ext.create("Core.event.main.Event", Core.event.main.Event.DELETE_MAIN);
            evt.main = main;
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
            case 'mainslide':
            	this.backToMainSlide();
                break;
			case 'mainlist':
            	this.backToMainList();
                break;
            case 'maintile':
            	this.backToMainTile();
                break;               
        }
    },

    /**
     * Simple navigation method used to navigate back to the main slide view.
     */
    backToMainSlide: function() {
        this.logger.debug("backToMainSlide");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_MAIN_SLIDE);
    },	
	
    /**
     * Simple navigation method used to navigate back to the main list view.
     */
    backToMainList: function() {
        this.logger.debug("backToMainList");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_MAIN_LIST);
    },

    /**
     * Simple navigation method used to navigate back to the main tile view.
     */
    backToMainTile: function() {
        this.logger.debug("backToMainTile");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_MAIN_TILE);
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
     * Handles the painted application-level event. Set the main detail view
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
        this.setUI(Core.config.global.Config.getUi());
    },
	
    /**
     * Handles the create main success application-level event. Navigates back to the main list view.
     */
    onCreateMainSuccess: function() {
		if(Core.config.global.Config.getCurrentView()==='maindetail') {
			this.logger.debug("onCreateMainSuccess");
			this.getView().setLoading(false);
			this.backToPrevious(Core.config.global.Config.getPreviousView());
		}
    },

    /**
     * Handles the update main success application-level event. Navigates back to the main list view.
     */
    onUpdateMainSuccess: function() {
		if(Core.config.global.Config.getCurrentView()==='maindetail') {	
			this.logger.debug("onUpdateMainFailure");
			this.getView().setLoading(false);
			this.backToPrevious(Core.config.global.Config.getPreviousView());
		}
    },

    /**
     * Handles the delete main success application-level event. Navigates back to the main list view.
     */
    onDeleteMainSuccess: function() {
		if(Core.config.global.Config.getCurrentView()==='maindetail') {
			this.logger.debug("onDeleteMainSuccess");
			this.reset();
			this.backToPrevious(Core.config.global.Config.getPreviousView());
		}
    },

    /**
     * Handles the change of the selected record in the main store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.main.Store} store The store that has the selected record.
     * @param {Core.model.main.Model} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
		//Do not put within if() statement 
		var logMsg = (record != null)
			? ": id = " + record.get("id") + ", main = " + record.get("name")
			: "new main";
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
     * Handles the back button tap event. Navigates back to the main list view.
     */
    onBackButtonClick: function() {
        this.logger.debug("onBackButtonClick");
        this.backToPrevious(Core.config.global.Config.getPreviousView());
    },

    /**
     * Handles the save button tap event. Grabs the view's current main data and passes the record
     * to the functional save method.
     */
    onSaveMainButtonClick: function() {
        this.logger.debug("onSaveMainButtonClick");
        var main = this.getView().getRecord();
        var newMain = this.getView().getValues();
        // if this is a new main record, there's no id available
        if(main != null) {
            newMain.id = main.data.id;
        }
        this.saveMain(newMain);
    },

    /**
     * Handles the delete button tap event. Grabs the view's current main data and passes the record
     * to the functional delete method.
     */
    onDeleteButtonClick: function() {
        this.logger.debug("onDeleteButtonClick");
        var main = this.getView().getRecord();
	    if(main) {
		    this.deleteMain(main.data);
	    }
    }
});