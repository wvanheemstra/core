/**
 * core.view.PersonInfo
 * @extends Ext.form.Panel
 */
Ext.require ([
	'Ext.ux.form.ItemSelector'
]);
 
Ext.define('core.view.PersonInfo', { 
	extend: 'Ext.form.Panel',
	alias: 'widget.personinfo',
	// override
	constructor: function(config) {
		config = config || {};
	    config.xtype = 'fieldset';
	    config.title = 'Person Info';	
		config.margin = '0 0 0 0';
		config.formId = 'personInfoForm';
		config.buttonAlign = 'left';
		config.bodyPadding = '0 0 0 4';
		config.defaults = {
			width: 240,
			labelWidth: 80
		};
		config.defaultType = 'textfield';
		config.tbar = [
			{
				xtype: 'button',
				formBind: false,
				cls: 'x-btn-text-icon',
				icon: 'assets/templates/core/icons/user_add.png',
				text: 'Add Person',
				listeners: {
					click: function() {
						var personInfoForm = this.ownerCt.ownerCt.getForm('personInfoForm');
						personInfoForm.fireEvent('addpersonbuttonclick');					
						personInfoForm.reset();
						var newPersonModel = Ext.ModelManager.create({},'core.model.Person');
						personInfoForm.loadRecord(newPersonModel);
						personInfoForm.setValues({
							kf_SalutationID: 1,
							kf_GenderID: 1,
							kf_NationalityID: 1
						});
					}
				}
			}
		];
	    config.items = [
			{
				xtype: 'hidden', // auto-increment field, need presence for update  
				name: 'kp_PersonID'				 
			},
			{
				name: 'kf_SalutationID',
				xtype: 'combobox',
				fieldLabel: 'Salutation',
				displayField: 'SalutationAbbreviation',
				valueField: 'kp_SalutationID',
				store: 'core.store.Salutations',
				queryMode: 'local',
				allowBlank: false,
				typeAhead: true,
				forceSelection: true
			},
			{
				xtype: 'textfield',
				itemId: 'fieldPersonFirstName',
				fieldLabel: 'First Name',
				allowBlank: false,
				name: 'PersonFirstName'
			},
			{
				xtype: 'textfield',
				itemId: 'fieldPersonLastName',
				fieldLabel: 'Last Name',
				allowBlank: false,
				name: 'PersonLastName'
			},
			{
				xtype: 'radiogroup',
				fieldLabel: 'Gender',
				defaults: {xtype: 'radio', name: 'kf_GenderID'},
				items: [{
					boxLabel: 'Male',
					inputValue: '1'
				},{
					boxLabel: 'Female',
					inputValue: '2'
				}]
			},
			{
				name: 'kf_NationalityID',
				xtype: 'combobox',
				fieldLabel: 'Nationality',
				displayField: 'NationalityName',
				valueField: 'kp_NationalityID',
				store: 'core.store.Nationalities',
				queryMode: 'local',
				allowBlank: false,
				typeAhead: true,
				forceSelection: true
			}, /*
			{
				name: 'kf_GroupID',
				xtype: 'combobox',
				fieldLabel: 'Groups',
				displayField: 'kf_GroupID',
				valueField: 'kp_PersonID',
				store: 'core.store.PersonsGroups',
				queryMode: 'local',
				allowBlank: false,
				typeAhead: true,
				forceSelection: true
			}, */
			{
				name: 'kf_GroupID',
				xtype: 'itemselector',
				fieldLabel: 'Groups',
				displayField: 'GroupName',
				valueField: 'kp_GroupID',
				store: 'core.store.Groups',
				allowBlank: true
			}
		];
		config.bbar = [
			{
				xtype: 'button',
				cls: 'x-btn-text-icon',
				icon: 'assets/templates/core/icons/user_delete.png',
				text: 'Delete Person',
				formBind: true,
				listeners: {
					click: function() {
						var personInfoForm = this.ownerCt.ownerCt.getForm('personInfoForm');
						var rec = personInfoForm.getRecord();
						if (rec){
						rec.beginEdit();
						personInfoForm.updateRecord(rec);
						var proxyPersons = Ext.getStore('core.store.Persons').getProxy();
						rec.setProxy(proxyPersons); // assign the store's proxy to the record
						Ext.Msg.defaultButton = 2; // cancel TODO: make this work
						Ext.Msg.prompt({
						   title:'Delete Person',
						   msg: 'Are you sure you want to delete <span style="font-weight:bold;">'+rec.data.PersonFirstName+' ' +rec.data.PersonLastName+'</span>?',
						   buttons: Ext.Msg.OKCANCEL,
						   icon: Ext.Msg.WARNING,
						   fn: function(btn) {
								if(btn == 'ok') {
									rec.destroy({
										params: {},
										success: function(record, operation) {
											if(operation.action === 'destroy') {
												Ext.Msg.prompt({
													title:'Person Deleted',
													msg: 'You have deleted <span style="font-weight:bold;">'+record.data.PersonFirstName+' '+record.data.PersonLastName+'</span>.',
													buttons: Ext.Msg.OK,
													icon: Ext.Msg.INFO
												});
											}
											personInfoForm.fireEvent('deletepersonbuttonclick');
											personInfoForm.reset();
										},
										failure: function(record, operation) {
											Ext.Msg.prompt({
												title:'Delete Person',
												msg: 'Unable to delete person.',
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
				icon: 'assets/templates/core/icons/user_go.png',
				text: 'Save Person',
				margin: '0 0 0 10',
				formBind: true,
				listeners: {
					click: function() {
						var personInfoForm = this.ownerCt.ownerCt.getForm('personInfoForm');
						if(personInfoForm.isValid()) {
							var rec = personInfoForm.getRecord();
							if (rec){
								rec.beginEdit();
								personInfoForm.updateRecord(rec);
								var proxyPersons = Ext.getStore('core.store.Persons').getProxy();
								rec.setProxy(proxyPersons); // assign the store's proxy to the record
								rec.save({ 
									params: { },
									success: function(record, operation) {
										if (operation.action === 'create'){
											Ext.Msg.prompt({
												title:'Person Added',
												msg: 'You have added <span style="font-weight:bold;">'+record.data.PersonFirstName+' '+record.data.PersonLastName+'</span>',
												buttons: Ext.Msg.OK,
												icon: Ext.Msg.INFO
											});
										}
										personInfoForm.fireEvent('savepersonbuttonclick');
									},
									failure: function(record, operation) {
										alert('ERROR: Unable to save record!');
									}
								});
								rec.endEdit();
								rec.commit(); // removes the dirty marker in grid if used
							} else {
								Ext.Msg.prompt({
									title:'Save Person',
									msg: 'Please select a person to save, or select Add Person',
									buttons: Ext.Msg.OK,
									icon: Ext.Msg.INFO
								});
							}
						}
						else {
							var field = this.ownerCt.down('#fieldPersonFirstName');
							field.focus('',10);							
						}
					}
				}
			}
		];
		// finally call the superclasses implementation
		this.superclass.constructor.call(this, config);
	}
});