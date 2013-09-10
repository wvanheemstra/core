Ext.define('core.model.OrganisationModel', {
    extend: 'Ext.data.Model',
	fields: [
		{name: 'kp_OrganisationID',  type: 'int'}
    ],
    idProperty:'kp_OrganisationID',
	requires: [
		'core.model.MembershipModel'
	],
	associations: [
	{ name: 'memberships', type: 'hasMany', model: 'core.model.MembershipModel', primaryKey: 'kf_OrganisationID', foreignKey: 'kp_OrganisationID', associationKey: 'memberships', getterName: 'getMembershipModel', setterName: 'setMembershipModel', autoLoad: true } // NOTE: the primary key in Membership is kf_OrganisationID (!), the foreign key in Organisation is kp_OrganisationID (!)
	]
});