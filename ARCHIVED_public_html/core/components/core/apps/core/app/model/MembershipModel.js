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
	
// belongsTo
//'core.model.person'	
//'core.model.organisation'	
	
	requires: [
		'core.model.ContactModel'
// THESE SHOULD NOT BE HERE ->		'core.model.PersonModel', 'core.model.OrganisationModel'
// INSTEAD MEMBERSHIPMODEL IS REQUIRED BY BOTH PERSON AND ORGANISATION
	],
	associations: [
		{ name: 'contacts', type: 'hasMany', model: 'core.model.ContactModel', primaryKey: 'kp_ContactID', foreignKey: 'kf_ContactID', associationKey: 'contacts', getterName: 'getContactModel', setterName: 'setContactModel', autoLoad: true }
	]
});