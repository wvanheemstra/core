/**
 * The domain object representing a session.
 */
Ext.define("Core.model.session.Model", {
    extend: "Ext.data.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "id",
	    fields: [
	        { name: "id",      type: "int"     },
	        { name: "sessionId",    type: "string"  }
	    ],
	    validations: [
	        { type: "presence", field: "id" }
	    ],
	    proxy: {
	    	type: "localstorage",
	    	id: "Core.session.ApplicationKey"	
	    }
	    
	},//eof config
	// Ext requires properties outside of config
    idProperty: "id",
	fields: [
        { name: "id",      type: "int"     },
        { name: "sessionId",    type: "string"  }
	],
    validations: [
        { type: "presence", field: "id" }
    ],
    proxy: {
    	type: "localstorage",
    	id: "Core.session.ApplicationKey"	
    }
});