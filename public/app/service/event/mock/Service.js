/**
 * The mock event service object.
 */
Ext.define("Core.service.event.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],
    
    /**
     * The mock service call.
     */
    createEvent: function(event) {
        this.logger.debug("createEvent");

        var response = {
            success: true,
            event: {
                kp_EventID: this.getRandomInt(1000, 99999),
                EventName: event.EventName			
            }
        };

        response = Ext.create("Core.model.event.Model", response.event);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updateEvent: function(event) {
        this.logger.debug("updateEvent: kp_EventID = " + event.kp_EventID);

        var response = {
            success: true,
            event: {
                kp_EventID: event.kp_EventID,
                EventName: event.EventName		
            }
        };

        response = Ext.create("Core.model.event.Model", response.event);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deleteEvent: function(event) {
        this.logger.debug("deleteEvent: kp_EventID = " + event.kp_EventID);

        var response = {
            success: true,
            event: {
                kp_EventID: event.kp_EventID,
                EventName: event.EventName
            }
        };

        response = Ext.create("Core.model.event.Model", response.event);
        return this.delayedSuccess(response);
    }, 

    /**
     * The mock service call.
     */
    readEvents: function() {
        this.logger.debug("readEvents");

        var response = {
            success: true,
            events: [
                { kp_EventID: 1,    EventName: "Asteroid Day" },
                { kp_EventID: 2,    EventName: "Brothers Party" },
                { kp_EventID: 3,    EventName: "Comet Fest" },
                { kp_EventID: 4,    EventName: "Diamond Day" },
                { kp_EventID: 5,    EventName: "Earth Festival" },
                { kp_EventID: 6,    EventName: "Ft. Pierce Day" },
                { kp_EventID: 7,    EventName: "Grand Canyon Party" },
                { kp_EventID: 8,    EventName: "Hodges Gardens Party" },
                { kp_EventID: 9,    EventName: "Island Holiday" },
                { kp_EventID: 10,   EventName: "Julian Fest" },
                { kp_EventID: 11,   EventName: "Kimba Fest" },
                { kp_EventID: 12,   EventName: "Lunar Eclipse" },
                { kp_EventID: 13,   EventName: "Mid-South Gaze" },
                { kp_EventID: 14,   EventName: "Northwoods Fest" },
                { kp_EventID: 15,   EventName: "Orange Blossom Special Party" },
                { kp_EventID: 16,   EventName: "Party Galore" },
                { kp_EventID: 17,   EventName: "Quintessential Event" },
                { kp_EventID: 18,   EventName: "Roman Fest" },
                { kp_EventID: 19,   EventName: "Solar Event" },
                { kp_EventID: 20,   EventName: "Texas Party" },
                { kp_EventID: 21,   EventName: "Universal Festival" },
                { kp_EventID: 22,   EventName: "Vision Fest" },
                { kp_EventID: 23,   EventName: "Winter Party" },
                { kp_EventID: 24,   EventName: "X-Treme Festival" },
                { kp_EventID: 25,   EventName: "Youngster Day" },
                { kp_EventID: 26,   EventName: "Zone One Event" }
            ]
        };

        return this.delayedSuccess(response);
    }
	
});