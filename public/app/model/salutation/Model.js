/**
 * The salutation object representing a salutation.
 */
Ext.define("Core.model.salutation.Model", {
    extend: "Ext.data.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_SalutationID",
	    fields: [
	        { name: "kp_SalutationID",      type: "int"     },
	        { name: "SalutationAbbreviation",    type: "string"  }
	    ],
	    validations: [
	        { type: "presence", field: "kp_SalutationID" },
	        { type: "presence", field: "SalutationAbbreviation",     message: "Please enter a salutation abbreviation." }
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "kp_SalutationID",
	fields: [
        { name: "kp_SalutationID",      type: "int"     },
        { name: "SalutationAbbreviation",    type: "string"  }
	],
    validations: [
        { type: "presence", field: "kp_SalutationID" },
        { type: "presence", field: "SalutationAbbreviation",     message: "Please enter a salutation abbreviation." }
    ]	
});