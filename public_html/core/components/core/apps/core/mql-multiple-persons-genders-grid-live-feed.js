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
		idProperty: 'kp_PersonID',
		associations: [
			{ type: 'hasOne', model: 'core.model.Gender', primaryKey: 'kp_GenderID', foreignKey: 'kf_GenderID' }
		]
    });
	
	// Create a 'Gender' model.
    Ext.define('core.model.Gender', {
		extend: 'Ext.data.Model',
        fields: [
			{ name: 'kp_GenderID', type: 'int'}, 
			{ name: 'GenderName', type: 'string'}
		],
		idProperty: 'kp_GenderID',
		belongsTo: 'core.model.Person'
    });

    // The JSON Reader is used by a Proxy to read a server response 
    // that is sent back in JSON format. 
    // This usually happens as a result of loading a Store
    var storePerson = new Ext.data.Store({
        model: 'core.model.Person',
		proxy: {
			type: 'ajax',
			api: {
				read: 'index.php?id=20&query={"query":{"type": "/core/person","kp_PersonID": null,"PersonFirstName": null,"PersonLastName": null,"kf_GenderID": null,"fk_person_gender":[{"kp_GenderID": null,"GenderName": null}]}}',
				write: 'api/services/mqlread/?query={}'
			},
			reader: {
				type: 'json',
				root: 'result'
			}
		},
		autoLoad: true
    });
	
	var storeGender = new Ext.data.Store({
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

    // create the Grid
    var grid = Ext.create('Ext.grid.Panel', {
		store: storePerson,
        stateful: true,
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
	function get_GenderName(value){
		genderName = storeGender.getById(value).get('GenderName');
		return genderName; 
	}
}); // end of OnReady