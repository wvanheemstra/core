/**
 * core.view.GroupInfo
 * @extends Ext.form.Panel
 */
 
Ext.define('core.view.GroupInfo', { 
	extend: 'Ext.form.Panel',
	alias: 'widget.groupinfo',
	// override
	constructor: function(config) {
		config = config || {};
	    config.xtype = 'fieldset';
	    config.title = 'Group Info';	
		config.margin = '0 0 0 0';
		config.formId = 'groupInfoForm';
		config.buttonAlign = 'left';
		config.bodyPadding = '0 0 0 4';
		config.defaults = {
			width: 200,
			labelWidth: 50
		};
		config.requires = ['core.store.Groups'];
		config.defaultType = 'textfield';
		config.tbar = [
			{
				xtype: 'button',
				formBind: false,
				cls: 'x-btn-text-icon',
				icon: 'assets/templates/core/icons/group_add.png',
				text: 'Add Group',
				listeners: {
					click: function() {
						var groupInfoForm = this.ownerCt.ownerCt.getForm('groupInfoForm');
						groupInfoForm.fireEvent('addgroupbuttonclick');					
						groupInfoForm.reset();
						var newGroupModel = Ext.ModelManager.create({},'core.model.GroupModel');
						groupInfoForm.loadRecord(newGroupModel);
						groupInfoForm.setValues({
							GroupName: 'Type name here ...'
						});
					}
				}
			}
		];
	    config.items = [
			{
				xtype: 'hidden', // auto-increment field, need presence for update  
				name: 'kp_GroupID'				 
			},
			{
				xtype: 'textfield',
				itemId: 'fieldGroupName',
				fieldLabel: 'Group',
				allowBlank: false,
				name: 'GroupName'
			}
		];
		config.bbar = [
			{
				xtype: 'button',
				cls: 'x-btn-text-icon',
				icon: 'assets/templates/core/icons/group_delete.png',
				text: 'Delete Group',
				formBind: true,
				listeners: {
					click: function() {
						var groupInfoForm = this.ownerCt.ownerCt.getForm('groupInfoForm');
						var rec = groupInfoForm.getRecord();
						if (rec){
						rec.beginEdit();
						groupInfoForm.updateRecord(rec);
						var proxyGroups = Ext.getStore('core.store.Groups').getProxy();
						rec.setProxy(proxyGroups); // assign the store's proxy to the record
						Ext.Msg.defaultButton = 2; // cancel TODO: make this work
						Ext.Msg.prompt({
						   title:'Delete Group',
						   msg: 'Are you sure you want to delete <span style="font-weight:bold;">'+rec.data.GroupName+'</span>?',
						   buttons: Ext.Msg.OKCANCEL,
						   icon: Ext.Msg.WARNING,
						   fn: function(btn) {
								if(btn == 'ok') {
									rec.destroy({
										params: {},
										success: function(record, operation) {
											if(operation.action === 'destroy') {
												Ext.Msg.prompt({
													title:'Group Deleted',
													msg: 'You have deleted <span style="font-weight:bold;">'+record.data.GroupName+'</span>.',
													buttons: Ext.Msg.OK,
													icon: Ext.Msg.INFO
												});
											}
											groupInfoForm.fireEvent('deletegroupbuttonclick');
											groupInfoForm.reset();
										},
										failure: function(record, operation) {
											Ext.Msg.prompt({
												title:'Delete Group',
												msg: 'Unable to delete <span style="font-weight:bold;">'+record.data.GroupName+'</span>.',
												buttons: Ext.Msg.OK,
												icon: Ext.Msg.ERROR
											});
										}
									});
								}
							}
						});							
						rec.endEdit();
						rec.commit(); // removes the dirty marker in grid if used
						} else {
							Ext.Msg.prompt({
								title:'Delete Person',
								msg: 'Please select a person to delete',
								buttons: Ext.Msg.OK,
								icon: Ext.Msg.INFO
							});
						}
					}
				}
			},
			{
				xtype: 'tbfill'
			},
			{
				xtype: 'button',
				cls: 'x-btn-text-icon',
				icon: 'assets/templates/core/icons/group_go.png',
				text: 'Save Group',
				margin: '0 0 0 10',
				formBind: true,
				listeners: {
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
				}
			}
		];
		config.listeners = {};
		// finally call the superclasses implementation
		this.superclass.constructor.call(this, config);
	}
});
