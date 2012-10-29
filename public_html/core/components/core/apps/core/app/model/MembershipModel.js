/**
 * core.model.MembershipModel
 * @extends Ext.data.Model
 */
Ext.define('core.model.MembershipModel', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kp_MembershipID', type: 'int', defaultValue: '0'},
		{ name: 'kf_PersonID', type: 'int', defaultValue: '0'},
		{ name: 'kf_OrganisationID', type: 'int', defaultValue: '0'},
		{ name: 'kf_MultimediaID', type: 'int', defaultValue: '0'}
	],
	idProperty: 'kp_MembershipID',
	requires: [
		'core.model.PersonModel', 'core.model.Organisation'
	],
	associations: [
		{ name: 'persons', type: 'hasMany', model: 'core.model.PersonModel', primaryKey: 'kp_PersonID', foreignKey: 'kf_PersonID' },
		{ name: 'organisations', type: 'hasMany', model: 'core.model.OrganisationModel', primaryKey: 'kp_OrganisationID', foreignKey: 'kf_OrganisationID' }
	]
});