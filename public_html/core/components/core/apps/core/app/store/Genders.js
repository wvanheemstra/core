/**
 * core.store.Genders
 * @extends Ext.data.Store
 */
Ext.define('core.store.Genders', {
    extend: 'Ext.data.Store',
    requires: 'core.model.Gender',
    model: 'core.model.Gender',
	proxy: {
		type: 'ajax',
		api: {
			read: 'index.php?id=20&query={"query":{"type": "/core/gender","kp_GenderID": null,"GenderName": null}}',
			write: 'api/services/mqlread/?query={}'
		},
		reader: {
			type: 'json',
			root: 'result'
		}
	},
	loaded: false,
	autoLoad: false
});