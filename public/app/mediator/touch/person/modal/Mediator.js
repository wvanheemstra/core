/**
 * The person modal mediator essentially fulfils the passive view pattern for the person modal view.
 */
Ext.define("Core.mediator.touch.person.modal.Mediator", {
    extend: "Core.mediator.touch.person.base.Mediator",

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
//        newPersonButton: {
//            tap: "onNewPersonButtonTap"
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
        this.eventBus.addGlobalEventListener(Core.event.person.Event.GET_PERSON_MODAL_SUCCESS, this.onGetPersonModalSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.GET_PERSON_MODAL_FAILURE, this.onGetPersonModalFailure, this);
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
        this.setUI(Core.config.global.Config.getUi());
    },

    /**
     * Handles the set title success application-level event. Update the components for the title.
     */
    onSetTitleSuccess: function() {
        this.logger.debug("onSetTitleSuccess");
        this.setTitle(Core.config.global.Config.getTitle());
    },	

    /**
     * Handles the set url success application-level event. Update the components for the url.
     */
    onSetURLSuccess: function() {
        this.logger.debug("onSetURLSuccess");
		var url = Core.config.global.Config.getUrl();
        this.setURL(url);
    },
	
    /**
     * Handles the get persons application-level event.
     */
    onGetPersonModalSuccess: function() {
        this.logger.debug("onGetPersonModalSuccess");
        this.getView().setMasked(false);
        //this.getList().setStore(this.personStore);
    },

    /**
     * Handles the get persons failure event from the login controller.
     */
    onGetPersonModalFailure: function() {
        this.logger.debug("onGetPersonModalFailure");
        this.getView().setMasked(false);
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the close button tap event. Navigates back to the previous person view.
     */
    onCloseButtonTap: function() {
        this.logger.debug("onCloseButtonTap");
        this.backToPrevious(Core.config.global.Config.getPreviousView());
    }	
	
});