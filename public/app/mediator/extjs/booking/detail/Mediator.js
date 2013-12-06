/**
 * The booking detail mediator essentially fulfils the passive view pattern for the booking detail view.
 */
Ext.define("Core.mediator.extjs.booking.detail.Mediator", {
    extend: "Core.mediator.extjs.booking.base.Mediator",

    // set up view event to mediator mapping
    control: {
    	toolbar: {
    		painted: "onPainted"
    	},	
        backButton: {
            click: "onBackButtonClick"
        },
        saveBookingButton: {
            click: "onSaveBookingButtonClick"
        },
        deleteButton: {
            click: "onDeleteButtonClick"
        }
    },

    // set up injected object event listening
    observe: {
        bookingStore: {
            selectedRecordChange: "onSelectedRecordChange"
        }
    },

    /**
     * Functional method to save an booking. Determines if the booking is new and it needs to be
     * created, or existing and needs to be updated and fires off the corresponding application-level event.
     *
     * @param booking    The booking is the data model for the item in the list currently selected.
     */
    saveBooking: function(booking) {
        this.logger.debug("saveBooking");
        var evt;
        var msg;
        if(booking !== null) {
            var id = booking.id;
            if( (id !== null) && (id !== "") ) {
                evt = Ext.create("Core.event.booking.Event", Core.event.booking.Event.UPDATE_BOOKING);
                msg = nineam.locale.LocaleManager.getProperty("bookingDetail.updatingBooking");
            } else {
                evt = Ext.create("Core.event.booking.Event", Core.event.booking.Event.CREATE_BOOKING);
                msg = nineam.locale.LocaleManager.getProperty("bookingDetail.creatingBooking");
            }
            this.getView().setLoading(msg);
            evt.booking = booking;
            this.eventBus.dispatchGlobalEvent(evt);
        }
    },

    /**
     * Functional method to delete a booking. Fires off the corresponding application-level event.
     *
     * @param booking    The booking is the data model for the item in the list currently selected.
     */
    deleteBooking: function(booking) {
        this.logger.debug("deleteBooking");
        if(booking !== null) {
            this.getView().setLoading(nineam.locale.LocaleManager.getProperty("bookingDetail.deletingBooking"));
            var evt = Ext.create("Core.event.booking.Event", Core.event.booking.Event.DELETE_BOOKING);
            evt.booking = booking;
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
     * Handles the painted application-level event. Set the booking detail view
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
     * Handles the create booking success application-level event. Navigates back to the booking list view.
     */
    onCreateBookingSuccess: function() {
		if(Core.config.booking.Config.getCurrentView()==='bookingdetail') {
			this.logger.debug("onCreateBookingSuccess");
			this.getView().setLoading(false);
			this.backToPrevious(Core.config.booking.Config.getPreviousView());
		}
    },

    /**
     * Handles the update booking success application-level event. Navigates back to the booking list view.
     */
    onUpdateBookingSuccess: function() {
		if(Core.config.booking.Config.getCurrentView()==='bookingdetail') {	
			this.logger.debug("onUpdateBookingFailure");
			this.getView().setLoading(false);
			this.backToPrevious(Core.config.booking.Config.getPreviousView());
		}
    },

    /**
     * Handles the delete booking success application-level event. Navigates back to the booking list view.
     */
    onDeleteBookingSuccess: function() {
		if(Core.config.booking.Config.getCurrentView()==='bookingdetail') {
			this.logger.debug("onDeleteBookingSuccess");
			this.reset();
			this.backToPrevious(Core.config.booking.Config.getPreviousView());
		}
    },

    /**
     * Handles the change of the selected record in the booking store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.booking.Store} store The store that has the selected record.
     * @param {Core.model.booking.Model} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
		//Do not put within if() statement 
		var logMsg = (record !== null)
			? ": kp_BookingID = " + record.get("kp_BookingID") + ", BookingName = " + record.get("BookingName")
			: "new booking";
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
     * Handles the back button tap event. Navigates back to the booking list view.
     */
    onBackButtonClick: function() {
        this.logger.debug("onBackButtonClick");
        this.backToPrevious(Core.config.booking.Config.getPreviousView());
    },

    /**
     * Handles the save button tap event. Grabs the view's current booking data and passes the record
     * to the functional save method.
     */
    onSaveBookingButtonClick: function() {
        this.logger.debug("onSaveBookingButtonClick");
        var booking = this.getView().getRecord();
        var newBooking = this.getView().getValues();
        // if this is a new booking record, there's no id available
        if(booking !== null) {
            newBooking.id = booking.data.id;
        }
        this.saveBooking(newBooking);
    },

    /**
     * Handles the delete button tap event. Grabs the view's current booking data and passes the record
     * to the functional delete method.
     */
    onDeleteButtonClick: function() {
        this.logger.debug("onDeleteButtonClick");
        var booking = this.getView().getRecord();
	    if(booking) {
		    this.deleteBooking(booking.data);
	    }
    }
});