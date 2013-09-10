/**
 * core.model.GenderModel
 * @extends Ext.data.Model
 */
Ext.define('core.model.GenderModel', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kp_GenderID', type: 'int', defaultValue: '0'}, 
		{ name: 'GenderName', type: 'string'}
	],
	idProperty: 'kp_GenderID',
	loaded: false,
	belongsTo: 'core.model.PersonModel'
});