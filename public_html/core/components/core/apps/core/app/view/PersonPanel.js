/**
 * core.view.PersonPanel
 * @extends Ext.grid.Panel
 */
Ext.define('core.view.PersonPanel', {
    extend: 'Ext.panel.Panel',
	alias : 'widget.personpanel',
	// override
	initComponent: function() {
		this.title = 'Person Panel';
	
		// finally call the superclasses implementation
		core.view.PersonPanel.superclass.initComponent.call(this);	
	}
});