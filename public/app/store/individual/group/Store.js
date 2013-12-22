/**
 * Contains the list of individual group objects.
 */
Ext.define("Core.store.individual.group.Store", {
    extend: "Core.store.individual.group.base.Store",
    // Touch uses properties inside of config
	config: {
	    storeId: "individualGroupStore", // Required for automatic registration
	    model: "Core.model.individual.group.Model",
	    sorters: "", // No Sorters
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	    // NOT APPLICABLE            return record.get("kp_IndividualGroupID")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    }
	},//eof config
	// Ext requires properties outside of config
	storeId: "individualGroupStore", // Required for automatic registration
    model: "Core.model.individual.group.Model",
    sorters: "",  // No Sorters
    isAutoUpdate: true,
    grouper: {
        groupFn: function(record) {
            try {
    // NOT APPLICABLE            return record.get("kp_IndividualGroupID")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {
				console.log(err);
            }
        }
    }	
});