/**
 * core.controller.Persons
 * @extends Ext.app.Controller
 */
Ext.define('core.controller.Persons', {
    extend: 'Ext.app.Controller',
    models: ['core.model.Person'],
    stores: ['core.store.Persons'],
    views: ['core.view.PersonPanel', 'core.view.PersonInfo', 'core.view.PersonGrid'],
 
    init: function() {
        Ext.create('core.view.PersonPanel', {
            layout: 'fit',
            height: 500,
            width: 800,
			layout: 'column',
			bodyPadding: 5,
            items: [{
					xtype: 'persongrid',
					columnWidth : 0.60,
					height : 400
				},
				{
					xtype: 'personinfo',
					columnWidth : 0.40				
			}],
            renderTo: 'extjs-app'
        });
		//Ext.create('core.view.PersonInfo').show();
        //Ext.create('core.view.PersonGrid').show();
		Ext.getStore('core.store.Persons').addListener('load', this.onStorePersonsLoad, this);
		Ext.getStore('core.store.Persons').addListener('datachanged', this.onStorePersonsDataChanged, this);		
    },
	onStorePersonsLoad: function() {
			//alert('Store Persons: Loaded');
			console.info('Store Persons: Loaded');
	},
	onStorePersonsDataChanged: function() {
			//alert('Store Persons: Data Changed');
			console.info('Store Persons: Data Changed');
	}	
});

//var storePersons = Ext.data.StoreManager.lookup('storePersons');
//storePersons.on('load', function() {
//	alert('StorePersons loaded !');
//}, this);