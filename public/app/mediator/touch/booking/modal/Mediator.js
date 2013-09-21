/**
 * The booking modal mediator essentially fulfils the passive view pattern for the booking modal view.
 */
Ext.define("Core.mediator.touch.booking.modal.Mediator", {
    extend: "Core.mediator.touch.booking.base.Mediator",

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
//        newBookingButton: {
//            tap: "onNewBookingButtonTap"
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
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.GET_BOOKING_MODAL_SUCCESS, this.onGetBookingModalSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.GET_BOOKING_MODAL_FAILURE, this.onGetBookingModalFailure, this);
    },

    /**
     * Simple navigation method used to navigate back, depending on the previous view.
	 *
	 * @param view	The view to go back to.
     */
    backToPrevious: function(view) {
    	this.logger.debug("backToPrevious view: " + view);
        switch(view) {
            case 'bookingslide':
            	this.backToBookingSlide();
                break;		
            case 'bookinglist':
            	this.backToBookingList();
                break;
            case 'bookingtile':
            	this.backToBookingTile();
                break; 				
        }
    },
	
    /**
     * Simple navigation method used to navigate back to the booking slide view.
     */
    backToBookingSlide: function() {
        this.logger.debug("backToBookingSlide");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_BOOKING_SLIDE);
    },
	
    /**
     * Simple navigation method used to navigate back to the booking list view.
     */
    backToBookingList: function() {
        this.logger.debug("backToBookingList");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_BOOKING_LIST);
    },

    /**
     * Simple navigation method used to navigate back to the booking tile view.
     */
    backToBookingTile: function() {
        this.logger.debug("backToBookingTile");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_BOOKING_TILE);
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
        this.setUI(Core.config.booking.Config.getUi());
    },

    /**
     * Handles the set title success application-level event. Update the components for the title.
     */
    onSetTitleSuccess: function() {
        this.logger.debug("onSetTitleSuccess");
        this.setTitle(Core.config.booking.Config.getTitle());
    },	

    /**
     * Handles the set url success application-level event. Update the components for the url.
     */
    onSetURLSuccess: function() {
        this.logger.debug("onSetURLSuccess");
		var url = Core.config.booking.Config.getUrl();
        this.setURL(url);
    },
	
    /**
     * Handles the get bookings application-level event.
     */
    onGetBookingModalSuccess: function() {
        this.logger.debug("onGetBookingModalSuccess");
        this.getView().setMasked(false);
        //this.getList().setStore(this.bookingStore);
    },

    /**
     * Handles the get bookings failure event from the login controller.
     */
    onGetBookingModalFailure: function() {
        this.logger.debug("onGetBookingModalFailure");
        this.getView().setMasked(false);
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the close button tap event. Navigates back to the previous booking view.
     */
    onCloseButtonTap: function() {
        this.logger.debug("onCloseButtonTap");
        this.backToPrevious(Core.config.booking.Config.getPreviousView());
    }	
	
});