Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.state.*'
]);

Ext.onReady(function() {
    Ext.QuickTips.init();
    
    // setup the state provider, all state information will be saved to a cookie
    Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));

    // See also: http://all-docs.info/extjs4/docs/api/Ext.data.JsonReader.html

    // Create a 'Person' model.
    Ext.define('core.model.Person', {
		extend: 'Ext.data.Model',
        fields: [
			{ name: 'kp_PersonID', type: 'int'}, 
			{ name: 'PersonFirstName', type: 'string'}, 
			{ name: 'PersonLastName', type: 'string'},
			{ name: 'kf_GenderID', type: 'int', defaultValue: '0' },
			{ name: 'kf_SalutationID', type: 'int', defaultValue: '0' }
		],
		idProperty: 'kp_PersonID'
    });

	var appName = "services-mql-single-person-grid";
	var ajaxCallTimeout = 30000; // 30000 is the default of ExtJS
	var ajaxCallHeaders = {
	       	//'Accept-Encoding': true,
			//'Access-Control-Allow-Origin': "*",
    		//'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
	    };
	//Ext.lib.Ajax.useDefaultHeader = false; // Even if a server does accept x-domain, the X-Requested-With header breaks it.
	var remoteUser = "remoteUser";

    // The JSON Reader is used by a Proxy to read a server response 
    // that is sent back in JSON format. 
    // This usually happens as a result of loading a Store
    var store = new Ext.data.Store({
	//Ext.define('core.store.Persons', {
	//	extend: 'Ext.data.Store',
	//  pageSize: 50, 
        model: 'core.model.Person',
		proxy: {
			type: 'ajax',
			actionMethods: {
				create: 'POST',
				write: 'POST',
				read: 'POST',
				update: 'POST',
				destroy: 'POST'
			},
			
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
					disableCaching	: false // explicitely set it to false, ServerProxy handles caching 
				});
				Ext.Ajax.request(request); 
				return request;
			},
			useDefaultXhrHeader : false, // set this to false to prevent a cross-domain issue
			useDefaultHeader: false,
			headers	: ajaxCallHeaders,
			timeout : ajaxCallTimeout, 
			
			contentType: "application/json; charset=utf-8",
			
			api: {
				//read: 'core/components/core/apps/core/data/mql-single-person.json',
				//read: 'http://api.vanheemstrapictures.com/services/mql/read', // use this in the future when Bluehost allows for this
				read: 'http://vanheemstrapictures.com:3000/services/mql/read',
				write: 'core/components/core/apps/core/data/mql-single-person.json'
			},
			reader: {
				type: 'json',
				root: 'result', // change from data to result when used with MQL
				totalProperty: 'total'
			},
			writer: {
				type: 'json',
				encode: true
			},
			simpleSortMode: true
		},
		sorters: [{
			property: 'PersonLastName',
			direction: 'ASC'
		}],
		listeners: {
			beforeload: function(store, operation, eOpts) {
				store.proxy.jsonData = {
					"pagination" :  {
						"page": operation.page,
						"limit": operation.limit,
						"sort": operation.sorters[0].property,
						"dir": operation.sorters[0].direction
					},
					"basicInfo" : {
						"ccoId": remoteUser,
						"prefLang": "eng_GB",
						"requestStartDate": (new Date()).toISOString(),
						"requesterApp": appName
					}
				};
			}
		},
		autoLoad: true
    });

	// Sample POST output would be:
	// {
	//     "basicInfo": {
	//         "ccoId": "remoteUser", 
	//         "prefLang": "eng_GB", 
	//         "requestStartDate": "2013-02-18T20:28:22.332Z", 
	//         "requesterApp": "services-mql-single-person-grid"
	//     }, 
	//     "pagination": {
	//         "dir": "ASC", 
	//         "limit": 25, 
	//         "page": 1, 
	//         "sort": "PersonLastName"
	//     }
	// }

    // create the Grid
    var grid = Ext.create('Ext.grid.Panel', {
	//Ext.define('core.grid.panel', {
		//extend: 'Ext.grid.Panel',
        //store: 'core.store.Persons',
		store: store,
        stateful: true,
		//autoShow: true,
        stateId: 'stateGrid',
        columns: [
            {
                text     : 'ID',
				width	 : 24,
                sortable : true,
                dataIndex: 'kp_PersonID'
            },
            {
                text     : 'First Name',
                flex     : 1,
                sortable : true,
                dataIndex: 'PersonFirstName'
            },
            {
                text     : 'Last Name',
                width    : 200,
                sortable : true,
                dataIndex: 'PersonLastName'
            },
			{
                text     : 'Gender ID',
				width	 : 124,
                sortable : true,
                dataIndex: 'kf_GenderID'
            },
			{
                text     : 'Salutation ID',
				width	 : 124,
                sortable : true,
                dataIndex: 'kf_SalutationID'
            }
        ],
        height: 350,
        width: 600,
        title: 'Array Grid - Person',
        renderTo: 'grid-example',
        viewConfig: {
            stripeRows: true
        }
    });
}); // end of OnReady