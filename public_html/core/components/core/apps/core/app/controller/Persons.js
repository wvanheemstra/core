/**
 * core.controller.Persons
 * @extends Ext.app.Controller
 */
var debug = true; // change for production 
if (!window.console) console = {log: function() {}}; // avoids the error in IE

var selection = null; // default if no row is or was previously selected
 
Ext.define('core.controller.Persons', {
    extend: 'Ext.app.Controller',
    models: ['core.model.Person', 'core.model.Salutation', 'core.model.Gender', 'core.model.Nationality'],
    stores: ['core.store.Persons', 'core.store.Salutations', 'core.store.Genders', 'core.store.Nationalities'],
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
			bodyPadding: 0,
            items: [{
					xtype: 'persongrid',
					itemId: 'PersonGrid',
					columnWidth : 0.60,
					height : 473
				},
				{
					xtype: 'personinfo',
					itemId: 'PersonInfo',
					columnWidth : 0.40,
					height : 473
			}],
            renderTo: 'extjs-app'
        }).show();
		//});
		
		Ext.getStore('core.store.Persons').addListener('load', this.onStorePersonsLoad, this);
		Ext.getStore('core.store.Persons').addListener('datachanged', this.onStorePersonsDataChanged, this);
		Ext.getStore('core.store.Salutations').addListener('load', this.onStoreSalutationsLoad, this);
		Ext.getStore('core.store.Salutations').addListener('datachanged', this.onStoreSalutationsDataChanged, this);		
		Ext.getStore('core.store.Genders').addListener('load', this.onStoreGendersLoad, this);
		Ext.getStore('core.store.Genders').addListener('datachanged', this.onStoreGendersDataChanged, this);		
		Ext.getStore('core.store.Nationalities').addListener('load', this.onStoreNationalitiesLoad, this);
		Ext.getStore('core.store.Nationalities').addListener('datachanged', this.onStoreNationalitiesDataChanged, this);
		
		//Ext.create('core.view.PersonInfo').show();
        //Ext.create('core.view.PersonGrid').show();	
		
		this.getPersonGrid().getSelectionModel().addListener('select', this.onViewPersonGridSelect, this);
		this.getPersonInfo().getForm().addListener('addpersonbuttonclick', this.onViewPersonInfoAddPersonButtonClick, this);
		this.getPersonInfo().getForm().addListener('savepersonbuttonclick', this.onViewPersonInfoSavePersonButtonClick, this);
		this.getPersonInfo().getForm().addListener('deletepersonbuttonclick', this.onViewPersonInfoDeletePersonButtonClick, this);
    },
	onStorePersonsLoad: function(store, model) {
		if(debug){console.info('Store Persons: '+Ext.getStore('core.store.Persons').getCount()+' records loaded.')};
		if(selection){
			this.getPersonGrid().getSelectionModel().select(selection[0].index);
		} // previous selection
		else {this.getPersonGrid().getSelectionModel().select(0)}; // no previous selection
	},
	onStorePersonsDataChanged: function() {
		if(debug){console.info('Store Persons: Data Changed')};
	},
	onStoreSalutationsLoad: function(store, model) {
		if(debug){console.info('Store Salutations: '+Ext.getStore('core.store.Salutations').getCount()+' records loaded.')};
	},
	onStoreSalutationsDataChanged: function() {
		if(debug){console.info('Store Salutations: Data Changed')};
	},
	onStoreGendersLoad: function(store, model) {
		if(debug){console.info('Store Genders: '+Ext.getStore('core.store.Genders').getCount()+' records loaded.')};
	},
	onStoreGendersDataChanged: function() {
		if(debug){console.info('Store Genders: Data Changed')};
	},
	onStoreNationalitiesLoad: function(store, model) {
		if(debug){console.info('Store Nationalities: '+Ext.getStore('core.store.Nationalities').getCount()+' records loaded.')};
	},
	onStoreNationalitiesDataChanged: function() {
		if(debug){console.info('Store Nationalities: Data Changed')};
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
		selection = this.getPersonGrid().getSelectionModel().getSelection(); // set global value of selection
		this.getPersonGrid().store.load();
		if(debug){console.info('View PersonInfo: Save Person Button | Click')};
	},
	onViewPersonInfoDeletePersonButtonClick: function() {
		this.getPersonGrid().store.load();
		if(debug){console.info('View PersonInfo: Delete Person Button | Click')};
	}
});