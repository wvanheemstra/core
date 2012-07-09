Ext.define('core.model.Party', {
    extend: 'Ext.data.Model',
	fields: [
		{name: 'kp_PartyID',  type: 'int'}
    ],
    idProperty:'kp_PartyID',
	// The model's default proxy
	proxy: {
        type: 'ajax',
        api: {
			read: 'http://localhost/core/components/core/apps/core/data/parties.json',
			update: 'http://localhost/core/components/core/apps/core/data/updateParties.json'
		},
        reader: {
            type: 'json',
            root: 'parties',
            successProperty: 'success'
        }
    }
});