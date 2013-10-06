/**
 * The mock group service object.
 */
Ext.define("Core.service.group.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],
    
    /**
     * The mock service call.
     */
    createGroup: function(group) {
        this.logger.debug("createGroup");

        var response = {
            success: true,
            group: {
                kp_GroupID: this.getRandomInt(1000, 99999),
				GroupName: group.GroupName
            }
        };

        response = Ext.create("Core.model.group.Model", response.group);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updateGroup: function(group) {
        this.logger.debug("updateGroup: kp_GroupID = ", group.kp_GroupID);

        var response = {
            success: true,
            group: {
                kp_GroupID: group.kp_GroupID,
				GroupName: group.GroupName		
            }
        };

        response = Ext.create("Core.model.group.Model", response.group);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deleteGroup: function(group) {
        this.logger.debug("deleteGroup: kp_GroupID = ", group.kp_GroupID);

        var response = {
            success: true,
            group: {
                kp_GroupID: group.kp_GroupID,
				GroupName: group.GroupName
            }
        };

        response = Ext.create("Core.model.group.Model", response.group);
        return this.delayedSuccess(response);
    },
	
    /**
     * The mock service call.
     */
    readGroups: function() {
        this.logger.debug("readGroups");

        var response = {
            success: true,
            groups: [
                { kp_GroupID: 1,    GroupName: "Group One" },
                { kp_GroupID: 2,    GroupName: "Group Two" },
                { kp_GroupID: 3,    GroupName: "Group Three" }	
            ]
        };

        return this.delayedSuccess(response);
    }
});