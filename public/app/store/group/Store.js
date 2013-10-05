/**
 * Contains the list of group objects.
 */
Ext.define("Core.store.group.Store", {
    extend: "Core.store.group.base.Store",
    // Touch uses properties inside of config
	config: {
	    storeId: "groupStore", // Required for automatic registration
	    model: "Core.model.group.Model",
	    sorters: "GroupName",
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	                return record.get("GroupName")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    }
	},//eof config
	// Ext requires properties outside of config
	storeId: "groupStore", // Required for automatic registration
    model: "Core.model.group.Model",
    sorters: "GroupName",
    isAutoUpdate: true,
    grouper: {
        groupFn: function(record) {
            try {
                return record.get("GroupName")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {
				console.log(err);
            }
        }
    }	
});