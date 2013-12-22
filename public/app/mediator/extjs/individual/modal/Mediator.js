/**
 * The individual modal mediator essentially fulfils the passive view pattern for the individual list view.
 */
Ext.define("Core.mediator.extjs.individual.modal.Mediator", {
    extend: "Core.mediator.extjs.individual.base.Mediator",

    // set up view event to mediator mapping
    control: {
	
	    closeButton: {
            tap: "onCloseButtonTap"
        },
    	toolbar: {
    		painted: "onPainted"
    	},	
        logoutButton: {
            click: "onLogoutButtonClick"
        },
        newIndividualButton: {
            click: "onNewIndividualButtonClick"
        },
        list: {
            itemclick: "onListSelect"
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
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_PERSON_SLIDE);
    },
	
    /**
     * Simple navigation method used to navigate back to the individual list view.
     */
    backToIndividualList: function() {
        this.logger.debug("backToIndividualList");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_PERSON_LIST);
    },

    /**
     * Simple navigation method used to navigate back to the individual tile view.
     */
    backToIndividualTile: function() {
        this.logger.debug("backToIndividualTile");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_PERSON_TILE);
    },	
	
    /**
     * Handles the set UI event. 
	 *
     * @param ui    The ui to be set.
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
     * Handles the painted application-level event. Set the individual list view
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
     * Handles the get individuals success application-level event.
     */
    onGetIndividualModalSuccess: function() {
		if(Core.config.individual.Config.getNextView()==='individualmodal') {
			this.logger.debug("onGetIndividualModalSuccess");
			this.getView().setLoading(false);
			//this.getList().getStore().loadRecords(this.individualStore.getRange());
		}
    },

    /**
     * Handles the get individuals failure event from the login controller.
     */
    onGetIndividualModalFailure: function() {
		if(Core.config.individual.Config.getNextView()==='individualmodal') {
			this.logger.debug("onGetIndividualModalFailure");
			this.getView().setLoading(false);
		}
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the close button tap event. Navigates back to the previous individual view.
     */
    onCloseButtonTap: function() {
        this.logger.debug("onCloseButtonTap");
        this.backToPrevious(Core.config.individual.Config.getPreviousView());
    }

});

