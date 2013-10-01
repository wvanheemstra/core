/**
 * Contains the list of date objects.
 */
Ext.define("Core.store.date.Store", {
    extend: "Core.store.date.base.Store",
    // Touch uses properties inside of config
	config: {
	    storeId: "dateStore", // Required for automatic registration
	    model: "Core.model.date.Model",
	    sorters: "DateStart",
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	//NOT APPLICABLE FOR DATES        return record.get("DateStart")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    }
	},//eof config
	// Ext requires properties outside of config
	storeId: "dateStore", // Required for automatic registration
    model: "Core.model.date.Model",
    sorters: "DateStart",
    isAutoUpdate: true,
    grouper: {
        groupFn: function(record) {
            try {
    //NOT APPLICABLE FOR DATES        return record.get("DateStart")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {
				console.log(err);
            }
        }
    }	
});