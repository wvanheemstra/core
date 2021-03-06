/**
 * core.store.Persons
 * @extends Ext.data.Store
 */
Ext.define('core.store.Persons', {
	extend: 'Ext.data.Store',
	constructor: function(config) {
		config = config || {};
		config.autoDestroy = true;
		config.autoLoad = false; // load this store inside the view's render function
		config.loaded = false; // false initially
		config.requires = 'core.model.PersonModel';
		config.model = 'core.model.PersonModel';
		config.proxy = {
			type: 'ajax',
			extraParams: {
				start: 0,
				limit: 100,
				timezone: getTimezone(),
				table: 'person',
				idField: 'kp_PersonID'
			},
			actionMethods: {
				create: 'POST',
				read: 'GET',
				update: 'PUT',
				destroy: 'DELETE'
			},
			api: {
				create: (localFilteringPerson ? urlPersonCreate.local : urlPersonCreate.remote),				
				read: (localFilteringPerson ? urlPersonRead.local : urlPersonRead.remote),
				update: (localFilteringPerson ? urlPersonUpdate.local : urlPersonUpdate.remote),					
				destroy: (localFilteringPerson ? urlPersonDestroy.local : urlPersonDestroy.remote)
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
			property: 'PersonLastName',
			direction: 'ASC'
		}];
		config.pageSize = 100; // was 50
		// call the superclass's constructor
		//core.store.Persons.superclass.constructor.call(this, config);
		this.superclass.constructor.call(this, config);	
	}
});	

// uses external javascript jstimezone.min.js
function getTimezone() {
	var timezone = jstz.determine();
	return timezone.name();
};

// configure whether filtering is performed locally or remotely (initially)
var localFilteringPerson = true;

// configure CRUD urls
var urlPersonCreate = {
	local: localHost+'/core/components/core/apps/core/data/create_person.php',
	remote: remoteHost+'/core/components/core/apps/core/data/create_person.php'
};
var urlPersonRead = {
	local: localHost+'/core/components/core/apps/core/data/read_person.php',
	remote: remoteHost+'/core/components/core/apps/core/data/read_person.php'
};	
var urlPersonUpdate = {
	local: localHost+'/core/components/core/apps/core/data/update_person.php',
	remote: remoteHost+'/core/components/core/apps/core/data/update_person.php'
};
var urlPersonDestroy = {
	local: localHost+'/core/components/core/apps/core/data/destroy_person.php',
	remote: remoteHost+'/core/components/core/apps/core/data/destroy_person.php'
};