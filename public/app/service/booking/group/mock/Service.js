/**
 * The mock booking group service object.
 */
Ext.define("Core.service.booking.group.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],

    /**
     * The mock service call.
     */
    createBookingGroup: function(bookingGroup) {
        this.logger.debug("createBookingGroup");

        var response = {
            success: true,
            bookingGroup: {
                kp_BookingGroupID: this.getRandomInt(1000, 99999),
				kf_BookingID: bookingGroup.kf_BookingID,
				kf_GroupID: bookingGroup.kf_GroupID
            }
        };

        response = Ext.create("Core.model.booking.group.Model", response.bookingGroup);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updateBookingGroup: function(bookingGroup) {
        this.logger.debug("updateBookingGroup: kp_BookingGroupID = ", bookingGroup.kp_BookingGroupID);

        var response = {
            success: true,
            bookingGroup: {
                kp_BookingGroupID: bookingGroup.kp_BookingGroupID,
				kf_BookingID: bookingGroup.kf_BookingID,
				kf_GroupID: bookingGroup.kf_GroupID		
            }
        };

        response = Ext.create("Core.model.booking.group.Model", response.bookingGroup);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deleteBookingGroup: function(bookingGroup) {
        this.logger.debug("deleteBookingGroup: kp_BookingGroupID = ", bookingGroup.kp_BookingGroupID);

        var response = {
            success: true,
            bookingGroup: {
                kp_BookingGroupID: bookingGroup.kp_BookingGroupID,
				kf_BookingID: bookingGroup.kf_BookingID,
				kf_GroupID: bookingGroup.kf_GroupID
            }
        };

        response = Ext.create("Core.model.booking.group.Model", response.bookingGroup);
        return this.delayedSuccess(response);
    },
	
    /**
     * The mock service call.
     */
    readBookingGroups: function() {
        this.logger.debug("readBookingGroups");

        var response = {
            success: true,
            bookingGroups: [
                { kp_BookingGroupID: 1,    kf_BookingID: 1,    kf_GroupID: 1  },
                { kp_BookingGroupID: 2,    kf_BookingID: 2,    kf_GroupID: 2 },
                { kp_BookingGroupID: 3,    kf_BookingID: 3,    kf_GroupID: 3 }	
            ]
        };

        return this.delayedSuccess(response);
    }
});