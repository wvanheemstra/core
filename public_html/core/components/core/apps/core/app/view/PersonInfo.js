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
	    config.title = ''; // Person Info
		config.margin = '0 0 0 0';
		config.formId = 'personInfoForm';
		config.buttonAlign = 'left';
		config.bodyPadding = '0 0 0 0';
		config.border = 0;
		config.defaults = {
			labelWidth: 80
		};
		config.requires = ['core.store.Persons','core.store.Dates','core.store.PersonsGroups','core.store.Groups','core.store.Nationalities'];
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
						var newPersonModel = Ext.ModelManager.create({},'core.model.PersonModel');
						personInfoForm.loadRecord(newPersonModel);
						personInfoForm.setValues({
							kf_SalutationID: 1,
							kf_GenderID: 1,
							kf_NationalityID: 1,
							//GroupIDs: 1, //Set to a fixed number temporarily
							DateStart: '2000-01-01'
						});
					}
				}
			}
		];
	    config.items = [
			{
				xtype: 'tabpanel',
				activeItem: 0,
				border: 0,
				// this line is necessary for anchoring to work at lower level containers
				// and for full height of tabs
				anchor: '100% 100%',
				// only fields from an active tab are submitted
				// if the following line is not present
				deferredRender: false,
				// tabs
				defaults: {
					layout: 'form',
					labelWidth: 80,
					border: 0,
					defaultType:'textfield',
					bodyStyle:'padding:5px',
					// as we use deferredRender: false
					// we mustn't render tabs into display:none containers
					hideMode: 'offsets'
				},
				items:[{
					title:'Bio',
					autoScroll: true,
					border: 0,
					defaults: {anchor:'-20'},
					// fields
					items: [{
						xtype: 'hidden', // auto-increment field, need presence for update  
						name: 'kp_PersonID'				 
					},
					{
						name: 'kf_SalutationID',
						xtype: 'combobox',
						anchor: '100%', // new
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
						xtype: 'container',
						layout:'column',
						items: [{
						    //columnWidth: 80,
							anchor: '100%', // new
						    html: 'First Name:',
							border: 0
						},{
							//columnWidth: 80,
							columnHeight: 20,
							border: 0,
							xtype: 'htmleditor',
							height: 60, // new
							width:'100%', // htmleditors should use width 100% instead of anchor 100%
							itemId: 'fieldPersonFirstName',
							fielLabel: 'First Name',
							allowBlank: true,
							name: 'PersonFirstName',
							enableSourceEdit: false,
							enableColors: false,
							enableLinks: false,
							enableAlignments: false,
							enableFormat: false,
							enableFont: false,
							enableFontSize: false,
							enableLists: false,
							plugins: [
								new HtmlEditorSpecialCharacters() // THIS WORKS, perhaps replace new with Ext.create()
							]
							/*
							plugins: [
			        	    //	Ext.form.field.HtmlEditor.Word(),  
			        	    //	Ext.form.field.HtmlEditor.Divider(),  
			        	    //	Ext.form.field.HtmlEditor.Table(),  
			        	    //	Ext.form.field.HtmlEditor.HR(),  
			        	    //	Ext.form.field.HtmlEditor.IndentOutdent(),  
			        	    //	Ext.form.field.HtmlEditor.SubSuperScript(),  
			        	    //	Ext.form.field.HtmlEditor.RemoveFormat()
			        		]
							*/
						}]
					},
					{
						xtype: 'container',
						layout:'column',
						items: [{
						    //columnWidth: 80,
							anchor: '100%', // new
						    html: 'Last Name:',
							border: 0
						},{
							//columnWidth: 80,
							border: 0,
							xtype: 'htmleditor',
							height: 60, // new
							width:'100%', // htmleditors should use width 100% instead of anchor 100%
							itemId: 'fieldPersonLastName',
							fielLabel: 'Last Name',
							allowBlank: true,
							name: 'PersonLastName',
							enableSourceEdit: false,
							enableColors: false,
							enableLinks: false,
							enableAlignments: false,
							enableFormat: false,
							enableFont: false,
							enableFontSize: false,
							enableLists: false,
							plugins: [
								new HtmlEditorSpecialCharacters() // THIS WORKS, perhaps replace new with Ext.create()
							]
							/*
							plugins: [
			        	    //	Ext.form.field.HtmlEditor.Word(),  
			        	    //	Ext.form.field.HtmlEditor.Divider(),  
			        	    //	Ext.form.field.HtmlEditor.Table(),  
			        	    //	Ext.form.field.HtmlEditor.HR(),  
			        	    //	Ext.form.field.HtmlEditor.IndentOutdent(),  
			        	    //	Ext.form.field.HtmlEditor.SubSuperScript(),  
			        	    //	Ext.form.field.HtmlEditor.RemoveFormat()
			        		]
							*/
						}]
					},
					{
						xtype: 'radiogroup',
						fieldLabel: 'Gender',
						anchor: '100%', // new
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
						anchor: '100%', // new
						fieldLabel: 'Nationality',
						displayField: 'NationalityName',
						valueField: 'kp_NationalityID',
						store: 'core.store.Nationalities',
						queryMode: 'remote', // set to remote when using AJAX proxy
						allowBlank: false,
						typeAhead: true,
						forceSelection: true
					},
					{
						name: 'DateStart',
						xtype: 'datefield',
						anchor: '100%', // new
						fieldLabel: 'Date of Birth',
						displayField: 'DateStart',
						format: 'Y-m-d',
						allowBlank: false
					}
					]
				},
				{
					title:'Contacts',
					autoScroll: true,
					border: 0,
					// fields
					items: [{
						xtype: 'textfield', // auto-increment field, need presence for update 
						anchor:'100%', // new 
						fieldLabel: 'Landline Phone',
						allowBlank: true,
					},
					{
						xtype: 'textfield', // auto-increment field, need presence for update 
						anchor:'100%', // new  
						fieldLabel: 'Mobile Phone',
						allowBlank: true,
					},
					{
						xtype: 'textfield', // auto-increment field, need presence for update
						anchor:'100%', // new   
						fieldLabel: 'Fax',
						allowBlank: true,
					},
					{
						xtype: 'textfield', // auto-increment field, need presence for update 
						anchor:'100%', // new  
						fieldLabel: 'E-mail',
						allowBlank: true,
					}]
				},
				{
					title:'Addresses',
					autoScroll: true,
					border: 0,
					// fields
					items: [{
						xtype: 'textarea', // auto-increment field, need presence for update
						anchor:'100%', // new   
						fieldLabel: 'Address',
						allowBlank: true,
					},
					{
						xtype: 'textfield', // auto-increment field, need presence for update
						anchor:'100%', // new   
						fieldLabel: 'Place',
						allowBlank: true,
					},
					{
						xtype: 'textfield', // auto-increment field, need presence for update 
						anchor:'100%', // new  
						fieldLabel: 'Postal Code',
						allowBlank: true,
					},
					{
						xtype: 'textfield', // auto-increment field, need presence for update
						anchor:'100%', // new   
						fieldLabel: 'Region',
						allowBlank: true,
					},
					{
						xtype: 'textfield', // auto-increment field, need presence for update
						anchor:'100%', // new   
						fieldLabel: 'Country',
						allowBlank: true,								 
					}]
				},
				{
					title:'Groups',
					autoScroll: true,
					border: 0,
					// fields
					items: [{
						name: 'GroupIDs',
						xtype: 'itemselector',
						anchor:'100%', // new 
						fieldLabel: 'Groups',
						displayField: 'GroupName',
						valueField: 'kp_GroupID',
						//value: ['1'], //Set to a fixed number temporarily; get_GroupIDs,
						store: 'core.store.Groups',
						allowBlank: true
					}
					]
				}]
			}	
		]; // eof config.items
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
												msg: 'Unable to delete <span style="font-weight:bold;">'+record.data.PersonFirstName+' '+record.data.PersonLastName+'</span>.',
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
										Ext.Msg.prompt({
											title:'Save Person',
											msg: 'Unable to save <span style="font-weight:bold;">'+record.data.PersonFirstName+' '+record.data.PersonLastName+'</span>',
											buttons: Ext.Msg.OK,
											icon: Ext.Msg.ERROR
										});	
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
		config.listeners = {};
		// finally call the superclasses implementation
		this.superclass.constructor.call(this, config);
	}
}); //eof Ext.define 'core.view.PersonInfo'