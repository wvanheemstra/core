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
                { kp_EventID: 1,    EventName: "Atlas Ltd." },
                { kp_EventID: 2,    EventName: "Brachium Ltd." },
                { kp_EventID: 3,    EventName: "Cursa & Co." },
                { kp_EventID: 4,    EventName: "Diadem Corp." },
                { kp_EventID: 5,    EventName: "Electra & Sons" },
                { kp_EventID: 6,    EventName: "Fornacis Holding" },
                { kp_EventID: 7,    EventName: "Grafias Inc." },
                { kp_EventID: 8,    EventName: "Homam Enterprise" },
                { kp_EventID: 9,    EventName: "Izar Services" },
                { kp_EventID: 10,   EventName: "Jabbah Ltd." },
                { kp_EventID: 11,   EventName: "Kuma Corp." },
                { kp_EventID: 12,   EventName: "Lesath & Co." },
                { kp_EventID: 13,   EventName: "Matar Inc." },
                { kp_EventID: 14,   EventName: "Naos & Co." },
                { kp_EventID: 15,   EventName: "Oxyn Ltd." },
                { kp_EventID: 16,   EventName: "Propus Holding" },
                { kp_EventID: 17,   EventName: "Quebec Limited" },
                { kp_EventID: 18,   EventName: "Rana Productions" },
                { kp_EventID: 19,   EventName: "Salm Inc." },
                { kp_EventID: 20,   EventName: "Thabit Ltd." },
                { kp_EventID: 21,   EventName: "Universe Unlimited" },
                { kp_EventID: 22,   EventName: "Vega Stores" },
                { kp_EventID: 23,   EventName: "Wasat Inc." },
                { kp_EventID: 24,   EventName: "Xanadu & Sons" },
                { kp_EventID: 25,   EventName: "Yildun Industrial" },
                { kp_EventID: 26,   EventName: "Zibla & Co." }
            ]
        };

        return this.delayedSuccess(response);
    }
	
});