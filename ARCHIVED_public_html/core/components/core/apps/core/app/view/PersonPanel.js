/**
 * core.view.PersonPanel
 * @extends Ext.grid.Panel
 */
Ext.define('core.view.PersonPanel', {
    extend: 'Ext.panel.Panel',
	alias : 'widget.personpanel',
	// override
	constructor: function(config) {
		config = config || {};
		config.title = 'Person Panel';
	
		// finally call the superclasses implementation	
		this.superclass.constructor.call(this, config);
	}
});