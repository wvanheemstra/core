/**
 * Contains the list of organisation group objects.
 */
Ext.define("Core.store.organisation.group.Store", {
    extend: "Core.store.organisation.group.base.Store",
    // Touch uses properties inside of config
	config: {
	    storeId: "organisationGroupStore", // Required for automatic registration
	    model: "Core.model.organisation.group.Model",
	    sorters: "", // No Sorters
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	    // NOT APPLICABLE            return record.get("kp_OrganisationGroupID")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    }
	},//eof config
	// Ext requires properties outside of config
	storeId: "organisationGroupStore", // Required for automatic registration
    model: "Core.model.organisation.group.Model",
    sorters: "",  // No Sorters
    isAutoUpdate: true,
    grouper: {
        groupFn: function(record) {
            try {
    // NOT APPLICABLE            return record.get("kp_OrganisationGroupID")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {
				console.log(err);
            }
        }
    }	
});