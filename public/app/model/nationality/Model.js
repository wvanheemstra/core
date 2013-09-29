/**
 * The nationality object representing a nationality.
 */
Ext.define("Core.model.nationality.Model", {
    extend: "Core.model.nationality.base.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_NationalityID",
	    fields: [
	        { name: "kp_NationalityID",      type: "int"     },
	        { name: "NationalityName",    type: "string"  }
	    ],
		hasMany: [
			{ 
				name: "Person", 
				model: "Core.model.person.Model",
				primaryKey: "kp_NationalityID", // the field in the parent that identifies it.
				foreignKey: "kf_NationalityID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "Core.store.person.Store", // the store name that contains the related records
				foreignStoreId: "personStore" // the store id  of the foreign store
			}
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
	hasMany: [
		{ 
			name: "Person", 
			model: "Core.model.person.Model",
			primaryKey: "kp_NationalityID", // the field in the parent that identifies it.
			foreignKey: "kf_NationalityID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			foreignStore: "Core.store.person.Store", // the store name that contains the related records
			foreignStoreId: "personStore" // the store id  of the foreign store
		}
	],		
    validations: [
        { type: "presence", field: "kp_NationalityID" },
        { type: "presence", field: "NationalityName",     message: "Please enter a nationality." }
    ]	
});