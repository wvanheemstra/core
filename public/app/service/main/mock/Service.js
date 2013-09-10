/**
 * The mock main service object.
 */
Ext.define("Core.service.main.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],

    /**
     * The mock service call.
     */
    getMainSlide: function() {
        this.logger.debug("getMainSlide");

        var response = {
            success: true,
            mainSlide: [
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
    getMainList: function() {
        this.logger.debug("getMainList");

        var response = {
            success: true,
            mainList: [
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
    getMainTile: function() {
        this.logger.debug("getMainTile");

        var response = {
            success: true,
            mainTile: [
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
    createMain: function(main) {
        this.logger.debug("createMain");

        var response = {
            success: true,
            main: {
                id: this.getRandomInt(1000, 99999),
                name: main.name
            }
        };

        response = Ext.create("Core.model.main.Model", response.main);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updateMain: function(main) {
        this.logger.debug("updateMain: id = ", main.id);

        var response = {
            success: true,
            main: {
                id: main.id,
                name: main.name
            }
        };

        response = Ext.create("Core.model.main.Model", response.main);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deleteMain: function(main) {
        this.logger.debug("deleteMain: id = ", main.id);

        var response = {
            success: true,
            main: {
                id: main.id,
                name: main.name
            }
        };

        response = Ext.create("Core.model.main.Model", response.main);
        return this.delayedSuccess(response);
    }      
});