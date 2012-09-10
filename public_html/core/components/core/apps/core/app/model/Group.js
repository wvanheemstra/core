/**
 * core.model.Group
 * @extends Ext.data.Model
 */
Ext.define('core.model.Group', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kp_GroupID', type: 'int', defaultValue: '0'}, 
		{ name: 'GroupName', type: 'string'}, 
		{ name: 'kf_KindOfGroupID', type: 'int', defaultValue: '0' }
	],
	idProperty: 'kp_GroupID',
	requires: [
		'core.model.PersonGroup'
	],
	associations: [
		{ type: 'hasMany', model: 'core.model.PersonGroup', primaryKey: 'kp_GroupID', foreignKey: 'kf_GroupID' }
	]
});