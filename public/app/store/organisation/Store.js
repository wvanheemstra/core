/**
 * Contains the list of organisation objects.
 */
Ext.define("Core.store.organisation.Store", {
    extend: "Core.store.organisation.base.Store",
    // Touch uses properties inside of config
	config: {
	    storeId: "organisationStore", // Required for automatic registration
	    model: "Core.model.organisation.Model",
		appName: "Organisation", // Name of the App requesting for data (e.g. "Organisation" for Organisation app)
		ajaxCallTimeout: 30000, // 30000 is the default of ExtJS
		ajaxCallHeaders: {}, // default empty
		remoteUser: "Core", // Name of the User requesting for data (e.g. "Core" for Core user)
		pageSize: 50, // TEST
		//proxy: {}, PROXY IS SET IN THE MODEL
		remoteFilter: true, // Required when the result set is 'paged'
		remoteSort: true, // Required when the result set is 'paged'
		sorters: [{
			property: "OrganisationName",
			direction: "ASC" // e.g. "ASC" or "DESC"
		}],
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	                return record.get("OrganisationName")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    },
		listeners: {
			beforeload: function(store, operation, eOpts) {
				console.log("organisationStore: beforeload");
			},
			load : function(store, records, success, operation) {
                console.log("organisationStore: load, success = " + success);
            },
            beforesync: function(options, eOpts) {
                console.log("organisationStore is being synched. Please wait...");    
			},
			afterRequest: function(store, operation, eOpts) {
                console.log("organisationStore has been synched.");
            }
		}
	},//eof config
	// Ext requires properties outside of config
	storeId: "organisationStore", // Required for automatic registration
    model: "Core.model.organisation.Model",
	appName: "Organisation", // Name of the App requesting for data (e.g. "Organisation" for Organisation app)
	ajaxCallTimeout: 30000, // 30000 is the default of ExtJS
	ajaxCallHeaders: {}, // default empty
	remoteUser: "Core", // Name of the User requesting for data (e.g. "Core" for Core user)
	pageSize: 50, // TEST
	//proxy: {}, PROXY IS SET IN THE MODEL
	remoteFilter: true, // Required when the result set is 'paged'
	remoteSort: true, // Required when the result set is 'paged'	
	sorters: [{
		property: "OrganisationName",
		direction: "ASC" // e.g. "ASC" or "DESC"
	}],
    isAutoUpdate: true,
	autoLoad: false, // loading by Services
    grouper: {
        groupFn: function(record) {
            try {
                return record.get("OrganisationName")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {
				console.log(err);
            }
        }
    },
	listeners: {
		beforeload: function(store, operation, eOpts) {
			console.log("organisationStore: beforeload");
		},
		load : function(store, records, success, operation) {
			console.log("organisationStore: load, success = " + success);
		},
		beforesync: function(options, eOpts) {
			console.log("organisationStore is being synched. Please wait...");    
		},
		afterRequest: function(store, operation, eOpts) {
			console.log("organisationStore has been synched.");
		}
	}	
});