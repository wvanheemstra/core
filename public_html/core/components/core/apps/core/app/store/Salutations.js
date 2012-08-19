/**
 * core.store.Salutations
 * @extends Ext.data.Store
 */
Ext.define('core.store.Salutations', {
    extend: 'Ext.data.Store',
    requires: 'core.model.Salutation',
    model: 'core.model.Salutation',
	proxy: {
		type: 'ajax',
		api: {
			read: 'index.php?id=20&query={"query":{"type": "/core/salutation","kp_SalutationID": null,"SalutationAbbreviation": null}}',
			write: 'api/services/mqlread/?query={}'
		},
		reader: {
			type: 'json',
			root: 'result'
		}
	},
	autoLoad: true
});