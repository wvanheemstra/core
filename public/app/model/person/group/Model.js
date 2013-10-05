/**
 * The person group object representing a person group.
 */
Ext.define("Core.model.person.group.Model", {
    extend: "Core.model.person.group.base.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_PersonGroupID",
	    fields: [
	        { name: "kp_PersonGroupID",      type: "int"     },		
	        { name: "kf_PersonID",      type: "int"     },
	        { name: "kf_GroupID",      type: "int"     }
	    ],
		hasMany: [
			{ 
				name: "Person", 
				model: "Core.model.person.Model",
				primaryKey: "kp_PersonID", // the field in the parent that identifies it.
				foreignKey: "kf_PersonID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "personStore", //WAS "Core.store.person.Store", // the store name that contains the related records
				foreignStoreId: "personStore" // the store id  of the foreign store
			},
			{ 
				name: "Group", 
				model: "Core.model.group.Model",
				primaryKey: "kp_GroupID", // the field in the parent that identifies it.
				foreignKey: "kf_GroupID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "groupStore", //WAS "Core.store.person.Store", // the store name that contains the related records
				foreignStoreId: "groupStore" // the store id  of the foreign store
			}			
		],
	    validations: [
	        { type: "presence", field: "kp_PersonGroupID" }
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "kp_PersonGroupID",
	fields: [
		{ name: "kp_PersonGroupID",      type: "int"     },		
		{ name: "kf_PersonID",      type: "int"     },
		{ name: "kf_GroupID",      type: "int"     }
	],
	hasMany: [
		{ 
			name: "Person", 
			model: "Core.model.person.Model",
			primaryKey: "kp_PersonID", // the field in the parent that identifies it.
			foreignKey: "kf_PersonID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			foreignStore: "personStore", //WAS "Core.store.person.Store", // the store name that contains the related records
			foreignStoreId: "personStore" // the store id  of the foreign store
		},
		{ 
			name: "Group", 
			model: "Core.model.group.Model",
			primaryKey: "kp_GroupID", // the field in the parent that identifies it.
			foreignKey: "kf_GroupID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			foreignStore: "groupStore", //WAS "Core.store.person.Store", // the store name that contains the related records
			foreignStoreId: "groupStore" // the store id  of the foreign store
		}			
	],
    validations: [
        { type: "presence", field: "kp_PersonGroupID" }
    ]	
});