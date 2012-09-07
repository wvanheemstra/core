/**
 * core.view.PersonGrid
 * @extends Ext.grid.Panel
 */
Ext.require ([
    'Ext.ux.grid.FiltersFeature'
]);
 
Ext.define('core.view.PersonGrid' , {
    extend: 'Ext.grid.Panel',
    alias : 'widget.persongrid',
	// override
	constructor: function(config) {
		config = config || {};
		config.title = 'Person Grid';
		config.store = 'core.store.Persons';
		config.gridId = 'personGrid';
		config.stateful = true;
		config.stateId = 'personGrid';
		config.bbar = Ext.create('Ext.PagingToolbar', {
			store: 'core.store.Persons',
			displayInfo: true,
			displayMsg: 'Displaying Persons {0} - {1} of {2}',
			emptyMsg: "No Persons to display"
		});
		config.bbar.add([  
			{
				text: 'Clear Filters',
				handler: function () {
					this.ownerCt.ownerCt.filters.clearFilters();
				} 
			}  
		]);
		config.columns = personColumns(6);
		config.features = [filters];
		config.listeners = {
			render : function(){      
				//this.body.mask('Loading...');
				//var store = this.getStore();
				//store.load.defer(100, store);
				this.store.load(); // requires that store's autoLoad is false
			},
			delay: 200,
			load: function(){
				this.store.loaded = true;			
				//this.body.unmask();
			}
		};
		// finally call the superclasses implementation
		this.superclass.constructor.call(this, config);
	} 	
});

var filters = {
	ftype: 'filters',
	local: true,   // local filtering
	// Filters are most naturally placed in the column definition, but can also be
	// added here.
	filters: [{
		type: 'boolean',
		dataIndex: 'visible'
	}]
};

var personColumns = function (finish, start) {
	var columns = [
		{ dataIndex: 'kp_PersonID', header: 'ID', width: 50, filter: {type: 'numeric', disabled: false} },
		{ dataIndex: 'kf_SalutationID', header: 'Salutation', width: 60, filter: {type: 'numeric', disabled: false}, renderer: get_SalutationAbbreviation  },
		{ dataIndex: 'PersonFirstName', header: 'First Name', width: 75, filter: {type: 'string', disabled: false} },
		{ dataIndex: 'PersonLastName', header: 'Last Name', width: 125, filter: {type: 'string', disabled: false} },
		{ dataIndex: 'kf_GenderID', header: 'Gender', width: 60, filter: {type: 'numeric', disabled: false}, renderer: get_GenderName },
		{ dataIndex: 'kf_NationalityID', header: 'Nationality', flex: 1, filter: {type: 'numeric', disabled: false}, renderer: get_NationalityName }	
	];
	return columns.slice(start || 0, finish);
};

function get_SalutationAbbreviation(value){
	if(value){
		if(Ext.getStore('core.store.Salutations').loaded) {
			if(debug){console.info('PersonGrid - mapping to SalutationAbbreviation')};
			salutationAbbreviation = Ext.getStore('core.store.Salutations').getById(value).get('SalutationAbbreviation');
			if(debug){console.info('PersonGrid - SalutationAbbreviation mapped')};
			return salutationAbbreviation;
		}
		else {
			if(debug){console.info('PersonGrid - Salutations not yet loaded')};
			return 'Unknown';
		}
	}
	else{
		return 'Undefined';
	}
};

function get_GenderName(value){
	if(value){
		if(Ext.getStore('core.store.Genders').loaded) {
			if(debug){console.info('PersonGrid - mapping to GenderName')};
			genderName = Ext.getStore('core.store.Genders').getById(value).get('GenderName');
			if(debug){console.info('PersonGrid - GenderName mapped')};
			return genderName;
		}
		else {
			if(debug){console.info('PersonGrid - Genders not yet loaded')};
			return 'Unknown';
		}
	}
	else{
		return 'Undefined';
	}
};

function get_NationalityName(value){
	if(value){
		if(Ext.getStore('core.store.Nationalities').loaded) {
			if(debug){console.info('PersonGrid - mapping to NationalityName')};
			nationalityName = Ext.getStore('core.store.Nationalities').getById(value).get('NationalityName');
			if(debug){console.info('PersonGrid - NationalityName mapped')};
			return nationalityName;
		}
		else {
			if(debug){console.info('PersonGrid - Nationalities not yet loaded')};
			return 'Unknown';
		}
	}
	else{
		return 'Undefined';
	}
};