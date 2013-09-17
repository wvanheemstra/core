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
    getPersonSlide: function() {
        this.logger.debug("getPersonSlide");

        var response = {
            success: true,
            personSlide: [
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
    getPersonList: function() {
        this.logger.debug("getPersonList");

        var response = {
            success: true,
            personList: [
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
    getPersonTile: function() {
        this.logger.debug("getPersonTile");

        var response = {
            success: true,
            personTile: [
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
    createPerson: function(organisation) {
        this.logger.debug("createPerson");

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
    updatePerson: function(organisation) {
        this.logger.debug("updatePerson: id = ", organisation.id);

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
    deletePerson: function(organisation) {
        this.logger.debug("deletePerson: id = ", organisation.id);

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