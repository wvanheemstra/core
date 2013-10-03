/**
 * The membership object representing a membership.
 */
Ext.define("Core.model.membership.Model", {
    extend: "Core.model.membership.base.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_MembershipID",
	    fields: [
	        { name: "kp_MembershipID",      type: "int"     },
			{ name: "kf_PersonID",		type: "int"	},
			{ name: "kf_OrganisationID",	type: "int"	}
	    ],
		belongsTo: [
			{ 
				name: "Person", 
				model: "Core.model.person.Model",
				primaryKey: "kp_PersonID", // the field in the parent that identifies it.
				foreignKey: "kf_PersonID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "personStore", //WAS "Core.store.person.Store", // the store name that contains the related records
				foreignStoreId: "personStore" // the store id  of the foreign store
			}
		],
	    validations: [
	        { type: "presence", field: "kp_MembershipID" }
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "kp_MembershipID",
	fields: [
        { name: "kp_MembershipID",      type: "int"     },
		{ name: "kf_PersonID",		type: "int"	},
		{ name: "kf_OrganisationID",	type: "int"	}
	],
	belongsTo: [
		{ 
				name: "Person", 
				model: "Core.model.person.Model",
				primaryKey: "kp_PersonID", // the field in the parent that identifies it.
				foreignKey: "kf_PersonID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "personStore", //WAS "Core.store.person.Store", // the store name that contains the related records
				foreignStoreId: "personStore" // the store id  of the foreign store
		}
	],
    validations: [
        { type: "presence", field: "kp_MembershipID" }
    ]	
});