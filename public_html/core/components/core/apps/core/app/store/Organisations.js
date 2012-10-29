/**
 * core.store.Organisations
 * @extends Ext.data.Store
 */
Ext.define('core.store.Organisations', {
	extend: 'Ext.data.Store',
	constructor: function(config) {
		config = config || {};
		config.autoDestroy = true;
		config.autoLoad = false; // load this store inside the view's render function
		config.loaded = false; // false initially
		config.requires = 'core.model.OrganisationModel';
		config.model = 'core.model.OrganisationModel';
		config.proxy = {
			type: 'ajax',
			extraParams: {
				start: 0,
				limit: 100,
				timezone: getTimezone(),
				table: 'organisation',
				idField: 'kp_OrganisationID'
			},
			actionMethods: {
				create: 'POST',
				read: 'GET',
				update: 'PUT',
				destroy: 'DELETE'
			},
			api: {
				create: (localFilteringOrganisation ? urlOrganisationCreate.local : urlOrganisationCreate.remote),				
				read: (localFilteringOrganisation ? urlOrganisationRead.local : urlOrganisationRead.remote),
				update: (localFilteringOrganisation ? urlOrganisationUpdate.local : urlOrganisationUpdate.remote),					
				destroy: (localFilteringOrganisation ? urlOrganisationDestroy.local : urlOrganisationDestroy.remote)
			},
			reader: {
				type: 'json',
				root: 'data', // change to 'result' when used with MQL
				totalProperty: 'total',
				successProperty: 'success',
				messageProperty: 'message'
			},
			writer: {
				type: 'json',
				writeAllFields: true,
				allowSingle: false,
				root: 'data'
			},
			listeners: {
				load: function(){
					this.loaded = true;
					alert('Organisations - Loaded!!');
				},			
				exception: function(proxy, response, operation){
					Ext.MessageBox.show({
						title: 'REMOTE EXCEPTION',
						msg: operation.getError(),
						icon: Ext.MessageBox.ERROR,
						buttons: Ext.Msg.OK
					});
				}				
			}
		};
		config.remoteSort = false;
		config.sorters = [{
			property: 'OrganisationName',
			direction: 'ASC'
		}];
		config.pageSize = 100; // was 50
		// call the superclass's constructor
		//core.store.Organisations.superclass.constructor.call(this, config);
		this.superclass.constructor.call(this, config);	
	}
});	

// uses external javascript jstimezone.min.js
function getTimezone() {
	var timezone = jstz.determine();
	return timezone.name();
};

// configure whether filtering is performed locally or remotely (initially)
var localFilteringOrganisation = true;

// configure CRUD urls
var urlOrganisationCreate = {
	local: localHost+'/core/components/core/apps/core/data/create_organisation.php',
	remote: remoteHost+'/core/components/core/apps/core/data/create_organisation.php'
};
var urlOrganisationRead = {
	local: localHost+'/core/components/core/apps/core/data/read_organisation.php',
	remote: remoteHost+'/core/components/core/apps/core/data/read_organisation.php'
};	
var urlOrganisationUpdate = {
	local: localHost+'/core/components/core/apps/core/data/update_organisation.php',
	remote: remoteHost+'/core/components/core/apps/core/data/update_organisation.php'
};
var urlOrganisationDestroy = {
	local: localHost+'/core/components/core/apps/core/data/destroy_organisation.php',
	remote: remoteHost+'/core/components/core/apps/core/data/destroy_organisation.php'
};