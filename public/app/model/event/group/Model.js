/**
 * The event group object representing a event group.
 */
Ext.define("Core.model.event.group.Model", {
    extend: "Core.model.event.group.base.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_EventGroupID",
	    fields: [
	        { name: "kp_EventGroupID",      type: "int"     },		
	        { name: "kf_EventID",      type: "int"     },
	        { name: "kf_GroupID",      type: "int"     }
	    ],
		hasMany: [
			{ 
				name: "Event", 
				model: "Core.model.event.Model",
				primaryKey: "kp_EventID", // the field in the parent that identifies it.
				foreignKey: "kf_EventID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "eventStore", //WAS "Core.store.person.Store", // the store name that contains the related records
				foreignStoreId: "eventStore" // the store id  of the foreign store
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
	        { type: "presence", field: "kp_EventGroupID" }
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "kp_EventGroupID",
	fields: [
		{ name: "kp_EventGroupID",      type: "int"     },		
		{ name: "kf_PersonID",      type: "int"     },
		{ name: "kf_GroupID",      type: "int"     }
	],
	hasMany: [
		{ 
			name: "Event", 
			model: "Core.model.event.Model",
			primaryKey: "kp_EventID", // the field in the parent that identifies it.
			foreignKey: "kf_EventID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			foreignStore: "eventStore", //WAS "Core.store.person.Store", // the store name that contains the related records
			foreignStoreId: "eventStore" // the store id  of the foreign store
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
        { type: "presence", field: "kp_EventGroupID" }
    ]	
});