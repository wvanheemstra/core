/**
 * The person object representing a person.
 */
Ext.define("Core.model.person.Model", {
    extend: "Ext.data.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "id",
	    fields: [
	        { name: "id",      			type: "int"     },
	        { name: "salutationAbbreviation",  type: "string"  },			
	        { name: "personFirstName",  type: "string"  },
	        { name: "personLastName",  	type: "string"  }			
	    ],
	    validations: [
	        { type: "presence", field: "id" },
	        { type: "presence", field: "personFirstName",     message: "Please enter a first name." },
	        { type: "presence", field: "personLastName",     message: "Please enter a last name." }			
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "id",
	fields: [
        { name: "id",      type: "int"     },
	    { name: "salutationAbbreviation",  type: "string"  },			
		{ name: "personFirstName",  type: "string"  },
	    { name: "personLastName",  	type: "string"  }
	],
    validations: [
        { type: "presence", field: "id" },
	    { type: "presence", field: "personFirstName",     message: "Please enter a first name." },
	    { type: "presence", field: "personLastName",     message: "Please enter a last name." }	
    ]	
});