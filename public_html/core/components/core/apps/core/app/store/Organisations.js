Ext.define('core.store.Organisations', {
    extend: 'Ext.data.Store',
	model: 'core.model.Organisation'
	autoLoad: true,

    proxy: {
        type: 'ajax',
        api: {
			read: 'http://localhost/core/components/core/apps/core/data/organisations.json',
			update: 'http://localhost/core/components/core/apps/core/data/updateOrganisations.json'
		},
        reader: {
            type: 'json',
            root: 'organisations',
            successProperty: 'success'
        }
    }	
});