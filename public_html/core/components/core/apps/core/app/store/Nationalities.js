/**
 * core.store.Nationalities
 * @extends Ext.data.Store
 */
Ext.define('core.store.Nationalities', {
	extend: 'Ext.data.Store',
	constructor: function(config) {
		config = config || {};
		config.autoDestroy = true;
		config.autoLoad = true;
		config.loaded = true;
		config.requires = 'core.model.Nationality';
		config.model = 'core.model.Nationality';
		config.proxy = {
			type: 'ajax',
			actionMethods: 'POST', // wvh: Do we need this to be defined??
			api: {
				create: (localFilteringNationality ? urlNationalityCreate.local : urlNationalityCreate.remote),				
				read: (localFilteringNationality ? urlNationalityRead.local : urlNationalityRead.remote),
				update: (localFilteringNationality ? urlNationalityUpdate.local : urlNationalityUpdate.remote),					
				destroy: (localFilteringNationality ? urlNationalityDestroy.local : urlNationalityDestroy.remote)
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
			//	exception: function(proxy, response, operation){
			//		Ext.MessageBox.show({
			//			title: 'REMOTE EXCEPTION',
			//			msg: operation.getError(),
			//			icon: Ext.MessageBox.ERROR,
			//			buttons: Ext.Msg.OK
			//		});
			//	}				
			}
		};
		config.remoteSort = false;
		config.sorters = [{
			property: 'NationalityName',
			direction: 'ASC'
		}];
		config.pageSize = 10; // was 50
		// call the superclass's constructor
		core.store.Nationalities.superclass.constructor.call(this, config);			
	}
});	

// configure whether filtering is performed locally or remotely (initially)
var localFilteringNationality = true;

var localHost = 'http://localhost';
var remoteHost = 'http://localhost';

// configure CRUD urls
var urlNationalityCreate = {
	local: localHost+'/core/components/core/apps/core/data/create_nationality.php',
	remote: remoteHost+'/core/components/core/apps/core/data/create_nationality.php'
};
var urlNationalityRead = {
	local: localHost+'/core/components/core/apps/core/data/read_nationality.php',
	remote: remoteHost+'/core/components/core/apps/core/data/read_nationality.php'
};	
var urlNationalityUpdate = {
	local: localHost+'/core/components/core/apps/core/data/update_nationality.php',
	remote: remoteHost+'/core/components/core/apps/core/data/update_nationality.php'
};
var urlNationalityDestroy = {
	local: localHost+'/core/components/core/apps/core/data/destroy_nationality.php',
	remote: remoteHost+'/core/components/core/apps/core/data/destroy_nationality.php'
};