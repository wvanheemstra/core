/**
 * Contains the list of asset objects.
 */
Ext.define("Core.store.asset.Store", Sencha.storeCompatibility({
    extend: "Core.store.asset.base.Store",
    // Touch uses properties inside of config
	config: {
	    storeId: "assetStore", // Required for automatic registration
	    model: "Core.model.asset.Model",
		appName: "Asset", // Name of the App requesting for data (e.g. "Asset" for Asset app)
		ajaxCallTimeout: 30000, // 30000 is the default of ExtJS
		ajaxCallHeaders: {}, // default empty
		remoteUser: "Core", // Name of the User requesting for data (e.g. "Core" for Core user)
		pageSize: 50, // TEST
		//proxy: {}, PROXY IS SET IN THE MODEL
		remoteFilter: false, // Required when the result set is 'paged'
		remoteSort: true, // Required when the result set is 'paged'
		sorters: [{
			property: "AssetName",
			direction: "ASC" // e.g. "ASC" or "DESC"
		}],
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	                return record.get("AssetName")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    },
		listeners: {
			beforeload: function(store, operation, eOpts) {
				console.log("assetStore: beforeload");
			},
			load : function(store, records, success, operation) {
                console.log("assetStore: load, success = " + success);
            },
            beforesync: function(options, eOpts) {
                console.log("assetStore is being synched. Please wait...");    
			},
			afterRequest: function(store, operation, eOpts) {
                console.log("assetStore has been synched.");
            }
		}
	}//eof config
}) //eof storeCompatibility
);