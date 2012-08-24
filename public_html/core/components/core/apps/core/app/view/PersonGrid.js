/**
 * core.view.PersonGrid
 * @extends Ext.grid.Panel
 */
Ext.require ([
    'Ext.ux.grid.FiltersFeature',
]);
 
Ext.define('core.view.PersonGrid' , {
    extend: 'Ext.grid.Panel',
    alias : 'widget.persongrid',
	// override
	initComponent: function() {
		this.title = 'Person Grid';
		this.store = 'core.store.Persons';
		this.columns = personColumns(6);
		this.features = [{
			ftype: 'filters',
			local: true   // defaults to false (remote filtering)
		}];
		// finally call the superclasses implementation
		core.view.PersonGrid.superclass.initComponent.call(this);	
	} 	
});

var personColumns = function (finish, start) {
	var columns = [
		{ dataIndex: 'kp_PersonID', header: 'ID', width: 50, filter: {type: 'numeric', disabled: false} },
		{ dataIndex: 'kf_SalutationID', header: 'Salutation', width: 60, filter: {type: 'numeric', disabled: false} },
		{ dataIndex: 'PersonFirstName', header: 'First Name', width: 75, filter: {type: 'string', disabled: false} },
		{ dataIndex: 'PersonLastName', header: 'Last Name', width: 125, filter: {type: 'string', disabled: false} },
		{ dataIndex: 'kf_GenderID', header: 'Gender', width: 60, filter: {type: 'numeric', disabled: false} },
		{ dataIndex: 'kf_NationalityID', header: 'Nationality', flex: 1, filter: {type: 'numeric', disabled: false} }
		//,{ dataIndex: 'dummy', header: '', flex: 1 }		
	];
	return columns.slice(start || 0, finish);
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


