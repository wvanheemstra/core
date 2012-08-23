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
	'core.store.Salutations',
	'core.store.Genders',
	'core.store.Nationalities'
]);

Ext.Loader.onReady(function() {

	Ext.QuickTips.init();

	// **************************************** START OF VARIABLES ************************************************ //

    // configure whether filtering is performed locally or remotely (initially)
    var local = true;
	
    // configure local urls
    var urlRead = {
		local: 'index.php?id=20&query={"query":{"type": "/core/person","kp_PersonID": null,"PersonFirstName": null,"PersonLastName": null,"kf_GenderID": null,"fk_person_gender":[{"kp_GenderID": null,"GenderName": null}],"kf_SalutationID":null,"kf_NationalityID":null}}',
        remote: 'core/components/core/apps/core/data/persons-grid-filter.json'
    };
	
    // configure remote urls
    var urlWrite = {
		local: 'core/components/core/apps/core/data/xxx.json',
        remote: 'index.php?id=20&query={"query":{}}'
    };	
	
    var filters = {
        ftype: 'filters',
		local: local   // defaults to false (remote filtering)
	};
	
	var personColumns = function (finish, start) {
		var columns = [
			{ dataIndex: 'kp_PersonID', id: 'kp_PersonID', header: 'ID', width: 50, filter: {type: 'numeric', disabled: false} },
			{ dataIndex: 'kf_SalutationID', id: 'kf_SalutationID', header: 'Salutation', width: 60, filter: {type: 'numeric', disabled: false} },
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

	// **************************************** END OF MODELS ***************************************************** //	

	// **************************************** START OF STORES ***************************************************** //

	/**
     * core.store.Persons
     * @extends Ext.data.Store
	 */
	Ext.define('core.store.Persons', {
        extend: 'Ext.data.Store',
		constructor: function(config) {
			config = config || {};
			config.autoDestroy = true;
			config.requires = 'core.model.Person';
            config.model = 'core.model.Person';
			config.proxy = {
				type: 'ajax',
				api: {
					read: (local ? urlRead.local : urlRead.remote),
					write: (local ? urlWrite.local : urlWrite.remote)
				},
				reader: {
					type: 'json',
					root: 'result'
				}
			};
			config.remoteSort = false;
			config.sorters = [{
				property: 'PersonLastName',
				direction: 'ASC'
			}];
			config.pageSize = 10; // was 50
            // call the superclass's constructor
            core.store.Persons.superclass.constructor.call(this, config);			
		}
	});		
	
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
			this.dockedItems = [
				toolbar
			];
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
					width: 125
				},
				{
					xtype: 'button',
					text: 'Save Person',
					handler: function(){
						var form = this.ownerCt.getForm('formPerson');
						if (form.isValid()) {

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
}); // End of Ext.onReady