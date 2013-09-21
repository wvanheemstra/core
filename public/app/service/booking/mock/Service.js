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
                { id: 0,    name: "Alfa" },
                { id: 1,    name: "Bravo" },
                { id: 2,    name: "Charlie" },
                { id: 3,    name: "Delta" },
                { id: 4,    name: "Echo" },
                { id: 5,    name: "Foxtrot" },
                { id: 6,    name: "Golf" },
                { id: 7,    name: "Hotel" },
                { id: 8,    name: "India" },
                { id: 9,    name: "Juliet" },
                { id: 10,   name: "Kilo" },
                { id: 11,   name: "Lima" },
                { id: 12,   name: "Mike" },
                { id: 13,   name: "November" },
                { id: 14,   name: "Oscar" },
                { id: 15,   name: "Papa" },
                { id: 16,   name: "Quebec" },                
                { id: 17,   name: "Romeo" },
                { id: 18,   name: "Sierra" },
                { id: 19,   name: "Tango" },
                { id: 20,   name: "Uniform" },              
                { id: 21,   name: "Victor" },
                { id: 22,   name: "Whiskey" },
                { id: 23,   name: "X-ray" },                
                { id: 24,   name: "Yankee" },
                { id: 25,   name: "Zulu" }
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
                { id: 0,    name: "Alfa" },
                { id: 1,    name: "Bravo" },
                { id: 2,    name: "Charlie" },
                { id: 3,    name: "Delta" },
                { id: 4,    name: "Echo" },
                { id: 5,    name: "Foxtrot" },
                { id: 6,    name: "Golf" },
                { id: 7,    name: "Hotel" },
                { id: 8,    name: "India" },
                { id: 9,    name: "Juliet" },
                { id: 10,   name: "Kilo" },
                { id: 11,   name: "Lima" },
                { id: 12,   name: "Mike" },
                { id: 13,   name: "November" },
                { id: 14,   name: "Oscar" },
                { id: 15,   name: "Papa" },
                { id: 16,   name: "Quebec" },                
                { id: 17,   name: "Romeo" },
                { id: 18,   name: "Sierra" },
                { id: 19,   name: "Tango" },
                { id: 20,   name: "Uniform" },              
                { id: 21,   name: "Victor" },
                { id: 22,   name: "Whiskey" },
                { id: 23,   name: "X-ray" },                
                { id: 24,   name: "Yankee" },
                { id: 25,   name: "Zulu" }
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
                { id: 0,    name: "Alfa" },
                { id: 1,    name: "Bravo" },
                { id: 2,    name: "Charlie" },
                { id: 3,    name: "Delta" },
                { id: 4,    name: "Echo" },
                { id: 5,    name: "Foxtrot" },
                { id: 6,    name: "Golf" },
                { id: 7,    name: "Hotel" },
                { id: 8,    name: "India" },
                { id: 9,    name: "Juliet" },
                { id: 10,   name: "Kilo" },
                { id: 11,   name: "Lima" },
                { id: 12,   name: "Mike" },
                { id: 13,   name: "November" },
                { id: 14,   name: "Oscar" },
                { id: 15,   name: "Papa" },
                { id: 16,   name: "Quebec" },                
                { id: 17,   name: "Romeo" },
                { id: 18,   name: "Sierra" },
                { id: 19,   name: "Tango" },
                { id: 20,   name: "Uniform" },              
                { id: 21,   name: "Victor" },
                { id: 22,   name: "Whiskey" },
                { id: 23,   name: "X-ray" },                
                { id: 24,   name: "Yankee" },
                { id: 25,   name: "Zulu" }
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
                name: booking.name
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
                name: booking.name
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
                name: booking.name
            }
        };

        response = Ext.create("Core.model.booking.Model", response.booking);
        return this.delayedSuccess(response);
    }      
});