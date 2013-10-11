/**
 * The organisation object representing a organisation.
 *
 * Rules for all Associations in ExtJS:
 * 1) Always put your Proxies in your Models, not your Stores, unless you have a very good reason not to. 
 *    The store will inherit its model's proxy, and you can always override it.
 * 2) Always use fully qualified model names in your relationships.
 * 3) You can use both foreignKey and associationKey if you like.
 * 4) Always set the foreignKey, if you want to load the foreign object at will. 
 * 5) You should set the name property if you plan to override this association.
 * 6) You do not need a belongsTo relationship for a hasMany to work.
 * 7) Set the primaryKey property if the id field of the parent model is not "id".
 *
 * Rules for HasMany Associations in ExtJS:
 * 1) Always require your child models if using them in hasMany relationships.
 *    To make it easy, and avoid potential circular references, you can require them in app.js. 
 * 2) Always use associationKey if you return the children in the same response as the parent.
 * 3) Always name your hasMany relationships.
 * 4) Consider giving the reader root a meaningful name (other than "data").
 * 5) The child model does not need a belongsTo relationship for the hasMany to work.
 *
 * Rules for HasOne and BelongsTo Associations in ExtJS:
 * 1) Always set the getterName.
 * 2) Always set the setterName.
 * 3) Always set the associationKey, if the foreign object is returned in the same response as this object.
 * 4) Consider changing the instanceName to something shorter.
 * 5) The getter behaves differently depending on whether the foreign object is loaded or not. 
 *    If it's loaded, the foreign object is returned. 
 *    Otherwise, you need to pass in a callback to get it.
 * 6) Sometimes you need to use uses or requires for the belongsTo association. 
 *    Watch out for circular references though.
 * 7) Calling setter() function does not seem to set the instance. 
 *    Set object.belongsToInstance = obj  if calling the setter().
 */
Ext.define("Core.model.organisation.Model", {
    extend: "Core.model.organisation.base.Model",
	
	// Associated models of hasMany relationships
	requires:[
		"Core.model.membership.Model",
		"Core.model.organisation.group.Model"
	],
	
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_OrganisationID",
	    fields: [
	        { name: "kp_OrganisationID", type: "int",	useNull: true },
			{ name: "OrganisationName", type: "string"  },
			{ name: 'ts_Created', type: 'date', persist: false },
			{ name: 'ts_Modified', type: 'date', persist: false }		
	    ],
		hasMany:[
			{
			  name: "Membership",
			  associationKey: "Membership",
			  instanceName: "Membership",
			  getterName: "getMembership",
			  setterName: "setMembership",			  
			  model: "Core.model.membership.Model",
			  primaryKey: "kp_OrganisationID", // the field in the parent that identifies it.
			  foreignKey: "kf_OrganisationID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			  foreignStore: "membershipStore",  //WAS "Core.store.date.Store", // the store name that contains the related records
			  foreignStoreId: "membershipStore" // the store id  of the foreign store
			},{
			  name: "OrganisationGroup",
			  associationKey: "OrganisationGroup",
			  instanceName: "OrganisationGroup",
			  getterName: "getOrganisationGroup",
			  setterName: "setOrganisationGroup",				  
			  model: "Core.model.organisation.group.Model",
			  primaryKey: "kp_OrganisationID", // the field in the parent that identifies it.
			  foreignKey: "kf_OrganisationID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			  foreignStore: "organisationGroupStore",  //WAS "Core.store.date.Store", // the store name that contains the related records
			  foreignStoreId: "organisationGroupStore" // the store id  of the foreign store
			}		
		],
	    validations: [
	        { type: "presence", field: "kp_OrganisationID" },
			{ type: "presence", field: "OrganisationName",     message: "Please enter a name." }
	    ],
		proxy: {
			type: 'ajax',
			url: 'data/?action=write&model=organisation&format=json', // Required placeholder		
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
				//read: 'data/read-organisations-success.json',
				//read: 'http://api.vanheemstrapictures.com/services/mql/read', // use this in the future when Bluehost allows for this
				read: 'http://localhost:5001/?api=organisation&action=read',
				//read: 'http://localhost:5001/services/mql/read',
				//write: 'core/components/core/apps/core/data/mql-single-organisation.json',
				write: 'data/?action=write&model=organisation&format=json'
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
		/*
		 * Gets the Model instance and returns it in HTML format.
		 *
		 */
		getHTML: function()
		{
			var parentDiv = document.createElement("DIV");
			parentDiv.className = "organisation";
			var data = this.data;
			for(field in data){
				if(typeof field !== []){
					var childDiv = document.createElement("DIV");
					childDiv.className = field;
					childDiv.setAttribute('key', field);
					childDiv.setAttribute('value', data[field]);
					parentDiv.appendChild(childDiv);
				}
			}//eof for
			return parentDiv;
		}
	},//eof config
	// Ext requires properties outside of config
    idProperty: "kp_OrganisationID",
	fields: [
        { name: "kp_OrganisationID", type: "int", useNull: true },
		{ name: "OrganisationName", type: "string"  },
		{ name: 'ts_Created', type: 'date', persist: false },
		{ name: 'ts_Modified', type: 'date', persist: false }
	],
	hasMany:[
		{
		  name: "Membership",
		  associationKey: "Membership",	
		  instanceName: "Membership",
		  getterName: "getMembership",
		  setterName: "setMembership",			  
		  model: "Core.model.membership.Model",
		  primaryKey: "kp_OrganisationID", // the field in the parent that identifies it.
		  foreignKey: "kf_OrganisationID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
		  foreignStore: "membershipStore",  //WAS "Core.store.date.Store", // the store name that contains the related records
		  foreignStoreId: "membershipStore" // the store id  of the foreign store
		},{
		  name: "OrganisationGroup",
		  associationKey: "OrganisationGroup",	
		  instanceName: "OrganisationGroup",
		  getterName: "getOrganisationGroup",
		  setterName: "setOrganisationGroup",			  
		  model: "Core.model.organisation.group.Model",
		  primaryKey: "kp_OrganisationID", // the field in the parent that identifies it.
		  foreignKey: "kf_OrganisationID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
		  foreignStore: "organisationGroupStore",  //WAS "Core.store.date.Store", // the store name that contains the related records
		  foreignStoreId: "organisationGroupStore" // the store id  of the foreign store
		}		
	],	
    validations: [
        { type: "presence", field: "kp_OrganisationID" },
		{ type: "presence", field: "OrganisationName",     message: "Please enter a name." }
    ],
	proxy: {
		type: 'ajax',
		url: 'data/?action=write&model=organisation&format=json', // Required placeholder
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
			//read: 'data/read-organisations-success.json',
			//read: 'http://api.vanheemstrapictures.com/services/mql/read', // use this in the future when Bluehost allows for this
			read: 'http://localhost:5001/?api=organisation&action=read',
			//read: 'http://localhost:5001/services/mql/read',
			//write: 'core/components/core/apps/core/data/mql-single-organisation.json',
			write: 'data/?action=write&model=organisation&format=json'
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
	/*
	 * Gets the Model instance and returns it in HTML format.
	 *
	 */
	getHTML: function()
    {
		var parentDiv = document.createElement("DIV");
		parentDiv.className = "organisation";
		var data = this.data;
		for(field in data){
			if(typeof field !== []){
				var childDiv = document.createElement("DIV");
				childDiv.className = field;
				childDiv.setAttribute('key', field);
				childDiv.setAttribute('value', data[field]);
				parentDiv.appendChild(childDiv);
			}
		}//eof for
		return parentDiv;
    }
});