/**
 * The organisation object representing a organisation.
 */
Ext.define("Core.model.organisation.Model", {
    extend: "Ext.data.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "id",
	    fields: [
	        { name: "id",      type: "int"     },
	        { name: "OrganisationName",    type: "string"  }
	    ],
		hasMany:[
			{
			  name: "Membership",
			  model: "Core.model.membership.Model",
			  primaryKey: "kp_OrganisationID", // the field in the parent that identifies it.
			  foreignKey: "kf_OrganisationID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			  foreignStore: "membershipStore",  //WAS "Core.store.date.Store", // the store name that contains the related records
			  foreignStoreId: "membershipStore" // the store id  of the foreign store
			},{
			  name: "OrganisationGroup",
			  model: "Core.model.organisation.group.Model",
			  primaryKey: "kp_OrganisationID", // the field in the parent that identifies it.
			  foreignKey: "kf_OrganisationID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			  foreignStore: "organisationGroupStore",  //WAS "Core.store.date.Store", // the store name that contains the related records
			  foreignStoreId: "organisationGroupStore" // the store id  of the foreign store
			}		
		],
	    validations: [
	        { type: "presence", field: "id" },
	        { type: "presence", field: "OrganisationName",     message: "Please enter a name." }
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "id",
	fields: [
        { name: "id",      type: "int"     },
        { name: "OrganisationName",    type: "string"  }
	],
	hasMany:[
		{
		  name: "Membership",
		  model: "Core.model.membership.Model",
		  primaryKey: "kp_OrganisationID", // the field in the parent that identifies it.
		  foreignKey: "kf_OrganisationID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
		  foreignStore: "membershipStore",  //WAS "Core.store.date.Store", // the store name that contains the related records
		  foreignStoreId: "membershipStore" // the store id  of the foreign store
		},{
		  name: "OrganisationGroup",
		  model: "Core.model.organisation.group.Model",
		  primaryKey: "kp_OrganisationID", // the field in the parent that identifies it.
		  foreignKey: "kf_OrganisationID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
		  foreignStore: "organisationGroupStore",  //WAS "Core.store.date.Store", // the store name that contains the related records
		  foreignStoreId: "organisationGroupStore" // the store id  of the foreign store
		}		
	],
    validations: [
        { type: "presence", field: "id" },
        { type: "presence", field: "OrganisationName",     message: "Please enter a name." }
    ]	
});