/**
 * core.store.PersonsGroups
 * @extends Ext.data.Store
 */
Ext.define('core.store.PersonsGroups', {
	extend: 'Ext.data.Store',
	constructor: function(config) {
		config = config || {};
		config.autoDestroy = true;
		config.autoLoad = true;
		config.loaded = false; // false initially
		config.requires = 'core.model.PersonGroupModel';
		config.model = 'core.model.PersonGroupModel';
		config.proxy = {
			type: 'ajax',
			extraParams: {
				start: 0,
				limit: 100,
				timezone: getTimezone(),
				table: 'person_group',
				idField: 'kf_PersonID' // temporarily
			},
			actionMethods: {
				create: 'POST',
				read: 'GET',
				update: 'PUT',
				destroy: 'DELETE'
			},
			api: {
				create: (localFilteringPersonGroup ? urlPersonGroupCreate.local : urlPersonGroupCreate.remote),				
				read: (localFilteringPersonGroup ? urlPersonGroupRead.local : urlPersonGroupRead.remote),
				update: (localFilteringPersonGroup ? urlPersonGroupUpdate.local : urlPersonGroupUpdate.remote),					
				destroy: (localFilteringPersonGroup ? urlPersonGroupDestroy.local : urlPersonGroupDestroy.remote)
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
					alert('PersonsGroups - Loaded!!');
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
		//config.sorters = [{}];
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
var localFilteringPersonGroup = true;

// configure CRUD urls
var urlPersonGroupCreate = {
	local: localHost+'/core/components/core/apps/core/data/create_person_group.php',
	remote: remoteHost+'/core/components/core/apps/core/data/create_person_group.php'
};
var urlPersonGroupRead = {
	local: localHost+'/core/components/core/apps/core/data/read_person_group.php',
	remote: remoteHost+'/core/components/core/apps/core/data/read_person_group.php'
};	
var urlPersonGroupUpdate = {
	local: localHost+'/core/components/core/apps/core/data/update_person_group.php',
	remote: remoteHost+'/core/components/core/apps/core/data/update_person_group.php'
};
var urlPersonGroupDestroy = {
	local: localHost+'/core/components/core/apps/core/data/destroy_person_group.php',
	remote: remoteHost+'/core/components/core/apps/core/data/destroy_person_group.php'
};