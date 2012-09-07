/**
 * core.store.Salutations
 * @extends Ext.data.Store
 */
Ext.define('core.store.Salutations', {
	extend: 'Ext.data.Store',
	constructor: function(config) {
		config = config || {};
		config.autoDestroy = true;
		config.autoLoad = true;
		config.loaded = false; // false initially
		config.requires = 'core.model.Salutation';
		config.model = 'core.model.Salutation';
		config.proxy = {
			type: 'ajax',
			extraParams: {
				start: 0,
				limit: 100,
				table: 'salutation',
				idField: 'kp_SalutationID'
			},
			actionMethods: {
				create: 'POST',
				read: 'GET',
				update: 'PUT',
				destroy: 'DELETE'
			},
			api: {
				create: (localFilteringSalutation ? urlSalutationCreate.local : urlSalutationCreate.remote),				
				read: (localFilteringSalutation ? urlSalutationRead.local : urlSalutationRead.remote),
				update: (localFilteringSalutation ? urlSalutationUpdate.local : urlSalutationUpdate.remote),					
				destroy: (localFilteringSalutation ? urlSalutationDestroy.local : urlSalutationDestroy.remote)
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
					alert('Salutations - Loaded!!');
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
			property: 'SalutationAbbreviation',
			direction: 'ASC'
		}];
		config.pageSize = 10; // was 50
		// call the superclass's constructor
		//core.store.Salutations.superclass.constructor.call(this, config);
		this.superclass.constructor.call(this, config);		
	}
});	

// configure whether filtering is performed locally or remotely (initially)
var localFilteringSalutation = true;

// configure CRUD urls
var urlSalutationCreate = {
	local: localHost+'/core/components/core/apps/core/data/create_salutation.php',
	remote: remoteHost+'/core/components/core/apps/core/data/create_salutation.php'
};
var urlSalutationRead = {
	local: localHost+'/core/components/core/apps/core/data/read_salutation.php',
	remote: remoteHost+'/core/components/core/apps/core/data/read_salutation.php'
};	
var urlSalutationUpdate = {
	local: localHost+'/core/components/core/apps/core/data/update_salutation.php',
	remote: remoteHost+'/core/components/core/apps/core/data/update_salutation.php'
};
var urlSalutationDestroy = {
	local: localHost+'/core/components/core/apps/core/data/destroy_salutation.php',
	remote: remoteHost+'/core/components/core/apps/core/data/destroy_salutation.php'
};