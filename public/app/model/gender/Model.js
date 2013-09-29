/**
 * The gender object representing a gender.
 */
Ext.define("Core.model.gender.Model", {
    extend: "Core.model.gender.base.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_GenderID",
	    fields: [
	        { name: "kp_GenderID",      type: "int"     },
	        { name: "GenderName",    type: "string"  }
	    ],
		hasMany: [
			{ 
				name: "Person", 
				model: "Core.model.person.Model",
				primaryKey: "kp_GenderID", // the field in the parent that identifies it.
				foreignKey: "kf_GenderID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "personStore", //WAS "Core.store.person.Store", // the store name that contains the related records
				foreignStoreId: "personStore" // the store id  of the foreign store
			}
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
	hasMany: [
		{ 
				name: "Person", 
				model: "Core.model.person.Model",
				primaryKey: "kp_GenderID", // the field in the parent that identifies it.
				foreignKey: "kf_GenderID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "personStore", //WAS "Core.store.person.Store", // the store name that contains the related records
				foreignStoreId: "personStore" // the store id  of the foreign store
		}
	],
    validations: [
        { type: "presence", field: "kp_GenderID" },
        { type: "presence", field: "GenderName",     message: "Please enter a gender name." }
    ]	
});