/**
 * The main modal mediator essentially fulfils the passive view pattern for the main list view.
 */
Ext.define("Core.mediator.extjs.main.modal.Mediator", {
    extend: "Core.mediator.extjs.main.base.Mediator",

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
//        newMainButton: {
//            click: "onNewMainButtonClick"
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
     * Handles the painted application-level event. Set the main list view
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
     * Handles the get mains success application-level event.
     */
    onGetMainModalSuccess: function() {
		if(Core.config.global.Config.getNextView()==='mainmodal') {
			this.logger.debug("onGetMainModalSuccess");
			this.getView().setLoading(false);
			//this.getList().getStore().loadRecords(this.mainStore.getRange());
		}
    },

    /**
     * Handles the get mains failure event from the login controller.
     */
    onGetMainModalFailure: function() {
		if(Core.config.global.Config.getNextView()==='mainmodal') {
			this.logger.debug("onGetMainModalFailure");
			this.getView().setLoading(false);
		}
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the close button tap event. Navigates back to the previous main view.
     */
    onCloseButtonTap: function() {
        this.logger.debug("onCloseButtonTap");
        this.backToPrevious(Core.config.global.Config.getPreviousView());
    }

});

