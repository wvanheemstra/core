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
                { kp_OrganisationID: 1,    OrganisationName: "Atlas Ltd." },
                { kp_OrganisationID: 2,    OrganisationName: "Brachium Ltd." },
                { kp_OrganisationID: 3,    OrganisationName: "Cursa & Co." },
                { kp_OrganisationID: 4,    OrganisationName: "Diadem Corp." },
                { kp_OrganisationID: 5,    OrganisationName: "Electra & Sons" },
                { kp_OrganisationID: 6,    OrganisationName: "Fornacis Holding" },
                { kp_OrganisationID: 7,    OrganisationName: "Grafias Inc." },
                { kp_OrganisationID: 8,    OrganisationName: "Homam Enterprise" },
                { kp_OrganisationID: 9,    OrganisationName: "Izar Services" },
                { kp_OrganisationID: 10,   OrganisationName: "Jabbah Ltd." },
                { kp_OrganisationID: 11,   OrganisationName: "Kuma Corp." },
                { kp_OrganisationID: 12,   OrganisationName: "Lesath & Co." },
                { kp_OrganisationID: 13,   OrganisationName: "Matar Inc." },
                { kp_OrganisationID: 14,   OrganisationName: "Naos & Co." },
                { kp_OrganisationID: 15,   OrganisationName: "Oxyn Ltd." },
                { kp_OrganisationID: 16,   OrganisationName: "Propus Holding" },
                { kp_OrganisationID: 17,   OrganisationName: "Quebec Limited" },
                { kp_OrganisationID: 18,   OrganisationName: "Rana Productions" },
                { kp_OrganisationID: 19,   OrganisationName: "Salm Inc." },
                { kp_OrganisationID: 20,   OrganisationName: "Thabit Ltd." },
                { kp_OrganisationID: 21,   OrganisationName: "Universe Unlimited" },
                { kp_OrganisationID: 22,   OrganisationName: "Vega Stores" },
                { kp_OrganisationID: 23,   OrganisationName: "Wasat Inc." },
                { kp_OrganisationID: 24,   OrganisationName: "Xanadu & Sons" },
                { kp_OrganisationID: 25,   OrganisationName: "Yildun Industrial" },
                { kp_OrganisationID: 26,   OrganisationName: "Zibla & Co." }
            ]
        };

        return this.delayedSuccess(response);
    }
	
});