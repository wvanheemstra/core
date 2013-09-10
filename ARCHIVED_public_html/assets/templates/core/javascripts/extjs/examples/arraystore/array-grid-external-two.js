//Data Store
var ds = new Ext.data.Store({
	proxy: new Ext.data.ScriptTagProxy({url:URL, method:'GET'}), 
	reader: new Ext.data.JsonReader({root:'features', id:'ObjectID'}, [
		{name: 'attributes.ObjectID'},
		{name: 'attributes.STATE_NAME'},
		{name: 'attributes.SUB_REGION'}
	])
});
ds.load();

//Column Model
var colModel = new Ext.grid.ColumnModel([
	{header: "ID", width: 100, sortable: true, dataIndex: 'attributes.ObjectID'},
	{header: "State", width: 100, sortable: true, dataIndex: 'attributes.STATE_NAME'},
	{header: "Sub Region", width: 100, sortable: true, dataIndex: 'attributes.SUB_REGION'}
]);

//Grid
var grid = new Ext.grid.GridPanel({
	el: 'grid-example', 
	ds: ds, 
	cm: colModel,
	height:150,
	autoScroll:true
});

grid.render();
grid.getSelectionModel().selectFirstRow();
Ext.get('grid-example').show();