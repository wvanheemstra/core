/**
 * The asset group object representing a asset group.
 */
Ext.define("Core.model.asset.group.Model", {
    extend: "Core.model.asset.group.base.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_AssetGroupID",
	    fields: [
	        { name: "kp_AssetGroupID",      type: "int"     },		
	        { name: "kf_AssetID",      type: "int"     },
	        { name: "kf_GroupID",      type: "int"     }
	    ],
		hasMany: [
			{ 
				name: "Asset", 
				model: "Core.model.asset.Model",
				primaryKey: "kp_AssetID", // the field in the parent that identifies it.
				foreignKey: "kf_AssetID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "assetStore", //WAS "Core.store.asset.Store", // the store name that contains the related records
				foreignStoreId: "assetStore" // the store id  of the foreign store
			},
			{ 
				name: "Group", 
				model: "Core.model.group.Model",
				primaryKey: "kp_GroupID", // the field in the parent that identifies it.
				foreignKey: "kf_GroupID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "groupStore", //WAS "Core.store.asset.Store", // the store name that contains the related records
				foreignStoreId: "groupStore" // the store id  of the foreign store
			}			
		],
	    validations: [
	        { type: "presence", field: "kp_AssetGroupID" }
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "kp_AssetGroupID",
	fields: [
		{ name: "kp_AssetGroupID",      type: "int"     },		
		{ name: "kf_AssetID",      type: "int"     },
		{ name: "kf_GroupID",      type: "int"     }
	],
	hasMany: [
		{ 
			name: "Asset", 
			model: "Core.model.asset.Model",
			primaryKey: "kp_AssetID", // the field in the parent that identifies it.
			foreignKey: "kf_AssetID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			foreignStore: "assetStore", //WAS "Core.store.asset.Store", // the store name that contains the related records
			foreignStoreId: "assetStore" // the store id  of the foreign store
		},
		{ 
			name: "Group", 
			model: "Core.model.group.Model",
			primaryKey: "kp_GroupID", // the field in the parent that identifies it.
			foreignKey: "kf_GroupID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			foreignStore: "groupStore", //WAS "Core.store.asset.Store", // the store name that contains the related records
			foreignStoreId: "groupStore" // the store id  of the foreign store
		}			
	],
    validations: [
        { type: "presence", field: "kp_AssetGroupID" }
    ]	
});