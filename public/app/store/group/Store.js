/**
 * Contains the list of group objects.
 */
Ext.define("Core.store.group.Store", {
    extend: "Core.store.group.base.Store",
    // Touch uses properties inside of config
	config: {
	    storeId: "groupStore", // Required for automatic registration
	    model: "Core.model.group.Model",
		// FROM HERE taken from Chat Example store
		appName: "Group", // Name of the App requesting for data (e.g. "Person" for Person app)
		ajaxCallTimeout: 30000, // 30000 is the default of ExtJS
		ajaxCallHeaders: {}, // default empty
		remoteUser: "Core", // Name of the User requesting for data (e.g. "Core" for Core user)
		pageSize: 50, // TEST
		proxy: {
			type: 'ajax',
			actionMethods: {
				create: 'POST',
				write: 'POST',
				read: 'POST',
				update: 'POST',
				destroy: 'POST'
			},
			jsonData: {}, // default to {} 
			// A modification to get JSON data in the body of the message
			// See http://irscomp.blogspot.co.uk/2012/01/how-to-post-data-in-json-format-in.html
			doRequest: function(operation, callback, scope) {
				var writer = this.getWriter(),
					request = this.buildRequest(operation, callback, scope);
				if(operation.allowWrite()) {
					request = writer.write(request);
				}
				Ext.apply(request, {
					headers			: this.headers,
					timeout 		: this.timeout, 
					scope			: this, 
					callback		: this.createRequestCallback(request, operation, callback, scope), 
					method			: 'POST', //this.getMethod(request), 
					jsonData		: this.jsonData, 
					disableCaching	: false // explicitly set it to false, ServerProxy handles caching 
				});
				Ext.Ajax.request(request); 
				return request;
			},
			useDefaultXhrHeader: false, // set this to false to prevent a cross-domain issue
			useDefaultHeader: false,
			headers: this.ajaxCallHeaders,
			timeout: this.ajaxCallTimeout, 
			contentType: "application/json; charset=utf-8",
			api: {
				//read: 'data/read-groups-success.json',
				//read: 'http://api.vanheemstrapictures.com/services/mql/read', // use this in the future when Bluehost allows for this
				//read: 'http://localhost:5001/?api=group&action=read',
				read: 'http://localhost:5001/services/mql/read',
				write: 'core/components/core/apps/core/data/mql-single-person.json'
			},
			reader: {
				type: 'json',
				root: 'result.result', // change from data to result.result when used with MQL
				totalProperty: 'total'
			},
			writer: {
				type: 'json',
				encode: true
			},
			simpleSortMode: true
		},
		// TO HERE taken from Chat Example store
	    //WAS sorters: "GroupName",
		sorters: [{
			property: "GroupName",
			direction: "ASC" // e.g. "ASC" or "DESC"
		}],
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	                return record.get("GroupName")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    },
		listeners: {
			beforeload: function(store, operation, eOpts) {
				console.log("groupStore: beforeload");
			}
		}
	},//eof config
	// Ext requires properties outside of config
	storeId: "groupStore", // Required for automatic registration
    model: "Core.model.group.Model",
	// FROM HERE taken from Chat Example store
	appName: "Group", // Name of the App requesting for data (e.g. "Person" for Person app)
	ajaxCallTimeout: 30000, // 30000 is the default of ExtJS
	ajaxCallHeaders: {}, // default empty
	remoteUser: "Core", // Name of the User requesting for data (e.g. "Core" for Core user)
	pageSize: 50, // TEST
	proxy: {
		type: 'ajax',
		actionMethods: {
			create: 'POST',
			write: 'POST',
			read: 'POST',
			update: 'POST',
			destroy: 'POST'
		},
		jsonData: {}, // default to {} 
		// A modification to get JSON data in the body of the message
		// See http://irscomp.blogspot.co.uk/2012/01/how-to-post-data-in-json-format-in.html
		doRequest: function(operation, callback, scope) {
			var writer = this.getWriter(),
				request = this.buildRequest(operation, callback, scope);
			if(operation.allowWrite()) {
				request = writer.write(request);
			}
			Ext.apply(request, {
				headers			: this.headers,
				timeout 		: this.timeout, 
				scope			: this, 
				callback		: this.createRequestCallback(request, operation, callback, scope), 
				method			: 'POST', //this.getMethod(request), 
				jsonData		: this.jsonData, 
				disableCaching	: false // explicitly set it to false, ServerProxy handles caching 
			});
			Ext.Ajax.request(request); 
			return request;
		},
		useDefaultXhrHeader: false, // set this to false to prevent a cross-domain issue
		useDefaultHeader: false,
		headers: this.ajaxCallHeaders,
		timeout: this.ajaxCallTimeout, 
		contentType: "application/json; charset=utf-8",
		api: {
			//read: 'data/read-groups-success.json',
			//read: 'http://api.vanheemstrapictures.com/services/mql/read', // use this in the future when Bluehost allows for this
			//read: 'http://localhost:5001/?api=group&action=read',
			read: 'http://localhost:5001/services/mql/read',
			write: 'core/components/core/apps/core/data/mql-single-person.json'
		},
		reader: {
			type: 'json',
			root: 'result.result', // change from data to result.result when used with MQL
			totalProperty: 'total'
		},
		writer: {
			type: 'json',
			encode: true
		},
		simpleSortMode: true
	},
	// TO HERE taken from Chat Example store
	//WAS sorters: "GroupName",
	sorters: [{
		property: "GroupName",
		direction: "ASC" // e.g. "ASC" or "DESC"
	}],
    isAutoUpdate: true,
	autoLoad: false, // loading by Services
    grouper: {
        groupFn: function(record) {
            try {
                return record.get("GroupName")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {
				console.log(err);
            }
        }
    },
	listeners: {
		beforeload: function(store, operation, eOpts) {
			console.log("groupStore: beforeload");
		}
	}	
});