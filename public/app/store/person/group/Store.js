/**
 * Contains the list of person group objects.
 */
Ext.define("Core.store.person.group.Store", {
    extend: "Core.store.person.group.base.Store",
    // Touch uses properties inside of config
	config: {
	    storeId: "personGroupStore", // Required for automatic registration
	    model: "Core.model.person.group.Model",
	    sorters: "", // No Sorters
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	    // NOT APPLICABLE            return record.get("kp_PersonGroupID")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    }
	},//eof config
	// Ext requires properties outside of config
	storeId: "personGroupStore", // Required for automatic registration
    model: "Core.model.person.group.Model",
    sorters: "",  // No Sorters
    isAutoUpdate: true,
    grouper: {
        groupFn: function(record) {
            try {
    // NOT APPLICABLE            return record.get("kp_PersonGroupID")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {
				console.log(err);
            }
        }
    }	
});