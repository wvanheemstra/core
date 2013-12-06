/**
 * The booking object representing a booking.
 */
Ext.define("Core.model.booking.Model", Sencha.modelCompatibility({
    extend: "Core.model.booking.base.Model",

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
	}//eof config
})//eof modelCompatibility
);