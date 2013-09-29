/**
 * Contains the list of person objects.
 */
Ext.define("Core.store.person.Store", {
    extend: "Core.store.person.base.Store",
    // Touch uses properties inside of config
	config: {
	    storeId: "personStore", // Required for automatic registration	
	    model: "Core.model.person.Model",
	    sorters: "PersonLastName",
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	                return record.get("PersonLastName")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    }
	},//eof config
	// Ext requires properties outside of config
    storeId: "personStore", // Required for automatic registration	
    model: "Core.model.person.Model",
    sorters: "PersonLastName",
    isAutoUpdate: true,
    grouper: {
        groupFn: function(record) {
            try {
                return record.get("PersonLastName")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {
				console.log(err);
            }
        }
    }	
});