Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.panel.*',
    'Ext.layout.container.Border'
]);

Ext.Loader.onReady(function() {			
	/**
     * core.model.Person
     * @extends Ext.data.Model
	 */
    Ext.define('core.model.Person', {
		extend: 'Ext.data.Model',
        fields: [
			{ name: 'kp_PersonID', type: 'int'}, 
			{ name: 'PersonFirstName', type: 'string'}, 
			{ name: 'PersonLastName', type: 'string'},
			{ name: 'kf_GenderID', type: 'int', defaultValue: '0' },
			{ name: 'kf_SalutationID', type: 'int', defaultValue: '0' },
			{ name: 'kf_NationalityID', type: 'int', defaultValue: '0' }
		],
		idProperty: 'kp_PersonID',
		//requires: 	'core.model.Gender',
		associations: [
			{ type: 'hasOne', model: 'core.model.Gender', primaryKey: 'kp_GenderID', foreignKey: 'kf_GenderID' },
			{ type: 'hasOne', model: 'core.model.Salutation', primaryKey: 'kp_SalutationID', foreignKey: 'kf_SalutationID' },
			{ type: 'hasOne', model: 'core.model.Nationality', primaryKey: 'kp_NationalityID', foreignKey: 'kf_NationalityID' }
		]
    });

	/**
     * core.model.Gender
     * @extends Ext.data.Model
	 */
    Ext.define('core.model.Gender', {
		extend: 'Ext.data.Model',
        fields: [
			{ name: 'kp_GenderID', type: 'int'}, 
			{ name: 'GenderName', type: 'string'}
		],
		idProperty: 'kp_GenderID',
		belongsTo: 'core.model.Person'
    });
	
	/**
     * core.model.Salutation
     * @extends Ext.data.Model
	 */
    Ext.define('core.model.Salutation', {
		extend: 'Ext.data.Model',
        fields: [
			{ name: 'kp_SalutationID', type: 'int'}, 
			{ name: 'SalutationAbbreviation', type: 'string'}
		],
		idProperty: 'kp_SalutationID',
		belongsTo: 'core.model.Person'
    });

	/**
     * core.model.Nationality
     * @extends Ext.data.Model
	 */
    Ext.define('core.model.Nationality', {
		extend: 'Ext.data.Model',
        fields: [
			{ name: 'kp_NationalityID', type: 'int'}, 
			{ name: 'NationalityName', type: 'string'}
		],
		idProperty: 'kp_NationalityID',
		belongsTo: 'core.model.Person'
    });			
	
	/**
     * core.store.Person
     * @extends Ext.data.Store
	 */
	Ext.define('core.store.Person', {
        extend: 'Ext.data.Store',
		constructor: function(config) {
			config = config || {};
            config.model = 'core.model.Person';
			config.proxy = {
				type: 'ajax',
				api: {
					read: 'index.php?id=20&query={"query":{"type": "/core/person","kp_PersonID": null,"PersonFirstName": null,"PersonLastName": null,"kf_GenderID": null,"fk_person_gender":[{"kp_GenderID": null,"GenderName": null}],"kf_SalutationID":null,"kf_NationalityID":null}}',
					write: 'api/services/mqlread/?query={}'
				},
				reader: {
					type: 'json',
					root: 'result'
				}
			};
            // call the superclass's constructor
            core.store.Person.superclass.constructor.call(this, config);			
		}
	});		

	/**
     * core.grid.Person
     * @extends Ext.grid.Panel
	 */
	Ext.define('core.grid.Person', {
        extend: 'Ext.grid.Panel',
		// This will associate an string representation of a class
        // (called an xtype) with the Component Manager
        // It allows you to support lazy instantiation of your components
        alias: 'widget.grid.person',
		// override
        initComponent : function() {
		    // Pass in a column model definition
            // Note that the DetailPageURL was defined in the record definition but is not used
            // here. That is okay.
			this.columns = [
				{text: "Salutation", width: 60, dataIndex: 'kf_SalutationID', sortable: true},
                {text: "First Name", width: 120, dataIndex: 'PersonFirstName', sortable: true},
				{text: "Last Name", width: 120, dataIndex: 'PersonLastName', sortable: true},
				{text: "", flex: 1, dataIndex: '', sortable: false}
            ];
			// Note the use of a storeId, this will register this Store
            // with the StoreManager and allow us to retrieve it very easily.
            this.store = new core.store.Person({
                storeId: 'gridStorePerson',
                read: 'index.php?id=20&query={"query":{"type": "/core/person","kp_PersonID": null,"PersonFirstName": null,"PersonLastName": null,"kf_GenderID": null,"fk_person_gender":[{"kp_GenderID": null,"GenderName": null}],"kf_SalutationID":null,"kf_NationalityID":null}}'
            });
            // finally call the superclasses implementation
            core.grid.Person.superclass.initComponent.call(this);
		}
	});
			
	/**
     * core.Person.detail
     * @extends Ext.Panel
     * This is a specialized Panel which is used to show information about
     * a person.
     *
     * This demonstrates adding 2 custom properties (tplMarkup and
     * startingMarkup) to the class. It also overrides the initComponent
     * method and adds a new method called updateDetail.
     *
     * The class will be registered with an xtype of 'person.detail'
     */
    Ext.define('core.Person.detail', {
        extend: 'Ext.Panel',
        // register the core.Person.detail class with an xtype of person.detail
        alias: 'widget.person.detail',
        // add tplMarkup as a new property
        tplMarkup: [
            'ID: <a href="{kp_PersonID}" target="_blank">{kp_PersonID}</a><br/>',
			'Salutation: {kf_SalutationID}<br/>',
            'First Name: {PersonFirstName}<br/>',
			'Last Name: {PersonLastName}<br/>',
			'Gender: {kf_GenderID}<br/>',
			'Nationality: {kf_NationalityID}<br/>'
        ],
        // startingMarup as a new property
        startingMarkup: 'Please select a person to see additional details',

        bodyPadding: 7,
        // override initComponent to create and compile the template
        // apply styles to the body of the panel and initialize
        // html to startingMarkup
        initComponent: function() {
            this.tpl = Ext.create('Ext.Template', this.tplMarkup);
            this.html = this.startingMarkup;

            this.bodyStyle = {
                background: '#ffffff'
            };
            // call the superclass's initComponent implementation
            core.Person.detail.superclass.initComponent.call(this);
        },
        // add a method which updates the details
        updateDetail: function(data) {
            this.tpl.overwrite(this.body, data);
        }
    });
		
    /**
     * core.PersonMasterDetail
     * @extends Ext.Panel
     *
     * This is a specialized panel which is composed of both a person grid
     * and a person detail panel. It provides the glue between the two
     * components to allow them to communicate. You could consider this
     * the actual application.
     *
     */
    Ext.define('core.PersonMasterDetail', {
        extend: 'Ext.Panel',
        alias: 'widget.personmasterdetail',
        frame: true,
        title: 'Persons',
        width: 540,
        height: 400,
        layout: 'border',

        // override initComponent
        initComponent: function() {
            this.items = [{
                xtype: 'grid.person',
                itemId: 'gridPanel',
                region: 'north',
                height: 210,
                split: true
            },{
                xtype: 'person.detail',
                itemId: 'detailPanel',
                region: 'center'
            }];
            // call the superclass's initComponent implementation
            core.PersonMasterDetail.superclass.initComponent.call(this);
        },
        // override initEvents
        initEvents: function() {
            // call the superclass's initEvents implementation
            core.PersonMasterDetail.superclass.initEvents.call(this);

            // now add application specific events
            // notice we use the selectionmodel's rowselect event rather
            // than a click event from the grid to provide key navigation
            // as well as mouse navigation
            var personGridSm = this.getComponent('gridPanel').getSelectionModel();
            ('selectionchange', function(sm, rs) {
            if (rs.length) {
                var detailPanel = Ext.getCmp('detailPanel');
                personTpl.overwrite(detailPanel.body, rs[0].data);
            }
        })
            personGridSm.on('selectionchange', this.onRowSelect, this);
        },
        // add a method called onRowSelect
        // This matches the method signature as defined by the 'rowselect'
        // event defined in Ext.selection.RowModel
        onRowSelect: function(sm, rs) {
            // getComponent will retrieve itemId's or id's. Note that itemId's
            // are scoped locally to this instance of a component to avoid
            // conflicts with the ComponentManager
            if (rs.length) {
                var detailPanel = this.getComponent('detailPanel');
                detailPanel.updateDetail(rs[0].data);
            }
        }		
    });
// do NOT wait until the DOM is ready to run this
}, false);

// Finally now that we've defined all of our classes we can instantiate
// an instance of the app and renderTo an existing div called 'grid-example'
// Note now that classes have encapsulated this behavior we can easily create
// an instance of this app to be used in many different contexts, you could
// easily place this application in an Ext.Window for example
Ext.onReady(function() {
    // create an instance of the app
    var personApp = new core.PersonMasterDetail({
        renderTo: 'grid-example'
    });
    // We can retrieve a reference to the data store
    // via the StoreManager by its storeId
    Ext.data.StoreManager.get('gridStorePerson').load();
});