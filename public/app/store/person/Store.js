/**
 * Contains the list of person objects.
 */
Ext.define("Core.store.person.Store", {
    extend: "Core.store.person.base.Store",
    // Touch uses properties inside of config
	config: {
	    storeId: "personStore", // Required for automatic registration
	    model: "Core.model.person.Model",
		appName: "Person", // Name of the App requesting for data (e.g. "Person" for Person app)
		ajaxCallTimeout: 30000, // 30000 is the default of ExtJS
		ajaxCallHeaders: {}, // default empty
		remoteUser: "Core", // Name of the User requesting for data (e.g. "Core" for Core user)
		pageSize: 50, // TEST
		//proxy: {}, PROXY IS SET IN THE MODEL
		remoteFilter: false, // Required when the result set is 'paged'
		remoteSort: true, // Required when the result set is 'paged'
		sorters: [{
			property: "PersonLastName",
			direction: "ASC" // e.g. "ASC" or "DESC"
		}],
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	                return record.get("PersonLastName")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    },
		listeners: {
			beforeload: function(store, operation, eOpts) {
				console.log("personStore: beforeload");
			},
			load : function(store, records, success, operation) {
                console.log("personStore: load, success = " + success);
            },
            beforesync: function(options, eOpts) {
                console.log("personStore is being synched. Please wait...");    
			},
			afterRequest: function(store, operation, eOpts) {
                console.log("personStore has been synched.");
            }
		}
	},//eof config
	// Ext requires properties outside of config
	storeId: "personStore", // Required for automatic registration
    model: "Core.model.person.Model",
	appName: "Person", // Name of the App requesting for data (e.g. "Person" for Person app)
	ajaxCallTimeout: 30000, // 30000 is the default of ExtJS
	ajaxCallHeaders: {}, // default empty
	remoteUser: "Core", // Name of the User requesting for data (e.g. "Core" for Core user)
	pageSize: 50, // TEST
	//proxy: {}, PROXY IS SET IN THE MODEL
	remoteFilter: false, // Required when the result set is 'paged'
	remoteSort: true, // Required when the result set is 'paged'	
	sorters: [{
		property: "PersonLastName",
		direction: "ASC" // e.g. "ASC" or "DESC"
	}],
    isAutoUpdate: true,
	autoLoad: false, // loading by Services
    grouper: {
        groupFn: function(record) {
            try {
                return record.get("PersonLastName")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {
				console.log(err);
            }
        }
    },
	listeners: {
		beforeload: function(store, operation, eOpts) {
			console.log("personStore: beforeload");
		},
		load : function(store, records, success, operation) {
			console.log("personStore: load, success = " + success);
		},
		beforesync: function(options, eOpts) {
			console.log("personStore is being synched. Please wait...");    
		},
		afterRequest: function(store, operation, eOpts) {
			console.log("personStore has been synched.");
		}
	}	
});