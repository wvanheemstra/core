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
				kf_NationalityID: person.kf_NationalityID,
				kf_DateID: person.kf_DateID			
            }
        };

        response = Ext.create("Core.model.person.Model", response.person);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updatePerson: function(person) {
        this.logger.debug("updatePerson: kp_PersonID = " + person.kp_PersonID);

        var response = {
            success: true,
            person: {
                kp_PersonID: person.kp_PersonID,
				kf_SalutationID: person.kf_SalutationID,
                PersonFirstName: person.PersonFirstName,
				PersonLastName: person.PersonLastName,
				kf_GenderID: person.kf_GenderID,
				kf_NationalityID: person.kf_NationalityID,
				kf_DateID: person.kf_DateID			
            }
        };

        response = Ext.create("Core.model.person.Model", response.person);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deletePerson: function(person) {
        this.logger.debug("deletePerson: kp_PersonID = " + person.kp_PersonID);

        var response = {
            success: true,
            person: {
                kp_PersonID: person.kp_PersonID,
				kf_SalutationID: person.kf_SalutationID,
                PersonFirstName: person.PersonFirstName,
				PersonLastName: person.PersonLastName,
				kf_GenderID: person.kf_GenderID,
				kf_NationalityID: person.kf_NationalityID,
				kf_DateID: person.kf_DateID
            }
        };

        response = Ext.create("Core.model.person.Model", response.person);
        return this.delayedSuccess(response);
    }, 

    /**
     * The mock service call.
     */
    readPersons: function() {
        this.logger.debug("readPersons");

        var response = {
            success: true,
            persons: [
                { kp_PersonID: 1,    kf_SalutationID: 1,	PersonFirstName: "Adam",    	PersonLastName: "Alfa",    	kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 1 },
                { kp_PersonID: 2,    kf_SalutationID: 1,	PersonFirstName: "Bob",    		PersonLastName: "Bravo",    kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 2 },
                { kp_PersonID: 3,    kf_SalutationID: 2,	PersonFirstName: "Carol",    	PersonLastName: "Charlie",  kf_GenderID: 2,    kf_NationalityID: 27,    kf_DateID: 3 },
                { kp_PersonID: 4,    kf_SalutationID: 1,	PersonFirstName: "David",    	PersonLastName: "Delta",    kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 4 },
                { kp_PersonID: 5,    kf_SalutationID: 1,	PersonFirstName: "Eddie",    	PersonLastName: "Echo",    	kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 5 },
                { kp_PersonID: 6,    kf_SalutationID: 1,	PersonFirstName: "Frank",    	PersonLastName: "Foxtrot",  kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 6 },
                { kp_PersonID: 7,    kf_SalutationID: 1,	PersonFirstName: "George",    	PersonLastName: "Golf",    	kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 7 },
                { kp_PersonID: 8,    kf_SalutationID: 1,	PersonFirstName: "Harry",    	PersonLastName: "Hotel",    kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 8 },
                { kp_PersonID: 9,    kf_SalutationID: 1,	PersonFirstName: "Ike",    		PersonLastName: "India",    kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 9 },
                { kp_PersonID: 10,   kf_SalutationID: 1,	PersonFirstName: "Jim",    		PersonLastName: "Juliet",   kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 10 },
                { kp_PersonID: 11,   kf_SalutationID: 1,	PersonFirstName: "Kenny",   	PersonLastName: "Kilo",    	kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 11 },
                { kp_PersonID: 12,   kf_SalutationID: 1,	PersonFirstName: "Larry",   	PersonLastName: "Lima",    	kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 12 },
                { kp_PersonID: 13,   kf_SalutationID: 2,	PersonFirstName: "Mary",   		PersonLastName: "Mike",    	kf_GenderID: 2,    kf_NationalityID: 27,    kf_DateID: 13 },
                { kp_PersonID: 14,   kf_SalutationID: 1,	PersonFirstName: "Nancy",   	PersonLastName: "November", kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 14 },
                { kp_PersonID: 15,   kf_SalutationID: 1,	PersonFirstName: "Olivier",   	PersonLastName: "Oscar",    kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 15 },
                { kp_PersonID: 16,   kf_SalutationID: 1,	PersonFirstName: "Peter",   	PersonLastName: "Papa",    	kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 16 },
                { kp_PersonID: 17,   kf_SalutationID: 1,	PersonFirstName: "Quincy",   	PersonLastName: "Quebec",   kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 17 },
                { kp_PersonID: 18,   kf_SalutationID: 1,	PersonFirstName: "Roger",   	PersonLastName: "Romeo",    kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 18 },
                { kp_PersonID: 19,   kf_SalutationID: 1,	PersonFirstName: "Sam",   		PersonLastName: "Sierra",   kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 19 },
                { kp_PersonID: 20,   kf_SalutationID: 1,	PersonFirstName: "Thomas",   	PersonLastName: "Tango",    kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 20 },
                { kp_PersonID: 21,   kf_SalutationID: 1,	PersonFirstName: "Uncle",   	PersonLastName: "Uniform",  kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 21 },
                { kp_PersonID: 22,   kf_SalutationID: 1,	PersonFirstName: "Vincent",  	PersonLastName: "Victor",   kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 22 },
                { kp_PersonID: 23,   kf_SalutationID: 1,	PersonFirstName: "William",  	PersonLastName: "Whiskey",  kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 23 },
                { kp_PersonID: 24,   kf_SalutationID: 1,	PersonFirstName: "Xavier",   	PersonLastName: "X-ray",    kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 24 },
                { kp_PersonID: 25,   kf_SalutationID: 1,	PersonFirstName: "Yogi",   		PersonLastName: "Yankee",   kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 25 },
                { kp_PersonID: 26,   kf_SalutationID: 1,	PersonFirstName: "Zachary",   	PersonLastName: "Zulu",    	kf_GenderID: 1,    kf_NationalityID: 27,    kf_DateID: 26 }
            ]
        };

        return this.delayedSuccess(response);
    }
	
});