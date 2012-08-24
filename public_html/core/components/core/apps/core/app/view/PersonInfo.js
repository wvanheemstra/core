/**
 * core.view.PersonInfo
 * @extends Ext.form.Panel
 */
Ext.define('core.view.PersonInfo', { 
	extend: 'Ext.form.Panel',
	alias: 'widget.personinfo',
	// override
	initComponent: function() {
	    this.xtype = 'fieldset';
	    this.title = 'Person Info';	
		this.defaults = {
			width: 240,
			labelWidth: 80
		};
		this.defaultType = 'textfield';
	    this.items = [
			{
				xtype:'hidden', // auto-increment field, need presence for update  
				name:'kp_PersonID'				 
			},
			{
				xtype: 'button',
				text: 'Add Person',
		       	handler: function(){
				
				}
			}	
		];				
		// finally call the superclasses implementation
		core.view.PersonInfo.superclass.initComponent.call(this);
	}
});