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
		this.margin = '0 0 0 10';
		this.formId = 'personInfoForm';
		this.bodyPadding = '0 0 0 4';
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
				listeners: {
					click: function() {
						var personInfoForm = this.ownerCt.getForm('personInfoForm');
						personInfoForm.fireEvent('addpersonbuttonclick');					
						personInfoForm.reset();
						var newPersonModel = Ext.ModelManager.create({},'core.model.Person');
						personInfoForm.loadRecord(newPersonModel);
					}
				}
			},
			{
				name: 'kf_SalutationID',
				xtype: 'numberfield',
				fieldLabel: 'Salutation',
				//renderer: get_SalutationAbbreviation,
				width: 125
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
				name: 'kf_GenderID',
				xtype: 'numberfield',
				fieldLabel: 'Gender',
				width: 125
			},
			{
				name: 'kf_NationalityID',
				xtype: 'numberfield',
				fieldLabel: 'Nationality',
				width: 145
			},
			{
				xtype: 'button',
				text: 'Save Person',
				handler: function(){
					
				}
			}
		];				
		// finally call the superclasses implementation
		core.view.PersonInfo.superclass.initComponent.call(this);
	}
});