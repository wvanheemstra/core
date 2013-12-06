/**
 * Contains the list of booking objects.
 */
Ext.define("Core.store.booking.Store", Sencha.storeCompatibility({
    extend: "Core.store.booking.base.Store",
    // Touch uses properties inside of config
	config: {
		storeId: "bookingStore", // Required for automatic registration	
	    model: "Core.model.booking.Model",
	    sorters: "BookingName",
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	                return record.get("BookingName")[0].toUpperCase(); // so 'van Halen' comes under 'V'
	            } catch(err) {
	
	            }
	        }
	    }
	}//eof config
}) //eof storeCompatibility	
);