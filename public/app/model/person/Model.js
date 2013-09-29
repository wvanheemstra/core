/**
 * The person object representing a person.
 */
Ext.define("Core.model.person.Model", {
    extend: "Core.model.person.base.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_PersonID",
	    fields: [
	        { name: "kp_PersonID",      type: "int"     },
	        { name: "PersonFirstName",    type: "string"  },
			{ name: "PersonLastName",    type: "string"  },
			{ name: 'kf_GenderID', type: 'int', defaultValue: '0' },
			{ name: 'kf_SalutationID', type: 'int', defaultValue: '0' },
			{ name: 'kf_NationalityID', type: 'int', defaultValue: '0' }
	    ],
		belongsTo:[
			{
			  name: "Salutation",
			  model: "Core.model.salutation.Model",
			  primaryKey: "kp_SalutationID", // the field in the parent that identifies it.
			  foreignKey: "kf_SalutationID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			  foreignStore: "salutationStore",  //WAS "Core.store.salutation.Store", // the store name that contains the related records
			  foreignStoreId: "salutationStore" // the store id  of the foreign store
			},
			{
			  name: "Gender",
			  model: "Core.model.gender.Model",
			  primaryKey: "kp_GenderID", // the field in the parent that identifies it.
			  foreignKey: "kf_GenderID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			  foreignStore: "genderStore", //WAS "Core.store.gender.Store", // the store name that contains the related records
			  foreignStoreId: "genderStore" // the store id  of the foreign store
			},
			{
			  name: "Nationality",
			  model: "Core.model.nationality.Model",
			  primaryKey: "kp_NationalityID", // the field in the parent that identifies it.
			  foreignKey: "kf_NationalityID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			  foreignStore: "nationalityStore", //WAS "Core.store.nationality.Store", // the store name that contains the related records
			  foreignStoreId: "nationalityStore" // the store id  of the foreign store
			}		
		],
	    validations: [
	        { type: "presence", field: "kp_PersonID" },
	        { type: "presence", field: "PersonFirstName",     message: "Please enter a first name." },
			{ type: "presence", field: "PersonLastName",     message: "Please enter a last name." }
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "kp_PersonID",
	fields: [
        { name: "kp_PersonID",      type: "int"     },
        { name: "PersonFirstName",    type: "string"  },
		{ name: "PersonLastName",    type: "string"  },
		{ name: 'kf_GenderID', type: 'int', defaultValue: '0' },
		{ name: 'kf_SalutationID', type: 'int', defaultValue: '0' },
		{ name: 'kf_NationalityID', type: 'int', defaultValue: '0' }
	],
	belongsTo:[
		{
		  name: "Salutation",
		  model: "Core.model.salutation.Model",
		  primaryKey: "kp_SalutationID", // the field in the parent that identifies it.
		  foreignKey: "kf_SalutationID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
		  foreignStore: "salutationStore", //WAS "Core.store.salutation.Store", // the store name that contains the related records
		  foreignStoreId: "salutationStore" // the store id  of the foreign store
		},
		{
		  name: "Gender",
		  model: "Core.model.gender.Model",
		  primaryKey: "kp_GenderID", // the field in the parent that identifies it.
		  foreignKey: "kf_GenderID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
		  foreignStore: "genderStore", //WAS "Core.store.gender.Store", // the store name that contains the related records
		  foreignStoreId: "genderStore" // the store id  of the foreign store
		},
		{
		  name: "Nationality",
		  model: "Core.model.nationality.Model",
		  primaryKey: "kp_NationalityID", // the field in the parent that identifies it.
		  foreignKey: "kf_NationalityID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
		  foreignStore: "nationalityStore", //WAS "Core.store.nationality.Store", // the store name that contains the related records
		  foreignStoreId: "nationalityStore" // the store id  of the foreign store
		}			
	],
    validations: [
        { type: "presence", field: "kp_PersonID" },
        { type: "presence", field: "PersonFirstName",     message: "Please enter a first name." },
		{ type: "presence", field: "PersonLastName",     message: "Please enter a last name." }
    ]	
});