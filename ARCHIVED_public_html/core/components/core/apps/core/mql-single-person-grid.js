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

    // The JSON Reader is used by a Proxy to read a server response 
    // that is sent back in JSON format. 
    // This usually happens as a result of loading a Store
    var store = new Ext.data.Store({
	//Ext.define('core.store.Persons', {
	//	extend: 'Ext.data.Store',
        model: 'core.model.Person',
		proxy: {
			type: 'ajax',
			api: {
				read: 'core/components/core/apps/core/data/mql-single-person.json',
				write: 'core/components/core/apps/core/data/mql-single-person.json'
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