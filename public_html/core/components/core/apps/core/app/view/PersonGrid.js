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
	initComponent: function() {
		this.title = 'Person Grid';
		this.store = 'core.store.Persons';
		this.gridId = 'personGrid';
		this.bbar = Ext.create('Ext.PagingToolbar', {
			store: 'core.store.Persons',
			displayInfo: true,
			displayMsg: 'Displaying Persons {0} - {1} of {2}',
			emptyMsg: "No Persons to display"
		});
		this.columns = personColumns(6);
		this.features = [{
			ftype: 'filters',
			local: true   // defaults to false (remote filtering)
		}];
		this.listeners = {
			render : function(){      
				//this.body.mask('Loading...');
				//var store = this.getStore();
				//store.load.defer(100, store);
				this.store.load(); // requires that store's autoLoad is false
				this.store.loaded = true;
			},
			delay: 200,
			load: function(){
				//this.body.unmask();
			}
		};
		// finally call the superclasses implementation
		core.view.PersonGrid.superclass.initComponent.call(this);	
	} 	
});

var personColumns = function (finish, start) {
	var columns = [
		{ dataIndex: 'kp_PersonID', header: 'ID', width: 50, filter: {type: 'numeric', disabled: false} },
		{ dataIndex: 'kf_SalutationID', header: 'Salutation', width: 60, filter: {type: 'numeric', disabled: false}, renderer: get_SalutationAbbreviation  },
		{ dataIndex: 'PersonFirstName', header: 'First Name', width: 75, filter: {type: 'string', disabled: false} },
		{ dataIndex: 'PersonLastName', header: 'Last Name', width: 125, filter: {type: 'string', disabled: false} },
		{ dataIndex: 'kf_GenderID', header: 'Gender', width: 60, filter: {type: 'numeric', disabled: false}, renderer: get_GenderName },
		{ dataIndex: 'kf_NationalityID', header: 'Nationality', flex: 1, filter: {type: 'numeric', disabled: false}, renderer: get_NationalityName }
		//,{ dataIndex: 'dummy', header: '', flex: 1 }		
	];
	return columns.slice(start || 0, finish);
};

function get_SalutationAbbreviation(value){
	if(value){
		if(debug){console.info('PersonGrid - mapping to SalutationAbbreviation')};
		salutationAbbreviation = Ext.getStore('core.store.Salutations').getById(value).get('SalutationAbbreviation');
		if(debug){console.info('PersonGrid - SalutationAbbreviation mapped')};
		return salutationAbbreviation;
	}
	else{
		return 'undefined';
	}
};

function get_GenderName(value){
	if(value){
		if(debug){console.info('PersonGrid - mapping to GenderName')};
		genderName = Ext.getStore('core.store.Genders').getById(value).get('GenderName');
		if(debug){console.info('PersonGrid - GenderName mapped')};
		return genderName;
	}
	else{
		return 'undefined';
	}
};

function get_NationalityName(value){
	if(value){
		if(debug){console.info('PersonGrid - mapping to NationalityName')};
		nationalityName = Ext.getStore('core.store.Nationalities').getById(value).get('NationalityName');
		if(debug){console.info('PersonGrid - NationalityName mapped')};
		return nationalityName;
	}
	else{
		return 'undefined';
	}
};


/** OLD
Ext.define('core.grid.Person', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridperson',
	// override
	initComponent: function() {			
		this.title = 'Person Grid';
		this.gridId = 'gridPerson';
		this.height =  400;
		this.columnWidth = 0.60;
		this.columns = personColumns(6);
		this.store = new core.store.Persons({
			storeId: 'storePersons'
		});
		this.LoadMask = true;
		this.features = [filters];
		this.dockedItems = [Ext.create('Ext.toolbar.Paging', {
			dock: 'bottom',
			store: 'storePersons'
		})];
		this.emptyText = 'No Matching Records';
//			this.child('pagingtoolbar').add([
//				'->',  
//				{
//					text: 'Clear Filter Data',
//					handler: function () {
//						this.filters.clearFilters();
//					} 
//				}  
//			]);
		// finally call the superclasses implementation
		core.grid.Person.superclass.initComponent.call(this);
	}      
});
*/


