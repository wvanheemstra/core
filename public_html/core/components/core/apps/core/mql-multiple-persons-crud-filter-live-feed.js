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
	
    var filters = {
        ftype: 'filters'
	};
	
	// **************************************** END OF VARIABLES **************************************************** //

	// **************************************** START OF MODELS ***************************************************** //

	// **************************************** END OF MODELS ***************************************************** //	

	// **************************************** START OF STORES ***************************************************** //

	// **************************************** END OF STORES ***************************************************** //	

	// **************************************** START OF VIEWS ************************************************** //

	var personColumns = [
		{ dataIndex: 'kp_PersonID', header: 'ID', width: 50 },
		{ dataIndex: 'kf_SalutationID', header: 'Salutation', width: 60 },
		{ dataIndex: 'PersonFirstName', header: 'First Name', width: 75 },
		{ dataIndex: 'PersonLastName', header: 'Last Name', width: 125 },
		{ dataIndex: 'kf_GenderID', header: 'Gender', width: 60 },
		{ dataIndex: 'kf_NationalityID', header: 'Nationality', width: 60 },
		{ dataIndex: 'dummy', header: '', flex: 1 }
	];
	
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
			this.itemId = 'gridpanel';
			this.height=  400;
			this.columnWidth = 0.60;
			this.columns = personColumns;
//			store: storePersons,
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
	        this.xtype = 'fieldset';
	        this.title = 'Person Info';
	        this.defaults = {
	            width: 240,
	            labelWidth: 60
	        };
	        this.defaultType = 'textfield';
	        this.items = [

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