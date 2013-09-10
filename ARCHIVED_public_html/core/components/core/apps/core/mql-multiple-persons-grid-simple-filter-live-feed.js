// source: http://dev.sencha.com/deploy/ext-4.1.0-gpl/examples/grid-filtering/grid-filter-local.html
Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath({
	'Ext.ux': 'assets/templates/core/javascripts/extjs/examples/ux',
	'core': 'core/components/core/apps/core/app'
	});
Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.ux.grid.FiltersFeature',
    'Ext.toolbar.Paging',
    'Ext.ux.ajax.JsonSimlet',
    'Ext.ux.ajax.SimManager',
	'core.store.Salutations',
	'core.store.Genders',
	'core.store.Nationalities'
]);

// **************************************** START OF MODELS ***************************************************** //

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
		{name: 'kf_NationalityID', type: 'int', defaultValue: '0' }			
		//,{name: 'visible', type: 'boolean'}
	],
	idProperty: 'kp_PersonID',
	requires: 	['core.model.Gender','core.model.Salutation','core.model.Nationality'],
	associations: [
		{ type: 'hasOne', model: 'core.model.Gender', primaryKey: 'kp_GenderID', foreignKey: 'kf_GenderID' },
		{ type: 'hasOne', model: 'core.model.Salutation', primaryKey: 'kp_SalutationID', foreignKey: 'kf_SalutationID' },
		{ type: 'hasOne', model: 'core.model.Nationality', primaryKey: 'kp_NationalityID', foreignKey: 'kf_NationalityID' }
	]
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

    // configure local urls
    var urlRead = {
		local: 'index.php?id=20&query={"query":{"type": "/core/person","kp_PersonID": null,"PersonFirstName": null,"PersonLastName": null,"kf_GenderID": null,"fk_person_gender":[{"kp_GenderID": null,"GenderName": null}],"kf_SalutationID":null,"kf_NationalityID":null}}',
        remote: 'core/components/core/apps/core/data/persons-grid-filter.json'
    };
	
    // configure remote urls
    var urlWrite = {
		local: 'core/components/core/apps/core/data/xxx.json',
        remote: 'index.php?id=20&query={"query":{}}'
    };	

    // configure whether filter query is encoded or not (initially)
    var encode = false;
    
    // configure whether filtering is performed locally or remotely (initially)
    var local = true;

	// **************************************** START OF STORES ***************************************************** //
	
    var storePerson = Ext.create('Ext.data.JsonStore', {
        // store configs
        autoDestroy: true,
		requires: 'core.model.Person',
        model: 'core.model.Person',
        proxy: {
            type: 'ajax',
			api: {
					read: (local ? urlRead.local : urlRead.remote),
					write: (local ? urlWrite.local : urlWrite.remote)
			},
			/**
			 * Customized to send ../?prop=val&prop2=val2 urls.
			 */
//			buildUrl: function(request) {
			//	var url = this.url;
//				var read = this.read;
			//	var filters = eval(request.params['filter']);
			//	if (filters) {
			//		delete request.params['filter'];
			//		url += '?'
			//		for (var i = 0; i < filters.length; i++) {
			//			var filterString = filters[i].property + "=" + filters[i].value;
			//			if (url.slice(url.length-1) === '?') {
			//				url += filterString;
			//			} else {
			//				url += '&' + filterstring;
			//			} 
			//		}
			//	};
//				return read;
			//	return url;
//			},
            reader: {
                type: 'json',
                root: 'result',
                idProperty: 'kp_PersonID',
                totalProperty: 'total'
            }
        },
        remoteSort: false,
        sorters: [{
            property: 'PersonLastName',
            direction: 'ASC'
        }],
        pageSize: 10 // was 50
    });

	// storeSalutation and associated functions
	var storeSalutation = new core.store.Salutations();	
	function get_SalutationAbbreviation(value){
		if(value){
			salutationAbbreviation = storeSalutation.getById(value).get('SalutationAbbreviation');
			return salutationAbbreviation;
		}
		else{
			return 'undefined';
		}
	};

	// storeGender and associated functions
	var storeGender = new core.store.Genders();	
	function get_GenderName(value){
		if(value){
			genderName = storeGender.getById(value).get('GenderName');
			return genderName;
		}
		else{
			return 'undefined';
		}
	};

	// storeNationality and associated functions
	var storeNationality = new core.store.Nationalities();
	function get_NationalityName(value){
		if(value){
			nationalityName = storeNationality.getById(value).get('NationalityName');
			return nationalityName;
		}
		else{
			return 'undefined';
		}
	};
	
	// **************************************** END OF STORES ***************************************************** //	
	
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
		{dataIndex: 'kp_PersonID', text: 'ID', id: 'kp_PersonID', width: 40, filter: {type: 'numeric', disabled: false}}, 
		{dataIndex: 'kf_SalutationID', text: 'Salutation', id: 'kf_SalutationID', width: 80, filter: {type: 'numeric', disabled: false}, renderer: get_SalutationAbbreviation},
		{dataIndex: 'PersonFirstName', text: 'First Name', id: 'PersonFirstName', width: 80, filter: {type: 'string', disabled: false}}, 
		{dataIndex: 'PersonLastName', text: 'Last Name', id: 'PersonLastName', width: 80, filter: {type: 'string', disabled: false}},
		{dataIndex: 'kf_GenderID', text: 'Gender', id: 'kf_GenderID', width: 80, filter: {type: 'numeric', disabled: false}, renderer: get_GenderName},
		{dataIndex: 'kf_NationalityID', text: 'Nationality', id: 'kf_NationalityID', width: 80, filter: {type: 'numeric', disabled: false}, renderer: get_NationalityName}
//		,{dataIndex: 'visible', text: 'Visible'} // this column's filter is defined in the filters feature config	
		];

        return columns.slice(start || 0, finish);
    };
    
    var grid = Ext.create('Ext.grid.Panel', {
        border: false,
        store: storePerson,
        columns: createColumns(6), // number of columns
        loadMask: true,
        features: [filters],
        dockedItems: [Ext.create('Ext.toolbar.Paging', {
            dock: 'bottom',
            store: storePerson
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
                    newUrl = local ? urlRead.local : urlRead.remote,
                    store = grid.view.getStore();
                 
                // update the GridFilter setting
                grid.filters.local = local;
                // bind the store again so GridFilters is listening to appropriate store event
                grid.filters.bindStore(storePerson);
                // update the url for the proxy
                storePerson.proxy.url = newUrl;

                button.setText(text);
                storePerson.load();
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
                if (grid.headerCt.items.length < 8) {
                    grid.headerCt.add(createColumns(8, 6));
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

    storePerson.load();
});