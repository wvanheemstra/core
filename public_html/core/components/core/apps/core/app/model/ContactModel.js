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

// belongsTo
// 'core.model.membership'	
	
	requires: [
// THESE SHOULD NOT BE HERE ->		'core.model.MembershipModel'
// INSTEAD CONTACTMODEL IS REQUIRED BY MEMBERSHIP
	],
	associations: [
//	THESE SHOULD NOT BE HERE ->	{ name: 'memberships', type: 'hasMany', model: 'core.model.MembershipModel', primaryKey: 'kp_MembershipID', foreignKey: 'kf_MembershipID' }
	]
});