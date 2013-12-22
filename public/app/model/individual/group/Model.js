/**
 * The individual group object representing a individual group.
 */
Ext.define("Core.model.individual.group.Model", {
    extend: "Core.model.individual.group.base.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_IndividualGroupID",
	    fields: [
	        { name: "kp_IndividualGroupID",      type: "int"     },		
	        { name: "kf_IndividualID",      type: "int"     },
	        { name: "kf_GroupID",      type: "int"     }
	    ],
		hasMany: [
			{ 
				name: "Individual", 
				model: "Core.model.individual.Model",
				primaryKey: "kp_IndividualID", // the field in the parent that identifies it.
				foreignKey: "kf_IndividualID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "individualStore", //WAS "Core.store.individual.Store", // the store name that contains the related records
				foreignStoreId: "individualStore" // the store id  of the foreign store
			},
			{ 
				name: "Group", 
				model: "Core.model.group.Model",
				primaryKey: "kp_GroupID", // the field in the parent that identifies it.
				foreignKey: "kf_GroupID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "groupStore", //WAS "Core.store.individual.Store", // the store name that contains the related records
				foreignStoreId: "groupStore" // the store id  of the foreign store
			}			
		],
	    validations: [
	        { type: "presence", field: "kp_IndividualGroupID" }
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "kp_IndividualGroupID",
	fields: [
		{ name: "kp_IndividualGroupID",      type: "int"     },		
		{ name: "kf_IndividualID",      type: "int"     },
		{ name: "kf_GroupID",      type: "int"     }
	],
	hasMany: [
		{ 
			name: "Individual", 
			model: "Core.model.individual.Model",
			primaryKey: "kp_IndividualID", // the field in the parent that identifies it.
			foreignKey: "kf_IndividualID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			foreignStore: "individualStore", //WAS "Core.store.individual.Store", // the store name that contains the related records
			foreignStoreId: "individualStore" // the store id  of the foreign store
		},
		{ 
			name: "Group", 
			model: "Core.model.group.Model",
			primaryKey: "kp_GroupID", // the field in the parent that identifies it.
			foreignKey: "kf_GroupID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			foreignStore: "groupStore", //WAS "Core.store.individual.Store", // the store name that contains the related records
			foreignStoreId: "groupStore" // the store id  of the foreign store
		}			
	],
    validations: [
        { type: "presence", field: "kp_IndividualGroupID" }
    ]	
});