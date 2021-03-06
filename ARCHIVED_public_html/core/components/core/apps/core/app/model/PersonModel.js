/**
 * core.model.PersonModel
 * @extends Ext.data.Model
 */
Ext.define('core.model.PersonModel', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kp_PersonID', type: 'int', defaultValue: '0', mapping: 'kp_PersonID'},
		{ name: 'PersonFirstName', type: 'string', mapping: 'PersonFirstName'}, 
		{ name: 'PersonLastName', type: 'string', mapping: 'PersonLastName'},
		{ name: 'kf_GenderID', type: 'int', defaultValue: '0', mapping: 'kf_GenderID'},
		{ name: 'kf_SalutationID', type: 'int', defaultValue: '0', mapping: 'kf_SalutationID'},
		{ name: 'kf_NationalityID', type: 'int', defaultValue: '0', mapping: 'kf_NationalityID'},
		{ name: 'kf_DateID', type: 'int', defaultValue: '0', mapping: 'kf_DateID'},
		{ name: 'DateStart', type: 'string'}, // Extended for storing DateStart
		{ name: 'GroupIDs', type: 'string'} // Extended for storing GroupIDs
	],
	idProperty: 'kp_PersonID',
	requires: [
		'core.model.GenderModel','core.model.SalutationModel','core.model.NationalityModel','core.model.DateModel','core.model.PersonGroupModel', 'core.model.MembershipModel'
	],
	associations: [
		{ name: 'gender', type: 'hasOne', model: 'core.model.GenderModel', primaryKey: 'kp_GenderID', foreignKey: 'kf_GenderID', associationKey: 'gender', getterName: 'getGenderModel', setterName: 'setGenderModel', autoLoad: true },
		{ name: 'salutation', type: 'hasOne', model: 'core.model.SalutationModel', primaryKey: 'kp_SalutationID', foreignKey: 'kf_SalutationID', associationKey: 'salutation', getterName: 'getSalutationModel', setterName: 'setSalutationModel', autoLoad: true },
		{ name: 'nationality', type: 'hasOne', model: 'core.model.NationalityModel', primaryKey: 'kp_NationalityID', foreignKey: 'kf_NationalityID', associationKey: 'nationality', getterName: 'getNationalityModel', setterName: 'setNationalityModel', autoLoad: true },
		{ name: 'date', type: 'hasOne', model: 'core.model.DateModel', primaryKey: 'kp_DateID', foreignKey: 'kf_DateID', associationKey: 'date', getterName: 'getDateModel', setterName: 'setDateModel', autoLoad: true },
		{ name: 'personsgroups', type: 'hasMany', model: 'core.model.PersonGroupModel', primaryKey: 'kf_PersonID', foreignKey: 'kp_PersonID', associationKey: 'personsgroups', getterName: 'getPersonGroupModel', setterName: 'setPersonGroupModel', autoLoad: true }, // NOTE: the primary key in PersonGroup is kf_PersonID (!), the foreign key in Person is kp_PersonID (!)
		{ name: 'memberships', type: 'hasMany', model: 'core.model.MembershipModel', primaryKey: 'kf_PersonID', foreignKey: 'kp_PersonID', associationKey: 'memberships', getterName: 'getMembershipModel', setterName: 'setMembershipModel', autoLoad: true } // NOTE: the primary key in Membership is kf_PersonID (!), the foreign key in Person is kp_PersonID (!)
	]
});