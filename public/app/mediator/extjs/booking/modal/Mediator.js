/**
 * The booking modal mediator essentially fulfils the passive view pattern for the booking list view.
 */
Ext.define("Core.mediator.extjs.booking.modal.Mediator", {
    extend: "Core.mediator.extjs.booking.base.Mediator",

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
//        newBookingButton: {
//            click: "onNewBookingButtonClick"
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
     * Handles the painted application-level event. Set the booking list view
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
        this.setUI(Core.config.booking.Config.getUi());
    },	
	
    /**
     * Handles the get bookings success application-level event.
     */
    onGetBookingModalSuccess: function() {
		if(Core.config.booking.Config.getNextView()==='bookingmodal') {
			this.logger.debug("onGetBookingModalSuccess");
			this.getView().setLoading(false);
			//this.getList().getStore().loadRecords(this.bookingStore.getRange());
		}
    },

    /**
     * Handles the get bookings failure event from the login controller.
     */
    onGetBookingModalFailure: function() {
		if(Core.config.booking.Config.getNextView()==='bookingmodal') {
			this.logger.debug("onGetBookingModalFailure");
			this.getView().setLoading(false);
		}
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

