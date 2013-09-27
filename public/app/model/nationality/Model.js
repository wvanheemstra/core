/**
 * The nationality object representing a nationality.
 */
Ext.define("Core.model.nationality.Model", {
    extend: "Ext.data.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_NationalityID",
	    fields: [
	        { name: "kp_NationalityID",      type: "int"     },
	        { name: "NationalityName",    type: "string"  }
	    ],
	    validations: [
	        { type: "presence", field: "kp_NationalityID" },
	        { type: "presence", field: "NationalityName",     message: "Please enter a nationality." }
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "kp_NationalityID",
	fields: [
        { name: "kp_NationalityID",      type: "int"     },
        { name: "NationalityName",    type: "string"  }
	],
    validations: [
        { type: "presence", field: "kp_NationalityID" },
        { type: "presence", field: "NationalityName",     message: "Please enter a nationality." }
    ]	
});