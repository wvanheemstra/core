/**
 * core.model.Gender
 * @extends Ext.data.Model
 */
Ext.define('core.model.Gender', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kp_GenderID', type: 'int'}, 
		{ name: 'GenderName', type: 'string'}
	],
	idProperty: 'kp_GenderID',
	loaded: false,
	belongsTo: 'core.model.Person'
});