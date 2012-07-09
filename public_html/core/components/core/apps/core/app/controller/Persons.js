Ext.define('core.controller.Persons', {
    extend: 'Ext.app.Controller',
	views: [
        'person.List',
		'person.Edit'
    ],
	stores: [
        'Persons'
    ],
	models: [
		'Person'
	],
    init: function() {
        
    },
});