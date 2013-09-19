/**
 * The organisation modal mediator essentially fulfils the passive view pattern for the organisation list view.
 */
Ext.define("Core.mediator.extjs.organisation.modal.Mediator", {
    extend: "Core.mediator.extjs.organisation.base.Mediator",

    // set up view event to mediator mapping
    control: {
	
	    closeButton: {
            tap: "onCloseButtonTap"
        }	
	
//    	toolbar: {
//    		painted: "onPainted"
//    	},	
//        logoutButton: {
//            click: "onLogoutButtonClick"
//        },
//        newOrganisationButton: {
//            click: "onNewOrganisationButtonClick"
//        },
//        list: {
//            itemclick: "onListSelect"
//        }
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
     * Handles the painted application-level event. Set the organisation list view
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
     * Handles the get organisations success application-level event.
     */
    onGetOrganisationModalSuccess: function() {
		if(Core.config.organisation.Config.getNextView()==='organisationmodal') {
			this.logger.debug("onGetOrganisationModalSuccess");
			this.getView().setLoading(false);
			//this.getList().getStore().loadRecords(this.organisationStore.getRange());
		}
    },

    /**
     * Handles the get organisations failure event from the login controller.
     */
    onGetOrganisationModalFailure: function() {
		if(Core.config.organisation.Config.getNextView()==='organisationmodal') {
			this.logger.debug("onGetOrganisationModalFailure");
			this.getView().setLoading(false);
		}
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the close button tap event. Navigates back to the previous organisation view.
     */
    onCloseButtonTap: function() {
        this.logger.debug("onCloseButtonTap");
        this.backToPrevious(Core.config.organisation.Config.getPreviousView());
    }

});

