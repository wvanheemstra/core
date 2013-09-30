/**
 * The mock date service object.
 */
Ext.define("Core.service.date.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],
    
    /**
     * The mock service call.
     */
    createDate: function(date) {
        this.logger.debug("createDate");

        var response = {
            success: true,
            date: {
                kp_DateID: this.getRandomInt(1000, 99999),
				DateStart: date.DateStart,
				DateFinish: date.DateFinish
            }
        };

        response = Ext.create("Core.model.date.Model", response.date);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updateDate: function(date) {
        this.logger.debug("updateDate: kp_DateID = ", date.kp_DateID);

        var response = {
            success: true,
            date: {
                kp_DateID: date.kp_DateID,
				DateStart: date.DateStart,
				DateFinish: date.DateFinish		
            }
        };

        response = Ext.create("Core.model.date.Model", response.date);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deleteDate: function(date) {
        this.logger.debug("deleteDate: kp_DateID = ", date.kp_DateID);

        var response = {
            success: true,
            date: {
                kp_DateID: date.kp_DateID,
				DateStart: date.DateStart,
				DateFinish: date.DateFinish
            }
        };

        response = Ext.create("Core.model.date.Model", response.date);
        return this.delayedSuccess(response);
    },
	
    /**
     * The mock service call.
     */
    readDates: function() {
        this.logger.debug("readDates");

        var response = {
            success: true,
            dates: [
                { kp_DateID: 1,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
                { kp_DateID: 2,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 3,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 4,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 5,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 6,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 7,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 8,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 9,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 10,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 11,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 12,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 13,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 14,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 15,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 16,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 17,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 18,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 19,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 20,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 21,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 22,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 23,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 24,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 25,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" },
				{ kp_DateID: 26,    DateStart: "09/29/1980",    DateFinish: "09/29/2080" }
				
            ]
        };

        return this.delayedSuccess(response);
    }
});