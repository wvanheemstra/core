/**
 * The person object representing a person.
 */
Ext.define("Core.model.person.Model", {
    extend: "Ext.data.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_PersonID",
	    fields: [
	        { name: "kp_PersonID",      type: "int"     },
	        { name: "PersonFirstName",    type: "string"  },
			{ name: "PersonLastName",    type: "string"  },
			{ name: 'kf_GenderID', type: 'int', defaultValue: '0' },
			{ name: 'kf_SalutationID', type: 'int', defaultValue: '0' },
			{ name: 'kf_NationalityID', type: 'int', defaultValue: '0' }
	    ],
	    validations: [
	        { type: "presence", field: "kp_PersonID" },
	        { type: "presence", field: "PersonFirstName",     message: "Please enter a first name." },
			{ type: "presence", field: "PersonLastName",     message: "Please enter a last name." }
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "kp_PersonID",
	fields: [
        { name: "kp_PersonID",      type: "int"     },
        { name: "PersonFirstName",    type: "string"  },
		{ name: "PersonLastName",    type: "string"  },
		{ name: 'kf_GenderID', type: 'int', defaultValue: '0' },
		{ name: 'kf_SalutationID', type: 'int', defaultValue: '0' },
		{ name: 'kf_NationalityID', type: 'int', defaultValue: '0' }
	],
    validations: [
        { type: "presence", field: "kp_PersonID" },
        { type: "presence", field: "PersonFirstName",     message: "Please enter a first name." },
		{ type: "presence", field: "PersonLastName",     message: "Please enter a last name." }
    ]	
});