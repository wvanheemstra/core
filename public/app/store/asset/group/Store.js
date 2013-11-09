/**
 * Contains the list of asset group objects.
 */
Ext.define("Core.store.asset.group.Store", {
    extend: "Core.store.asset.group.base.Store",
    // Touch uses properties inside of config
	config: {
	    storeId: "assetGroupStore", // Required for automatic registration
	    model: "Core.model.asset.group.Model",
	    sorters: "", // No Sorters
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	    // NOT APPLICABLE            return record.get("kp_AssetGroupID")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    }
	},//eof config
	// Ext requires properties outside of config
	storeId: "assetGroupStore", // Required for automatic registration
    model: "Core.model.asset.group.Model",
    sorters: "",  // No Sorters
    isAutoUpdate: true,
    grouper: {
        groupFn: function(record) {
            try {
    // NOT APPLICABLE            return record.get("kp_AssetGroupID")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {
				console.log(err);
            }
        }
    }	
});