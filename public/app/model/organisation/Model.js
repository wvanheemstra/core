/**
 * The organisation object representing a organisation.
 */
Ext.define("Core.model.organisation.Model", {
    extend: "Ext.data.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "id",
	    fields: [
	        { name: "id",      type: "int"     },
	        { name: "organisationName",    type: "string"  }
	    ],
	    validations: [
	        { type: "presence", field: "id" },
	        { type: "presence", field: "organisationName",     message: "Please enter a name." }
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "id",
	fields: [
        { name: "id",      type: "int"     },
        { name: "organisationName",    type: "string"  }
	],
    validations: [
        { type: "presence", field: "id" },
        { type: "presence", field: "organisationName",     message: "Please enter a name." }
    ]	
});