/**
 * The mock booking service object.
 */
Ext.define("Core.service.booking.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],

    /**
     * The mock service call.
     */
    getBookingSlide: function() {
        this.logger.debug("getBookingSlide");

        var response = {
            success: true,
            bookingSlide: [
                { id: 0,    BookingName: "Alfa" },
                { id: 1,    BookingName: "Bravo" },
                { id: 2,    BookingName: "Charlie" },
                { id: 3,    BookingName: "Delta" },
                { id: 4,    BookingName: "Echo" },
                { id: 5,    BookingName: "Foxtrot" },
                { id: 6,    BookingName: "Golf" },
                { id: 7,    BookingName: "Hotel" },
                { id: 8,    BookingName: "India" },
                { id: 9,    BookingName: "Juliet" },
                { id: 10,   BookingName: "Kilo" },
                { id: 11,   BookingName: "Lima" },
                { id: 12,   BookingName: "Mike" },
                { id: 13,   BookingName: "November" },
                { id: 14,   BookingName: "Oscar" },
                { id: 15,   BookingName: "Papa" },
                { id: 16,   BookingName: "Quebec" },                
                { id: 17,   BookingName: "Romeo" },
                { id: 18,   BookingName: "Sierra" },
                { id: 19,   BookingName: "Tango" },
                { id: 20,   BookingName: "Uniform" },              
                { id: 21,   BookingName: "Victor" },
                { id: 22,   BookingName: "Whiskey" },
                { id: 23,   BookingName: "X-ray" },                
                { id: 24,   BookingName: "Yankee" },
                { id: 25,   BookingName: "Zulu" }
            ]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    getBookingList: function() {
        this.logger.debug("getBookingList");

        var response = {
            success: true,
            bookingList: [
                { kp_BookingID: 0,    BookingName: "Alfa" },
                { kp_BookingID: 1,    BookingName: "Bravo" },
                { kp_BookingID: 2,    BookingName: "Charlie" },
                { kp_BookingID: 3,    BookingName: "Delta" },
                { kp_BookingID: 4,    BookingName: "Echo" },
                { kp_BookingID: 5,    BookingName: "Foxtrot" },
                { kp_BookingID: 6,    BookingName: "Golf" },
                { kp_BookingID: 7,    BookingName: "Hotel" },
                { kp_BookingID: 8,    BookingName: "India" },
                { kp_BookingID: 9,    BookingName: "Juliet" },
                { kp_BookingID: 10,   BookingName: "Kilo" },
                { kp_BookingID: 11,   BookingName: "Lima" },
                { kp_BookingID: 12,   BookingName: "Mike" },
                { kp_BookingID: 13,   BookingName: "November" },
                { kp_BookingID: 14,   BookingName: "Oscar" },
                { kp_BookingID: 15,   BookingName: "Papa" },
                { kp_BookingID: 16,   BookingName: "Quebec" },                
                { kp_BookingID: 17,   BookingName: "Romeo" },
                { kp_BookingID: 18,   BookingName: "Sierra" },
                { kp_BookingID: 19,   BookingName: "Tango" },
                { kp_BookingID: 20,   BookingName: "Uniform" },              
                { kp_BookingID: 21,   BookingName: "Victor" },
                { kp_BookingID: 22,   BookingName: "Whiskey" },
                { kp_BookingID: 23,   BookingName: "X-ray" },                
                { kp_BookingID: 24,   BookingName: "Yankee" },
                { kp_BookingID: 25,   BookingName: "Zulu" }
            ]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    getBookingTile: function() {
        this.logger.debug("getBookingTile");

        var response = {
            success: true,
            bookingTile: [
                { id: 0,    BookingName: "Alfa" },
                { id: 1,    BookingName: "Bravo" },
                { id: 2,    BookingName: "Charlie" },
                { id: 3,    BookingName: "Delta" },
                { id: 4,    BookingName: "Echo" },
                { id: 5,    BookingName: "Foxtrot" },
                { id: 6,    BookingName: "Golf" },
                { id: 7,    BookingName: "Hotel" },
                { id: 8,    BookingName: "India" },
                { id: 9,    BookingName: "Juliet" },
                { id: 10,   BookingName: "Kilo" },
                { id: 11,   BookingName: "Lima" },
                { id: 12,   BookingName: "Mike" },
                { id: 13,   BookingName: "November" },
                { id: 14,   BookingName: "Oscar" },
                { id: 15,   BookingName: "Papa" },
                { id: 16,   BookingName: "Quebec" },                
                { id: 17,   BookingName: "Romeo" },
                { id: 18,   BookingName: "Sierra" },
                { id: 19,   BookingName: "Tango" },
                { id: 20,   BookingName: "Uniform" },              
                { id: 21,   BookingName: "Victor" },
                { id: 22,   BookingName: "Whiskey" },
                { id: 23,   BookingName: "X-ray" },                
                { id: 24,   BookingName: "Yankee" },
                { id: 25,   BookingName: "Zulu" }
            ]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    createBooking: function(booking) {
        this.logger.debug("createBooking");

        var response = {
            success: true,
            booking: {
                id: this.getRandomInt(1000, 99999),
                BookingName: booking.BookingName
            }
        };

        response = Ext.create("Core.model.booking.Model", response.booking);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updateBooking: function(booking) {
        this.logger.debug("updateBooking: id = ", booking.id);

        var response = {
            success: true,
            booking: {
                id: booking.id,
                BookingName: booking.BookingName
            }
        };

        response = Ext.create("Core.model.booking.Model", response.booking);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deleteBooking: function(booking) {
        this.logger.debug("deleteBooking: id = ", booking.id);

        var response = {
            success: true,
            booking: {
                id: booking.id,
                BookingName: booking.BookingName
            }
        };

        response = Ext.create("Core.model.booking.Model", response.booking);
        return this.delayedSuccess(response);
    }, 

    /**
     * The mock service call.
     */
    readBookings: function() {
        this.logger.debug("readBookings");

        var response = {
            success: true,
            bookings: [
                { kp_BookingID: 0,    BookingName: "Alfa" },
                { kp_BookingID: 1,    BookingName: "Bravo" },
                { kp_BookingID: 2,    BookingName: "Charlie" },
                { kp_BookingID: 3,    BookingName: "Delta" },
                { kp_BookingID: 4,    BookingName: "Echo" },
                { kp_BookingID: 5,    BookingName: "Foxtrot" },
                { kp_BookingID: 6,    BookingName: "Golf" },
                { kp_BookingID: 7,    BookingName: "Hotel" },
                { kp_BookingID: 8,    BookingName: "India" },
                { kp_BookingID: 9,    BookingName: "Juliet" },
                { kp_BookingID: 10,   BookingName: "Kilo" },
                { kp_BookingID: 11,   BookingName: "Lima" },
                { kp_BookingID: 12,   BookingName: "Mike" },
                { kp_BookingID: 13,   BookingName: "November" },
                { kp_BookingID: 14,   BookingName: "Oscar" },
                { kp_BookingID: 15,   BookingName: "Papa" },
                { kp_BookingID: 16,   BookingName: "Quebec" },                
                { kp_BookingID: 17,   BookingName: "Romeo" },
                { kp_BookingID: 18,   BookingName: "Sierra" },
                { kp_BookingID: 19,   BookingName: "Tango" },
                { kp_BookingID: 20,   BookingName: "Uniform" },              
                { kp_BookingID: 21,   BookingName: "Victor" },
                { kp_BookingID: 22,   BookingName: "Whiskey" },
                { kp_BookingID: 23,   BookingName: "X-ray" },                
                { kp_BookingID: 24,   BookingName: "Yankee" },
                { kp_BookingID: 25,   BookingName: "Zulu" }
            ]
        };

        return this.delayedSuccess(response);
    }      
});