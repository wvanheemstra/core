/**
 * Contains the list of event objects.
 */
Ext.define("Core.store.event.Store", {
    extend: "Core.store.event.base.Store",
    // Touch uses properties inside of config
	config: {
	    storeId: "eventStore", // Required for automatic registration
	    model: "Core.model.event.Model",
		appName: "Event", // Name of the App requesting for data (e.g. "Event" for Event app)
		ajaxCallTimeout: 30000, // 30000 is the default of ExtJS
		ajaxCallHeaders: {}, // default empty
		remoteUser: "Core", // Name of the User requesting for data (e.g. "Core" for Core user)
		pageSize: 50, // TEST
		//proxy: {}, PROXY IS SET IN THE MODEL
		remoteFilter: false, // Required when the result set is 'paged'
		remoteSort: true, // Required when the result set is 'paged'
		sorters: [{
			property: "EventName",
			direction: "ASC" // e.g. "ASC" or "DESC"
		}],
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	                return record.get("EventName")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    },
		listeners: {
			beforeload: function(store, operation, eOpts) {
				console.log("eventStore: beforeload");
			},
			load : function(store, records, success, operation) {
                console.log("eventStore: load, success = " + success);
            },
            beforesync: function(options, eOpts) {
                console.log("eventStore is being synched. Please wait...");    
			},
			afterRequest: function(store, operation, eOpts) {
                console.log("eventStore has been synched.");
            }
		}
	},//eof config
	// Ext requires properties outside of config
	storeId: "eventStore", // Required for automatic registration
    model: "Core.model.event.Model",
	appName: "Event", // Name of the App requesting for data (e.g. "Event" for Event app)
	ajaxCallTimeout: 30000, // 30000 is the default of ExtJS
	ajaxCallHeaders: {}, // default empty
	remoteUser: "Core", // Name of the User requesting for data (e.g. "Core" for Core user)
	pageSize: 50, // TEST
	//proxy: {}, PROXY IS SET IN THE MODEL
	remoteFilter: false, // Required when the result set is 'paged'
	remoteSort: true, // Required when the result set is 'paged'	
	sorters: [{
		property: "EventName",
		direction: "ASC" // e.g. "ASC" or "DESC"
	}],
    isAutoUpdate: true,
	autoLoad: false, // loading by Services
    grouper: {
        groupFn: function(record) {
            try {
                return record.get("EventName")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {
				console.log(err);
            }
        }
    },
	listeners: {
		beforeload: function(store, operation, eOpts) {
			console.log("eventStore: beforeload");
		},
		load : function(store, records, success, operation) {
			console.log("eventStore: load, success = " + success);
		},
		beforesync: function(options, eOpts) {
			console.log("eventStore is being synched. Please wait...");    
		},
		afterRequest: function(store, operation, eOpts) {
			console.log("eventStore has been synched.");
		}
	}	
});