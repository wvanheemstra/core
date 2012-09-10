/**
 * core.model.Date
 * @extends Ext.data.Model
 */
Ext.define('core.model.Date', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kp_DateID', type: 'int', defaultValue: '0'},
		{ name: 'DateStart', type: 'date'}, 
		{ name: 'DateFinish', type: 'date'}
	],
	idProperty: 'kp_DateID',
	requires: [
//
	],
	associations: [
//
	]
});