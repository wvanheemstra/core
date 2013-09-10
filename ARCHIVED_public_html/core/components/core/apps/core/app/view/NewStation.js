Ext.define('core.view.NewStation', {
    extend: 'Ext.form.field.ComboBox',
	emptyText: 'Search Station',
    alias: 'widget.newstation',
    store: 'SearchResults',
    queryMode: 'local',
	displayField: 'name',
	valueField: 'id'
});