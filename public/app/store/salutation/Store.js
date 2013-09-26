/**
 * Contains the list of salutation objects.
 */
Ext.define("Core.store.salutation.Store", {
    extend: "FlowMVC.mvc.store.AbstractStore",
    // Touch uses properties inside of config
	config: {
	    model: "Core.model.salutation.Model",
	    sorters: "SalutationAbbreviation",
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	                return record.get("SalutationAbbreviation")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    }
	},//eof config
	// Ext requires properties outside of config
    model: "Core.model.salutation.Model",
    sorters: "SalutationAbbreviation",
    isAutoUpdate: true,
    grouper: {
        groupFn: function(record) {
            try {
                return record.get("SalutationAbbreviation")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {
				console.log(err);
            }
        }
    }	
});