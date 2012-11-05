/**
 * core.controller.Persons
 * @extends Ext.app.Controller
 */
 
var debug = true; // change for production 
if (!window.console) console = {log: function() {}}; // avoids the error in IE

// var localHost = 'http://example.com'; // Now defined inside web page
// var remoteHost = 'http://example.com'; // Now defined inside web page

var selection = null; // default if no row is or was previously selected

function showLoadingMask(loadingMessage) {
	if (Ext.isEmpty(loadingMessage))
	loadText = 'Loading... please wait';
	//Use the mask function on the Ext.getBody() element to mask the body element during Ajax calls
	Ext.Ajax.on('beforerequest',function(){Ext.getBody().mask(loadText, 'loading') }, Ext.getBody());
	Ext.Ajax.on('requestcomplete',Ext.getBody().unmask ,Ext.getBody());
	Ext.Ajax.on('requestexception', Ext.getBody().unmask , Ext.getBody());
};

Ext.define('core.controller.Persons', {
    extend: 'Ext.app.Controller',
    models: ['core.model.GroupModel', 'core.model.PersonGroupModel', 'core.model.PersonModel', 'core.model.SalutationModel', 'core.model.GenderModel', 'core.model.NationalityModel', 'core.model.DateModel', 'core.model.MembershipModel', 'core.model.OrganisationModel', 'core.model.ContactModel'],
    stores: ['core.store.Groups', 'core.store.PersonsGroups', 'core.store.Persons', 'core.store.Salutations', 'core.store.Genders', 'core.store.Nationalities', 'core.store.Dates', 'core.store.Memberships', 'core.store.Organisations', 'core.store.Contacts'],
    views: ['core.view.PersonPanel', 'core.view.GroupGrid', 'core.view.GroupInfo', 'core.view.PersonInfo', 'core.view.PersonGrid', 'core.view.PersonSearch'],
	refs: [
		{
		   ref: 'GroupGrid',
		   selector: 'groupgrid' // widget name
		},
		{
		   ref: 'GroupInfo',
		   selector: 'groupinfo' // widget name
		},
		{
		   ref: 'PersonGrid',
		   selector: 'persongrid' // widget name
		},
		{
			ref: 'PersonSearch',
			selector: 'personsearch' // widget name
		},
		{
		   ref: 'PersonInfo',
		   selector: 'personinfo' // widget name
		},
		{
		   ref: 'PersonPanel',
		   selector: 'personpanel' // widget name
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
					title: 'Group Grid',
					layout: {
						type: 'vbox',
						align: 'stretch'
					},
					collapsible: true,
					width: 210,
					split: true,
					items: [
						{
							layout: {
				                type: 'border',
				                padding: 0
				            },
							//height: 461,
							flex: 1,
							bodyPadding: 0,
							border: 0,
							width: 'fit',
							split: true,
							items: [
								{
									region: 'center',
									xtype: 'groupgrid',
									itemId: 'GroupGrid'//,
									//flex: 1
									//height: 301							
								},
								{
									region: 'south',
									xtype: 'groupinfo',
									itemId: 'GroupInfo',
									collapsible: true,
									height: 120						
								}
							]
						}	
					]
				},
				{
					region: 'center',
					layout: {
						type: 'vbox',
						align: 'stretch'
					},
					width: 'fit',
					items: [
						{
							layout: {
				                type: 'border',
				                padding: 0
				            },
							height: 461,
							bodyPadding: 0,
							border: 0,
							width: 'fit',
							split: true,
							items: [
								{
									region: 'center',
									xtype: 'persongrid',
									itemId: 'PersonGrid',
									width: 'fit',
									border: 0,
									split: true,
									height: 301							
								},
								{
									region: 'south',
									xtype: 'personsearch',
									itemId: 'PersonSearch',
									collapsible: true,
									width: 'fit',
									border: 0,
									split: true,
									height: 120							
								}
							]
						}	
					]
				},				
				{
					region: 'east',
					itemId: 'personinfoitem',
					id: 'personinfoitem',
					layout: {
						type: 'vbox',
						align : 'stretch',
						pack  : 'start',
					},
					width: 250,					
					split: true,
					title: 'Person Info',
					collapsible: true,
					//bodyStyle: 'background-color: red;', // NEW for testing only
					items: [{
						xtype: 'personinfo',
						itemId: 'PersonInfo',
						flex: 1,
						border: 0,
						height: 461
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
		Ext.getStore('core.store.Dates').addListener('load', this.onStoreDatesLoad, this);
		Ext.getStore('core.store.Dates').addListener('datachanged', this.onStoreDatesDataChanged, this);			
		Ext.getStore('core.store.Nationalities').addListener('load', this.onStoreNationalitiesLoad, this);
		Ext.getStore('core.store.Nationalities').addListener('datachanged', this.onStoreNationalitiesDataChanged, this);
		Ext.getStore('core.store.Memberships').addListener('load', this.onStoreMembershipsLoad, this);
		Ext.getStore('core.store.Memberships').addListener('datachanged', this.onStoreMembershipsDataChanged, this);		
		Ext.getStore('core.store.Organisations').addListener('load', this.onStoreOrganisationsLoad, this);
		Ext.getStore('core.store.Organisations').addListener('datachanged', this.onStoreOrganisationsDataChanged, this);
		Ext.getStore('core.store.Contacts').addListener('load', this.onStoreContactsLoad, this);
		Ext.getStore('core.store.Contacts').addListener('datachanged', this.onStoreContactsDataChanged, this);		

        //Ext.create('core.view.GroupGrid').show();		
		//Ext.create('core.view.PersonInfo').show();
        //Ext.create('core.view.PersonGrid').show();	
		
		this.getGroupGrid().getSelectionModel().addListener('select', this.onViewGroupGridSelect, this);
		this.getPersonGrid().getSelectionModel().addListener('select', this.onViewPersonGridSelect, this);	
		this.getGroupInfo().getForm().addListener('addgroupbuttonclick', this.onViewGroupInfoAddGroupButtonClick, this);
		this.getGroupInfo().getForm().addListener('savegroupbuttonclick', this.onViewGroupInfoSaveGroupButtonClick, this);
		this.getGroupInfo().getForm().addListener('deletegroupbuttonclick', this.onViewGroupInfoDeleteGroupButtonClick, this);
		this.getPersonSearch().getForm().addListener('findpersonbuttonclick', this.onViewPersonSearchFindPersonButtonClick, this);
		this.getPersonInfo().getForm().addListener('addpersonbuttonclick', this.onViewPersonInfoAddPersonButtonClick, this);
		this.getPersonInfo().getForm().addListener('savepersonbuttonclick', this.onViewPersonInfoSavePersonButtonClick, this);
		this.getPersonInfo().getForm().addListener('deletepersonbuttonclick', this.onViewPersonInfoDeletePersonButtonClick, this);
		this.getPersonInfo().getForm().addListener('loadrecord', this.onViewPersonInfoLoadRecord, this);
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
		showLoadingMask();
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
	onStoreDatesLoad: function(store, model) {
		if(debug){console.info('Store Dates: '+Ext.getStore('core.store.Dates').getCount()+' records loaded.')};
		Ext.getStore('core.store.Dates').loaded = true;
	},
	onStoreDatesDataChanged: function() {
		if(debug){console.info('Store Dates: Data Changed')};
	},
	onStoreNationalitiesLoad: function(store, model) {
		if(debug){console.info('Store Nationalities: '+Ext.getStore('core.store.Nationalities').getCount()+' records loaded.')};
		Ext.getStore('core.store.Nationalities').loaded = true;
	},
	onStoreNationalitiesDataChanged: function() {
		if(debug){console.info('Store Nationalities: Data Changed')};
	},
	onStoreMembershipsLoad: function(store, model) {
		if(debug){console.info('Store Memberships: '+Ext.getStore('core.store.Memberships').getCount()+' records loaded.')};
		Ext.getStore('core.store.Memberships').loaded = true;
	},
	onStoreMembershipsDataChanged: function() {
		if(debug){console.info('Store Memberships: Data Changed')};
	},
	onStoreOrganisationsLoad: function(store, model) {
		if(debug){console.info('Store Organisations: '+Ext.getStore('core.store.Organisations').getCount()+' records loaded.')};
		Ext.getStore('core.store.Organisations').loaded = true;
	},
	onStoreOrganisationsDataChanged: function() {
		if(debug){console.info('Store Organisations: Data Changed')};
	},
	onStoreContactsLoad: function(store, model) {
		if(debug){console.info('Store Contacts: '+Ext.getStore('core.store.Contacts').getCount()+' records loaded.')};
		Ext.getStore('core.store.Contacts').loaded = true;
	},
	onStoreContactsDataChanged: function() {
		if(debug){console.info('Store Contacts: Data Changed')};
	},
	onViewGroupGridSelect: function(selModel, model, idx) {
		if(debug){console.info('View GroupGrid: Select')};
		this.getGroupInfo().loadRecord(model);
	},	
	onViewGroupInfoAddGroupButtonClick: function() {
		this.getGroupGrid().getSelectionModel().clearSelections();
		if(debug){console.info('View GroupInfo: Add Group Button | Click')};
	},
	onViewGroupInfoSaveGroupButtonClick: function() {
		selection = this.getGroupGrid().getSelectionModel().getSelection(); // set global value of selection
		this.getGroupGrid().store.load();
		this.getPersonGrid().store.load();
		if(debug){console.info('View GroupInfo: Save Group Button | Click')};
	},
	onViewGroupInfoDeleteGroupButtonClick: function() {
		this.getGroupGrid().store.load();
		this.getPersonGrid().store.load();
		if(debug){console.info('View GroupInfo: Delete Group Button | Click')};
	},
	onViewPersonGridSelect: function(selModel, model, idx) {
		if(debug){console.info('View PersonGrid: Select')};
		this.getPersonInfo().loadRecord(model);
		//console.log("Model:"); // FOR TESTING ONLY
		//console.log(model); // FOR TESTING ONLY
		this.getPersonInfo().getForm().fireEvent('loadrecord');
	},	
	onViewPersonSearchFindPersonButtonClick: function() {

		if(debug){console.info('View PersonSearch: Find Person Button | Click')};
		
		// console.log(this.getPersonGrid().store);
		//this.getPersonGrid().store.load({start:0,limit:3000});  

		this.getPersonGrid().store.getProxy().extraParams.start = 0;
		this.getPersonGrid().store.getProxy().extraParams.limit = 9999; // Set as high as possible
		//this.getPersonGrid().setLoading = true;
		this.getPersonGrid().store.load();
		
		this.getPersonGrid().store.filter("PersonFirstName", "Lara"); // Make Dynamic

		//this.getCmp('personGridPagingToolbar').MoveFirst();
		this.getPersonGrid().store.loadPage(1);
		//this.getPersonGrid().setLoading = false;
		//this.getPersonGrid().store.loadPage(1);

	},
	onViewPersonInfoAddPersonButtonClick: function() {
		this.getPersonGrid().getSelectionModel().clearSelections();
		if(debug){console.info('View PersonInfo: Add Person Button | Click')};
		personInfoTitle = 'Person Info - New Person';
		this.getPersonPanel().getComponent('personinfoitem').title = personInfoTitle;
		if(debug){console.info('View PersonInfo: title | '+this.getPersonPanel().getComponent('personinfoitem').title)};
		Ext.getDom('personinfoitem_header_hd-textEl').innerHTML = personInfoTitle;
	},
	onViewPersonInfoSavePersonButtonClick: function() {
		selection = this.getPersonGrid().getSelectionModel().getSelection(); // set global value of selection
		Ext.getStore('core.store.Dates').load(); // Force a reload
		Ext.getStore('core.store.PersonsGroups').load(); // Force a reload
		this.getPersonGrid().store.load();
		if(debug){console.info('View PersonInfo: Save Person Button | Click')};
	},
	onViewPersonInfoDeletePersonButtonClick: function() {
		this.getPersonGrid().store.load();
		if(debug){console.info('View PersonInfo: Delete Person Button | Click')};
	},
	onViewPersonInfoLoadRecord: function() {
		if(debug){console.info('View PersonInfo: Record | Load')};
		selection = this.getPersonGrid().getSelectionModel().getSelection();
		personInfoTitle = 'Person Info - ' +''; //selection[0].get('Salutation'); // TO DO: Fill with salutationabbreviation
		personInfoTitle = personInfoTitle + " " +selection[0].get('PersonFirstName');
		personInfoTitle = personInfoTitle + " " +selection[0].get('PersonLastName');
		this.getPersonPanel().getComponent('personinfoitem').title = personInfoTitle;
		if(debug){console.info('View PersonInfo: title | '+this.getPersonPanel().getComponent('personinfoitem').title)};
		Ext.getDom('personinfoitem_header_hd-textEl').innerHTML = personInfoTitle;
		if(debug){console.info('View PersonInfo: personFullName | '+personInfoTitle)};
		dateStart = '1000-01-01';
		try {
			dateStart = selection[0].getDateModel().get('DateStart');
		}
		catch(exception){
			if(debug){console.info('View PersonInfo: exception | '+exception)};
		}
		finally{
			if(debug){console.info('View PersonInfo: dateStart | '+dateStart)};
			this.getPersonInfo().getForm().setValues({DateStart: dateStart});
		};
		personID = selection[0].get('kp_PersonID');
		if(debug){console.info('View PersonInfo: personID | '+personID)};		
		try {
			if(Ext.getStore('core.store.PersonsGroups').getCount() > 0) {
				// continue
			}
			else {
				Ext.getStore('core.store.PersonsGroups').load();
			};
			var groupIDs = [];
			var i = 0;
			var match = Ext.getStore('core.store.PersonsGroups').findBy(function (record, id) {
				if(record.get('kf_PersonID') == personID) {
					groupIDs[i] = record.get('kf_GroupID');
					i = i + 1;
				}
			});
			this.getPersonInfo().getForm().setValues({GroupIDs: groupIDs});
		}
		catch(exception){
			var groupIDs = [];
		}
		finally{
			if(debug){console.info('View PersonInfo: groupIDs | '+groupIDs)};
		};
	}
});