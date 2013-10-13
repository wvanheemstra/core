/**
 * The event modal mediator essentially fulfils the passive view pattern for the event modal view.
 */
Ext.define("Core.mediator.touch.event.modal.Mediator", {
    extend: "Core.mediator.touch.event.base.Mediator",

    requires: [
        // all set in the base mediator
    ],	
	
    // set up view event to mediator mapping
    control: {
	    closeButton: {
            tap: "onCloseButtonTap"
        },
		titlebar: {
			// empty, but used by setTitle
		}
//        logoutButton: {
//            tap: "onLogoutButtonTap"
//        },
//        newEventButton: {
//            tap: "onNewEventButtonTap"
//        },
//        searchInput :{
//            keyup:          "onSearchKeyUp",
//            clearicontap:   "onSearchClearIconTap"
//        }
//        list: {
//            disclose: "onListDisclose"
//        }
    },

    /**
     * Sets up global event bus handlers. Called by the parent superclass during the initialization phase.
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
        this.eventBus.addGlobalEventListener(Core.event.ui.Event.SET_UI_SUCCESS, this.onSetUISuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.title.Event.SET_TITLE_SUCCESS, this.onSetTitleSuccess, this);	
        this.eventBus.addGlobalEventListener(Core.event.url.Event.SET_URL_SUCCESS, this.onSetURLSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.event.Event.GET_EVENT_MODAL_SUCCESS, this.onGetEventModalSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.event.Event.GET_EVENT_MODAL_FAILURE, this.onGetEventModalFailure, this);
    },

    /**
     * Simple navigation method used to navigate back, depending on the previous view.
	 *
	 * @param view	The view to go back to.
     */
    backToPrevious: function(view) {
    	this.logger.debug("backToPrevious view: " + view);
        switch(view) {
            case 'eventslide':
            	this.backToEventSlide();
                break;		
            case 'eventlist':
            	this.backToEventList();
                break;
            case 'eventtile':
            	this.backToEventTile();
                break; 				
        }
    },
	
    /**
     * Simple navigation method used to navigate back to the event slide view.
     */
    backToEventSlide: function() {
        this.logger.debug("backToEventSlide");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_EVENT_SLIDE);
    },
	
    /**
     * Simple navigation method used to navigate back to the event list view.
     */
    backToEventList: function() {
        this.logger.debug("backToEventList");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_EVENT_LIST);
    },

    /**
     * Simple navigation method used to navigate back to the event tile view.
     */
    backToEventTile: function() {
        this.logger.debug("backToEventTile");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_EVENT_TILE);
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

    /**
     * Handles the set Title event. 
     *
     * @param title    The title to set.	 
     */
    setTitle: function(title) {
    	this.logger.debug("setTitle: title = " + title);
		for ( var i=0; i<this.getView().items.length; i++)
        {
			if(this.getView().items.getAt(i).getItemId() == "titlebar"){
				this.getView().items.getAt(i).setTitle(title);
			}
        }
    }, 

    /**
     * Handles the set URL event. 
     *
     * @param url    The url to set.	 
     */
    setURL: function(url) {
    	this.logger.debug("setURL: url = " + url);
		var view = this.getView();
		view.setSrc(url);
		// to do
    }, 
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the painted application-level event. 
     */    
    onPainted: function() {
	    this.logger.debug("onPainted");

		// TEMP fix: 
		// this.onSetTitleSuccess();
    },

    /**
     * Handles the set ui success application-level event. Update the components for the ui.
     */
    onSetUISuccess: function() {
        this.logger.debug("onSetUISuccess");
        this.setUI(Core.config.event.Config.getUi());
    },

    /**
     * Handles the set title success application-level event. Update the components for the title.
     */
    onSetTitleSuccess: function() {
        this.logger.debug("onSetTitleSuccess");
        this.setTitle(Core.config.event.Config.getTitle());
    },	

    /**
     * Handles the set url success application-level event. Update the components for the url.
     */
    onSetURLSuccess: function() {
        this.logger.debug("onSetURLSuccess");
		var url = Core.config.event.Config.getUrl();
        this.setURL(url);
    },
	
    /**
     * Handles the get events application-level event.
     */
    onGetEventModalSuccess: function() {
        this.logger.debug("onGetEventModalSuccess");
        this.getView().setMasked(false);
        //this.getList().setStore(this.eventStore);
    },

    /**
     * Handles the get events failure event from the login controller.
     */
    onGetEventModalFailure: function() {
        this.logger.debug("onGetEventModalFailure");
        this.getView().setMasked(false);
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the close button tap event. Navigates back to the previous event view.
     */
    onCloseButtonTap: function() {
        this.logger.debug("onCloseButtonTap");
        this.backToPrevious(Core.config.event.Config.getPreviousView());
    }	
	
});