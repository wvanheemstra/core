/**
 * core.model.SalutationModel
 * @extends Ext.data.Model
 */
Ext.define('core.model.SalutationModel', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kp_SalutationID', type: 'int', defaultValue: '0'}, 
		{ name: 'SalutationAbbreviation', type: 'string'}
	],
	idProperty: 'kp_SalutationID',
	belongsTo: 'core.model.PersonModel'
});