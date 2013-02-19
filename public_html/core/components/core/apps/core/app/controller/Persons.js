/**
 * core.controller.Persons
 * @extends Ext.app.Controller
 */

var debug = true; // change for production 
if (!window.console) console = {log: function() {}}; // avoids the error in IE

if(localHost==null || localHost==undefined || localHost=='')
{ 
	var localHost = 'http://vanheemstrapictures.com';
} // backup in case no value is provided

if(remoteHost==null || remoteHost==undefined || remoteHost=='')
{ 
	var remoteHost = 'http://vanheemstrapictures.com';
} // backup in case no value is provided

// var localHost = 'http://example.com'; // Now defined inside web page
// var remoteHost = 'http://example.com'; // Now defined inside web page

var selection = null; // default if no row is or was previously selected
var savedNewPerson = false;  // default if no new person has been saved

function showLoadingMask(loadingMessage) {
	if (Ext.isEmpty(loadingMessage))
	loadText = 'Loading';
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
		// Views
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
	// GETTERS
	// Stores
	getStoreGroups : function() {
		return this.getStore('core.store.Groups');
	},
	getStorePersonsGroups : function() {
		return this.getStore('core.store.PersonsGroups');
	},
	getStorePersons : function() {
		return this.getStore('core.store.Persons');
	},
	getStoreSalutations : function() {
		return this.getStore('core.store.Salutations');
	},	
	getStoreGenders : function() {
		return this.getStore('core.store.Genders');
	},	
	getStoreDates : function() {
		return this.getStore('core.store.Dates');
	},	
	getStoreNationalities : function() {
		return this.getStore('core.store.Nationalities');
	},	
	getStoreMemberships : function() {
		return this.getStore('core.store.Memberships');
	},	
	getStoreOrganisations : function() {
		return this.getStore('core.store.Organisations');
	},	
	getStoreContacts : function() {
		return this.getStore('core.store.Contacts');
	},
    init: function() {
		Ext.create('Ext.window.Window', {
		    title: 'Administration',
			maximized: true,
		    layout: 'auto',
			closable: false,
			draggable: false,
			border: 0,
		    items: [
				Ext.create('core.view.PersonPanel', {
					layout: {
		                type: 'border',
		                padding: 0,
						border: 0
		            },
					height: 570,
		            width: 'fit',
					border: 0,
		            items: [				
						{
							region: 'west',
							title: 'Group Grid',
							layout: {
								type: 'vbox',
								align: 'stretch',
								border: 0
							},
							collapsible: true,
							width: 210,
							split: true,
							items: [
								{
									layout: {
						                type: 'border',
						                padding: 0,
										border: 0
						            },
									flex: 1,
									bodyPadding: 0,
									border: 0,
									width: 'fit',
									split: true,
									items: [
										{
											region: 'center',
											xtype: 'groupgrid',
											itemId: 'GroupGrid',
											// config options for stateful behavior
									        stateful: true,
									        stateId: 'groupgridstate',
											split: true,
											border: 0							
										},
										{
											region: 'south',
											xtype: 'groupinfo',
											itemId: 'GroupInfo',
											// config options for stateful behavior
									        stateful: true,
									        stateId: 'groupinfostate',
											split: true,
											border: 0,
											collapsible: true,
											height: 112					
										}
									]
								}	
							]
						},
						{
							region: 'center',
							layout: {
								type: 'vbox',
								align: 'stretch',
								border: 0
							},
							width: 'fit',
							items: [
								{
									layout: {
						                type: 'border',
						                padding: 0
						            },
									height: 543,
									bodyPadding: 0,
									border: 0,
									width: 'fit',
									split: true,
									items: [
										{
											region: 'center',
											xtype: 'persongrid',
											itemId: 'PersonGrid',
											// config options for stateful behavior
									        stateful: true,
									        stateId: 'persongridstate',
											width: 'fit',
											border: 0,
											split: true,
											flex: 1						
										},
										{
											region: 'south',
											xtype: 'personsearch',
											itemId: 'PersonSearch',
											// config options for stateful behavior
									        stateful: true,
									        stateId: 'personsearchstate',
											collapsible: true,
											//width: 'fit', // use anchor instead of width
											anchor: '100%', // new
											border: 0,
											split: true,
											height: 112						
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
								border: 0
							},
							width: 250,
							anchor: '100%', // new					
							split: true,
							title: 'Person Info',
							// config options for stateful behavior
					        stateful: true,
					        stateId: 'personinfostate',
							collapsible: true,
							//bodyStyle: 'background-color: red;', // NEW for testing only
							items: [{
								xtype: 'personinfo',
								itemId: 'PersonInfo',
								flex: 1,
								border: 0
							}]
						}
					]
		        }).show() // eof Ext.create PersonPanel
		    ],
			renderTo: Ext.getBody()
		}).show(); // eof Ext.create Window

		if(!debug) {
			var thirtyDays = new Date(new Date().getTime()+(1000*60*60*24*30));
			//Ext.state.Manager.setProvider(new Ext.state.CookieProvider({expires: thirtyDays}));
			Ext.state.Manager.setProvider(new Ext.state.CookieProvider()); // never expires
		}; // Do not keep state in debug
		// LISTENERS, uses our Getter functions
		// Stores: Groups
		this.getStoreGroups().addListener('load', this.onStoreGroupsLoad, this);
		this.getStoreGroups().addListener('datachanged', this.onStoreGroupsDataChanged, this);
		// Stores: PersonsGroups		
		this.getStorePersonsGroups().addListener('load', this.onStorePersonsGroupsLoad, this);
		this.getStorePersonsGroups().addListener('datachanged', this.onStorePersonsGroupsDataChanged, this);
		// Stores: Persons		
		this.getStorePersons().addListener('load', this.onStorePersonsLoad, this);
		this.getStorePersons().addListener('datachanged', this.onStorePersonsDataChanged, this);
		// Stores: Salutations		
		this.getStoreSalutations().addListener('load', this.onStoreSalutationsLoad, this);
		this.getStoreSalutations().addListener('datachanged', this.onStoreSalutationsDataChanged, this);
		// Stores: Genders			
		this.getStoreGenders().addListener('load', this.onStoreGendersLoad, this);
		this.getStoreGenders().addListener('datachanged', this.onStoreGendersDataChanged, this);
		// Stores: Dates		
		this.getStoreDates().addListener('load', this.onStoreDatesLoad, this);
		this.getStoreDates().addListener('datachanged', this.onStoreDatesDataChanged, this);
		// Stores: Nationalities		
		this.getStoreNationalities().addListener('load', this.onStoreNationalitiesLoad, this);			
		this.getStoreNationalities().addListener('datachanged', this.onStoreNationalitiesDataChanged, this);
		// Stores: Memberships		
		this.getStoreMemberships().addListener('load', this.onStoreMembershipsLoad, this);
		this.getStoreMemberships().addListener('datachanged', this.onStoreMembershipsDataChanged, this);
		// Stores: Organisations		
		this.getStoreOrganisations().addListener('load', this.onStoreOrganisationsLoad, this);			
		this.getStoreOrganisations().addListener('datachanged', this.onStoreOrganisationsDataChanged, this);
		// Stores: Contacts
		this.getStoreContacts().addListener('load', this.onStoreContactsLoad, this);		
		this.getStoreContacts().addListener('datachanged', this.onStoreContactsDataChanged, this);
		// Views: GroupGrid
		this.getGroupGrid().getSelectionModel().addListener('select', this.onViewGroupGridSelect, this);
		// Views: PersonGrid
		this.getPersonGrid().getSelectionModel().addListener('select', this.onViewPersonGridSelect, this);	
		// Views: GroupInfo
		this.getGroupInfo().getForm().addListener('addgroupbuttonclick', this.onViewGroupInfoAddGroupButtonClick, this);
		this.getGroupInfo().getForm().addListener('savegroupbuttonclick', this.onViewGroupInfoSaveGroupButtonClick, this);
		this.getGroupInfo().getForm().addListener('deletegroupbuttonclick', this.onViewGroupInfoDeleteGroupButtonClick, this);
		// Views: PersonSearch
		this.getPersonSearch().getForm().addListener('findpersonbuttonclick', this.onViewPersonSearchFindPersonButtonClick, this);
		this.getPersonSearch().getForm().addListener('undofindpersonbuttonclick', this.onViewPersonSearchUndoFindPersonButtonClick, this);
		// Views: PersonInfo
		this.getPersonInfo().getForm().addListener('addpersonbuttonclick', this.onViewPersonInfoAddPersonButtonClick, this);
		this.getPersonInfo().getForm().addListener('savepersonbuttonclick', this.onViewPersonInfoSavePersonButtonClick, this);
		this.getPersonInfo().getForm().addListener('deletepersonbuttonclick', this.onViewPersonInfoDeletePersonButtonClick, this);
		this.getPersonInfo().getForm().addListener('loadrecord', this.onViewPersonInfoLoadRecord, this);
    }, // eof init
	// FUNCTIONS
	// EventListeners
	onStoreGroupsLoad: function(store, model) {
		if(debug){console.info('Store Groups: '+this.getStoreGroups().getCount()+' records loaded.')};
		this.getStoreGroups().loaded = true;
		if(selection){
			this.getGroupGrid().getSelectionModel().select(selection[0].index);
		} // previous selection
		else {this.getGroupGrid().getSelectionModel().select(0)}; // no previous selection
	},
	onStoreGroupsDataChanged: function() {
		if(debug){console.info('Store Groups: Data Changed')};
	},
	onStorePersonsGroupsLoad: function(store, model) {
		if(debug){console.info('Store PersonsGroups: '+this.getStorePersonsGroups().getCount()+' records loaded.')};
		this.getStorePersonsGroups().loaded = true;
	},
	onStorePersonsGroupsDataChanged: function() {
		if(debug){console.info('Store PersonsGroups: Data Changed')};
	},
	onStorePersonsLoad: function(store, model) {
		showLoadingMask();
		if(debug){console.info('Store Persons: '+this.getStorePersons().getCount()+' records loaded.')};
		this.getStorePersons().loaded = true;
		var task = new Ext.util.DelayedTask(function(){
			if(debug){console.info('Store Persons: inside task.')};
			myPersonGridFoundSet = Ext.ComponentQuery.query("grid[gridId='personGrid']");
			myPersonGrid = myPersonGridFoundSet[0]; // first item in found set

			if(debug){console.info('Store Persons: saved New Person is '+savedNewPerson)};

			if(savedNewPerson) { // for NEW saved person
				myStore = this.getStorePersons();
				if (myStore.getCount() > 0)
				{
				  var maxId = myStore.getAt(0).get('kp_PersonID'); // initialise to the first record's id value.
				  myStore.each(function(rec)
				  {
				    maxId = Math.max(maxId, rec.get('kp_PersonID'));
					if(debug){console.info('Store Persons: Max ID is '+maxId)};
				  });
				}
				var myIndex = myStore.find('kp_PersonID',maxId);
				if(debug){console.info('Store Persons: index is '+myIndex)};
				delete myStore;
				myPersonGrid.getSelectionModel().select(myIndex);
				selection = myPersonGrid.getSelectionModel().getSelection(); // set global value of selection
				if(debug){console.info('Store Persons: set to index '+myIndex)};
				savedNewPerson = false; //reset				
			}
			else { // for EXISTING (saved) person
				if (selection != "undefined") {
					if(debug){console.info('Store Persons: selection not undefined')};
					myPersonGrid.getSelectionModel().select(0); // Is this the right solution???					
					selection = myPersonGrid.getSelectionModel().getSelection(); // set global value of selection
					if(debug){console.info('Store Persons: set to selection '+selection[0].index)};
				}
				else {
					if(debug){console.info('Store Persons: selection undefined')};
					myPersonGrid.getSelectionModel().select(0);
					selection = myPersonGrid.getSelectionModel().getSelection(); // set global value of selection
					if(debug){console.info('Store Persons: set to selection 0')};
				};
			};
			delete myPersonGrid;
		});
		if(selection) { // previous selection
			if(this.getPersonGrid().getSelectionModel().selected.items.length == 0) {
				if(debug){console.info('Store Persons: delaying task by 500 ms.')};	
			    task.delay(500);
			}
			else {
				if(debug){console.info('Store Persons: no delay.')};
				this.getPersonGrid().getSelectionModel().select(selection[0].index);
				selection = this.getPersonGrid().getSelectionModel().getSelection(); // set global value of selection
			};
		}
		else { // no previous selection
			this.getPersonGrid().getSelectionModel().select(0);
			selection = this.getPersonGrid().getSelectionModel().getSelection(); // set global value of selection
		};
	},
	onStorePersonsDataChanged: function() {
		if(debug){console.info('Store Persons: Data Changed')};
	},
	onStoreSalutationsLoad: function(store, model) {
		if(debug){console.info('Store Salutations: '+this.getStoreSalutations().getCount()+' records loaded.')};
		this.getStoreSalutations().loaded = true;
	},
	onStoreSalutationsDataChanged: function() {
		if(debug){console.info('Store Salutations: Data Changed')};
	},
	onStoreGendersLoad: function(store, model) {
		if(debug){console.info('Store Genders: '+this.getStoreGenders().getCount()+' records loaded.')};
		this.getStoreGenders().loaded = true;
	},
	onStoreGendersDataChanged: function() {
		if(debug){console.info('Store Genders: Data Changed')};
	},
	onStoreDatesLoad: function(store, model) {
		if(debug){console.info('Store Dates: '+this.getStoreDates().getCount()+' records loaded.')};
		this.getStoreDates().loaded = true;
	},
	onStoreDatesDataChanged: function() {
		if(debug){console.info('Store Dates: Data Changed')};
	},
	onStoreNationalitiesLoad: function(store, model) {
		if(debug){console.info('Store Nationalities: '+this.getStoreNationalities().getCount()+' records loaded.')};
		this.getStoreNationalities().loaded = true;
	},
	onStoreNationalitiesDataChanged: function() {
		if(debug){console.info('Store Nationalities: Data Changed')};
	},
	onStoreMembershipsLoad: function(store, model) {
		if(debug){console.info('Store Memberships: '+this.getStoreMemberships().getCount()+' records loaded.')};
		this.getStoreMemberships().loaded = true;
	},
	onStoreMembershipsDataChanged: function() {
		if(debug){console.info('Store Memberships: Data Changed')};
	},
	onStoreOrganisationsLoad: function(store, model) {
		if(debug){console.info('Store Organisations: '+this.getStoreOrganisations().getCount()+' records loaded.')};
		this.getStoreOrganisations().loaded = true;
	},
	onStoreOrganisationsDataChanged: function() {
		if(debug){console.info('Store Organisations: Data Changed')};
	},
	onStoreContactsLoad: function(store, model) {
		if(debug){console.info('Store Contacts: '+this.getStoreContacts().getCount()+' records loaded.')};
		this.getStoreContacts().loaded = true;
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

		this.getPersonGrid().store.getProxy().extraParams.start = 0;
		this.getPersonGrid().store.getProxy().extraParams.limit = 9999; // Set as high as possible

		//console.log(this.getPersonSearch().getComponent('groupGenderID').getComponent('male').value);

		var personFirstName = this.getPersonSearch().getComponent('containerPersonFirstName').getComponent('fieldPersonFirstName').value;
		var personLastName = this.getPersonSearch().getComponent('containerPersonLastName').getComponent('fieldPersonLastName').value;
		var genderIDMale = this.getPersonSearch().getComponent('groupGenderID').getComponent('male').value;
		var genderIDFemale = this.getPersonSearch().getComponent('groupGenderID').getComponent('female').value;		

		myGrid = this.getPersonGrid();
		myFilters = [];

		if(personFirstName) {
			personFirstNameFilter = [{
			    field: 'PersonFirstName',
			    data: {
			        type: 'string',
			        value: personFirstName
			    }
			}];
			myFilters.push(personFirstNameFilter[0]);
		};		
		if(personLastName) {
			personLastNameFilter = [{
			    field: 'PersonLastName',
			    data: {
			        type: 'string',
			        value: personLastName
			    }
			}];
			myFilters.push(personLastNameFilter[0]);
		};

/*		
		myFilters = [
			{
			    field: 'some_list_column_data_index',
			    data: {
			        type: 'list',
			        value: 'item1,item2,item3,item4,item5,item6,item7'
			    }
			}, 
			{
			    field: 'some_date_column_data_index',
			    data: {
			        type: 'date',
			        comparison: 'gt',
			        value: '07/07/2007'
			    }
			}		
		];
*/
		this.doGridFilter(myGrid, myFilters);
	},
	onViewPersonSearchUndoFindPersonButtonClick: function() {
		this.getPersonGrid().store.getProxy().extraParams.start = 0;
		this.getPersonGrid().store.getProxy().extraParams.limit = 100;
		this.getPersonGrid().store.clearFilter();
		this.getPersonGrid().filters.clearFilters();
	},
	onViewPersonInfoAddPersonButtonClick: function() {
		this.getPersonGrid().getSelectionModel().clearSelections();
		if(debug){console.info('View PersonInfo: Add Person Button | Click')};
		personInfoTitle = 'Person Info - New Person';
		this.getPersonPanel().getComponent('personinfoitem').title = personInfoTitle;
		if(debug){console.info('View PersonInfo: title | '+this.getPersonPanel().getComponent('personinfoitem').title)};
		//Ext.getDom('personinfoitem_header_hd-textEl').innerHTML = personInfoTitle; // OLD
	},
	onViewPersonInfoSavePersonButtonClick: function() {
		selection = this.getPersonGrid().getSelectionModel().getSelection(); // set global value of selection
		if(selection) {
			if(debug){console.info('View PersonInfo: Saved Existing Person')};
			savedNewPerson = false;
		}
		else
		{
			if(debug){console.info('View PersonInfo: Saved New Person')};
			savedNewPerson = true;
		};
		this.getStoreDates().load(); // Force a reload
		this.getStorePersonsGroups().load(); // Force a reload
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
			if(this.getStorePersonsGroups().getCount() > 0) {
				// continue
			}
			else {
				this.getStorePersonsGroups().load();
			};
			var groupIDs = [];
			var i = 0;
			var match = this.getStorePersonsGroups().findBy(function (record, id) {
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
	},
	doGridFilter: function(grid, filters) {
		//source: http://stackoverflow.com/questions/9629531/apply-grid-filter-programmatically-from-function
		console.info('Constructor Persons: doGridFilter()');
	    // for each filter object in the array
	    Ext.each(filters, function(filter) {
	        var gridFilter = grid.filters.getFilter(filter.field);
	        gridFilter.setActive(true);
	        switch(filter.data.type) {
	            case 'date':
	                var dateValue = Ext.Date.parse(filter.data.value, 'm/d/Y'),
	                    value;

	                switch (filter.data.comparison) {

	                    case 'gt' :
	                        value = {after: dateValue};
	                        break;
	                    case 'lt' :
	                        value = {before: dateValue};
	                        break;
	                    case 'eq' :
	                        value = {on: dateValue};
	                        break;
	                }
					gridFilter = grid.filters.getFilter(filter.field); // was gridFilter = log.filters.getFilter(filter.field);
	                gridFilter.setValue(value);
	                gridFilter.setActive(true);
	                break;
	            case 'numeric':
	                var value;

	                switch (filter.data.comparison) {

	                    case 'gt' :
	                        value = {gt: filter.data.value};
	                        break;
	                    case 'lt' :
	                        value = {lt: filter.data.value};
	                        break;
	                    case 'eq' :
	                        value = {eq: filter.data.value};
	                        break;
	                }
	                gridFilter = grid.filters.getFilter(filter.field); // was gridFilter = log.filters.getFilter(filter.field);
	                gridFilter.setValue(value);
	                gridFilter.setActive(true);
	                break;
	            case 'list':
	                gridFilter = grid.filters.getFilter(filter.field); // was gridFilter = log.filters.getFilter(filter.field);
	                gridFilter.menu.setSelected(gridFilter.menu.selected, false);
	                gridFilter.menu.setSelected(filter.data.value.split(','), true);
	                break;
	            default :
	                gridFilter = grid.filters.getFilter(filter.field); // was gridFilter = log.filters.getFilter(filter.field);
	                gridFilter.setValue(filter.data.value);
	                break;
	        }
	    });
	} // eof doGridFilter
}); // oef Ext.define 'core.controller.Persons'

Ext.define('HtmlEditorSpecialCharacters', {
    extend: 'Ext.util.Observable',
    constructor: function(config){
	    this.init = function(cmp) {
			//console.log(cmp);
	        this.cmp = cmp;
	        this.cmp.on('render', this.onRender, this);
	    };
	    this.onRender = function(){
			//console.info("HTMLEditor: I'm being rendered!"); // for testing only
	        var cmp = this.cmp;	
	        var btn = this.cmp.getToolbar().add({
				id: 'btnInsertSpecialCharacter',
			    // SpecialCharacters language text
			    langTitle: 'Insert Special Character',
			    langInsert: 'Insert',
			    langCancel: 'Cancel',
				/**
			     * @cfg {Array} specialChars
			     * An array of additional characters to display for user selection.  
				 * Uses numeric portion of the ASCII HTML Character Code only. 
				 * For example, to use the Copyright symbol, which is &#169; 
				 * we would just specify <tt>169</tt> (ie: <tt>specialChars:[169]</tt>).
			     */
			    specialChars : [153],
			    /**
			     * @cfg {Array} charRange
			     * Two numbers specifying a range of ASCII HTML Characters to display for user selection. 
				 * Defaults to <tt>[160, 256]</tt>.
			     */
			    charRange : [160, 256],
				chars: [],
				iconCls: 'x-edit-char',
	            handler: function() {
					if(!this.chars.length) {
						// If no chars were set first time !this.chars.length = true, 
						// however if chars were set !this.chars.length = false
						// console.log('need for adding chars');
	                    if (!this[this.specialChars]) {
	                        Ext.each(this.specialChars, function(c, i){
	                            this.chars[i] = ['&#' + c + ';'];
	                        }, this);
	                    }
	                    for (i = this.charRange[0]; i < this.charRange[1]; i++) {
	                        this.chars.push(['&#' + i + ';']);
	                    }
	                };
	                var charStore = new Ext.data.ArrayStore({
	                    fields: ['char'],
	                    data: this.chars
	                });
                	this.charWindow = new Ext.Window({
	                    title: this.langTitle,
	                    width: 436,
	                    autoHeight: true,
	                    layout: 'fit',
						items: [{
							xtype: 'dataview',
	                        store: charStore,
	                        ref: 'charView',
	                        autoHeight: true,
	                        multiSelect: true,
	                        tpl: new Ext.XTemplate('<tpl for="."><div class="char-item">{char}</div></tpl><div class="x-clear"></div>'),
	                        overClass: 'char-over',
	                        itemSelector: 'div.char-item',
	                        listeners: {
	                            dblclick: function(t, i, n, e) {
									// t=charWindow, i=rowIndex, n=columnIndex, e=?
									cmp.insertAtCursor(i.innerHTML);
	                                this.charWindow.close();
	                            },
								click: function(t, i, n, e) {
									// t=charWindow, i=rowIndex, n=columnIndex, e=?
									cmp.insertAtCursor(i.innerHTML);
	                                this.charWindow.close();
	                            },
								element: 'el',
	                            scope: this
	                        }
						}]
						/*,
						buttons: [{
							text: this.langInsert,
							handler: function() {
								console.log('Insert button clicked.');
								console.log(this.ownerCt);
	                            Ext.each(this.charWindow.charView.getSelectedRecords(), function(rec) {
									console.log('inside insert button clicked.');
	                                var c = rec.get('char');
	                                this.insertChar(c);
	                            }, this);
	                            this.charWindow.close();
	                        },
	                        scope: this
						},
						{
							text: this.langCancel,
	                        handler: function() {
	                            this.charWindow.close();
	                        },
	                        scope: this
						}]*/
	                });
	                this.charWindow.show();
				},
	            scope: btn
		    }); // eof btn
	    };
		// Call our superclass constructor to complete construction process.
        this.callParent(arguments);
    }
}); // eof Ext.define 'HtmlEditorSpecialCharacters'
