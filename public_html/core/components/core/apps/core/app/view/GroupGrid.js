/**
 * core.view.GroupGrid
 * @extends Ext.grid.Panel
 */
Ext.define('core.view.GroupGrid', {
    extend: 'Ext.grid.Panel',
	alias : 'widget.groupgrid',
	// override
	initComponent: function() {
		this.title = 'Group Grid';
		this.gridId = 'groupGrid';
		this.columns = groupColumns(2);
		// finally call the superclasses implementation
		core.view.GroupGrid.superclass.initComponent.call(this);	
	}
});

var groupColumns = function (finish, start) {
	var columns = [
		{ dataIndex: 'kp_GroupID', header: 'ID', width: 50, filter: {type: 'numeric', disabled: false}, renderer: 'ID' },
		{ dataIndex: 'GroupName', header: 'Group', flex: 1, filter: {type: 'numeric', disabled: false}, renderer: 'GroupName'  }	
	];
	return columns.slice(start || 0, finish);
};