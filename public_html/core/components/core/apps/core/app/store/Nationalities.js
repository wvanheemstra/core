/**
 * core.store.Nationalities
 * @extends Ext.data.Store
 */
Ext.define('core.store.Nationalities', {
    extend: 'Ext.data.Store',
    requires: 'core.model.Nationality',
    model: 'core.model.Nationality',
	proxy: {
		type: 'ajax',
		api: {
			read: 'index.php?id=20&query={"query":{"type": "/core/nationality","kp_NationalityID": null,"NationalityName": null}}',
			write: 'api/services/mqlread/?query={}'
		},
		reader: {
			type: 'json',
			root: 'result'
		}
	},
	autoLoad: true
});