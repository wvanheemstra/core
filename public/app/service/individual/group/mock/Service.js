/**
 * The mock individual group service object.
 */
Ext.define("Core.service.individual.group.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],

    /**
     * The mock service call.
     */
    createIndividualGroup: function(individualGroup) {
        this.logger.debug("createIndividualGroup");

        var response = {
            success: true,
            individualGroup: {
                kp_IndividualGroupID: this.getRandomInt(1000, 99999),
				kf_IndividualID: individualGroup.kf_IndividualID,
				kf_GroupID: individualGroup.kf_GroupID
            }
        };

        response = Ext.create("Core.model.individual.group.Model", response.individualGroup);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updateIndividualGroup: function(individualGroup) {
        this.logger.debug("updateIndividualGroup: kp_IndividualGroupID = ", individualGroup.kp_IndividualGroupID);

        var response = {
            success: true,
            individualGroup: {
                kp_IndividualGroupID: individualGroup.kp_IndividualGroupID,
				kf_IndividualID: individualGroup.kf_IndividualID,
				kf_GroupID: individualGroup.kf_GroupID		
            }
        };

        response = Ext.create("Core.model.individual.group.Model", response.individualGroup);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deleteIndividualGroup: function(individualGroup) {
        this.logger.debug("deleteIndividualGroup: kp_IndividualGroupID = ", individualGroup.kp_IndividualGroupID);

        var response = {
            success: true,
            individualGroup: {
                kp_IndividualGroupID: individualGroup.kp_IndividualGroupID,
				kf_IndividualID: individualGroup.kf_IndividualID,
				kf_GroupID: individualGroup.kf_GroupID
            }
        };

        response = Ext.create("Core.model.individual.group.Model", response.individualGroup);
        return this.delayedSuccess(response);
    },
	
    /**
     * The mock service call.
     */
    readIndividualGroups: function() {
        this.logger.debug("readIndividualGroups");

        var response = {
            success: true,
            individualGroups: [
                { kp_IndividualGroupID: 1,    kf_IndividualID: 1,    kf_GroupID: 1  },
                { kp_IndividualGroupID: 2,    kf_IndividualID: 2,    kf_GroupID: 2 },
                { kp_IndividualGroupID: 3,    kf_IndividualID: 3,    kf_GroupID: 3 }	
            ]
        };

        return this.delayedSuccess(response);
    }
});