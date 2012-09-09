/**
 * core.model.PersonGroup
 * @extends Ext.data.Model
 */
Ext.define('core.model.PersonGroup', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kf_PersonID', type: 'int', defaultValue: '0'}, 
		{ name: 'kf_GroupID', type: 'int', defaultValue: '0' }
	],
	idProperty: 'kf_PersonID'//, temporarily
	//requires: [],
	//associations: []
});