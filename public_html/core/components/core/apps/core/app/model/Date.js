/**
 * core.model.Date
 * @extends Ext.data.Model
 */
Ext.define('core.model.Date', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'kp_DateID', type: 'int', defaultValue: '0'},
		{ name: 'DateStart', type: 'string'}, // Use string instead of date !!
		{ name: 'DateFinish', type: 'string'} // Use string instead of date !!
	],
	idProperty: 'kp_DateID',
	requires: [
//
	],
	associations: [
//
	]
});