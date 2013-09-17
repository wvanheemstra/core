/**
 * Contains the list of organisation objects.
 */
Ext.define("Core.store.organisation.Store", {
    extend: "FlowMVC.mvc.store.AbstractStore",
    // Touch uses properties inside of config
	config: {
	    model: "Core.model.organisation.Model",
	    sorters: "name",
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	                return record.get("name")[0];
	            } catch(err) {
	
	            }
	        }
	    }
	},//eof config
	// Ext requires properties outside of config
    model: "Core.model.organisation.Model",
    sorters: "name",
    isAutoUpdate: true,
    grouper: {
        groupFn: function(record) {
            try {
                return record.get("name")[0];
            } catch(err) {

            }
        }
    }	
});