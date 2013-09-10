/**
 * core.store.Groups
 * @extends Ext.data.Store
 */
Ext.define('core.store.Groups', {
	extend: 'Ext.data.Store',
	constructor: function(config) {
		config = config || {};
		config.autoDestroy = true;
		config.autoLoad = false; // load this store inside the view's render function
		config.loaded = false; // false initially
		config.requires = 'core.model.GroupModel';
		config.model = 'core.model.GroupModel';
		config.proxy = {
			type: 'ajax',
			extraParams: {
				start: 0,
				limit: 100,
				timezone: getTimezone(),
				table: 'group',
				idField: 'kp_GroupID'
			},
			actionMethods: {
				create: 'POST',
				read: 'GET',
				update: 'PUT',
				destroy: 'DELETE'
			},
			api: {
				create: (localFilteringGroup ? urlGroupCreate.local : urlGroupCreate.remote),				
				read: (localFilteringGroup ? urlGroupRead.local : urlGroupRead.remote),
				update: (localFilteringGroup ? urlGroupUpdate.local : urlGroupUpdate.remote),					
				destroy: (localFilteringGroup ? urlGroupDestroy.local : urlGroupDestroy.remote)
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
					alert('Groups - Loaded!!');
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
			property: 'GroupName',
			direction: 'ASC'
		}];
		config.pageSize = 100; // was 50
		// call the superclass's constructor
		this.superclass.constructor.call(this, config);	
	}
});	

// uses external javascript jstimezone.min.js
function getTimezone() {
	var timezone = jstz.determine();
	return timezone.name();
};

// configure whether filtering is performed locally or remotely (initially)
var localFilteringGroup = true;

// configure CRUD urls
var urlGroupCreate = {
	local: localHost+'/core/components/core/apps/core/data/create_group.php',
	remote: remoteHost+'/core/components/core/apps/core/data/create_group.php'
};
var urlGroupRead = {
	local: localHost+'/core/components/core/apps/core/data/read_group.php',
	remote: remoteHost+'/core/components/core/apps/core/data/read_group.php'
};	
var urlGroupUpdate = {
	local: localHost+'/core/components/core/apps/core/data/update_group.php',
	remote: remoteHost+'/core/components/core/apps/core/data/update_group.php'
};
var urlGroupDestroy = {
	local: localHost+'/core/components/core/apps/core/data/destroy_group.php',
	remote: remoteHost+'/core/components/core/apps/core/data/destroy_group.php'
};