/**
 * core.view.PersonPanel
 * @extends Ext.grid.Panel
 */
Ext.define('core.view.PersonPanel', {
    extend: 'Ext.panel.Panel',
	alias : 'widget.personpanel',
	// override
	initComponent: function() {
		
	
		// finally call the superclasses implementation
		core.view.PersonPanel.superclass.initComponent.call(this);	
	}
});