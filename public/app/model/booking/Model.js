/**
 * The booking object representing a booking.
 */
Ext.define("Core.model.booking.Model", {
    extend: "Ext.data.Model",
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_BookingID",
	    fields: [
	        { name: "kp_BookingID",      type: "int"     },
	        { name: "BookingName",    type: "string"  }
	    ],
	    validations: [
	        { type: "presence", field: "kp_BookingID" },
	        { type: "presence", field: "BookingName",     message: "Please enter a name." }
	    ]
	},//eof config
	// Ext requires properties outside of config
    idProperty: "kp_BookingID",
	fields: [
        { name: "kp_BookingID",      type: "int"     },
        { name: "BookingName",    type: "string"  }
	],
    validations: [
        { type: "presence", field: "kp_BookingID" },
        { type: "presence", field: "BookingName",     message: "Please enter a name." }
    ]	
});