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
		this.margin = '0 0 0 0';
		this.formId = 'personInfoForm';
		this.buttonAlign = 'left';
		this.bodyPadding = '0 0 0 4';
		this.defaults = {
			width: 240,
			labelWidth: 80
		};
		this.defaultType = 'textfield';
		this.tbar = [
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
	    this.items = [
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
			}
		];
		this.bbar = [
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
						   msg: 'Are you sure you want to delete '+rec.data.PersonFirstName+' ' +rec.data.PersonLastName+'?',
						   buttons: Ext.Msg.OKCANCEL,
						   icon: Ext.Msg.WARNING,
						   fn: function(btn) {
								if(btn == 'ok') {
									rec.destroy({
										params: {},
										success: function(record, operation) {
											if(operation.action === 'destroy') {
												alert('You have deleted '+record.data.PersonFirstName+' '+record.data.PersonLastName);
											}
											personInfoForm.fireEvent('deletepersonbuttonclick');
											personInfoForm.reset();
										},
										failure: function(record, operation) {
											alert('ERROR: Unable to delete record!');
										}
									});
								}
							}
						});							
						rec.endEdit();
						rec.commit(); // removes the dirty marker in grid if used
						} else {
								alert('Please select a record to delete');
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
											alert('You have added '+record.data.PersonFirstName+' '+record.data.PersonLastName);
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
								alert('Please select a record to edit, or select Add Person');
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
		core.view.PersonInfo.superclass.initComponent.call(this);
	}
});