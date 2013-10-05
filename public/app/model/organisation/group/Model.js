/**
 * The organisation group object representing a organisation group.
 */
Ext.define("Core.model.organisation.group.Model", {
    extend: "Core.model.organisation.group.base.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_OrganisationGroupID",
	    fields: [
	        { name: "kp_OrganisationGroupID",      type: "int"     },		
	        { name: "kf_OrganisationID",      type: "int"     },
	        { name: "kf_GroupID",      type: "int"     }
	    ],
		hasMany: [
			{ 
				name: "Organisation", 
				model: "Core.model.organisation.Model",
				primaryKey: "kp_OrganisationID", // the field in the parent that identifies it.
				foreignKey: "kf_OrganisationID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "organisationStore", //WAS "Core.store.person.Store", // the store name that contains the related records
				foreignStoreId: "organisationStore" // the store id  of the foreign store
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
	        { type: "presence", field: "kp_OrganisationGroupID" }
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "kp_OrganisationGroupID",
	fields: [
		{ name: "kp_OrganisationGroupID",      type: "int"     },		
		{ name: "kf_PersonID",      type: "int"     },
		{ name: "kf_GroupID",      type: "int"     }
	],
	hasMany: [
		{ 
			name: "Organisation", 
			model: "Core.model.organisation.Model",
			primaryKey: "kp_OrganisationID", // the field in the parent that identifies it.
			foreignKey: "kf_OrganisationID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			foreignStore: "organisationStore", //WAS "Core.store.person.Store", // the store name that contains the related records
			foreignStoreId: "organisationStore" // the store id  of the foreign store
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
        { type: "presence", field: "kp_OrganisationGroupID" }
    ]	
});