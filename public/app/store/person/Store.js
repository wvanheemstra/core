/**
 * Contains the list of person objects.
 */
Ext.define("Core.store.person.Store", {
    extend: "Core.store.person.base.Store",
    // Touch uses properties inside of config
	config: {
	    storeId: "personStore", // Required for automatic registration
	    model: "Core.model.person.Model",
		// FROM HERE taken from Chat Example store
		appName: "Person", // Name of the App requesting for data (e.g. "Person" for Person app)
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
				//read: 'data/read-persons-success.json',
				//read: 'http://api.vanheemstrapictures.com/services/mql/read', // use this in the future when Bluehost allows for this
				//read: 'http://localhost:5001/?api=person&action=read',
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
	    //WAS sorters: "PersonLastName",
		sorters: [{
			property: "PersonLastName",
			direction: "ASC" // e.g. "ASC" or "DESC"
		}],
	    isAutoUpdate: true,
	    grouper: {
	        groupFn: function(record) {
	            try {
	                return record.get("PersonLastName")[0].toUpperCase(); // so 'van Halen' comes under 'V'   
	            } catch(err) {
					console.log(err);
	            }
	        }
	    },
		listeners: {
			beforeload: function(store, operation, eOpts) {
				console.log("personStore: beforeload");
			}
		}
	},//eof config
	// Ext requires properties outside of config
	storeId: "personStore", // Required for automatic registration
    model: "Core.model.person.Model",
	// FROM HERE taken from Chat Example store
	appName: "Person", // Name of the App requesting for data (e.g. "Person" for Person app)
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
			//read: 'data/read-persons-success.json',
			//read: 'http://api.vanheemstrapictures.com/services/mql/read', // use this in the future when Bluehost allows for this
			read: 'http://localhost:5001/?api=person&action=read', // Gets set in the Service calling this Store as follows: operation.setUrl('http://localhost:5001/?api=person&action=read');
			//read: 'http://localhost:5001/services/mql/read',
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
	//WAS sorters: "PersonLastName",
	sorters: [{
		property: "PersonLastName",
		direction: "ASC" // e.g. "ASC" or "DESC"
	}],
    isAutoUpdate: true,
	autoLoad: false, // loading by Services
    grouper: {
        groupFn: function(record) {
            try {
                return record.get("PersonLastName")[0].toUpperCase(); // so 'van Halen' comes under 'V'
            } catch(err) {
				console.log(err);
            }
        }
    },
	listeners: {
		beforeload: function(store, operation, eOpts) {
			console.log("personStore: beforeload");
		}
	}	
});