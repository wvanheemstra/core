/**
 * The gender object representing a gender.
 */
Ext.define("Core.model.gender.Model", {
    extend: "Ext.data.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_GenderID",
	    fields: [
	        { name: "kp_GenderID",      type: "int"     },
	        { name: "GenderName",    type: "string"  }
	    ],
	    validations: [
	        { type: "presence", field: "kp_GenderID" },
	        { type: "presence", field: "GenderName",     message: "Please enter a gender name." }
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "kp_GenderID",
	fields: [
        { name: "kp_GenderID",      type: "int"     },
        { name: "GenderName",    type: "string"  }
	],
    validations: [
        { type: "presence", field: "kp_GenderID" },
        { type: "presence", field: "GenderName",     message: "Please enter a gender name." }
    ]	
});