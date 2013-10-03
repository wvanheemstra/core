/**
 * Contains the list of membership objects.
 */
Ext.define("Core.store.membership.Store", {
    extend: "Core.store.membership.base.Store",
    // Touch uses properties inside of config
	config: {
	    storeId: "membershipStore", // Required for automatic registration	
	    model: "Core.model.membership.Model",
	    sorters: "", //NOT APPLICABLE FOR MEMBERSHIPS
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	    //NOT APPLICABLE FOR MEMBERSHIPS        return record.get("MembershipLastName")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    }
	},//eof config
	// Ext requires properties outside of config
    storeId: "membershipStore", // Required for automatic registration	
    model: "Core.model.membership.Model",
    sorters: "", //NOT APPLICABLE FOR MEMBERSHIPS
    isAutoUpdate: true,
    grouper: {
        groupFn: function(record) {
            try {
    //NOT APPLICABLE FOR MEMBERSHIPS        return record.get("MembershipLastName")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {
				console.log(err);
            }
        }
    }	
});