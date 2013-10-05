/**
 * The mock person group service object.
 */
Ext.define("Core.service.person.group.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],

    /**
     * The mock service call.
     */
    createPersonGroup: function(personGroup) {
        this.logger.debug("createPersonGroup");

        var response = {
            success: true,
            personGroup: {
                kp_PersonGroupID: this.getRandomInt(1000, 99999),
				kf_PersonID: personGroup.kf_PersonID,
				kf_GroupID: personGroup.kf_GroupID
            }
        };

        response = Ext.create("Core.model.person.group.Model", response.personGroup);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updatePersonGroup: function(personGroup) {
        this.logger.debug("updatePersonGroup: kp_PersonGroupID = ", personGroup.kp_PersonGroupID);

        var response = {
            success: true,
            personGroup: {
                kp_PersonGroupID: personGroup.kp_PersonGroupID,
				kf_PersonID: personGroup.kf_PersonID,
				kf_GroupID: personGroup.kf_GroupID		
            }
        };

        response = Ext.create("Core.model.person.group.Model", response.personGroup);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deletePersonGroup: function(personGroup) {
        this.logger.debug("deletePersonGroup: kp_PersonGroupID = ", personGroup.kp_PersonGroupID);

        var response = {
            success: true,
            personGroup: {
                kp_PersonGroupID: personGroup.kp_PersonGroupID,
				kf_PersonID: personGroup.kf_PersonID,
				kf_GroupID: personGroup.kf_GroupID
            }
        };

        response = Ext.create("Core.model.person.group.Model", response.personGroup);
        return this.delayedSuccess(response);
    },
	
    /**
     * The mock service call.
     */
    readPersonGroups: function() {
        this.logger.debug("readPersonGroups");

        var response = {
            success: true,
            personGroups: [
                { kp_PersonGroupID: 1,    kf_PersonID: 1,    kf_GroupID: 1  },
                { kp_PersonGroupID: 2,    kf_PersonID: 2,    kf_GroupID: 2 },
                { kp_PersonGroupID: 3,    kf_PersonID: 3,    kf_GroupID: 3 }	
            ]
        };

        return this.delayedSuccess(response);
    }
});