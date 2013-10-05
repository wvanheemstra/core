/**
 * The group object representing a group.
 */
Ext.define("Core.model.group.Model", {
    extend: "Core.model.group.base.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_GroupID",
	    fields: [
	        { name: "kp_GroupID",      type: "int"     },
	        { name: "GroupName",    type: "string"  }
	    ],
		hasMany: [
			{ 
				name: "PersonGroup", 
				model: "Core.model.person.group.Model",
				primaryKey: "kp_GroupID", // the field in the parent that identifies it.
				foreignKey: "kf_GroupID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "personGroupStore", //WAS "Core.store.person.Store", // the store name that contains the related records
				foreignStoreId: "personGroupStore" // the store id  of the foreign store
			}
		],
	    validations: [
	        { type: "presence", field: "kp_GroupID" },
	        { type: "presence", field: "GroupName",     message: "Please enter a group name." }
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "kp_GroupID",
	fields: [
        { name: "kp_GroupID",      type: "int"     },
        { name: "GroupName",    type: "string"  }
	],
	hasMany: [
		{ 
				name: "PersonGroup", 
				model: "Core.model.person.group.Model",
				primaryKey: "kp_GroupID", // the field in the parent that identifies it.
				foreignKey: "kf_GroupID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "personGroupStore", //WAS "Core.store.person.Store", // the store name that contains the related records
				foreignStoreId: "personGroupStore" // the store id  of the foreign store
		}
	],
    validations: [
        { type: "presence", field: "kp_GroupID" },
        { type: "presence", field: "GroupName",     message: "Please enter a group name." }
    ]	
});