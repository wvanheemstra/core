/**
 * Contains the list of session domain objects.
 */
Ext.define("Core.store.session.Store", {
	extend: "FlowMVC.mvc.store.AbstractStore",
    // Touch uses properties inside of config
	config: {
	    model: "Core.model.session.Model",
	    sorters: "id",
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	                return record.get("id")[0];
	            } catch(err) {
	
	            }
	        }
	    },
	    autoLoad: true,
	    proxy: {
	    	type: 'localstorage',
	    	id: 'Core.session.ApplicationKey'
	    }
	},//eof config
	// Ext requires properties outside of config
    model: "Core.model.session.Model",
    sorters: "id",
    isAutoUpdate: true,
    grouper: {
        groupFn: function(record) {
            try {
                return record.get("id")[0];
            } catch(err) {

            }
        }
    },
    autoLoad: true,
    proxy:{
    	type: 'localstorage',
    	id: 'Core.session.ApplicationKey'	
    }	
});