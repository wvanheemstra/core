/**
 * Contains the list of individual objects.
 */
Ext.define("Core.store.individual.Store", Sencha.storeCompatibility({
    extend: "Core.store.individual.base.Store",
    // Touch uses properties inside of config
	config: {
	    storeId: "individualStore", // Required for automatic registration
	    model: "Core.model.individual.Model",
		appName: "Individual", // Name of the App requesting for data (e.g. "Individual" for Individual app)
		ajaxCallTimeout: 30000, // 30000 is the default of ExtJS
		ajaxCallHeaders: {}, // default empty
		remoteUser: "Core", // Name of the User requesting for data (e.g. "Core" for Core user)
		pageSize: 50, // TEST
		//proxy: {}, PROXY IS SET IN THE MODEL
		remoteFilter: false, // Required when the result set is 'paged'
		remoteSort: true, // Required when the result set is 'paged'
		sorters: [{
			property: "IndividualName",
			direction: "ASC" // e.g. "ASC" or "DESC"
		}],
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	                return record.get("IndividualName")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    },
		listeners: {
			beforeload: function(store, operation, eOpts) {
				console.log("individualStore: beforeload");
			},
			load : function(store, records, success, operation) {
                console.log("individualStore: load, success = " + success);
            },
            beforesync: function(options, eOpts) {
                console.log("individualStore is being synched. Please wait...");    
			},
			afterRequest: function(store, operation, eOpts) {
                console.log("individualStore has been synched.");
            }
		}
	}//eof config
}) //eof storeCompatibility
);