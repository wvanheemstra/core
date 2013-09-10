/**
 * core.store.Memberships
 * @extends Ext.data.Store
 */
Ext.define('core.store.Memberships', {
	extend: 'Ext.data.Store',
	constructor: function(config) {
		config = config || {};
		config.autoDestroy = true;
		config.autoLoad = true;
		config.loaded = false; // false initially
		config.requires = 'core.model.MembershipModel';
		config.model = 'core.model.MembershipModel';
		config.proxy = {
			type: 'ajax',
			extraParams: {
				start: 0,
				limit: 100,
				timezone: getTimezone(),
				table: 'membership',
				idField: 'kp_MembershipID' // temporarily
			},
			actionMethods: {
				create: 'POST',
				read: 'GET',
				update: 'PUT',
				destroy: 'DELETE'
			},
			api: {
				create: (localFilteringMembership ? urlMembershipCreate.local : urlMembershipCreate.remote),				
				read: (localFilteringMembership ? urlMembershipRead.local : urlMembershipRead.remote),
				update: (localFilteringMembership ? urlMembershipUpdate.local : urlMembershipUpdate.remote),					
				destroy: (localFilteringMembership ? urlMembershipDestroy.local : urlMembershipDestroy.remote)
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
					alert('Memberships - Loaded!!');
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
var localFilteringMembership = true;

// configure CRUD urls
var urlMembershipCreate = {
	local: localHost+'/core/components/core/apps/core/data/create_membership.php',
	remote: remoteHost+'/core/components/core/apps/core/data/create_membership.php'
};
var urlMembershipRead = {
	local: localHost+'/core/components/core/apps/core/data/read_membership.php',
	remote: remoteHost+'/core/components/core/apps/core/data/read_membership.php'
};	
var urlMembershipUpdate = {
	local: localHost+'/core/components/core/apps/core/data/update_membership.php',
	remote: remoteHost+'/core/components/core/apps/core/data/update_membership.php'
};
var urlMembershipDestroy = {
	local: localHost+'/core/components/core/apps/core/data/destroy_membership.php',
	remote: remoteHost+'/core/components/core/apps/core/data/destroy_membership.php'
};