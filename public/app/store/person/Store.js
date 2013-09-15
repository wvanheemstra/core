/**
 * Contains the list of person doperson objects.
 */
Ext.define("Core.store.person.Store", {
    extend: "FlowMVC.mvc.store.AbstractStore",
    // Touch uses properties inside of config
	config: {
	    model: "Core.model.person.Model",
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
    model: "Core.model.person.Model",
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