/**
 * core.store.Genders
 * @extends Ext.data.Store
 */
Ext.define('core.store.Genders', {
	extend: 'Ext.data.Store',
	constructor: function(config) {
		config = config || {};
		config.autoDestroy = true;
		config.autoLoad = true;
		config.loaded = true;
		config.requires = 'core.model.Gender';
		config.model = 'core.model.Gender';
		config.proxy = {
			type: 'ajax',
			actionMethods: 'POST', // wvh: Do we need this to be defined??
			api: {
				create: (localFilteringGender ? urlGenderCreate.local : urlGenderCreate.remote),				
				read: (localFilteringGender ? urlGenderRead.local : urlGenderRead.remote),
				update: (localFilteringGender ? urlGenderUpdate.local : urlGenderUpdate.remote),					
				destroy: (localFilteringGender ? urlGenderDestroy.local : urlGenderDestroy.remote)
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
			property: 'GenderName',
			direction: 'ASC'
		}];
		config.pageSize = 10; // was 50
		// call the superclass's constructor
		core.store.Genders.superclass.constructor.call(this, config);			
	}
});	

// configure whether filtering is performed locally or remotely (initially)
var localFilteringGender = true;

// configure CRUD urls
var urlGenderCreate = {
	local: 'http://localhost/core/components/core/apps/core/data/create_gender.php',
	remote: 'http://localhost/core/components/core/apps/core/data/create_gender.php'
};
var urlGenderRead = {
	local: 'http://localhost/core/components/core/apps/core/data/read_gender.php',
	remote: 'http://localhost/core/components/core/apps/core/data/read_gender.php'
};	
var urlGenderUpdate = {
	local: 'http://localhost/core/components/core/apps/core/data/update_gender.php',
	remote: 'http://localhost/core/components/core/apps/core/data/update_gender.php'
};
var urlGenderDestroy = {
	local: 'http://localhost/core/components/core/apps/core/data/destroy_gender.php',
	remote: 'http://localhost/core/components/core/apps/core/data/destroy_gender.php'
};