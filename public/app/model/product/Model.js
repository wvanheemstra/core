/**
 * The product object representing a product.
 */
Ext.define("Core.model.product.Model", {
    extend: "Ext.data.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "id",
	    fields: [
	        { name: "id",      type: "int"     },
	        { name: "ProductName",    type: "string"  }
	    ],
	    validations: [
	        { type: "presence", field: "id" },
	        { type: "presence", field: "ProductName",     message: "Please enter a name." }
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "id",
	fields: [
        { name: "id",      type: "int"     },
        { name: "ProductName",    type: "string"  }
	],
    validations: [
        { type: "presence", field: "id" },
        { type: "presence", field: "ProductName",     message: "Please enter a name." }
    ]	
});