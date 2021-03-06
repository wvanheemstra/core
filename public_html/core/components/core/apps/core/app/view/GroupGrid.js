/**
 * core.view.GroupGrid
 * @extends Ext.grid.Panel
 */
Ext.require ([
    'Ext.ux.grid.FiltersFeature',
    'Ext.ux.CheckColumn',
	'Ext.ux.grid.Printer'
]);
 
Ext.define('core.view.GroupGrid' , {
    extend: 'Ext.grid.Panel',
    alias : 'widget.groupgrid',
	// override
	constructor: function(config) {
		config = config || {};
		config.title = '';  //Group Grid
		config.requires = 'core.store.Groups';
		config.store = 'core.store.Groups';
		config.gridId = 'groupGrid';
		config.stateful = true;
		config.stateId = 'groupGrid';
		config.tbar = [
			{
				xtype: 'button',
				id: 'groupGridPrintButton',
				itemId: 'printbutton',
				formBind: false,
				cls: 'x-btn-text-icon',
				icon: 'assets/templates/core/icons/printer.png',
				text: 'Print',
				listeners: {
					click: function() {
						console.log('View GroupGrid: Print | Click');					
						Ext.ux.grid.Printer.print(this.ownerCt.ownerCt);
					}
				}
			}
		];
		config.bbar = Ext.create('Ext.PagingToolbar', {
			store: 'core.store.Groups',
			id: 'groupGridPagingToolbar',
			xtype: 'pagingtoolbar',
			displayInfo: true,
			displayMsg: 'Displaying Groups {0} - {1} of {2}',
			emptyMsg: "No Groups to display"
		});
		config.bbar.add([  
			{
				text: 'Clear Filters',
				handler: function () {
					this.ownerCt.ownerCt.filters.clearFilters();
				} 
			}  
		]);
		config.columns = groupColumns(6);
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

var groupColumns = function (finish, start) {
	var columns = [
		{ dataIndex: 'kp_GroupID', header: 'ID', width: 50, filter: {type: 'numeric', disabled: false} },
		{ dataIndex: 'isSelected', header: 'Check', width: 40, filter: {type: 'bool', disabled: true}, xtype: 'checkcolumn', renderer: get_IsSelected },
		{ dataIndex: 'GroupName', header: 'Group', width: 68, filter: {type: 'string', disabled: false} },
		{ dataIndex: 'kf_KindOfGroupID', header: 'Kind Of Group', flex: '1', filter: {type: 'numeric', disabled: false}, renderer: get_KindOfGroupName }	
	];
	return columns.slice(start || 0, finish);
};

function get_IsSelected(value){
	return "<input type='checkbox'" + (value ? "checked='checked'" : "") + ">";
};

function get_KindOfGroupName(value){
/*
	if(value){
		if(Ext.getStore('core.store.KindOfGroups').loaded) {
			if(debug){console.info('GroupGrid - mapping to KindOfGroupName')};
			kindOfGroupName = Ext.getStore('core.store.KindOfGroups').getById(value).get('KindOfGroupName');
			if(debug){console.info('GroupGrid - KindOfGroupName mapped')};
			return kindOfGroupName;
		}
		else {
			if(debug){console.info('GroupGrid - KindOfGroups not yet loaded')};
			return 'Unknown';
		}
	}
	else{
		return 'Undefined';
	}
*/
		return value; // temporarily
};
