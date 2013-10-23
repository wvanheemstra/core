/**
 * The booking detail mediator essentially fulfils the passive view pattern for the booking detail view.
 */
Ext.define("Core.mediator.touch.booking.detail.Mediator", {
    extend: "Core.mediator.touch.booking.base.Mediator",

    requires: [
        "Core.event.navigation.Event"
    ],

    // set up view event to mediator mapping
    control: {
    	titlebar: {
    		painted: "onPainted"
    	},    	
        backButton: {
            tap: "onBackButtonTap"
        },
        saveBookingButton: {
            tap: "onSaveBookingButtonTap"
        },
        deleteButton: {
            tap: "onDeleteButtonTap"
        }
    },

    // set up injected object event listening
    observe: {
        bookingStore: {
            selectedRecordChange: "onSelectedRecordChange"
        }
    },

    /**
     * Sets up global event bus handlers. Called by the parent superclass during the initialization phase.
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
        this.eventBus.addGlobalEventListener(Core.event.ui.Event.SET_UI_SUCCESS, this.onSetUISuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.CREATE_BOOKING_SUCCESS, this.onCreateBookingSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.UPDATE_BOOKING_SUCCESS, this.onUpdateBookingSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.booking.Event.DELETE_BOOKING_SUCCESS, this.onDeleteBookingSuccess, this);
    },

    /**
     * Functional method to save a booking. Determines if the booking is new and it needs to be
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
            this.getView().setMasked({
                xtype: "loadmask",
                message: msg
            });
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
            this.getView().setMasked({
                xtype: "loadmask",
                message: nineam.locale.LocaleManager.getProperty("bookingDetail.deletingBooking")
            });
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
        this.getView().setMasked(false);
        this.getView().setRecord(null);
        this.getView().reset();
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
        this.logger.debug("onCreateBookingSuccess");
        this.getView().setMasked(false);
        this.backToPrevious(Core.config.booking.Config.getPreviousView());
    },

    /**
     * Handles the update booking success application-level event. Navigates back to the booking list view.
     */
    onUpdateBookingSuccess: function() {
        this.logger.debug("onUpdateBookingSuccess");
        this.getView().setMasked(false);
        this.backToPrevious(Core.config.booking.Config.getPreviousView());
    },

    /**
     * Handles the delete booking success application-level event. Navigates back to the booking list view.
     */
    onDeleteBookingSuccess: function() {
        this.logger.debug("onDeleteBookingSuccess");
        this.reset();
        this.backToPrevious(Core.config.booking.Config.getPreviousView());
    },

    /**
     * Handles the change of the selected record in the booking store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.booking.Store} store The store that has the selected record.
     * @param {Core.model.booking.Model} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
        var logMsg = (record !== null)
            ? ": id = " + record.get("id") + ", booking = " + record.get("name")
            : "new booking";
        this.logger.debug("onSelectedRecordChange = " + logMsg);
        if (record) {
            this.getView().setRecord(record);
        } else {
            this.reset();
        }
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the back button tap event. Navigates back to the previous booking view.
     */
    onBackButtonTap: function() {
        this.logger.debug("onBackButtonTap");
        this.backToPrevious(Core.config.booking.Config.getPreviousView());
    },

    /**
     * Handles the save button tap event. Grabs the view's current booking data and passes the record
     * to the functional save method.
     */
    onSaveBookingButtonTap: function() {
        this.logger.debug("onSaveBookingButtonTap");
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
    onDeleteButtonTap: function() {
        this.logger.debug("onDeleteButtonTap");
        var booking = this.getView().getRecord();
	    if(booking) {
		    this.deleteBooking(booking.data);
	    }
    }
});