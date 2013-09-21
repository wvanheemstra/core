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
                { id: 0,    organisationName: "Atlas Ltd." },
                { id: 1,    organisationName: "Brachium Ltd." },
                { id: 2,    organisationName: "Cursa & Co." },
                { id: 3,    organisationName: "Diadem Corp." },
                { id: 4,    organisationName: "Electra & Sons" },
                { id: 5,    organisationName: "Fornacis Holding" },
                { id: 6,    organisationName: "Grafias Inc." },
                { id: 7,    organisationName: "Homam Enterprise" },
                { id: 8,    organisationName: "Izar Services" },
                { id: 9,    organisationName: "Jabbah Ltd." },
                { id: 10,   organisationName: "Kuma Corp." },
                { id: 11,   organisationName: "Lesath & Co." },
                { id: 12,   organisationName: "Matar Ind." },
                { id: 13,   organisationName: "Naos & Co." },
                { id: 14,   organisationName: "Oxyn Ltd." },
                { id: 15,   organisationName: "Propus Holding" },
                { id: 16,   organisationName: "Quebec Limited" },    
                { id: 17,   organisationName: "Rana Productions" },
                { id: 18,   organisationName: "Salm Inc." },
                { id: 19,   organisationName: "Thabit Ltd." },
                { id: 20,   organisationName: "Universe Unlimited" },   
                { id: 21,   organisationName: "Vega Stores" },
                { id: 22,   organisationName: "Wasat Inc." },
                { id: 23,   organisationName: "Xanadu & Sons" },
                { id: 24,   organisationName: "Yildun Industrial" },
                { id: 25,   organisationName: "Zibla & Co." }
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
                { id: 0,    organisationName: "Atlas Ltd." },
                { id: 1,    organisationName: "Brachium Ltd." },
                { id: 2,    organisationName: "Cursa & Co." },
                { id: 3,    organisationName: "Diadem Corp." },
                { id: 4,    organisationName: "Electra & Sons" },
                { id: 5,    organisationName: "Fornacis Holding" },
                { id: 6,    organisationName: "Grafias Inc." },
                { id: 7,    organisationName: "Homam Enterprise" },
                { id: 8,    organisationName: "Izar Services" },
                { id: 9,    organisationName: "Jabbah Ltd." },
                { id: 10,   organisationName: "Kuma Corp." },
                { id: 11,   organisationName: "Lesath & Co." },
                { id: 12,   organisationName: "Matar Ind." },
                { id: 13,   organisationName: "Naos & Co." },
                { id: 14,   organisationName: "Oxyn Ltd." },
                { id: 15,   organisationName: "Propus Holding" },
                { id: 16,   organisationName: "Quebec Limited" },    
                { id: 17,   organisationName: "Rana Productions" },
                { id: 18,   organisationName: "Salm Inc." },
                { id: 19,   organisationName: "Thabit Ltd." },
                { id: 20,   organisationName: "Universe Unlimited" },   
                { id: 21,   organisationName: "Vega Stores" },
                { id: 22,   organisationName: "Wasat Inc." },
                { id: 23,   organisationName: "Xanadu & Sons" },
                { id: 24,   organisationName: "Yildun Industrial" },
                { id: 25,   organisationName: "Zibla & Co." }
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
                { id: 0,    organisationName: "Atlas Ltd." },
                { id: 1,    organisationName: "Brachium Ltd." },
                { id: 2,    organisationName: "Cursa & Co." },
                { id: 3,    organisationName: "Diadem Corp." },
                { id: 4,    organisationName: "Electra & Sons" },
                { id: 5,    organisationName: "Fornacis Holding" },
                { id: 6,    organisationName: "Grafias Inc." },
                { id: 7,    organisationName: "Homam Enterprise" },
                { id: 8,    organisationName: "Izar Services" },
                { id: 9,    organisationName: "Jabbah Ltd." },
                { id: 10,   organisationName: "Kuma Corp." },
                { id: 11,   organisationName: "Lesath & Co." },
                { id: 12,   organisationName: "Matar Ind." },
                { id: 13,   organisationName: "Naos & Co." },
                { id: 14,   organisationName: "Oxyn Ltd." },
                { id: 15,   organisationName: "Propus Holding" },
                { id: 16,   organisationName: "Quebec Limited" },    
                { id: 17,   organisationName: "Rana Productions" },
                { id: 18,   organisationName: "Salm Inc." },
                { id: 19,   organisationName: "Thabit Ltd." },
                { id: 20,   organisationName: "Universe Unlimited" },   
                { id: 21,   organisationName: "Vega Stores" },
                { id: 22,   organisationName: "Wasat Inc." },
                { id: 23,   organisationName: "Xanadu & Sons" },
                { id: 24,   organisationName: "Yildun Industrial" },
                { id: 25,   organisationName: "Zibla & Co." }
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
                organisationName: organisation.organisationName
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
                organisationName: organisation.organisationName
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
                organisationName: organisation.organisationName
            }
        };

        response = Ext.create("Core.model.organisation.Model", response.organisation);
        return this.delayedSuccess(response);
    }      
});