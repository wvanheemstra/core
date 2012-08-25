/**
 * core.controller.Persons
 * @extends Ext.app.Controller
 */
var debug = true; // change for production 
 
Ext.define('core.controller.Persons', {
    extend: 'Ext.app.Controller',
    models: ['core.model.Person'],
    stores: ['core.store.Persons'],
    views: ['core.view.PersonPanel', 'core.view.PersonInfo', 'core.view.PersonGrid'],
	refs: [
	   {
		   ref: 'PersonGrid',
		   selector: 'persongrid' // widget name
	   },
	   {
		   ref: 'PersonInfo',
		   selector: 'personinfo' // widget name
	   }
	],
 
    init: function() {
        Ext.create('core.view.PersonPanel', {
            layout: 'fit',
            height: 500,
            width: 800,
			layout: 'column',
			bodyPadding: 5,
            items: [{
					xtype: 'persongrid',
					itemId: 'PersonGrid',
					columnWidth : 0.60,
					height : 400
				},
				{
					xtype: 'personinfo',
					itemId: 'PersonInfo',
					columnWidth : 0.40				
			}],
            renderTo: 'extjs-app'
        });
		//Ext.create('core.view.PersonInfo').show();
        //Ext.create('core.view.PersonGrid').show();
		Ext.getStore('core.store.Persons').addListener('load', this.onStorePersonsLoad, this);
		Ext.getStore('core.store.Persons').addListener('datachanged', this.onStorePersonsDataChanged, this);
		this.getPersonGrid().getSelectionModel().addListener('select', this.onViewPersonGridSelect, this);
		this.getPersonInfo().getForm().addListener('addpersonbuttonclick', this.onViewPersonInfoAddPersonButtonClick, this);
		this.getPersonInfo().getForm().addListener('savepersonbuttonclick', this.onViewPersonInfoSavePersonButtonClick, this);		
    },
	onStorePersonsLoad: function(store, model) {
		if(debug){console.info('Store Persons: Loaded')};
		this.getPersonGrid().getSelectionModel().select(0);
	},
	onStorePersonsDataChanged: function() {
		if(debug){console.info('Store Persons: Data Changed')};
	},
	onViewPersonGridSelect: function(selModel, model, idx) {
		if(debug){console.info('View PersonGrid: Select')};
		this.getPersonInfo().loadRecord(model);
	},
	onViewPersonInfoAddPersonButtonClick: function() {
		this.getPersonGrid().getSelectionModel().clearSelections();
		if(debug){console.info('View PersonInfo: Add Person Button | Click')};
	},
	onViewPersonInfoSavePersonButtonClick: function() {
		this.getPersonGrid().store.load();
		if(debug){console.info('View PersonInfo: Save Person Button | Click')};
	}	
});