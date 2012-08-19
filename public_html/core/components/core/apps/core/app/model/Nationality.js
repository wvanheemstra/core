/**
 * core.model.Nationality
 * @extends Ext.data.Model
 */
Ext.define('core.model.Nationality', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kp_NationalityID', type: 'int'}, 
		{ name: 'NationalityName', type: 'string'}
	],
	idProperty: 'kp_NationalityID',
	belongsTo: 'core.model.Person'
});