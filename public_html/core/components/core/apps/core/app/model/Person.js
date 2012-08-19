/**
 * core.model.Person
 * @extends Ext.data.Model
 */
Ext.define('core.model.Person', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kp_PersonID', type: 'int'}, 
		{ name: 'PersonFirstName', type: 'string'}, 
		{ name: 'PersonLastName', type: 'string'},
		{ name: 'kf_GenderID', type: 'int', defaultValue: '0' },
		{ name: 'kf_SalutationID', type: 'int', defaultValue: '0' },
		{ name: 'kf_NationalityID', type: 'int', defaultValue: '0' }
	],
	idProperty: 'kp_PersonID',
	requires: [
		'core.model.Gender','core.model.Salutation','core.model.Nationality'
	],
	associations: [
		{ type: 'hasOne', model: 'core.model.Gender', primaryKey: 'kp_GenderID', foreignKey: 'kf_GenderID' },
		{ type: 'hasOne', model: 'core.model.Salutation', primaryKey: 'kp_SalutationID', foreignKey: 'kf_SalutationID' },
		{ type: 'hasOne', model: 'core.model.Nationality', primaryKey: 'kp_NationalityID', foreignKey: 'kf_NationalityID' }
	]
});