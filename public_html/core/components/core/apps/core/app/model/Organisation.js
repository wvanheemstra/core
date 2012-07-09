Ext.define('core.model.Organisation', {
    extend: 'Ext.data.Model',
	fields: [
		{name: 'kp_OrganisationID',  type: 'int'}
    ],
    idProperty:'kp_OrganisationID',
	// The model's default proxy
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