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
                { id: 0,    salutationAbbreviation: "Mr",	personFirstName: "Adam",    	personLastName: "Alfa" },
                { id: 1,    salutationAbbreviation: "Mr",	personFirstName: "Bob",    		personLastName: "Bravo" },
                { id: 2,    salutationAbbreviation: "Mrs",	personFirstName: "Carol",    	personLastName: "Charlie" },
                { id: 3,    salutationAbbreviation: "Mr",	personFirstName: "David",    	personLastName: "Delta" },
                { id: 4,    salutationAbbreviation: "Mr",	personFirstName: "Eddie",    	personLastName: "Echo" },
                { id: 5,    salutationAbbreviation: "Mr",	personFirstName: "Frank",    	personLastName: "Foxtrot" },
                { id: 6,    salutationAbbreviation: "Mr",	personFirstName: "George",    	personLastName: "Golf" },
                { id: 7,    salutationAbbreviation: "Mr",	personFirstName: "Harry",    	personLastName: "Hotel" },
                { id: 8,    salutationAbbreviation: "Mr",	personFirstName: "Ike",    		personLastName: "India" },
                { id: 9,    salutationAbbreviation: "Mr",	personFirstName: "Jim",    		personLastName: "Juliet" },
                { id: 10,   salutationAbbreviation: "Mr",	personFirstName: "Kenny",   	personLastName: "Kilo" },
                { id: 11,   salutationAbbreviation: "Mr",	personFirstName: "Larry",   	personLastName: "Lima" },
                { id: 12,   salutationAbbreviation: "Ms",	personFirstName: "Mary",   		personLastName: "Mike" },
                { id: 13,   salutationAbbreviation: "Miss",	personFirstName: "Nancy",   	personLastName: "November" },
                { id: 14,   salutationAbbreviation: "Mr",	personFirstName: "Olivier",   	personLastName: "Oscar" },
                { id: 15,   salutationAbbreviation: "Mr",	personFirstName: "Peter",   	personLastName: "Papa" },
                { id: 16,   salutationAbbreviation: "Mr",	personFirstName: "Quincy",   	personLastName: "Quebec" },
                { id: 17,   salutationAbbreviation: "Mr",	personFirstName: "Roger",   	personLastName: "Romeo" },
                { id: 18,   salutationAbbreviation: "Mr",	personFirstName: "Sam",   		personLastName: "Sierra" },
                { id: 19,   salutationAbbreviation: "Mr",	personFirstName: "Thomas",   	personLastName: "Tango" },
                { id: 20,   salutationAbbreviation: "Mr",	personFirstName: "Uncle",   	personLastName: "Uniform" },
                { id: 21,   salutationAbbreviation: "Mr",	personFirstName: "Vincent",  	personLastName: "Victor" },
                { id: 22,   salutationAbbreviation: "Mr",	personFirstName: "William",  	personLastName: "Whiskey" },
                { id: 23,   salutationAbbreviation: "Mr",	personFirstName: "Xavier",   	personLastName: "X-ray" },
                { id: 24,   salutationAbbreviation: "Mr",	personFirstName: "Yogi",   		personLastName: "Yankee" },
                { id: 25,   salutationAbbreviation: "Mr",	personFirstName: "Zachary",   	personLastName: "Zulu" }
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
                { id: 0,    salutationAbbreviation: "Mr",	personFirstName: "Adam",    	personLastName: "Alfa" },
                { id: 1,    salutationAbbreviation: "Mr",	personFirstName: "Bob",    		personLastName: "Bravo" },
                { id: 2,    salutationAbbreviation: "Mrs",	personFirstName: "Carol",    	personLastName: "Charlie" },
                { id: 3,    salutationAbbreviation: "Mr",	personFirstName: "David",    	personLastName: "Delta" },
                { id: 4,    salutationAbbreviation: "Mr",	personFirstName: "Eddie",    	personLastName: "Echo" },
                { id: 5,    salutationAbbreviation: "Mr",	personFirstName: "Frank",    	personLastName: "Foxtrot" },
                { id: 6,    salutationAbbreviation: "Mr",	personFirstName: "George",    	personLastName: "Golf" },
                { id: 7,    salutationAbbreviation: "Mr",	personFirstName: "Harry",    	personLastName: "Hotel" },
                { id: 8,    salutationAbbreviation: "Mr",	personFirstName: "Ike",    		personLastName: "India" },
                { id: 9,    salutationAbbreviation: "Mr",	personFirstName: "Jim",    		personLastName: "Juliet" },
                { id: 10,   salutationAbbreviation: "Mr",	personFirstName: "Kenny",   	personLastName: "Kilo" },
                { id: 11,   salutationAbbreviation: "Mr",	personFirstName: "Larry",   	personLastName: "Lima" },
                { id: 12,   salutationAbbreviation: "Ms",	personFirstName: "Mary",   		personLastName: "Mike" },
                { id: 13,   salutationAbbreviation: "Miss",	personFirstName: "Nancy",   	personLastName: "November" },
                { id: 14,   salutationAbbreviation: "Mr",	personFirstName: "Olivier",   	personLastName: "Oscar" },
                { id: 15,   salutationAbbreviation: "Mr",	personFirstName: "Peter",   	personLastName: "Papa" },
                { id: 16,   salutationAbbreviation: "Mr",	personFirstName: "Quincy",   	personLastName: "Quebec" },
                { id: 17,   salutationAbbreviation: "Mr",	personFirstName: "Roger",   	personLastName: "Romeo" },
                { id: 18,   salutationAbbreviation: "Mr",	personFirstName: "Sam",   		personLastName: "Sierra" },
                { id: 19,   salutationAbbreviation: "Mr",	personFirstName: "Thomas",   	personLastName: "Tango" },
                { id: 20,   salutationAbbreviation: "Mr",	personFirstName: "Uncle",   	personLastName: "Uniform" },
                { id: 21,   salutationAbbreviation: "Mr",	personFirstName: "Vincent",  	personLastName: "Victor" },
                { id: 22,   salutationAbbreviation: "Mr",	personFirstName: "William",  	personLastName: "Whiskey" },
                { id: 23,   salutationAbbreviation: "Mr",	personFirstName: "Xavier",   	personLastName: "X-ray" },
                { id: 24,   salutationAbbreviation: "Mr",	personFirstName: "Yogi",   		personLastName: "Yankee" },
                { id: 25,   salutationAbbreviation: "Mr",	personFirstName: "Zachary",   	personLastName: "Zulu" }
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
                { id: 0,    salutationAbbreviation: "Mr",	personFirstName: "Adam",    	personLastName: "Alfa" },
                { id: 1,    salutationAbbreviation: "Mr",	personFirstName: "Bob",    		personLastName: "Bravo" },
                { id: 2,    salutationAbbreviation: "Mrs",	personFirstName: "Carol",    	personLastName: "Charlie" },
                { id: 3,    salutationAbbreviation: "Mr",	personFirstName: "David",    	personLastName: "Delta" },
                { id: 4,    salutationAbbreviation: "Mr",	personFirstName: "Eddie",    	personLastName: "Echo" },
                { id: 5,    salutationAbbreviation: "Mr",	personFirstName: "Frank",    	personLastName: "Foxtrot" },
                { id: 6,    salutationAbbreviation: "Mr",	personFirstName: "George",    	personLastName: "Golf" },
                { id: 7,    salutationAbbreviation: "Mr",	personFirstName: "Harry",    	personLastName: "Hotel" },
                { id: 8,    salutationAbbreviation: "Mr",	personFirstName: "Ike",    		personLastName: "India" },
                { id: 9,    salutationAbbreviation: "Mr",	personFirstName: "Jim",    		personLastName: "Juliet" },
                { id: 10,   salutationAbbreviation: "Mr",	personFirstName: "Kenny",   	personLastName: "Kilo" },
                { id: 11,   salutationAbbreviation: "Mr",	personFirstName: "Larry",   	personLastName: "Lima" },
                { id: 12,   salutationAbbreviation: "Ms",	personFirstName: "Mary",   		personLastName: "Mike" },
                { id: 13,   salutationAbbreviation: "Miss",	personFirstName: "Nancy",   	personLastName: "November" },
                { id: 14,   salutationAbbreviation: "Mr",	personFirstName: "Olivier",   	personLastName: "Oscar" },
                { id: 15,   salutationAbbreviation: "Mr",	personFirstName: "Peter",   	personLastName: "Papa" },
                { id: 16,   salutationAbbreviation: "Mr",	personFirstName: "Quincy",   	personLastName: "Quebec" },
                { id: 17,   salutationAbbreviation: "Mr",	personFirstName: "Roger",   	personLastName: "Romeo" },
                { id: 18,   salutationAbbreviation: "Mr",	personFirstName: "Sam",   		personLastName: "Sierra" },
                { id: 19,   salutationAbbreviation: "Mr",	personFirstName: "Thomas",   	personLastName: "Tango" },
                { id: 20,   salutationAbbreviation: "Mr",	personFirstName: "Uncle",   	personLastName: "Uniform" },
                { id: 21,   salutationAbbreviation: "Mr",	personFirstName: "Vincent",  	personLastName: "Victor" },
                { id: 22,   salutationAbbreviation: "Mr",	personFirstName: "William",  	personLastName: "Whiskey" },
                { id: 23,   salutationAbbreviation: "Mr",	personFirstName: "Xavier",   	personLastName: "X-ray" },
                { id: 24,   salutationAbbreviation: "Mr",	personFirstName: "Yogi",   		personLastName: "Yankee" },
                { id: 25,   salutationAbbreviation: "Mr",	personFirstName: "Zachary",   	personLastName: "Zulu" }
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
				salutationAbbreviation: person.salutationAbbreviation,
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
				salutationAbbreviation: person.salutationAbbreviation,
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
				salutationAbbreviation: person.salutationAbbreviation,
                personFirstName: person.personFirstName,
				personLastName: person.personLastName
            }
        };

        response = Ext.create("Core.model.person.Model", response.person);
        return this.delayedSuccess(response);
    }      
});