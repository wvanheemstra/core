/**
 * core.model.PersonModel
 * @extends Ext.data.Model
 */
Ext.define('core.model.PersonModel', {
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
		'core.model.GenderModel','core.model.SalutationModel','core.model.NationalityModel','core.model.DateModel','core.model.PersonGroupModel'
	],
	associations: [
		{ name: 'gender', type: 'hasOne', model: 'core.model.GenderModel', primaryKey: 'kp_GenderID', foreignKey: 'kf_GenderID', getterName: 'getGenderModel', setterName: 'setGenderModel' },
		{ name: 'salutation', type: 'hasOne', model: 'core.model.SalutationModel', primaryKey: 'kp_SalutationID', foreignKey: 'kf_SalutationID', getterName: 'getSalutationModel', setterName: 'setSalutationModel' },
		{ name: 'nationality', type: 'hasOne', model: 'core.model.NationalityModel', primaryKey: 'kp_NationalityID', foreignKey: 'kf_NationalityID', getterName: 'getNationalityModel', setterName: 'setNationalityModel' },
		{ name: 'date', type: 'hasOne', model: 'core.model.DateModel', primaryKey: 'kp_DateID', foreignKey: 'kf_DateID', getterName: 'getDateModel', setterName: 'setDateModel' },
		{ name: 'personsgroups', type: 'hasMany', model: 'core.model.PersonGroupModel', primaryKey: 'kf_PersonID', foreignKey: 'kp_PersonID', getterName: 'getPersonGroupModel', setterName: 'setPersonGroupModel' } // NOTE: the primary key in PersonGroup is kf_PersonID (!), the foreign key in Person is kp_PersonID (!)
	]
});