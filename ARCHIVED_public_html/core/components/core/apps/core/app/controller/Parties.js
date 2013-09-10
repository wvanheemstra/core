Ext.define('core.controller.Parties', {
    extend: 'Ext.app.Controller',
	views: [
        'party.List',
		'party.Edit'
    ],
	stores: [
        'Parties'
    ],
	models: [
		'Party'
	],
    init: function() {
        
    },
});