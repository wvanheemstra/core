/**
 * core.controller.Persons
 * @extends Ext.app.Controller
 */
var debug = true; // change for production 
if (!window.console) console = {log: function() {}}; // avoids the error in IE

var localHost = 'http://localhost';
var remoteHost = 'http://localhost';

var selection = null; // default if no row is or was previously selected
 
Ext.define('core.controller.Persons', {
    extend: 'Ext.app.Controller',
    models: ['core.model.Group', 'core.model.PersonGroup', 'core.model.Person', 'core.model.Salutation', 'core.model.Gender', 'core.model.Nationality'],
    stores: ['core.store.Groups', 'core.store.PersonsGroups', 'core.store.Persons', 'core.store.Salutations', 'core.store.Genders', 'core.store.Nationalities'],
    views: ['core.view.PersonPanel', 'core.view.GroupGrid', 'core.view.PersonInfo', 'core.view.PersonGrid'],
	refs: [
		{
		   ref: 'GroupGrid',
		   selector: 'groupgrid' // widget name
		},
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
			layout: {
                type: 'border',
                padding: 5
            },
            height: 500,
            width: 'fit',
			bodyPadding: 0,
            items: [
				{
					region: 'west',
					items: [{
						xtype: 'groupgrid',
						itemId: 'GroupGrid',
						width: 210,
						height: 461,
						border: 0,
						split: true,
						collapsible: true,
						collapseDirection: 'left'
					}]
				},
				{
					region: 'center',
					items: [{
						xtype: 'persongrid',
						itemId: 'PersonGrid',
						width: 'fit',
						border: 0,
						split: true,
						height: 461 // limit for a scroll bar
					}]
				},
				{
					region: 'east',
					items: [{
						xtype: 'personinfo',
						itemId: 'PersonInfo',
						width: 250,
						border: 0,
						split: true,
						height: 461,
						collapsible: true,
						collapseDirection: 'right'
					}]
				}
			],
            renderTo: 'extjs-app'
        }).show();
		
		Ext.getStore('core.store.Groups').addListener('load', this.onStoreGroupsLoad, this);
		Ext.getStore('core.store.Groups').addListener('datachanged', this.onStoreGroupsDataChanged, this);
		Ext.getStore('core.store.PersonsGroups').addListener('load', this.onStorePersonsGroupsLoad, this);
		Ext.getStore('core.store.PersonsGroups').addListener('datachanged', this.onStorePersonsGroupsDataChanged, this);	
		Ext.getStore('core.store.Persons').addListener('load', this.onStorePersonsLoad, this);
		Ext.getStore('core.store.Persons').addListener('datachanged', this.onStorePersonsDataChanged, this);
		Ext.getStore('core.store.Salutations').addListener('load', this.onStoreSalutationsLoad, this);
		Ext.getStore('core.store.Salutations').addListener('datachanged', this.onStoreSalutationsDataChanged, this);		
		Ext.getStore('core.store.Genders').addListener('load', this.onStoreGendersLoad, this);
		Ext.getStore('core.store.Genders').addListener('datachanged', this.onStoreGendersDataChanged, this);		
		Ext.getStore('core.store.Nationalities').addListener('load', this.onStoreNationalitiesLoad, this);
		Ext.getStore('core.store.Nationalities').addListener('datachanged', this.onStoreNationalitiesDataChanged, this);

        //Ext.create('core.view.GroupGrid').show();		
		//Ext.create('core.view.PersonInfo').show();
        //Ext.create('core.view.PersonGrid').show();	
		
		this.getGroupGrid().getSelectionModel().addListener('select', this.onViewGroupGridSelect, this);
		this.getPersonGrid().getSelectionModel().addListener('select', this.onViewPersonGridSelect, this);
		this.getPersonInfo().getForm().addListener('addpersonbuttonclick', this.onViewPersonInfoAddPersonButtonClick, this);
		this.getPersonInfo().getForm().addListener('savepersonbuttonclick', this.onViewPersonInfoSavePersonButtonClick, this);
		this.getPersonInfo().getForm().addListener('deletepersonbuttonclick', this.onViewPersonInfoDeletePersonButtonClick, this);
    },
	
	onStoreGroupsLoad: function(store, model) {
		if(debug){console.info('Store Groups: '+Ext.getStore('core.store.Groups').getCount()+' records loaded.')};
		Ext.getStore('core.store.Groups').loaded = true;
		if(selection){
			this.getGroupGrid().getSelectionModel().select(selection[0].index);
		} // previous selection
		else {this.getGroupGrid().getSelectionModel().select(0)}; // no previous selection
	},
	onStoreGroupsDataChanged: function() {
		if(debug){console.info('Store Groups: Data Changed')};
	},
	onStorePersonsGroupsLoad: function(store, model) {
		if(debug){console.info('Store PersonsGroups: '+Ext.getStore('core.store.PersonsGroups').getCount()+' records loaded.')};
		Ext.getStore('core.store.PersonsGroups').loaded = true;
	},
	onStorePersonsGroupsDataChanged: function() {
		if(debug){console.info('Store PersonsGroups: Data Changed')};
	},
	onStorePersonsLoad: function(store, model) {
		if(debug){console.info('Store Persons: '+Ext.getStore('core.store.Persons').getCount()+' records loaded.')};
		Ext.getStore('core.store.Persons').loaded = true;
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
		Ext.getStore('core.store.Salutations').loaded = true;
	},
	onStoreSalutationsDataChanged: function() {
		if(debug){console.info('Store Salutations: Data Changed')};
	},
	onStoreGendersLoad: function(store, model) {
		if(debug){console.info('Store Genders: '+Ext.getStore('core.store.Genders').getCount()+' records loaded.')};
		Ext.getStore('core.store.Genders').loaded = true;
	},
	onStoreGendersDataChanged: function() {
		if(debug){console.info('Store Genders: Data Changed')};
	},
	onStoreNationalitiesLoad: function(store, model) {
		if(debug){console.info('Store Nationalities: '+Ext.getStore('core.store.Nationalities').getCount()+' records loaded.')};
		Ext.getStore('core.store.Nationalities').loaded = true;
	},
	onStoreNationalitiesDataChanged: function() {
		if(debug){console.info('Store Nationalities: Data Changed')};
	},
	onViewGroupGridSelect: function(selModel, model, idx) {
		if(debug){console.info('View GroupGrid: Select')};
		//this.getPersonInfo().loadRecord(model);
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