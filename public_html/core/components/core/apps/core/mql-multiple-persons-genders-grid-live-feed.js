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

    // Define a 'Person' model.
    Ext.define('core.model.Person', {
		extend: 'Ext.data.Model',
        fields: [
			{ name: 'kp_PersonID', type: 'int'}, 
			{ name: 'PersonFirstName', type: 'string'}, 
			{ name: 'PersonLastName', type: 'string'},
			{ name: 'kf_GenderID', type: 'int', defaultValue: '0' },
			{ name: 'kf_SalutationID', type: 'int', defaultValue: '0' },
			{ name: 'kf_NationalityID', type: 'int', defaultValue: '0' }
		],
		idProperty: 'kp_PersonID',
		//requires: 	'core.model.Gender',
		associations: [
			{ type: 'hasOne', model: 'core.model.Gender', primaryKey: 'kp_GenderID', foreignKey: 'kf_GenderID' },
			{ type: 'hasOne', model: 'core.model.Salutation', primaryKey: 'kp_SalutationID', foreignKey: 'kf_SalutationID' },
			{ type: 'hasOne', model: 'core.model.Nationality', primaryKey: 'kp_NationalityID', foreignKey: 'kf_NationalityID' }
		]
    });
	
	// Define a 'Gender' model.
    Ext.define('core.model.Gender', {
		extend: 'Ext.data.Model',
        fields: [
			{ name: 'kp_GenderID', type: 'int'}, 
			{ name: 'GenderName', type: 'string'}
		],
		idProperty: 'kp_GenderID',
		belongsTo: 'core.model.Person'
    });
	
	// Define a 'Salutation' model.
    Ext.define('core.model.Salutation', {
		extend: 'Ext.data.Model',
        fields: [
			{ name: 'kp_SalutationID', type: 'int'}, 
			{ name: 'SalutationAbbreviation', type: 'string'}
		],
		idProperty: 'kp_SalutationID',
		belongsTo: 'core.model.Person'
    });

	// Define a 'Nationality' model.
    Ext.define('core.model.Nationality', {
		extend: 'Ext.data.Model',
        fields: [
			{ name: 'kp_NationalityID', type: 'int'}, 
			{ name: 'NationalityName', type: 'string'}
		],
		idProperty: 'kp_NationalityID',
		belongsTo: 'core.model.Person'
    });
	
    // The JSON Reader is used by a Proxy to read a server response 
    // that is sent back in JSON format. 
    // This usually happens as a result of loading a Store
	
	// storePerson and associated functions
    var storePerson = new Ext.data.Store({
		requires: ['core.model.Person'],
        model: 'core.model.Person',
		proxy: {
			type: 'ajax',
			api: {
				read: 'index.php?id=20&query={"query":{"type": "/core/person","kp_PersonID": null,"PersonFirstName": null,"PersonLastName": null,"kf_GenderID": null,"fk_person_gender":[{"kp_GenderID": null,"GenderName": null}],"kf_SalutationID":null,"kf_NationalityID":null}}',
				write: 'api/services/mqlread/?query={}'
			},
			reader: {
				type: 'json',
				root: 'result'
			}
		},
		autoLoad: true
    });
	
	// storeGender and associated functions
	var storeGender = new Ext.data.Store({
		requires: ['core.model.Gender'],
        model: 'core.model.Gender',
		proxy: {
			type: 'ajax',
			api: {
				read: 'index.php?id=20&query={"query":{"type": "/core/gender","kp_GenderID": null,"GenderName": null}}',
				write: 'api/services/mqlread/?query={}'
			},
			reader: {
				type: 'json',
				root: 'result'
			}
		},
		autoLoad: true
    });
	function get_GenderName(value){
		if(value) {
			genderName = storeGender.getById(value).get('GenderName');
			return genderName;
		}
		else {
			return 'undefined';
		}
	};	
	
	// storeSalutation and associated functions
	var storeSalutation = new Ext.data.Store({
		requires: ['core.model.Salutation'],
        model: 'core.model.Salutation',
		proxy: {
			type: 'ajax',
			api: {
				read: 'index.php?id=20&query={"query":{"type": "/core/salutation","kp_SalutationID": null,"SalutationAbbreviation": null}}',
				write: 'api/services/mqlread/?query={}'
			},
			reader: {
				type: 'json',
				root: 'result'
			}
		},
		autoLoad: true
    });
	function get_SalutationAbbreviation(value){
		if(value){
			salutationAbbreviation = storeSalutation.getById(value).get('SalutationAbbreviation');
			return salutationAbbreviation;
		}
		else{
			return 'undefined';
		}
	};
	
	// storeNationality and associated functions
	var storeNationality = new Ext.data.Store({
		requires: ['core.model.Nationality'],
        model: 'core.model.Nationality',
		proxy: {
			type: 'ajax',
			api: {
				read: 'index.php?id=20&query={"query":{"type": "/core/nationality","kp_NationalityID": null,"NationalityName": null}}',
				write: 'api/services/mqlread/?query={}'
			},
			reader: {
				type: 'json',
				root: 'result'
			}
		},
		autoLoad: true
    });	
	function get_NationalityName(value){
		if(value){
			nationalityName = storeNationality.getById(value).get('NationalityName');
			return nationalityName;
		}
		else{
			return 'undefined';
		}
	};
	
    // create the Grid
    var grid = Ext.create('Ext.grid.Panel', {
		store: storePerson,
        stateful: true,
        stateId: 'stateGrid',
        columns: [
            {
                text     : 'ID',
				width	 : 82,
                sortable : true,
                dataIndex: 'kp_PersonID'
            },
			{
                text     : 'Salutation',
				width	 : 124,
                sortable : true,
                dataIndex: 'kf_SalutationID',
				renderer : get_SalutationAbbreviation	
            },
            {
                text     : 'First Name',
                width     : 120,
                sortable : true,
                dataIndex: 'PersonFirstName'
            },
            {
                text     : 'Last Name',
                width    : 180,
                sortable : true,
                dataIndex: 'PersonLastName'
            },
			{
                text     : 'Gender',
				width	 : 80,
                sortable : true,
                dataIndex: 'kf_GenderID',
				renderer : get_GenderName
            },
			{
                text     : 'Nationality',
				width	 : 124,
                sortable : true,
                dataIndex: 'kf_NationalityID',
				renderer : get_NationalityName
            },
			{
                text     : '',
				flex	 : 1,
                sortable : false
			},
			{
                text     : '',
				width	 : 0,
                sortable : false
			}
        ],
        height: 350,
        width: 1080,
        title: 'Persons',
        renderTo: 'grid-example',
        viewConfig: {
            stripeRows: true
        }
    });
}); // end of OnReady