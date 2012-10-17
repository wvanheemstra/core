/**
 * core.model.Salutation
 * @extends Ext.data.Model
 */
Ext.define('core.model.Salutation', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kp_SalutationID', type: 'int', defaultValue: '0'}, 
		{ name: 'SalutationAbbreviation', type: 'string'}
	],
	idProperty: 'kp_SalutationID',
	belongsTo: 'core.model.Person'
});