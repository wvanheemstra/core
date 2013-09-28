/**
 * Contains the list of organisation objects.
 */
Ext.define("Core.store.organisation.Store", {
    extend: "FlowMVC.mvc.store.AbstractStore",
    // Touch uses properties inside of config
	config: {
	    model: "Core.model.organisation.Model",
	    sorters: "OrganisationName",
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	                return record.get("OrganisationName")[0].toUpperCase(); // so 'van Halen' comes under 'V'
	            } catch(err) {
	
	            }
	        }
	    }
	},//eof config
	// Ext requires properties outside of config
    model: "Core.model.organisation.Model",
    sorters: "OrganisationName",
    isAutoUpdate: true,
    grouper: {
        groupFn: function(record) {
            try {
                return record.get("OrganisationName")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {

            }
        }
    }	
});