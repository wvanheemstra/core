/**
 * core.view.GroupInfo
 * @extends Ext.form.Panel
 */
Ext.require ([
//	'Ext.form.field.HtmlEditor'
]);
 
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
			},
			{
				xtype: 'htmleditor',
				itemId: 'fieldEditable',
				fielLabel: 'Editable',
				allowBlank: true,
				name: 'Editable',
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
				
				//plugins: Ext.form.field.HtmlEditor.plugins()
				
				/*
				plugins: [
					Ext.create('Ext.form.field.HtmlEditor.Word',{})

        	    //	Ext.form.field.HtmlEditor.Word(),  
        	    //	Ext.form.field.HtmlEditor.Divider(),  
        	    //	Ext.form.field.HtmlEditor.Table(),  
        	    //	Ext.form.field.HtmlEditor.HR(),  
        	    //	Ext.form.field.HtmlEditor.IndentOutdent(),  
        	    //	Ext.form.field.HtmlEditor.SubSuperScript(),  
        	    //	Ext.form.field.HtmlEditor.RemoveFormat()
        		]
				*/
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

Ext.define('HtmlEditorSpecialCharacters', {
    extend: 'Ext.util.Observable',
    constructor: function(config){
	    this.init = function(cmp) {
		
			console.log(cmp);
		
	        this.cmp = cmp;
	        this.cmp.on('render', this.onRender, this);
	    };
	    this.onRender = function(){
			console.info("HTMLEditor: I'm being rendered!"); // for testing only
			
	        var cmp = this.cmp;	
	        var btn = this.cmp.getToolbar().add({
				id: 'btnInsertSpecialCharacter',
			    // SpecialCharacters language text
			    langTitle: 'Insert Special Character',
			    langInsert: 'Insert',
			    langCancel: 'Cancel',
				/**
			     * @cfg {Array} specialChars
			     * An array of additional characters to display for user selection.  
				 * Uses numeric portion of the ASCII HTML Character Code only. 
				 * For example, to use the Copyright symbol, which is &#169; 
				 * we would just specify <tt>169</tt> (ie: <tt>specialChars:[169]</tt>).
			     */
			    specialChars : [153],
			    /**
			     * @cfg {Array} charRange
			     * Two numbers specifying a range of ASCII HTML Characters to display for user selection. 
				 * Defaults to <tt>[160, 256]</tt>.
			     */
			    charRange : [160, 256],
				chars: [],
				iconCls: 'x-edit-char',
	            handler: function() {

					if (!this[this.chars]) {  console.log('chars IS empty') } // for testing only
					else { console.log('chars is NOT empty') };
				
	                if (!this[this.chars]) { // was !this.chars.length  THIS NEEDS REVISTED, I KEEPS ADDING CHARACTERS TO THE DIALOGUE WINDOW !!!
	                    if (!this[this.specialChars]) { // was this.specialChars.length THIS NEEDS REVISTED, I KEEPS ADDING CHARACTERS TO THE DIALOGUE WINDOW !!!
	                        Ext.each(this.specialChars, function(c, i){
	                            this.chars[i] = ['&#' + c + ';'];
	                        }, this);
	                    }
	                    for (i = this.charRange[0]; i < this.charRange[1]; i++) {
	                        this.chars.push(['&#' + i + ';']);
	                    }
	                };
	                var charStore = new Ext.data.ArrayStore({
	                    fields: ['char'],
	                    data: this.chars
	                });
                	this.charWindow = new Ext.Window({
	                    title: this.langTitle,
	                    width: 436,
	                    autoHeight: true,
	                    layout: 'fit',
						items: [{
							xtype: 'dataview',
	                        store: charStore,
	                        ref: 'charView',
	                        autoHeight: true,
	                        multiSelect: true,
	                        tpl: new Ext.XTemplate('<tpl for="."><div class="char-item">{char}</div></tpl><div class="x-clear"></div>'),
	                        overClass: 'char-over',
	                        itemSelector: 'div.char-item',
	                        listeners: {
	                            dblclick: function(t, i, n, e){
	                                this.insertChar(t.getStore().getAt(i).get('char'));
	                                this.charWindow.close();
	                            },
	                            scope: this
	                        }
						}],
						buttons: [{
							text: this.langInsert,
							handler: function() {
	                            Ext.each(this.charWindow.charView.getSelectedRecords(), function(rec) {
	                                var c = rec.get('char');
	                                this.insertChar(c);
	                            }, this);
	                            this.charWindow.close();
	                        },
	                        scope: this
						},
						{
							text: this.langCancel,
	                        handler: function() {
	                            this.charWindow.close();
	                        },
	                        scope: this
						}]
	                });
	                this.charWindow.show();
				},
	            scope: btn//, // was this
	    //        tooltip: {
	    //            title: this.langTitle
	    //        }//,
	    //        overflowText: this.langTitle
		    }); // eof btn
			console.log(btn); // for testing only
	    };
	    /**
	     * Insert a single special character into the document.
	     * @param c String The special character to insert (not just the numeric code, but the entire ASCII HTML entity).
	     */
	    this.insertChar = function(c){
	        if (c) {
	            this.cmp.insertAtCursor(c);
	        }
	    };		
			
        //this.name = config.name;
        //this.addEvents({
        //    "fired" : true,
        //    "quit" : true
        //});

        // Copy configured listeners into *this* object so that the base class's
        // constructor will add them.
        //this.listeners = config.listeners;

		//this.setStyle('background', 'red'); // url(assets/templates/core/icons/edit_char.png) 0 0 no-repeat !important

        // Call our superclass constructor to complete construction process.
        this.callParent(arguments);
    }
});
