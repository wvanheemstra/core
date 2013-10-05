/**
 * The mock organisation group service object.
 */
Ext.define("Core.service.organisation.group.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],

    /**
     * The mock service call.
     */
    createOrganisationGroup: function(organisationGroup) {
        this.logger.debug("createOrganisationGroup");

        var response = {
            success: true,
            organisationGroup: {
                kp_OrganisationGroupID: this.getRandomInt(1000, 99999),
				kf_OrganisationID: organisationGroup.kf_OrganisationID,
				kf_GroupID: organisationGroup.kf_GroupID
            }
        };

        response = Ext.create("Core.model.organisation.group.Model", response.organisationGroup);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updateOrganisationGroup: function(organisationGroup) {
        this.logger.debug("updateOrganisationGroup: kp_OrganisationGroupID = ", organisationGroup.kp_OrganisationGroupID);

        var response = {
            success: true,
            organisationGroup: {
                kp_OrganisationGroupID: organisationGroup.kp_OrganisationGroupID,
				kf_OrganisationID: organisationGroup.kf_OrganisationID,
				kf_GroupID: organisationGroup.kf_GroupID		
            }
        };

        response = Ext.create("Core.model.organisation.group.Model", response.organisationGroup);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deleteOrganisationGroup: function(organisationGroup) {
        this.logger.debug("deleteOrganisationGroup: kp_OrganisationGroupID = ", organisationGroup.kp_OrganisationGroupID);

        var response = {
            success: true,
            organisationGroup: {
                kp_OrganisationGroupID: organisationGroup.kp_OrganisationGroupID,
				kf_OrganisationID: organisationGroup.kf_OrganisationID,
				kf_GroupID: organisationGroup.kf_GroupID
            }
        };

        response = Ext.create("Core.model.organisation.group.Model", response.organisationGroup);
        return this.delayedSuccess(response);
    },
	
    /**
     * The mock service call.
     */
    readOrganisationGroups: function() {
        this.logger.debug("readOrganisationGroups");

        var response = {
            success: true,
            organisationGroups: [
                { kp_OrganisationGroupID: 1,    kf_OrganisationID: 1,    kf_GroupID: 1  },
                { kp_OrganisationGroupID: 2,    kf_OrganisationID: 2,    kf_GroupID: 2 },
                { kp_OrganisationGroupID: 3,    kf_OrganisationID: 3,    kf_GroupID: 3 }	
            ]
        };

        return this.delayedSuccess(response);
    }
});