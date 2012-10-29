/**
 * core.model.ContactModel
 * @extends Ext.data.Model
 */
Ext.define('core.model.ContactModel', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kp_ContactID', type: 'int', defaultValue: '0'},
		{ name: 'kf_KindOfContactID', type: 'int', defaultValue: '0'},
		{ name: 'ContactValue', type: 'string'},			
		{ name: 'kf_MembershipID', type: 'int', defaultValue: '0'}
	],
	idProperty: 'kp_ContactID',
	requires: [
//		'core.model.MembershipModel'
	],
	associations: [
//		{ name: 'memberships', type: 'hasMany', model: 'core.model.MembershipModel', primaryKey: 'kp_MembershipID', foreignKey: 'kf_MembershipID' }
	]
});