/**
 * core.view.PersonSearch
 * @extends Ext.form.Panel
 */

Ext.require([
	'Ext.ux.form.ItemSelector'
]);
 
Ext.define('core.view.PersonSearch', { 
	extend: 'Ext.form.Panel',
	alias: 'widget.personsearch',
	// override
	constructor: function(config) {
		config = config || {};
	    config.xtype = 'fieldset';
	    config.title = 'Person Search';	
		config.margin = '0 0 0 0';
		config.formId = 'personSearchForm';
		config.buttonAlign = 'left';
		config.bodyPadding = '4 4 4 4';
		config.autoSize = true;
		config.autoScroll = true;
		config.defaults = {
			labelWidth: 80
		};
		config.requires = ['core.store.Persons','core.store.Nationalities'];
		config.defaultType = 'textfield';		
	    config.items = [
			{
				xtype: 'textfield',
				itemId: 'fieldPersonFirstName',
				fieldLabel: 'First Name',
				allowBlank: true,
				name: 'PersonFirstName'
			},
			{
				xtype: 'textfield',
				itemId: 'fieldPersonLastName',
				fieldLabel: 'Last Name',
				allowBlank: true,
				name: 'PersonLastName'
			},
			{
				xtype: 'checkboxgroup',
				fieldLabel: 'Gender',
	            columns: 2,
	            items: [
	                {
	                    boxLabel : 'Male'
	                },
	                {
	                    boxLabel : 'Female'
	                }
	            ]
			},			
			{
				name: 'NationalityIDs',
				xtype: 'itemselector',
				fieldLabel: 'Nationalities',
				displayField: 'NationalityName',
				valueField: 'kp_NationalityID',
				store: 'core.store.Nationalities',
				allowBlank: true,
				height: 200
			}
		];
		config.bbar = [	
			{
				xtype: 'button',
				cls: 'x-btn-text-icon',
				icon: 'assets/templates/core/icons/user_find.png',
				text: 'Find Person',
				margin: '0 0 0 10',
				formBind: true,
				listeners: {
					click: function() {
							var personSearchForm = this.ownerCt.ownerCt.getForm('personSearchForm');
							personSearchForm.fireEvent('findpersonbuttonclick');
						}
					
					/*
					click: function() {
						var groupInfoForm = this.ownerCt.ownerCt.getForm('groupInfoForm');
						if(groupInfoForm.isValid()) {
							var rec = groupInfoForm.getRecord();
							if (rec){
								rec.beginEdit();
								groupInfoForm.updateRecord(rec);
								var proxyGroups = Ext.getStore('core.store.Groups').getProxy();
								rec.setProxy(proxyGroups); // assign the store's proxy to the record
								rec.save({ 
									params: { },
									success: function(record, operation) {
										if (operation.action === 'create'){
											Ext.Msg.prompt({
												title:'Group Added',
												msg: 'You have added <span style="font-weight:bold;">'+record.data.GroupName+'</span>',
												buttons: Ext.Msg.OK,
												icon: Ext.Msg.INFO
											});
										}
										groupInfoForm.fireEvent('savegroupbuttonclick');
									},
									failure: function(record, operation) {
										Ext.Msg.prompt({
											title:'Save Group',
											msg: 'Unable to save <span style="font-weight:bold;">'+record.data.GroupName+'</span>',
											buttons: Ext.Msg.OK,
											icon: Ext.Msg.ERROR
										});										
									}
								});
								rec.endEdit();
								rec.commit(); // removes the dirty marker in grid if used
							} else {
								Ext.Msg.prompt({
									title:'Save Group',
									msg: 'Please select a group to save, or select Add Group',
									buttons: Ext.Msg.OK,
									icon: Ext.Msg.INFO
								});
							}
						}
						else {
							var field = this.ownerCt.down('#fieldGroupName');
							field.focus('',10);							
						}
					}
				*/
				}
			}
		];
		config.listeners = {};
		// finally call the superclasses implementation
		this.superclass.constructor.call(this, config);
	}
});