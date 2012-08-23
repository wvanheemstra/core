Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath({
	'Ext.ux': 'assets/templates/core/javascripts/extjs/examples/ux',
	'core': 'core/components/core/apps/core/app'
	});
Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.ux.grid.FiltersFeature',
    'Ext.toolbar.Paging',
    'Ext.ux.ajax.JsonSimlet',
    'Ext.ux.ajax.SimManager',
	'core.model.Person',
	'core.store.Persons',
	'core.store.Salutations',
	'core.store.Genders',
	'core.store.Nationalities'
]);

Ext.Loader.onReady(function() {

	Ext.QuickTips.init();

	// **************************************** START OF VARIABLES ************************************************ //
	
    var filters = {
        ftype: 'filters',
		local: local   // defaults to false (remote filtering)
	};
	
	var personColumns = function (finish, start) {
		var columns = [
			{ dataIndex: 'kp_PersonID', id: 'kp_PersonID', header: 'ID', width: 50, filter: {type: 'numeric', disabled: false} },
			{ dataIndex: 'kf_SalutationID', id: 'kf_SalutationID', header: 'Salutation', width: 60, filter: {type: 'numeric', disabled: false}, renderer: get_SalutationAbbreviation },
			{ dataIndex: 'PersonFirstName', id: 'PersonFirstName', header: 'First Name', width: 75, filter: {type: 'string', disabled: false} },
			{ dataIndex: 'PersonLastName', id: 'PersonLastName', header: 'Last Name', width: 125, filter: {type: 'string', disabled: false} },
			{ dataIndex: 'kf_GenderID', id: 'kf_GenderID', header: 'Gender', width: 60, filter: {type: 'numeric', disabled: false} },
			{ dataIndex: 'kf_NationalityID', id: 'kf_NationalityID', header: 'Nationality', flex: 1, filter: {type: 'numeric', disabled: false} }
			//,{ dataIndex: 'dummy', id: 'dummy', header: '', flex: 1 }		
		];
		return columns.slice(start || 0, finish);
	};
	
	// **************************************** END OF VARIABLES **************************************************** //

	// **************************************** START OF MODELS ***************************************************** //

		// Person model is dynamically loaded.
	
	// **************************************** END OF MODELS ***************************************************** //	

	// **************************************** START OF STORES ***************************************************** //

	var storeSalutations = new core.store.Salutations();	
	function get_SalutationAbbreviation(value){
		if(value){
			//salutationAbbreviation = storeSalutations.getById(value).get('SalutationAbbreviation');
			//return salutationAbbreviation;
			return 'Mr';
		}
		else{
			return 'undefined';
		}
	};
	
	// **************************************** END OF STORES ***************************************************** //	

	// **************************************** START OF VIEWS ************************************************** //
	
	/**
	 * core.grid.Person
	 * @extends Ext.grid.Panel
	 */
	Ext.define('core.grid.Person', {
		extend: 'Ext.grid.Panel',
		alias: 'widget.gridperson',
		// override
		initComponent: function() {			
			this.title = 'Person Grid';
			this.itemId = 'gridPerson';
			this.height=  400;
			this.columnWidth = 0.60;
			this.columns = personColumns(6);
			this.store = new core.store.Persons({
				storeId: 'gridStorePersons'
			});
			this.LoadMask = true;
			this.features = [filters];
			this.dockedItems = [Ext.create('Ext.toolbar.Paging', {
				dock: 'bottom',
				store: 'gridStorePersons'
			})];
			this.emptyText = 'No Matching Records';
//			this.child('pagingtoolbar').add([
//				'->',  
//				{
//					text: 'Clear Filter Data',
//					handler: function () {
//						this.filters.clearFilters();
//					} 
//				}  
//			]);
			// finally call the superclasses implementation
            core.grid.Person.superclass.initComponent.call(this);
		}      
    });
	
	/**
	 * core.info.Person
	 * @extends Ext.form.Panel
	 */
	Ext.define('core.info.Person', { 
		extend: 'Ext.form.Panel',
		alias: 'widget.infoperson',
		// override
		initComponent: function() {
	        this.columnWidth = 0.4;
	        this.margin = '0 0 0 10';
			this.bodyPadding = '0 0 0 4';
	        this.xtype = 'fieldset';
	        this.title = 'Person Info';
			this.itemId = 'infoPerson';
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
						var form = this.ownerCt.getForm('formPerson');
						form.reset();
						var grid = this.ownerCt.getComponent('gridPerson');
						//grid.getSelectionModel().clearSelections();
						// etc.
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
						var form = this.ownerCt.getForm('formPerson');
						if (form.isValid()) {
							// using record instead of submit; sending as object instead of url params
							var rec = form.getRecord();
							if (rec){ // only if there is a valid record defined; must add or select to edit
								rec.beginEdit();
								form.updateRecord(rec); // update record, next we need to commit changes!
								rec.save({ 
									params: { },
									success: function(record, operation) {
										if (operation.action === 'create'){
											alert('You have added '+record.data.PersonFirstName+' '+record.data.PersonLastName)
										}
										gridPerson.store.load(); // reload the store so insert is displays in correct order and latest records are available
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
	        ];	
			// finally call the superclasses implementation
            core.info.Person.superclass.initComponent.call(this);
		}
	});
	
	/**
	 * core.form.Person
	 * @extends Ext.form.Panel
	 */
	Ext.define('core.form.Person', {
		extend: 'Ext.form.Panel',
		alias: 'widget.formperson',
		// override
		initComponent: function() {		
			this.frame = true;
			this.title = 'Person Data';
			this.formId = 'formPerson'; // new
			this.bodyPadding = 5;
			this.width = 750;
			this.layout = 'column';    // Specifies that the items will now be arranged in columns
			this.fieldDefaults = {
				labelAlign: 'left'
			};
			this.items = [
				new core.grid.Person({
					gridId: 'gridPerson'
				}),
				new core.info.Person({
					formId: 'infoPerson'
				})
			];
			// finally call the superclasses implementation
            core.form.Person.superclass.initComponent.call(this);
		}
	});
	// **************************************** END OF VIEWS ************************************************** //
}, false); // End of Ext.Loader.onReady

Ext.onReady(function() {
	var personApp = new core.form.Person({
			renderTo: 'grid-example'
		});
	personApp.show();
	
	var storePersons = Ext.data.StoreManager.get('gridStorePersons');
	var gridPerson = personApp.getComponent('gridPerson');
	var formPerson = personApp.getForm('formPerson');
	
    gridPerson.getSelectionModel().on('select', function(selModel, model, idx) {
    	//var form = gridForm.getForm();
        formPerson.loadRecord(model); // from record, no call to server
    }, this);	
	
	storePersons.on('load', function(store, model) {
 		gridPerson.getSelectionModel().select(0);    	
    }, this);
	storePersons.load();
	
}); // End of Ext.onReady