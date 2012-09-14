/**
 * core.store.Dates
 * @extends Ext.data.Store
 */
Ext.define('core.store.Dates', {
	extend: 'Ext.data.Store',
	constructor: function(config) {
		config = config || {};
		config.autoDestroy = true;
		config.autoLoad = true;
		config.loaded = false; // false initially
		config.requires = 'core.model.Date';
		config.model = 'core.model.Date';
		config.proxy = {
			type: 'ajax',
			extraParams: {
				start: 0,
				limit: 100,
				timezone: getTimezone(),
				table: 'date',
				idField: 'kp_DateID'
			},
			actionMethods: {
				create: 'POST',
				read: 'GET',
				update: 'PUT',
				destroy: 'DELETE'
			},
			api: {
				create: (localFilteringDate ? urlDateCreate.local : urlDateCreate.remote),				
				read: (localFilteringDate ? urlDateRead.local : urlDateRead.remote),
				update: (localFilteringDate ? urlDateUpdate.local : urlDateUpdate.remote),					
				destroy: (localFilteringDate ? urlDateDestroy.local : urlDateDestroy.remote)
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
					alert('Dates - Loaded!!');
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
			property: 'DateStart',
			direction: 'ASC'
		}];
		config.pageSize = 10; // was 50
		// call the superclass's constructor
		//core.store.Salutations.superclass.constructor.call(this, config);
		this.superclass.constructor.call(this, config);		
	}
});	

// uses external javascript jstimezone.min.js
function getTimezone() {
	var timezone = jstz.determine();
	return timezone.name();
};

// configure whether filtering is performed locally or remotely (initially)
var localFilteringDate = true;

// configure CRUD urls
var urlDateCreate = {
	local: localHost+'/core/components/core/apps/core/data/create_date.php',
	remote: remoteHost+'/core/components/core/apps/core/data/create_date.php'
};
var urlDateRead = {
	local: localHost+'/core/components/core/apps/core/data/read_date.php',
	remote: remoteHost+'/core/components/core/apps/core/data/read_date.php'
};	
var urlDateUpdate = {
	local: localHost+'/core/components/core/apps/core/data/update_date.php',
	remote: remoteHost+'/core/components/core/apps/core/data/update_date.php'
};
var urlDateDestroy = {
	local: localHost+'/core/components/core/apps/core/data/destroy_date.php',
	remote: remoteHost+'/core/components/core/apps/core/data/destroy_date.php'
};