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
                { id: 0,    name: "Alfa" },
                { id: 1,    name: "Bravo" },
                { id: 2,    name: "Charlie" },
                { id: 3,    name: "Delta" },
                { id: 4,    name: "Echo" },
                { id: 5,    name: "Foxtrot" },
                { id: 6,    name: "Golf" },
                { id: 7,    name: "Hotel" },
                { id: 8,    name: "India" },
                { id: 9,    name: "Juliet" },
                { id: 10,   name: "Kilo" },
                { id: 11,   name: "Lima" },
                { id: 12,   name: "Mike" },
                { id: 13,   name: "November" },
                { id: 14,   name: "Oscar" },
                { id: 15,   name: "Papa" },
                { id: 16,   name: "Quebec" },                
                { id: 17,   name: "Romeo" },
                { id: 18,   name: "Sierra" },
                { id: 19,   name: "Tango" },
                { id: 20,   name: "Uniform" },              
                { id: 21,   name: "Victor" },
                { id: 22,   name: "Whiskey" },
                { id: 23,   name: "X-ray" },                
                { id: 24,   name: "Yankee" },
                { id: 25,   name: "Zulu" }
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
                { id: 0,    name: "Alfa" },
                { id: 1,    name: "Bravo" },
                { id: 2,    name: "Charlie" },
                { id: 3,    name: "Delta" },
                { id: 4,    name: "Echo" },
                { id: 5,    name: "Foxtrot" },
                { id: 6,    name: "Golf" },
                { id: 7,    name: "Hotel" },
                { id: 8,    name: "India" },
                { id: 9,    name: "Juliet" },
                { id: 10,   name: "Kilo" },
                { id: 11,   name: "Lima" },
                { id: 12,   name: "Mike" },
                { id: 13,   name: "November" },
                { id: 14,   name: "Oscar" },
                { id: 15,   name: "Papa" },
                { id: 16,   name: "Quebec" },                
                { id: 17,   name: "Romeo" },
                { id: 18,   name: "Sierra" },
                { id: 19,   name: "Tango" },
                { id: 20,   name: "Uniform" },              
                { id: 21,   name: "Victor" },
                { id: 22,   name: "Whiskey" },
                { id: 23,   name: "X-ray" },                
                { id: 24,   name: "Yankee" },
                { id: 25,   name: "Zulu" }
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
                { id: 0,    name: "Alfa" },
                { id: 1,    name: "Bravo" },
                { id: 2,    name: "Charlie" },
                { id: 3,    name: "Delta" },
                { id: 4,    name: "Echo" },
                { id: 5,    name: "Foxtrot" },
                { id: 6,    name: "Golf" },
                { id: 7,    name: "Hotel" },
                { id: 8,    name: "India" },
                { id: 9,    name: "Juliet" },
                { id: 10,   name: "Kilo" },
                { id: 11,   name: "Lima" },
                { id: 12,   name: "Mike" },
                { id: 13,   name: "November" },
                { id: 14,   name: "Oscar" },
                { id: 15,   name: "Papa" },
                { id: 16,   name: "Quebec" },                
                { id: 17,   name: "Romeo" },
                { id: 18,   name: "Sierra" },
                { id: 19,   name: "Tango" },
                { id: 20,   name: "Uniform" },              
                { id: 21,   name: "Victor" },
                { id: 22,   name: "Whiskey" },
                { id: 23,   name: "X-ray" },                
                { id: 24,   name: "Yankee" },
                { id: 25,   name: "Zulu" }
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
                name: organisation.name
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
                name: organisation.name
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
                name: organisation.name
            }
        };

        response = Ext.create("Core.model.organisation.Model", response.organisation);
        return this.delayedSuccess(response);
    }      
});