/**
 * Contains the list of event group objects.
 */
Ext.define("Core.store.event.group.Store", {
    extend: "Core.store.event.group.base.Store",
    // Touch uses properties inside of config
	config: {
	    storeId: "eventGroupStore", // Required for automatic registration
	    model: "Core.model.event.group.Model",
	    sorters: "", // No Sorters
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	    // NOT APPLICABLE            return record.get("kp_EventGroupID")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    }
	},//eof config
	// Ext requires properties outside of config
	storeId: "eventGroupStore", // Required for automatic registration
    model: "Core.model.event.group.Model",
    sorters: "",  // No Sorters
    isAutoUpdate: true,
    grouper: {
        groupFn: function(record) {
            try {
    // NOT APPLICABLE            return record.get("kp_EventGroupID")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {
				console.log(err);
            }
        }
    }	
});