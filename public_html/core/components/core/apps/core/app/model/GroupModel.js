/**
 * core.model.GroupModel
 * @extends Ext.data.Model
 */
Ext.define('core.model.GroupModel', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kp_GroupID', type: 'int', defaultValue: '0'}, 
		{ name: 'GroupName', type: 'string'}, 
		{ name: 'kf_KindOfGroupID', type: 'int', defaultValue: '0' }
	],
	idProperty: 'kp_GroupID',
	requires: [
		'core.model.PersonGroupModel'
	],
	associations: [
		{ name: 'personsgroups', type: 'hasMany', model: 'core.model.PersonGroupModel', primaryKey: 'kp_GroupID', foreignKey: 'kf_GroupID' }
	]
});