/**
 * Contains the list of product objects.
 */
Ext.define("Core.store.product.Store", {
    extend: "FlowMVC.mvc.store.AbstractStore",
    // Touch uses properties inside of config
	config: {
	    model: "Core.model.product.Model",
	    sorters: "ProductName",
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	                return record.get("ProductName")[0].toUpperCase(); // so 'van Halen' comes under 'V'
	            } catch(err) {
	
	            }
	        }
	    }
	},//eof config
	// Ext requires properties outside of config
    model: "Core.model.product.Model",
    sorters: "ProductName",
    isAutoUpdate: true,
    grouper: {
        groupFn: function(record) {
            try {
                return record.get("ProductName")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {

            }
        }
    }	
});