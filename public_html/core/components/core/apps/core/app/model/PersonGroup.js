/**
 * core.model.PersonGroup
 * @extends Ext.data.Model
 */
Ext.define('core.model.PersonGroup', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kf_PersonID', type: 'int', defaultValue: '0'}, 
		{ name: 'kf_GroupID', type: 'int', defaultValue: '0' }
	]//,
	//idProperty: 'kf_PersonID'//, NO UNIQUE ID FOR THIS MODEL
	//requires: [],
	//associations: []
});