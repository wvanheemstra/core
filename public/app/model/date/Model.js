/**
 * The date object representing a date.
 */
Ext.define("Core.model.date.Model", {
    extend: "Core.model.date.base.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_DateID",
	    fields: [
	        { name: "kp_DateID",      type: "int"     },
	        { name: "DateStart",    type: "date"  },
			{ name: "DateFinish",    type: "date"  }
	    ],
		hasOne: [
			{ 
				name: "Person", 
				model: "Core.model.person.Model",
				primaryKey: "kp_DateID", // the field in the parent that identifies it.
				foreignKey: "kf_DateID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "personStore", //WAS "Core.store.person.Store", // the store name that contains the related records
				foreignStoreId: "personStore" // the store id  of the foreign store
			}
		],
	    validations: [
	        { type: "presence", field: "kp_DateID" },
	        { type: "presence", field: "DateStart",     message: "Please enter a date." }
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "kp_DateID",
	fields: [
        { name: "kp_DateID",      type: "int"     },
        { name: "DateStart",    type: "date"  },
		{ name: "DateFinish",    type: "date"  }
	],
	hasOne: [
		{ 
				name: "Person", 
				model: "Core.model.person.Model",
				primaryKey: "kp_DateID", // the field in the parent that identifies it.
				foreignKey: "kf_DateID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "personStore", //WAS "Core.store.person.Store", // the store name that contains the related records
				foreignStoreId: "personStore" // the store id  of the foreign store
		}
	],
    validations: [
        { type: "presence", field: "kp_DateID" },
        { type: "presence", field: "DateStart",     message: "Please enter a date." }
    ]	
});