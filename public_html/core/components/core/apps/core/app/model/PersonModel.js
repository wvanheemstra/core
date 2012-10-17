/**
 * core.model.Person
 * @extends Ext.data.Model
 */
Ext.define('core.model.Person', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kp_PersonID', type: 'int', defaultValue: '0'},
		{ name: 'PersonFirstName', type: 'string'}, 
		{ name: 'PersonLastName', type: 'string'},
		{ name: 'kf_GenderID', type: 'int', defaultValue: '0' },
		{ name: 'kf_SalutationID', type: 'int', defaultValue: '0' },
		{ name: 'kf_NationalityID', type: 'int', defaultValue: '0' },
		{ name: 'kf_DateID', type: 'int', defaultValue: '0' },
		{ name: 'DateStart', type: 'string'}, // Extended for storing DateStart
		{ name: 'GroupIDs', type: 'string'} // Extended for storing GroupIDs
	],
	idProperty: 'kp_PersonID',
	requires: [
		'core.model.Gender','core.model.Salutation','core.model.Nationality','core.model.Date','core.model.PersonGroup'
	],
	associations: [
		{ name: 'gender', type: 'hasOne', model: 'core.model.Gender', primaryKey: 'kp_GenderID', foreignKey: 'kf_GenderID' },
		{ name: 'salutation', type: 'hasOne', model: 'core.model.Salutation', primaryKey: 'kp_SalutationID', foreignKey: 'kf_SalutationID' },
		{ name: 'nationality', type: 'hasOne', model: 'core.model.Nationality', primaryKey: 'kp_NationalityID', foreignKey: 'kf_NationalityID' },
		{ name: 'date', type: 'hasOne', model: 'core.model.Date', primaryKey: 'kp_DateID', foreignKey: 'kf_DateID' },
		{ name: 'personsgroups', type: 'hasMany', model: 'core.model.PersonGroup', primaryKey: 'kf_PersonID', foreignKey: 'kp_PersonID' } // NOTE: the primary key in PersonGroup is kf_PersonID (!), the foreign key in Person is kp_PersonID (!)
	]
});