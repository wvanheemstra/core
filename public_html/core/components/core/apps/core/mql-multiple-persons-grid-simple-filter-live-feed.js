// source: http://dev.sencha.com/deploy/ext-4.1.0-gpl/examples/grid-filtering/grid-filter-local.html
Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'assets/templates/core/javascripts/extjs/examples/ux');
Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.ux.grid.FiltersFeature',
    'Ext.toolbar.Paging',
    'Ext.ux.ajax.JsonSimlet',
    'Ext.ux.ajax.SimManager'
]);

	// **************************************** START OF MODELS ***************************************************** //

/**  REMOVE
	Ext.define('Product', {
		extend: 'Ext.data.Model',
		fields: [{
			name: 'id',
			type: 'int'
		}, {
			name: 'company'
		}, {
			name: 'price',
			type: 'float'
		}, {
			name: 'date',
			type: 'date',
			dateFormat: 'Y-m-d'
		}, {
			name: 'visible',
			type: 'boolean'
		}, {
			name: 'size'
		}]
	});
*/

	/**
     * core.model.Person
     * @extends Ext.data.Model
	 */
	Ext.define('core.model.Person', {
		extend: 'Ext.data.Model',
		fields: [
			{name: 'id', type: 'int'}, 
			{name: 'kp_PersonID', type: 'int'}, 
			{name: 'PersonFirstName', type: 'string'}, 
			{name: 'PersonLastName', type: 'string'}, 
			{name: 'kf_GenderID', type: 'int', defaultValue: '0' },
			{name: 'kf_SalutationID', type: 'int', defaultValue: '0' },
			{name: 'kf_NationalityID', type: 'int', defaultValue: '0' },
			{name: 'company'}, 
			{name: 'price', type: 'float'}, 
			{name: 'date', type: 'date', dateFormat: 'Y-m-d'}, 
			{name: 'visible', type: 'boolean'}, 
			{name: 'size'}
		],
		idProperty: 'kp_PersonID',
		//requires: 	'core.model.Gender',
		associations: [
			{ type: 'hasOne', model: 'core.model.Gender', primaryKey: 'kp_GenderID', foreignKey: 'kf_GenderID' },
			{ type: 'hasOne', model: 'core.model.Salutation', primaryKey: 'kp_SalutationID', foreignKey: 'kf_SalutationID' },
			{ type: 'hasOne', model: 'core.model.Nationality', primaryKey: 'kp_NationalityID', foreignKey: 'kf_NationalityID' }
		]
	});

	/**
     * core.model.Salutation
     * @extends Ext.data.Model
	 */
    Ext.define('core.model.Salutation', {
		extend: 'Ext.data.Model',
        fields: [
			{ name: 'kp_SalutationID', type: 'int'}, 
			{ name: 'SalutationAbbreviation', type: 'string'}
		],
		idProperty: 'kp_SalutationID',
		belongsTo: 'core.model.Person'
    });	
	
	// **************************************** END OF MODELS ***************************************************** //	
	
