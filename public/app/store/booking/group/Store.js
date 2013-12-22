/**
 * Contains the list of booking group objects.
 */
Ext.define("Core.store.booking.group.Store", {
    extend: "Core.store.booking.group.base.Store",
    // Touch uses properties inside of config
	config: {
	    storeId: "bookingGroupStore", // Required for automatic registration
	    model: "Core.model.booking.group.Model",
	    sorters: "", // No Sorters
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	    // NOT APPLICABLE            return record.get("kp_BookingGroupID")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    }
	},//eof config
	// Ext requires properties outside of config
	storeId: "bookingGroupStore", // Required for automatic registration
    model: "Core.model.booking.group.Model",
    sorters: "",  // No Sorters
    isAutoUpdate: true,
    grouper: {
        groupFn: function(record) {
            try {
    // NOT APPLICABLE            return record.get("kp_BookingGroupID")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {
				console.log(err);
            }
        }
    }	
});