/**
 * The booking group object representing a booking group.
 */
Ext.define("Core.model.booking.group.Model", {
    extend: "Core.model.booking.group.base.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_BookingGroupID",
	    fields: [
	        { name: "kp_BookingGroupID",      type: "int"     },		
	        { name: "kf_BookingID",      type: "int"     },
	        { name: "kf_GroupID",      type: "int"     }
	    ],
		hasMany: [
			{ 
				name: "Booking", 
				model: "Core.model.booking.Model",
				primaryKey: "kp_BookingID", // the field in the parent that identifies it.
				foreignKey: "kf_BookingID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "bookingStore", //WAS "Core.store.booking.Store", // the store name that contains the related records
				foreignStoreId: "bookingStore" // the store id  of the foreign store
			},
			{ 
				name: "Group", 
				model: "Core.model.group.Model",
				primaryKey: "kp_GroupID", // the field in the parent that identifies it.
				foreignKey: "kf_GroupID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
				foreignStore: "groupStore", //WAS "Core.store.booking.Store", // the store name that contains the related records
				foreignStoreId: "groupStore" // the store id  of the foreign store
			}			
		],
	    validations: [
	        { type: "presence", field: "kp_BookingGroupID" }
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "kp_BookingGroupID",
	fields: [
		{ name: "kp_BookingGroupID",      type: "int"     },		
		{ name: "kf_BookingID",      type: "int"     },
		{ name: "kf_GroupID",      type: "int"     }
	],
	hasMany: [
		{ 
			name: "Booking", 
			model: "Core.model.booking.Model",
			primaryKey: "kp_BookingID", // the field in the parent that identifies it.
			foreignKey: "kf_BookingID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			foreignStore: "bookingStore", //WAS "Core.store.booking.Store", // the store name that contains the related records
			foreignStoreId: "bookingStore" // the store id  of the foreign store
		},
		{ 
			name: "Group", 
			model: "Core.model.group.Model",
			primaryKey: "kp_GroupID", // the field in the parent that identifies it.
			foreignKey: "kf_GroupID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			foreignStore: "groupStore", //WAS "Core.store.booking.Store", // the store name that contains the related records
			foreignStoreId: "groupStore" // the store id  of the foreign store
		}			
	],
    validations: [
        { type: "presence", field: "kp_BookingGroupID" }
    ]	
});