Ext.onReady(function(){

    Ext.ux.ajax.SimManager.init({
        delay: 300,
        defaultSimlet: null
    }).register({
        'myData': {
            data: [
                ['small', 'Small'],
                ['medium', 'Medium'],
                ['large', 'Large'],
                ['extra large', 'Extra Large']
            ],
            stype: 'json'
        }
    });

    var optionsStore = Ext.create('Ext.data.Store', {
        fields: ['id', 'text'],
        proxy: {
            type: 'ajax',
            url: 'myData',
            reader: 'array'
        }
    });

    Ext.QuickTips.init();

    // for this demo configure local and remote urls for demo purposes
    var url = {
        local:  'core/components/core/apps/core/data/persons-grid-filter.json',  // static data file
        remote: 'core/components/core/apps/core/data/persons-grid-filter.json'
    };

    // configure whether filter query is encoded or not (initially)
    var encode = false;
    
    // configure whether filtering is performed locally or remotely (initially)
    var local = true;

    var store = Ext.create('Ext.data.JsonStore', {
        // store configs
        autoDestroy: true,
        model: 'core.model.Person', // was Product
        proxy: {
            type: 'ajax',
            url: (local ? url.local : url.remote),
            reader: {
                type: 'json',
                root: 'result',
                idProperty: 'kp_PersonID',
                totalProperty: 'total'
            }
        },
        remoteSort: false,
        sorters: [{
            property: 'company',
            direction: 'ASC'
        }],
        pageSize: 10 // was 50
    });

    var filters = {
        ftype: 'filters',
        // encode and local configuration options defined previously for easier reuse
        encode: encode, // json encode the filter query
        local: local,   // defaults to false (remote filtering)

        // Filters are most naturally placed in the column definition, but can also be
        // added here.
        filters: [{
            type: 'boolean',
            dataIndex: 'visible'
        }]
    };

    // use a factory method to reduce code while demonstrating
    // that the GridFilter plugin may be configured with or without
    // the filter types (the filters may be specified on the column model
    var createColumns = function (finish, start) {

        var columns = [
/**		
		{
            dataIndex: 'id',
            text: 'Id',
            // instead of specifying filter config just specify filterable=true
            // to use store's field's type property (if type property not
            // explicitly specified in store config it will be 'auto' which
            // GridFilters will assume to be 'StringFilter'
            filterable: true,
            width: 30
            //,filter: {type: 'numeric'}
		}, 
*/		
		{
            dataIndex: 'kp_PersonID',
            text: 'ID',
            id: 'kp_PersonID',
            width: 30,
            filter: {
                type: 'numeric'
                // specify disabled to disable the filter menu
                //, disabled: true
			}
		}, {
            dataIndex: 'kf_SalutationID',
            text: 'Salutation',
            id: 'kf_SalutationID',
            width: 80,
            filter: {
                type: 'string'
                // specify disabled to disable the filter menu
                //, disabled: true
			}
		}, {
            dataIndex: 'PersonFirstName',
            text: 'First Name',
            id: 'PersonFirstName',
            width: 80,
            filter: {
                type: 'string'
                // specify disabled to disable the filter menu
                //, disabled: true
			}
		}, {
            dataIndex: 'PersonLastName',
            text: 'Last Name',
            id: 'PersonLastName',
            width: 80,
            filter: {
                type: 'string'
                // specify disabled to disable the filter menu
                //, disabled: true
			}
        }, {
            dataIndex: 'company',
            text: 'Company',
            id: 'company',
            width: 100,
            filter: {
                type: 'string'
                // specify disabled to disable the filter menu
                //, disabled: true
            }
        }, {
            dataIndex: 'price',
            text: 'Price',
            filter: {
                //type: 'numeric'  // specify type here or in store fields config
            },
            width: 70
        }, {
            dataIndex: 'size',
            text: 'Size',
            filter: {
                type: 'list',
                store: optionsStore
                //,phpMode: true
            }
        }, {
            dataIndex: 'date',
            text: 'Date',
            filter: true,
            renderer: Ext.util.Format.dateRenderer('m/d/Y')
        }, {
            dataIndex: 'visible',
            text: 'Visible'
            // this column's filter is defined in the filters feature config
        }];

        return columns.slice(start || 0, finish);
    };
    
    var grid = Ext.create('Ext.grid.Panel', {
        border: false,
        store: store,
        columns: createColumns(4),
        loadMask: true,
        features: [filters],
        dockedItems: [Ext.create('Ext.toolbar.Paging', {
            dock: 'bottom',
            store: store
        })],
        emptyText: 'No Matching Records'
    });

    // add some buttons to bottom toolbar just for demonstration purposes
    grid.child('pagingtoolbar').add([
        '->',
        {
            text: 'Encode: ' + (encode ? 'On' : 'Off'),
            tooltip: 'Toggle Filter encoding on/off',
            enableToggle: true,
            handler: function (button, state) {
                var encode = (grid.filters.encode !== true);
                var text = 'Encode: ' + (encode ? 'On' : 'Off'); 
                grid.filters.encode = encode;
                grid.filters.reload();
                button.setText(text);
            } 
        },
        {
            text: 'Local Filtering: ' + (local ? 'On' : 'Off'),
            tooltip: 'Toggle Filtering between remote/local',
            enableToggle: true,
            handler: function (button, state) {
                var local = (grid.filters.local !== true),
                    text = 'Local Filtering: ' + (local ? 'On' : 'Off'),
                    newUrl = local ? url.local : url.remote,
                    store = grid.view.getStore();
                 
                // update the GridFilter setting
                grid.filters.local = local;
                // bind the store again so GridFilters is listening to appropriate store event
                grid.filters.bindStore(store);
                // update the url for the proxy
                store.proxy.url = newUrl;

                button.setText(text);
                store.load();
            } 
        },
        {
            text: 'All Filter Data',
            tooltip: 'Get Filter Data for Grid',
            handler: function () {
                var data = Ext.encode(grid.filters.getFilterData());
                Ext.Msg.alert('All Filter Data',data);
            } 
        },{
            text: 'Clear Filter Data',
            handler: function () {
                grid.filters.clearFilters();
            } 
        },{
            text: 'Add Columns',
            handler: function () {
                if (grid.headerCt.items.length < 6) {
                    grid.headerCt.add(createColumns(6, 4));
                    grid.view.refresh();
                    this.disable();
                }
            }
        }    
    ]);

    var win = Ext.create('Ext.Window', {
        title: 'Persons - Grid Filters',
        height: 400,
        width: 700,
        layout: 'fit',
        items: grid
    }).show();

    store.load();
});