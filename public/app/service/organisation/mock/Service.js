/**
 * The mock organisation service object.
 */
Ext.define("Core.service.organisation.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],
    
    /**
     * The mock service call.
     */
    createOrganisation: function(organisation) {
        this.logger.debug("createOrganisation");

        var response = {
            success: true,
            organisation: {
                kp_OrganisationID: this.getRandomInt(1000, 99999),
                OrganisationName: organisation.OrganisationName			
            }
        };

        response = Ext.create("Core.model.organisation.Model", response.organisation);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updateOrganisation: function(organisation) {
        this.logger.debug("updateOrganisation: kp_OrganisationID = " + organisation.kp_OrganisationID);

        var response = {
            success: true,
            organisation: {
                kp_OrganisationID: organisation.kp_OrganisationID,
                OrganisationName: organisation.OrganisationName		
            }
        };

        response = Ext.create("Core.model.organisation.Model", response.organisation);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deleteOrganisation: function(organisation) {
        this.logger.debug("deleteOrganisation: kp_OrganisationID = " + organisation.kp_OrganisationID);

        var response = {
            success: true,
            organisation: {
                kp_OrganisationID: organisation.kp_OrganisationID,
                OrganisationName: organisation.OrganisationName
            }
        };

        response = Ext.create("Core.model.organisation.Model", response.organisation);
        return this.delayedSuccess(response);
    }, 

    /**
     * The mock service call.
     */
    readOrganisations: function() {
        this.logger.debug("readOrganisations");

        var response = {
            success: true,
            organisations: [
                { kp_OrganisationID: 1,    OrganisationName: "Adam" },
                { kp_OrganisationID: 2,    OrganisationName: "Bob" },
                { kp_OrganisationID: 3,    OrganisationName: "Carol" },
                { kp_OrganisationID: 4,    OrganisationName: "David" },
                { kp_OrganisationID: 5,    OrganisationName: "Eddie" },
                { kp_OrganisationID: 6,    OrganisationName: "Frank" },
                { kp_OrganisationID: 7,    OrganisationName: "George" },
                { kp_OrganisationID: 8,    OrganisationName: "Harry" },
                { kp_OrganisationID: 9,    OrganisationName: "Ike" },
                { kp_OrganisationID: 10,   OrganisationName: "Jim" },
                { kp_OrganisationID: 11,   OrganisationName: "Kenny" },
                { kp_OrganisationID: 12,   OrganisationName: "Larry" },
                { kp_OrganisationID: 13,   OrganisationName: "Mary" },
                { kp_OrganisationID: 14,   OrganisationName: "Nancy" },
                { kp_OrganisationID: 15,   OrganisationName: "Olivier" },
                { kp_OrganisationID: 16,   OrganisationName: "Peter" },
                { kp_OrganisationID: 17,   OrganisationName: "Quincy" },
                { kp_OrganisationID: 18,   OrganisationName: "Roger" },
                { kp_OrganisationID: 19,   OrganisationName: "Sam" },
                { kp_OrganisationID: 20,   OrganisationName: "Thomas" },
                { kp_OrganisationID: 21,   OrganisationName: "Uncle" },
                { kp_OrganisationID: 22,   OrganisationName: "Vincent" },
                { kp_OrganisationID: 23,   OrganisationName: "William" },
                { kp_OrganisationID: 24,   OrganisationName: "Xavier" },
                { kp_OrganisationID: 25,   OrganisationName: "Yogi" },
                { kp_OrganisationID: 26,   OrganisationName: "Zachary" }
            ]
        };

        return this.delayedSuccess(response);
    }
	
});