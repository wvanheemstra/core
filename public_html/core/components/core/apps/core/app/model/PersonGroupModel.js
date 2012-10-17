/**
 * core.model.PersonGroupModel
 * @extends Ext.data.Model
 */
Ext.define('core.model.PersonGroupModel', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kf_PersonID', type: 'int', defaultValue: '0'}, 
		{ name: 'kf_GroupID', type: 'int', defaultValue: '0' }
	] ,
	//idProperty: 'kf_PersonID', // SET NO UNIQUE ID FOR THIS MODEL, OTHERWISE THE STORE WOULD FILTER OUT THE DUPLICATE OCCURENCES
	requires: [
//		'core.model.PersonModel', 'core.model.GroupModel'
	],
	associations: [
//		{ name: 'persons', type: 'hasMany', model: 'core.model.PersonModel', primaryKey: 'kf_PersonID', foreignKey: 'kp_PersonID' },
//		{ name: 'groups', type: 'hasMany', model: 'core.model.GroupModel', primaryKey: 'kf_GroupID', foreignKey: 'kp_GroupID' }
	]
});