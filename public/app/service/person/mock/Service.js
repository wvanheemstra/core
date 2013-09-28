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
                { kp_PersonID: 0,    kf_SalutationID: 0,	PersonFirstName: "Adam",    	PersonLastName: "Alfa",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 1,    kf_SalutationID: 0,	PersonFirstName: "Bob",    		PersonLastName: "Bravo",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 2,    kf_SalutationID: 0,	PersonFirstName: "Carol",    	PersonLastName: "Charlie",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 3,    kf_SalutationID: 0,	PersonFirstName: "David",    	PersonLastName: "Delta",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 4,    kf_SalutationID: 0,	PersonFirstName: "Eddie",    	PersonLastName: "Echo",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 5,    kf_SalutationID: 0,	PersonFirstName: "Frank",    	PersonLastName: "Foxtrot",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 6,    kf_SalutationID: 0,	PersonFirstName: "George",    	PersonLastName: "Golf",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 7,    kf_SalutationID: 0,	PersonFirstName: "Harry",    	PersonLastName: "Hotel",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 8,    kf_SalutationID: 0,	PersonFirstName: "Ike",    		PersonLastName: "India",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 9,    kf_SalutationID: 0,	PersonFirstName: "Jim",    		PersonLastName: "Juliet",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 10,   kf_SalutationID: 0,	PersonFirstName: "Kenny",   	PersonLastName: "Kilo",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 11,   kf_SalutationID: 0,	PersonFirstName: "Larry",   	PersonLastName: "Lima",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 12,   kf_SalutationID: 0,	PersonFirstName: "Mary",   		PersonLastName: "Mike",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 13,   kf_SalutationID: 0,	PersonFirstName: "Nancy",   	PersonLastName: "November",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 14,   kf_SalutationID: 0,	PersonFirstName: "Olivier",   	PersonLastName: "Oscar",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 15,   kf_SalutationID: 0,	PersonFirstName: "Peter",   	PersonLastName: "Papa",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 16,   kf_SalutationID: 0,	PersonFirstName: "Quincy",   	PersonLastName: "Quebec",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 17,   kf_SalutationID: 0,	PersonFirstName: "Roger",   	PersonLastName: "Romeo",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 18,   kf_SalutationID: 0,	PersonFirstName: "Sam",   		PersonLastName: "Sierra",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 19,   kf_SalutationID: 0,	PersonFirstName: "Thomas",   	PersonLastName: "Tango",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 20,   kf_SalutationID: 0,	PersonFirstName: "Uncle",   	PersonLastName: "Uniform",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 21,   kf_SalutationID: 0,	PersonFirstName: "Vincent",  	PersonLastName: "Victor",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 22,   kf_SalutationID: 0,	PersonFirstName: "William",  	PersonLastName: "Whiskey",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 23,   kf_SalutationID: 0,	PersonFirstName: "Xavier",   	PersonLastName: "X-ray",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 24,   kf_SalutationID: 0,	PersonFirstName: "Yogi",   		PersonLastName: "Yankee",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 25,   kf_SalutationID: 0,	PersonFirstName: "Zachary",   	PersonLastName: "Zulu",    kf_GenderID: 0,    kf_NationalityID: 0 }
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
                { kp_PersonID: 0,    kf_SalutationID: 0,	PersonFirstName: "Adam",    	PersonLastName: "Alfa",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 1,    kf_SalutationID: 0,	PersonFirstName: "Bob",    		PersonLastName: "Bravo",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 2,    kf_SalutationID: 0,	PersonFirstName: "Carol",    	PersonLastName: "Charlie",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 3,    kf_SalutationID: 0,	PersonFirstName: "David",    	PersonLastName: "Delta",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 4,    kf_SalutationID: 0,	PersonFirstName: "Eddie",    	PersonLastName: "Echo",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 5,    kf_SalutationID: 0,	PersonFirstName: "Frank",    	PersonLastName: "Foxtrot",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 6,    kf_SalutationID: 0,	PersonFirstName: "George",    	PersonLastName: "Golf",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 7,    kf_SalutationID: 0,	PersonFirstName: "Harry",    	PersonLastName: "Hotel",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 8,    kf_SalutationID: 0,	PersonFirstName: "Ike",    		PersonLastName: "India",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 9,    kf_SalutationID: 0,	PersonFirstName: "Jim",    		PersonLastName: "Juliet",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 10,   kf_SalutationID: 0,	PersonFirstName: "Kenny",   	PersonLastName: "Kilo",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 11,   kf_SalutationID: 0,	PersonFirstName: "Larry",   	PersonLastName: "Lima",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 12,   kf_SalutationID: 0,	PersonFirstName: "Mary",   		PersonLastName: "Mike",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 13,   kf_SalutationID: 0,	PersonFirstName: "Nancy",   	PersonLastName: "November",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 14,   kf_SalutationID: 0,	PersonFirstName: "Olivier",   	PersonLastName: "Oscar",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 15,   kf_SalutationID: 0,	PersonFirstName: "Peter",   	PersonLastName: "Papa",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 16,   kf_SalutationID: 0,	PersonFirstName: "Quincy",   	PersonLastName: "Quebec",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 17,   kf_SalutationID: 0,	PersonFirstName: "Roger",   	PersonLastName: "Romeo",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 18,   kf_SalutationID: 0,	PersonFirstName: "Sam",   		PersonLastName: "Sierra",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 19,   kf_SalutationID: 0,	PersonFirstName: "Thomas",   	PersonLastName: "Tango",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 20,   kf_SalutationID: 0,	PersonFirstName: "Uncle",   	PersonLastName: "Uniform",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 21,   kf_SalutationID: 0,	PersonFirstName: "Vincent",  	PersonLastName: "Victor",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 22,   kf_SalutationID: 0,	PersonFirstName: "William",  	PersonLastName: "Whiskey",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 23,   kf_SalutationID: 0,	PersonFirstName: "Xavier",   	PersonLastName: "X-ray",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 24,   kf_SalutationID: 0,	PersonFirstName: "Yogi",   		PersonLastName: "Yankee",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 25,   kf_SalutationID: 0,	PersonFirstName: "Zachary",   	PersonLastName: "Zulu",    kf_GenderID: 0,    kf_NationalityID: 0 }
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
                { kp_PersonID: 0,    kf_SalutationID: 0,	PersonFirstName: "Adam",    	PersonLastName: "Alfa",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 1,    kf_SalutationID: 0,	PersonFirstName: "Bob",    		PersonLastName: "Bravo",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 2,    kf_SalutationID: 0,	PersonFirstName: "Carol",    	PersonLastName: "Charlie",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 3,    kf_SalutationID: 0,	PersonFirstName: "David",    	PersonLastName: "Delta",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 4,    kf_SalutationID: 0,	PersonFirstName: "Eddie",    	PersonLastName: "Echo",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 5,    kf_SalutationID: 0,	PersonFirstName: "Frank",    	PersonLastName: "Foxtrot",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 6,    kf_SalutationID: 0,	PersonFirstName: "George",    	PersonLastName: "Golf",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 7,    kf_SalutationID: 0,	PersonFirstName: "Harry",    	PersonLastName: "Hotel",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 8,    kf_SalutationID: 0,	PersonFirstName: "Ike",    		PersonLastName: "India",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 9,    kf_SalutationID: 0,	PersonFirstName: "Jim",    		PersonLastName: "Juliet",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 10,   kf_SalutationID: 0,	PersonFirstName: "Kenny",   	PersonLastName: "Kilo",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 11,   kf_SalutationID: 0,	PersonFirstName: "Larry",   	PersonLastName: "Lima",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 12,   kf_SalutationID: 0,	PersonFirstName: "Mary",   		PersonLastName: "Mike",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 13,   kf_SalutationID: 0,	PersonFirstName: "Nancy",   	PersonLastName: "November",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 14,   kf_SalutationID: 0,	PersonFirstName: "Olivier",   	PersonLastName: "Oscar",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 15,   kf_SalutationID: 0,	PersonFirstName: "Peter",   	PersonLastName: "Papa",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 16,   kf_SalutationID: 0,	PersonFirstName: "Quincy",   	PersonLastName: "Quebec",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 17,   kf_SalutationID: 0,	PersonFirstName: "Roger",   	PersonLastName: "Romeo",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 18,   kf_SalutationID: 0,	PersonFirstName: "Sam",   		PersonLastName: "Sierra",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 19,   kf_SalutationID: 0,	PersonFirstName: "Thomas",   	PersonLastName: "Tango",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 20,   kf_SalutationID: 0,	PersonFirstName: "Uncle",   	PersonLastName: "Uniform",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 21,   kf_SalutationID: 0,	PersonFirstName: "Vincent",  	PersonLastName: "Victor",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 22,   kf_SalutationID: 0,	PersonFirstName: "William",  	PersonLastName: "Whiskey",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 23,   kf_SalutationID: 0,	PersonFirstName: "Xavier",   	PersonLastName: "X-ray",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 24,   kf_SalutationID: 0,	PersonFirstName: "Yogi",   		PersonLastName: "Yankee",    kf_GenderID: 0,    kf_NationalityID: 0 },
                { kp_PersonID: 25,   kf_SalutationID: 0,	PersonFirstName: "Zachary",   	PersonLastName: "Zulu",    kf_GenderID: 0,    kf_NationalityID: 0 }
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
                kp_PersonID: this.getRandomInt(1000, 99999),
				kf_SalutationID: person.kf_SalutationID,
                PersonFirstName: person.PersonFirstName,
				PersonLastName: person.PersonLastName,
				kf_GenderID: person.kf_GenderID,
				kf_NationalityID: person.kf_NationalityID				
            }
        };

        response = Ext.create("Core.model.person.Model", response.person);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updatePerson: function(person) {
        this.logger.debug("updatePerson: kp_PersonID = ", person.kp_PersonID);

        var response = {
            success: true,
            person: {
                kp_PersonID: person.kp_PersonID,
				kf_SalutationID: person.kf_SalutationID,
                PersonFirstName: person.PersonFirstName,
				PersonLastName: person.PersonLastName,
				kf_GenderID: person.kf_GenderID,
				kf_NationalityID: person.kf_NationalityID			
            }
        };

        response = Ext.create("Core.model.person.Model", response.person);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deletePerson: function(person) {
        this.logger.debug("deletePerson: kp_PersonID = ", person.kp_PersonID);

        var response = {
            success: true,
            person: {
                kp_PersonID: person.kp_PersonID,
				kf_SalutationID: person.kf_SalutationID,
                PersonFirstName: person.PersonFirstName,
				PersonLastName: person.PersonLastName,
				kf_GenderID: person.kf_GenderID,
				kf_NationalityID: person.kf_NationalityID
            }
        };

        response = Ext.create("Core.model.person.Model", response.person);
        return this.delayedSuccess(response);
    }      
});