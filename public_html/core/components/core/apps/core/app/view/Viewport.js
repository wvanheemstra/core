Ext.define('core.view.Viewport', {
    extend: 'Ext.container.Viewport',
	requires: [
		// 'core.view.???'
	],
	renderTo: 'content',
	layout: 'fit',
	initComponent: function() {
		this.items = {
		
		};
		this.callParent();
    }
});
	