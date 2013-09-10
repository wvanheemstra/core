/**
 * The domain object representing an employee.
 */
Ext.define("Core.model.employee.Model", {
    extend: "Ext.data.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "id",
	    fields: [
	        { name: "id",           type: "int"     },
	        { name: "firstName",    type: "string"  },
	        { name: "lastName",     type: "string"  },
	        { name: "email",        type: "string"  },
	        { name: "phoneNumber",  type: "string"  },
	        { name: "startDate",    type: "date",   dateFormat: "c" }
	    ],
	    validations: [
	        { type: "presence", field: "id" },
	        { type: "presence", field: "firstName",     message: "Please enter a first name." },
	        { type: "presence", field: "lastName",      message: "Please enter a last name." }
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "id",
	fields: [
        { name: "id",           type: "int"     },
        { name: "firstName",    type: "string"  },
        { name: "lastName",     type: "string"  },
        { name: "email",        type: "string"  },
        { name: "phoneNumber",  type: "string"  },
        { name: "startDate",    type: "date",   dateFormat: "c" }
	],
    validations: [
        { type: "presence", field: "id" },
        { type: "presence", field: "firstName",     message: "Please enter a first name." },
        { type: "presence", field: "lastName",      message: "Please enter a last name." }
    ]	
});
