/**
 * core.model.GroupModel
 * @extends Ext.data.Model
 */

// Using mapping is great for nested properties in JSON inside the store too
// See http://mutinyworks.com/blog/2012/05/14/nested-json-grid-panels/

Ext.define('core.model.GroupModel', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kp_GroupID', type: 'int', defaultValue: '0', mapping:'kp_GroupID'}, // the mappig value is the one used in the store and thus coming from the JSON file
		{ name: 'isSelected', type: 'bool', defaultValue: 'false', mapping:'isSelected'}, 
		{ name: 'GroupName', type: 'string', mapping:'GroupName'}, 
		{ name: 'kf_KindOfGroupID', type: 'int', defaultValue: '0' , mapping:'kf_KindOfGroupID'}
	],
	idProperty: 'kp_GroupID',
	requires: [
		'core.model.PersonGroupModel'
	],
	associations: [
		{ name: 'personsgroups', type: 'hasMany', model: 'core.model.PersonGroupModel', primaryKey: 'kp_GroupID', foreignKey: 'kf_GroupID' }
	]
});