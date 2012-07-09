Ext.define('core.store.Persons', {
    extend: 'Ext.data.Store',
	model: 'core.model.Person',
	autoLoad: true,

    proxy: {
        type: 'ajax',
        api: {
			read: 'http://localhost/core/components/core/apps/core/data/persons.json',
			update: 'http://localhost/core/components/core/apps/core/data/updatePersons.json'
		},
        reader: {
            type: 'json',
            root: 'persons',
            successProperty: 'success'
        }
    }
});