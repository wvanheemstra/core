/**
 * Contains the list of booking objects.
 */
Ext.define("Core.store.booking.Store", {
    extend: "FlowMVC.mvc.store.AbstractStore",
    // Touch uses properties inside of config
	config: {
	    model: "Core.model.booking.Model",
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
    model: "Core.model.booking.Model",
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