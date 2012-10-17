/**
 * core.model.PersonGroup
 * @extends Ext.data.Model
 */
Ext.define('core.model.PersonGroup', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kf_PersonID', type: 'int', defaultValue: '0'}, 
		{ name: 'kf_GroupID', type: 'int', defaultValue: '0' }
	] ,
	//idProperty: 'kf_PersonID', // SET NO UNIQUE ID FOR THIS MODEL, OTHERWISE THE STORE WOULD FILTER OUT THE DUPLICATE OCCURENCES
	requires: [
//		'core.model.Person', 'core.model.Group'
	],
	associations: [
//		{ type: 'hasMany', model: 'core.model.Person', primaryKey: 'kf_PersonID', foreignKey: 'kp_PersonID' },
//		{ type: 'hasMany', model: 'core.model.Group', primaryKey: 'kf_GroupID', foreignKey: 'kp_GroupID' }
	]
});