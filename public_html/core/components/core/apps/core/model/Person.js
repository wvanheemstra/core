Ext.define('core.Person', {
	/** @readonly */	
	isPerson: true,

	statics: {
		instanceCount: 0,
		factory: function(firstName,lastName) {
			// 'this' in static methods refers to the class itself
			return new this (
			{
				firstName:firstName, 
				lastName: lastName
			});
		}
	}
	
    config: {
		firstName: 'Unknown',
		lastName: 'Unknown'
	},

    constructor: function(config) {
		this.initConfig();
		
		// the 'self' property of an instance refers to its class
		this.self.instanceCount ++;
		
		return this;
    },

	applyFirstName: function(firstName) {
		if (!Ext.isString(firstName) || firstName.length === 0 ) {
			// no valid firstName provided
		}
		else {
			this.firstName.setConfig(firstName);
		}
	},
	
	applyLastName: function(lastName) {
		if (!Ext.isString(lastName) || lastName.length === 0 ) {
			// no valid lastName provided
		}
		else {
			this.lastName.setConfig(lastName);
		}
	},
	
    eat: function(foodType) {
        alert(this.firstName + " is eating: " + foodType);

        return this;
    }
});

// Example of its use:
// var aaron = Person.factory('Aaron','Cohen');
//
//	alert(aaron.getFirstName());	// alerts "Aaron"
//	aaron.setFirstName('Aaronetta');
//	alert(aaron.getFirstName());	// alerts "Aaronetta"
//	aaron.eat("Salad"); //  alerts "Aaronetta is eating: Salad"
//	alert(Person.instanceCount);	// alerts "1"