/**
 * Contains the list of gender objects.
 */
Ext.define("Core.store.gender.Store", {
    extend: "FlowMVC.mvc.store.AbstractStore",
    // Touch uses properties inside of config
	config: {
	    model: "Core.model.gender.Model",
	    sorters: "GenderName",
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	                return record.get("GenderName")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    }
	},//eof config
	// Ext requires properties outside of config
    model: "Core.model.gender.Model",
    sorters: "GenderName",
    isAutoUpdate: true,
    grouper: {
        groupFn: function(record) {
            try {
                return record.get("GenderName")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {
				console.log(err);
            }
        }
    }	
});