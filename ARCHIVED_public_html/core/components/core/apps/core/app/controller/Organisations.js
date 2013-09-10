Ext.define('core.controller.Organisations', {
    extend: 'Ext.app.Controller',
	views: [
        'organisation.List',
		'organisation.Edit'
    ],
	stores: [
        'Organisations'
    ],
	models: [
		'Organisation'
	],
    init: function() {
        
    },
});