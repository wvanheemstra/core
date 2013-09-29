/**
 * Contains the list of nationality objects.
 */
Ext.define("Core.store.nationality.Store", {
    extend: "Core.store.nationality.base.Store",
    // Touch uses properties inside of config
	config: {
		storeId: "nationalityStore", // Required for automatic registration	
	    model: "Core.model.nationality.Model",
	    sorters: "NationalityName",
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	                return record.get("NationalityName")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    }
	},//eof config
	// Ext requires properties outside of config
	storeId: "nationalityStore", // Required for automatic registration		
    model: "Core.model.nationality.Model",
    sorters: "NationalityName",
    isAutoUpdate: true,
    grouper: {
        groupFn: function(record) {
            try {
                return record.get("NationalityName")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {
				console.log(err);
            }
        }
    }	
});