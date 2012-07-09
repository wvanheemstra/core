Ext.define('core.store.Parties', {
    extend: 'Ext.data.Store',
	model: 'core.model.Party',
	autoLoad: true,

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