/**
 * core.store.Contacts
 * @extends Ext.data.Store
 */
Ext.define('core.store.Contacts', {
	extend: 'Ext.data.Store',
	constructor: function(config) {
		config = config || {};
		config.autoDestroy = true;
		config.autoLoad = true;
		config.loaded = false; // false initially
		config.requires = 'core.model.ContactModel';
		config.model = 'core.model.ContactModel';
		config.proxy = {
			type: 'ajax',
			extraParams: {
				start: 0,
				limit: 100,
				timezone: getTimezone(),
				table: 'contact',
				idField: 'kp_ContactID' // temporarily
			},
			actionMethods: {
				create: 'POST',
				read: 'GET',
				update: 'PUT',
				destroy: 'DELETE'
			},
			api: {
				create: (localFilteringContact ? urlContactCreate.local : urlContactCreate.remote),				
				read: (localFilteringContact ? urlContactRead.local : urlContactRead.remote),
				update: (localFilteringContact ? urlContactUpdate.local : urlContactUpdate.remote),					
				destroy: (localFilteringContact ? urlContactDestroy.local : urlContactDestroy.remote)
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
					alert('Contacts - Loaded!!');
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
var localFilteringContact = true;

// configure CRUD urls
var urlContactCreate = {
	local: localHost+'/core/components/core/apps/core/data/create_contact.php',
	remote: remoteHost+'/core/components/core/apps/core/data/create_contact.php'
};
var urlContactRead = {
	local: localHost+'/core/components/core/apps/core/data/read_contact.php',
	remote: remoteHost+'/core/components/core/apps/core/data/read_contact.php'
};	
var urlContactUpdate = {
	local: localHost+'/core/components/core/apps/core/data/update_contact.php',
	remote: remoteHost+'/core/components/core/apps/core/data/update_contact.php'
};
var urlContactDestroy = {
	local: localHost+'/core/components/core/apps/core/data/destroy_contact.php',
	remote: remoteHost+'/core/components/core/apps/core/data/destroy_contact.php'
};