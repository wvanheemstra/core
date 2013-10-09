/**
 * The person object representing a person.
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
Ext.define("Core.model.person.Model", {
    extend: "Core.model.person.base.Model",
	
	// Associated models of hasMany relationships
	requires:[
		"Core.model.membership.Model",
		"Core.model.person.group.Model"
	],
	
    // Touch uses properties inside of config
	config: {
	    idProperty: "kp_PersonID",
	    fields: [
	        { name: "kp_PersonID",      type: "int"     },
	        { name: "PersonFirstName",    type: "string"  },
			{ name: "PersonLastName",    type: "string"  },
			{ name: 'kf_GenderID', type: 'int', defaultValue: '0' },
			{ name: 'kf_SalutationID', type: 'int', defaultValue: '0' },
			{ name: 'kf_NationalityID', type: 'int', defaultValue: '0' },
			{ name: 'kf_DateID', type: 'int', defaultValue: '0' }
	    ],
		belongsTo:[
			{
			  name: "Salutation",
			  associationKey: "Salutation", 
			  instanceName: "Salutation",
			  getterName: "getSalutation",
			  setterName: "setSalutation",
			  model: "Core.model.salutation.Model",
			  primaryKey: "kp_SalutationID", // the field in the parent that identifies it.
			  foreignKey: "kf_SalutationID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			  foreignStore: "salutationStore",  //WAS "Core.store.salutation.Store", // the store name that contains the related records
			  foreignStoreId: "salutationStore" // the store id  of the foreign store
			},
			{
			  name: "Gender",
			  associationKey: "Gender",	
			  instanceName: "Gender",
			  getterName: "getGender",
			  setterName: "setGender",			  
			  model: "Core.model.gender.Model",
			  primaryKey: "kp_GenderID", // the field in the parent that identifies it.
			  foreignKey: "kf_GenderID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			  foreignStore: "genderStore", //WAS "Core.store.gender.Store", // the store name that contains the related records
			  foreignStoreId: "genderStore" // the store id  of the foreign store
			},
			{
			  name: "Nationality",
			  associationKey: "Nationality",
			  instanceName: "Nationality",
			  getterName: "getNationality",
			  setterName: "setNationality",
			  model: "Core.model.nationality.Model",
			  primaryKey: "kp_NationalityID", // the field in the parent that identifies it.
			  foreignKey: "kf_NationalityID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			  foreignStore: "nationalityStore", //WAS "Core.store.nationality.Store", // the store name that contains the related records
			  foreignStoreId: "nationalityStore" // the store id  of the foreign store
			}		
		],
		hasOne:[
			{
			  name: "Date",
			  associationKey: "Date",
			  instanceName: "Date",
			  getterName: "getDate",
			  setterName: "setDate",		  
			  model: "Core.model.date.Model",
			  primaryKey: "kp_DateID", // the field in the parent that identifies it.
			  foreignKey: "kf_DateID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			  foreignStore: "dateStore",  //WAS "Core.store.date.Store", // the store name that contains the related records
			  foreignStoreId: "dateStore" // the store id  of the foreign store
			}		
		],
		hasMany:[
			{
			  name: "Membership",
			  associationKey: "Membership",
			  instanceName: "Membership",
			  getterName: "getMembership",
			  setterName: "setMembership",			  
			  model: "Core.model.membership.Model",
			  primaryKey: "kp_PersonID", // the field in the parent that identifies it.
			  foreignKey: "kf_PersonID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			  foreignStore: "membershipStore",  //WAS "Core.store.date.Store", // the store name that contains the related records
			  foreignStoreId: "membershipStore" // the store id  of the foreign store
			},{
			  name: "PersonGroup",
			  associationKey: "PersonGroup",
			  instanceName: "PersonGroup",
			  getterName: "getPersonGroup",
			  setterName: "setPersonGroup",				  
			  model: "Core.model.person.group.Model",
			  primaryKey: "kp_PersonID", // the field in the parent that identifies it.
			  foreignKey: "kf_PersonID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
			  foreignStore: "personGroupStore",  //WAS "Core.store.date.Store", // the store name that contains the related records
			  foreignStoreId: "personGroupStore" // the store id  of the foreign store
			}		
		],
	    validations: [
	        { type: "presence", field: "kp_PersonID" },
	        { type: "presence", field: "PersonFirstName",     message: "Please enter a first name." },
			{ type: "presence", field: "PersonLastName",     message: "Please enter a last name." }
	    ],
		proxy: {
			type: 'ajax',
			url: 'data/write-persons-success.json', // Required placeholder			
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
				read: 'http://localhost:5001/?api=person&action=read',
				//read: 'http://localhost:5001/services/mql/read',
				//write: 'core/components/core/apps/core/data/mql-single-person.json',
				write: 'data/write-persons-success.json'
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
		}
	},//eof config
	// Ext requires properties outside of config
    idProperty: "kp_PersonID",
	fields: [
        { name: "kp_PersonID",      type: "int"     },
        { name: "PersonFirstName",    type: "string"  },
		{ name: "PersonLastName",    type: "string"  },
		{ name: 'kf_GenderID', type: 'int', defaultValue: '0' },
		{ name: 'kf_SalutationID', type: 'int', defaultValue: '0' },
		{ name: 'kf_NationalityID', type: 'int', defaultValue: '0' },
		{ name: 'kf_DateID', type: 'int', defaultValue: '0' }
	],
	belongsTo:[
		{
		  name: "Salutation",
		  associationKey: "Salutation", 
		  instanceName: "Salutation",
		  getterName: "getSalutation",
		  setterName: "setSalutation",			  
		  model: "Core.model.salutation.Model",
		  primaryKey: "kp_SalutationID", // the field in the parent that identifies it.
		  foreignKey: "kf_SalutationID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
		  foreignStore: "salutationStore", //WAS "Core.store.salutation.Store", // the store name that contains the related records
		  foreignStoreId: "salutationStore" // the store id  of the foreign store
		},
		{
		  name: "Gender",
		  associationKey: "Gender",	
		  instanceName: "Gender",
		  getterName: "getGender",
		  setterName: "setGender",			  
		  model: "Core.model.gender.Model",
		  primaryKey: "kp_GenderID", // the field in the parent that identifies it.
		  foreignKey: "kf_GenderID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
		  foreignStore: "genderStore", //WAS "Core.store.gender.Store", // the store name that contains the related records
		  foreignStoreId: "genderStore" // the store id  of the foreign store
		},
		{
		  name: "Nationality",
		  associationKey: "Nationality",	
		  instanceName: "Nationality",
		  getterName: "getNationality",
		  setterName: "setNationality",			  
		  model: "Core.model.nationality.Model",
		  primaryKey: "kp_NationalityID", // the field in the parent that identifies it.
		  foreignKey: "kf_NationalityID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
		  foreignStore: "nationalityStore", //WAS "Core.store.nationality.Store", // the store name that contains the related records
		  foreignStoreId: "nationalityStore" // the store id  of the foreign store
		}			
	],
	hasOne:[
		{
		  name: "Date",
		  associationKey: "Date",	
		  instanceName: "Date",
		  getterName: "getDate",
		  setterName: "setDate",			  
		  model: "Core.model.date.Model",
		  primaryKey: "kp_DateID", // the field in the parent that identifies it.
		  foreignKey: "kf_DateID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
		  foreignStore: "dateStore",  //WAS "Core.store.date.Store", // the store name that contains the related records
		  foreignStoreId: "dateStore" // the store id  of the foreign store
		}		
	],
	hasMany:[
		{
		  name: "Membership",
		  associationKey: "Membership",	
		  instanceName: "Membership",
		  getterName: "getMembership",
		  setterName: "setMembership",			  
		  model: "Core.model.membership.Model",
		  primaryKey: "kp_PersonID", // the field in the parent that identifies it.
		  foreignKey: "kf_PersonID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
		  foreignStore: "membershipStore",  //WAS "Core.store.date.Store", // the store name that contains the related records
		  foreignStoreId: "membershipStore" // the store id  of the foreign store
		},{
		  name: "PersonGroup",
		  associationKey: "PersonGroup",	
		  instanceName: "PersonGroup",
		  getterName: "getPersonGroup",
		  setterName: "setPersonGroup",			  
		  model: "Core.model.person.group.Model",
		  primaryKey: "kp_PersonID", // the field in the parent that identifies it.
		  foreignKey: "kf_PersonID", // the key that identifies the parent in the child. In a belongsTo or hasOne relation, this is part of the model itself, in a hasMany relation this is a field of the child objects that refer to my Id.
		  foreignStore: "personGroupStore",  //WAS "Core.store.date.Store", // the store name that contains the related records
		  foreignStoreId: "personGroupStore" // the store id  of the foreign store
		}		
	],	
    validations: [
        { type: "presence", field: "kp_PersonID" },
        { type: "presence", field: "PersonFirstName",     message: "Please enter a first name." },
		{ type: "presence", field: "PersonLastName",     message: "Please enter a last name." }
    ],
	proxy: {
		type: 'ajax',
		url: 'data/write-persons-success.json', // Required placeholder
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
			read: 'http://localhost:5001/?api=person&action=read',
			//read: 'http://localhost:5001/services/mql/read',
			//write: 'core/components/core/apps/core/data/mql-single-person.json',
			write: 'data/write-persons-success.json'
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
	}	
});