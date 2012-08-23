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
			actionMethods: 'POST', // wvh: Do we need this to be defined??
			api: {
				create: (local ? urlCreate.local : urlCreate.remote),				
				read: (local ? urlRead.local : urlRead.remote),
				update: (local ? urlUpdate.local : urlUpdate.remote),					
				destroy: (local ? urlDestroy.local : urlDestroy.remote)
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
			property: 'PersonLastName',
			direction: 'ASC'
		}];
		config.pageSize = 10; // was 50
		// call the superclass's constructor
		core.store.Persons.superclass.constructor.call(this, config);			
	}
});	

// configure whether filtering is performed locally or remotely (initially)
var local = true;

// configure CRUD urls
var urlCreate = {
	local: 'http://localhost/core/components/core/apps/core/data/create_person.php',
	remote: 'http://localhost/core/components/core/apps/core/data/create_person.php'
};
var urlRead = {
	local: 'http://localhost/core/components/core/apps/core/data/read_person.php',
	remote: 'http://localhost/core/components/core/apps/core/data/read_person.php'
};	
var urlUpdate = {
	local: 'http://localhost/core/components/core/apps/core/data/update_person.php',
	remote: 'http://localhost/core/components/core/apps/core/data/update_person.php'
};
var urlDestroy = {
	local: 'http://localhost/core/components/core/apps/core/data/destroy_person.php',
	remote: 'http://localhost/core/components/core/apps/core/data/destroy_person.php'
};