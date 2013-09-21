/**
 * The mock person service object.
 */
Ext.define("Core.service.person.mock.Service", {
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
                { id: 0,    personFirstName: "Adam",    	personLastName: "Alfa" },
                { id: 1,    personFirstName: "Bob",    		personLastName: "Bravo" },
                { id: 2,    personFirstName: "Carol",    	personLastName: "Charlie" },
                { id: 3,    personFirstName: "David",    	personLastName: "Delta" },
                { id: 4,    personFirstName: "Eddie",    	personLastName: "Echo" },
                { id: 5,    personFirstName: "Frank",    	personLastName: "Foxtrot" },
                { id: 6,    personFirstName: "George",    	personLastName: "Golf" },
                { id: 7,    personFirstName: "Harry",    	personLastName: "Hotel" },
                { id: 8,    personFirstName: "Ike",    		personLastName: "India" },
                { id: 9,    personFirstName: "Jim",    		personLastName: "Juliet" },
                { id: 10,   personFirstName: "Kenny",   	personLastName: "Kilo" },
                { id: 11,   personFirstName: "Larry",   	personLastName: "Lima" },
                { id: 12,   personFirstName: "Mary",   		personLastName: "Mike" },
                { id: 13,   personFirstName: "Nancy",   	personLastName: "November" },
                { id: 14,   personFirstName: "Olivier",   	personLastName: "Oscar" },
                { id: 15,   personFirstName: "Peter",   	personLastName: "Papa" },
                { id: 16,   personFirstName: "Quincy",   	personLastName: "Quebec" },
                { id: 17,   personFirstName: "Roger",   	personLastName: "Romeo" },
                { id: 18,   personFirstName: "Sam",   		personLastName: "Sierra" },
                { id: 19,   personFirstName: "Thomas",   	personLastName: "Tango" },
                { id: 20,   personFirstName: "Uncle",   	personLastName: "Uniform" },
                { id: 21,   personFirstName: "Vincent",  	personLastName: "Victor" },
                { id: 22,   personFirstName: "William",  	personLastName: "Whiskey" },
                { id: 23,   personFirstName: "Xavier",   	personLastName: "X-ray" },
                { id: 24,   personFirstName: "Yogi",   		personLastName: "Yankee" },
                { id: 25,   personFirstName: "Zachary",   	personLastName: "Zulu" }
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
                { id: 0,    personFirstName: "Adam",    	personLastName: "Alfa" },
                { id: 1,    personFirstName: "Bob",    		personLastName: "Bravo" },
                { id: 2,    personFirstName: "Carol",    	personLastName: "Charlie" },
                { id: 3,    personFirstName: "David",    	personLastName: "Delta" },
                { id: 4,    personFirstName: "Eddie",    	personLastName: "Echo" },
                { id: 5,    personFirstName: "Frank",    	personLastName: "Foxtrot" },
                { id: 6,    personFirstName: "George",    	personLastName: "Golf" },
                { id: 7,    personFirstName: "Harry",    	personLastName: "Hotel" },
                { id: 8,    personFirstName: "Ike",    		personLastName: "India" },
                { id: 9,    personFirstName: "Jim",    		personLastName: "Juliet" },
                { id: 10,   personFirstName: "Kenny",   	personLastName: "Kilo" },
                { id: 11,   personFirstName: "Larry",   	personLastName: "Lima" },
                { id: 12,   personFirstName: "Mary",   		personLastName: "Mike" },
                { id: 13,   personFirstName: "Nancy",   	personLastName: "November" },
                { id: 14,   personFirstName: "Olivier",   	personLastName: "Oscar" },
                { id: 15,   personFirstName: "Peter",   	personLastName: "Papa" },
                { id: 16,   personFirstName: "Quincy",   	personLastName: "Quebec" },
                { id: 17,   personFirstName: "Roger",   	personLastName: "Romeo" },
                { id: 18,   personFirstName: "Sam",   		personLastName: "Sierra" },
                { id: 19,   personFirstName: "Thomas",   	personLastName: "Tango" },
                { id: 20,   personFirstName: "Uncle",   	personLastName: "Uniform" },
                { id: 21,   personFirstName: "Vincent",  	personLastName: "Victor" },
                { id: 22,   personFirstName: "William",  	personLastName: "Whiskey" },
                { id: 23,   personFirstName: "Xavier",   	personLastName: "X-ray" },
                { id: 24,   personFirstName: "Yogi",   		personLastName: "Yankee" },
                { id: 25,   personFirstName: "Zachary",   	personLastName: "Zulu" }
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
                { id: 0,    personFirstName: "Adam",    	personLastName: "Alfa" },
                { id: 1,    personFirstName: "Bob",    		personLastName: "Bravo" },
                { id: 2,    personFirstName: "Carol",    	personLastName: "Charlie" },
                { id: 3,    personFirstName: "David",    	personLastName: "Delta" },
                { id: 4,    personFirstName: "Eddie",    	personLastName: "Echo" },
                { id: 5,    personFirstName: "Frank",    	personLastName: "Foxtrot" },
                { id: 6,    personFirstName: "George",    	personLastName: "Golf" },
                { id: 7,    personFirstName: "Harry",    	personLastName: "Hotel" },
                { id: 8,    personFirstName: "Ike",    		personLastName: "India" },
                { id: 9,    personFirstName: "Jim",    		personLastName: "Juliet" },
                { id: 10,   personFirstName: "Kenny",   	personLastName: "Kilo" },
                { id: 11,   personFirstName: "Larry",   	personLastName: "Lima" },
                { id: 12,   personFirstName: "Mary",   		personLastName: "Mike" },
                { id: 13,   personFirstName: "Nancy",   	personLastName: "November" },
                { id: 14,   personFirstName: "Olivier",   	personLastName: "Oscar" },
                { id: 15,   personFirstName: "Peter",   	personLastName: "Papa" },
                { id: 16,   personFirstName: "Quincy",   	personLastName: "Quebec" },
                { id: 17,   personFirstName: "Roger",   	personLastName: "Romeo" },
                { id: 18,   personFirstName: "Sam",   		personLastName: "Sierra" },
                { id: 19,   personFirstName: "Thomas",   	personLastName: "Tango" },
                { id: 20,   personFirstName: "Uncle",   	personLastName: "Uniform" },
                { id: 21,   personFirstName: "Vincent",  	personLastName: "Victor" },
                { id: 22,   personFirstName: "William",  	personLastName: "Whiskey" },
                { id: 23,   personFirstName: "Xavier",   	personLastName: "X-ray" },
                { id: 24,   personFirstName: "Yogi",   		personLastName: "Yankee" },
                { id: 25,   personFirstName: "Zachary",   	personLastName: "Zulu" }
            ]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    createPerson: function(person) {
        this.logger.debug("createPerson");

        var response = {
            success: true,
            person: {
                id: this.getRandomInt(1000, 99999),
                personFirstName: person.personFirstName,
				personLastName: person.personLastName
            }
        };

        response = Ext.create("Core.model.person.Model", response.person);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updatePerson: function(person) {
        this.logger.debug("updatePerson: id = ", person.id);

        var response = {
            success: true,
            person: {
                id: person.id,
                personFirstName: person.personFirstName,
				personLastName: person.personLastName			
            }
        };

        response = Ext.create("Core.model.person.Model", response.person);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deletePerson: function(person) {
        this.logger.debug("deletePerson: id = ", person.id);

        var response = {
            success: true,
            person: {
                id: person.id,
                personFirstName: person.personFirstName,
				personLastName: person.personLastName
            }
        };

        response = Ext.create("Core.model.person.Model", response.person);
        return this.delayedSuccess(response);
    }      
});