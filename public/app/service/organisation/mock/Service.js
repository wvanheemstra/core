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
    getOrganisationSlide: function() {
        this.logger.debug("getOrganisationSlide");

        var response = {
            success: true,
            organisationSlide: [
                { id: 0,    OrganisationName: "Atlas Ltd." },
                { id: 1,    OrganisationName: "Brachium Ltd." },
                { id: 2,    OrganisationName: "Cursa & Co." },
                { id: 3,    OrganisationName: "Diadem Corp." },
                { id: 4,    OrganisationName: "Electra & Sons" },
                { id: 5,    OrganisationName: "Fornacis Holding" },
                { id: 6,    OrganisationName: "Grafias Inc." },
                { id: 7,    OrganisationName: "Homam Enterprise" },
                { id: 8,    OrganisationName: "Izar Services" },
                { id: 9,    OrganisationName: "Jabbah Ltd." },
                { id: 10,   OrganisationName: "Kuma Corp." },
                { id: 11,   OrganisationName: "Lesath & Co." },
                { id: 12,   OrganisationName: "Matar Ind." },
                { id: 13,   OrganisationName: "Naos & Co." },
                { id: 14,   OrganisationName: "Oxyn Ltd." },
                { id: 15,   OrganisationName: "Propus Holding" },
                { id: 16,   OrganisationName: "Quebec Limited" },    
                { id: 17,   OrganisationName: "Rana Productions" },
                { id: 18,   OrganisationName: "Salm Inc." },
                { id: 19,   OrganisationName: "Thabit Ltd." },
                { id: 20,   OrganisationName: "Universe Unlimited" },   
                { id: 21,   OrganisationName: "Vega Stores" },
                { id: 22,   OrganisationName: "Wasat Inc." },
                { id: 23,   OrganisationName: "Xanadu & Sons" },
                { id: 24,   OrganisationName: "Yildun Industrial" },
                { id: 25,   OrganisationName: "Zibla & Co." }
            ]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    getOrganisationList: function() {
        this.logger.debug("getOrganisationList");

        var response = {
            success: true,
            organisationList: [
                { id: 0,    OrganisationName: "Atlas Ltd." },
                { id: 1,    OrganisationName: "Brachium Ltd." },
                { id: 2,    OrganisationName: "Cursa & Co." },
                { id: 3,    OrganisationName: "Diadem Corp." },
                { id: 4,    OrganisationName: "Electra & Sons" },
                { id: 5,    OrganisationName: "Fornacis Holding" },
                { id: 6,    OrganisationName: "Grafias Inc." },
                { id: 7,    OrganisationName: "Homam Enterprise" },
                { id: 8,    OrganisationName: "Izar Services" },
                { id: 9,    OrganisationName: "Jabbah Ltd." },
                { id: 10,   OrganisationName: "Kuma Corp." },
                { id: 11,   OrganisationName: "Lesath & Co." },
                { id: 12,   OrganisationName: "Matar Ind." },
                { id: 13,   OrganisationName: "Naos & Co." },
                { id: 14,   OrganisationName: "Oxyn Ltd." },
                { id: 15,   OrganisationName: "Propus Holding" },
                { id: 16,   OrganisationName: "Quebec Limited" },    
                { id: 17,   OrganisationName: "Rana Productions" },
                { id: 18,   OrganisationName: "Salm Inc." },
                { id: 19,   OrganisationName: "Thabit Ltd." },
                { id: 20,   OrganisationName: "Universe Unlimited" },   
                { id: 21,   OrganisationName: "Vega Stores" },
                { id: 22,   OrganisationName: "Wasat Inc." },
                { id: 23,   OrganisationName: "Xanadu & Sons" },
                { id: 24,   OrganisationName: "Yildun Industrial" },
                { id: 25,   OrganisationName: "Zibla & Co." }
            ]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    getOrganisationTile: function() {
        this.logger.debug("getOrganisationTile");

        var response = {
            success: true,
            organisationTile: [
                { id: 0,    OrganisationName: "Atlas Ltd." },
                { id: 1,    OrganisationName: "Brachium Ltd." },
                { id: 2,    OrganisationName: "Cursa & Co." },
                { id: 3,    OrganisationName: "Diadem Corp." },
                { id: 4,    OrganisationName: "Electra & Sons" },
                { id: 5,    OrganisationName: "Fornacis Holding" },
                { id: 6,    OrganisationName: "Grafias Inc." },
                { id: 7,    OrganisationName: "Homam Enterprise" },
                { id: 8,    OrganisationName: "Izar Services" },
                { id: 9,    OrganisationName: "Jabbah Ltd." },
                { id: 10,   OrganisationName: "Kuma Corp." },
                { id: 11,   OrganisationName: "Lesath & Co." },
                { id: 12,   OrganisationName: "Matar Ind." },
                { id: 13,   OrganisationName: "Naos & Co." },
                { id: 14,   OrganisationName: "Oxyn Ltd." },
                { id: 15,   OrganisationName: "Propus Holding" },
                { id: 16,   OrganisationName: "Quebec Limited" },    
                { id: 17,   OrganisationName: "Rana Productions" },
                { id: 18,   OrganisationName: "Salm Inc." },
                { id: 19,   OrganisationName: "Thabit Ltd." },
                { id: 20,   OrganisationName: "Universe Unlimited" },   
                { id: 21,   OrganisationName: "Vega Stores" },
                { id: 22,   OrganisationName: "Wasat Inc." },
                { id: 23,   OrganisationName: "Xanadu & Sons" },
                { id: 24,   OrganisationName: "Yildun Industrial" },
                { id: 25,   OrganisationName: "Zibla & Co." }
            ]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    createOrganisation: function(organisation) {
        this.logger.debug("createOrganisation");

        var response = {
            success: true,
            organisation: {
                id: this.getRandomInt(1000, 99999),
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
        this.logger.debug("updateOrganisation: id = ", organisation.id);

        var response = {
            success: true,
            organisation: {
                id: organisation.id,
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
        this.logger.debug("deleteOrganisation: id = ", organisation.id);

        var response = {
            success: true,
            organisation: {
                id: organisation.id,
                OrganisationName: organisation.OrganisationName
            }
        };

        response = Ext.create("Core.model.organisation.Model", response.organisation);
        return this.delayedSuccess(response);
    }      
});