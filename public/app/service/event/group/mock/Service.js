/**
 * The mock event group service object.
 */
Ext.define("Core.service.event.group.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],

    /**
     * The mock service call.
     */
    createEventGroup: function(eventGroup) {
        this.logger.debug("createEventGroup");

        var response = {
            success: true,
            eventGroup: {
                kp_EventGroupID: this.getRandomInt(1000, 99999),
				kf_EventID: eventGroup.kf_EventID,
				kf_GroupID: eventGroup.kf_GroupID
            }
        };

        response = Ext.create("Core.model.event.group.Model", response.eventGroup);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updateEventGroup: function(eventGroup) {
        this.logger.debug("updateEventGroup: kp_EventGroupID = ", eventGroup.kp_EventGroupID);

        var response = {
            success: true,
            eventGroup: {
                kp_EventGroupID: eventGroup.kp_EventGroupID,
				kf_EventID: eventGroup.kf_EventID,
				kf_GroupID: eventGroup.kf_GroupID		
            }
        };

        response = Ext.create("Core.model.event.group.Model", response.eventGroup);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deleteEventGroup: function(eventGroup) {
        this.logger.debug("deleteEventGroup: kp_EventGroupID = ", eventGroup.kp_EventGroupID);

        var response = {
            success: true,
            eventGroup: {
                kp_EventGroupID: eventGroup.kp_EventGroupID,
				kf_EventID: eventGroup.kf_EventID,
				kf_GroupID: eventGroup.kf_GroupID
            }
        };

        response = Ext.create("Core.model.event.group.Model", response.eventGroup);
        return this.delayedSuccess(response);
    },
	
    /**
     * The mock service call.
     */
    readEventGroups: function() {
        this.logger.debug("readEventGroups");

        var response = {
            success: true,
            eventGroups: [
                { kp_EventGroupID: 1,    kf_EventID: 1,    kf_GroupID: 1  },
                { kp_EventGroupID: 2,    kf_EventID: 2,    kf_GroupID: 2 },
                { kp_EventGroupID: 3,    kf_EventID: 3,    kf_GroupID: 3 }	
            ]
        };

        return this.delayedSuccess(response);
    }
});