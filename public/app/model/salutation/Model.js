/**
 * The salutation object representing a salutation.
 */
Ext.define("Core.model.salutation.Model", {
    extend: "Core.model.salutation.base.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_SalutationID",
	    fields: [
	        { name: "kp_SalutationID",      type: "int"     },
	        { name: "SalutationAbbreviation",    type: "string"  }
	    ],
		hasMany: [
			{ 
				name: "Person", 
				model: "Core.model.person.Model",
				primaryKey: "kp_SalutationID", // the field in the parent that identifies it.
				foreignKey: "kf_SalutationID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "personStore", //WAS "Core.store.person.Store", // the store name that contains the related records
				foreignStoreId: "personStore" // the store id  of the foreign store
			}
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
	hasMany: [
		{ 
			name: "Person", 
			model: "Core.model.person.Model",
			primaryKey: "kp_SalutationID", // the field in the parent that identifies it.
			foreignKey: "kf_SalutationID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			foreignStore: "personStore", //WAS "Core.store.person.Store", // the store name that contains the related records
			foreignStoreId: "personStore" // the store id  of the foreign store
		}
	],
    validations: [
        { type: "presence", field: "kp_SalutationID" },
        { type: "presence", field: "SalutationAbbreviation",     message: "Please enter a salutation abbreviation." }
    ]	
});