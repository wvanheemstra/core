/**
 * Contains the list of employee domain objects.
 */
Ext.define("Core.store.employee.Store", {
    extend: "FlowMVC.mvc.store.AbstractStore",
    // Touch uses properties inside of config
	config: {
	    model: "Core.model.employee.Model",
	    sorters: "lastName",
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	                return record.get("lastName")[0].toUpperCase(); // so 'van Halen' comes under 'V'
	            } catch(err) {
	
	            }
	        }
	    }
	},//eof config
	// Ext requires properties outside of config
    model: "Core.model.employee.Model",
    sorters: "lastName",
    isAutoUpdate: true,
    grouper: {
        groupFn: function(record) {
            try {
                return record.get("lastName")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {

            }
        }
    }	
});