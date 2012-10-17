/**
 * core.model.DateModel
 * @extends Ext.data.Model
 */
Ext.define('core.model.DateModel', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kp_DateID', type: 'int', defaultValue: '0'},
		{ name: 'DateStart', type: 'date', dateFormat: 'Y-m-d'},
		{ name: 'DateFinish', type: 'date', dateFormat: 'Y-m-d'}
	],
	idProperty: 'kp_DateID',
	requires: [
//
	],
	associations: [
//
	]
});