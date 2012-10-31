/**
 * core.view.PersonGrid
 * @extends Ext.grid.Panel
 */
Ext.require ([
    'Ext.ux.grid.FiltersFeature'
]);
 
Ext.define('core.view.PersonGrid' , {
    extend: 'Ext.grid.Panel',
    alias : 'widget.persongrid',
	
	refs: [{
         ref: 'storeDates',
         store: 'core.store.Dates'
    }],
	
	//this.getList().store   uses this -> ref 'list' -> store
	//this.store uses this -> store
	
	// override
	constructor: function(config) {
		config = config || {};
		config.title = 'Person Grid';
		config.requires = [ 'core.store.Dates',
							'core.store.Genders',
							'core.store.Nationalities',
							'core.store.Salutations',
							'core.store.Groups',
							'core.store.PersonsGroups'];
		config.store = 'core.store.Persons';
		config.gridId = 'personGrid';
		config.stateful = true;
		config.stateId = 'personGrid';
		config.bbar = Ext.create('Ext.PagingToolbar', {
			store: 'core.store.Persons',
			id: 'personGridPagingToolbar',
			xtype: 'pagingtoolbar',
			displayInfo: true,
			displayMsg: 'Displaying Persons {0} - {1} of {2}',
			emptyMsg: "No Persons to display"
		});
		config.bbar.add([
/*		
			{
				xtype: "radiogroup",
				horizontal: true,
				id: "paginggroup",
				defaults: {xtype: "radio", name: "paging"},
				items: [
					{
						boxLabel: "Paging",
						inputValue: "true",
						checked: true,
						listeners: {
							change: function() {
								if(this.checked) {
									this.ownerCt.ownerCt.store.load({
										params: {limit:100, pageSize: 100}
									});
								}
							}
						}
					},
					{
						boxLabel: "No Paging",
						inputValue: "false",
						listeners: {
							change: function() {
								if(this.checked) {
									this.ownerCt.ownerCt.store.load({
										params: {page:1, limit:9999, pageSize: 9999}
									});
								}
							}
						}
					}
				]
			},
*/			
			{
				text: 'Clear Filters',
				handler: function () {
					this.ownerCt.ownerCt.filters.clearFilters();
				} 
			}  
		]);
		config.columns = personColumns(9);
		config.features = [filters];
		config.listeners = {
			render : function(){      
				//this.body.mask('Loading...');
				//this.setLoading(true);
				//var store = this.getStore();
				//store.load.defer(100, store);
				this.store.load(); // requires that store's autoLoad is false
			},
			delay: 200,
			load: function(){
				this.store.loaded = true;			
				//this.body.unmask();
				//this.setLoading(false);
			}
		};
		// finally call the superclasses implementation
		this.superclass.constructor.call(this, config);
	} 	
});

/* OLD
var filters = {
	ftype: 'filters',
	local: true,   // local filtering
	// Filters are most naturally placed in the column definition, but can also be
	// added here.
	filters: [{
		type: 'boolean',
		dataIndex: 'visible'
	}]
};
*/

var filters = new Ext.ux.grid.GridFilters({
	ftype: 'filters',
	local: true,   // local filtering
	// Filters are most naturally placed in the column definition, but can also be
	// added here.	
	filters:[
		{dataIndex: 'kp_PersonID', type: 'numeric', disabled: false},
		{dataIndex: 'PersonFirstName', type: 'string', disabled: false},
		{dataIndex: 'PersonLastName', type: 'string', disabled: false},		
		{dataIndex: 'kf_DateID', type: 'date', disabled: false},
		{dataIndex: 'kf_GenderID', type: 'list', options: ['Male', 'Female'], phpMode: true, disabled: false},
		{dataIndex: 'visible', type: 'boolean', disabled: false}
	]
});


var personColumns = function (finish, start) {
	var columns = [
		{ dataIndex: 'kp_PersonID', header: 'ID', width: 50 },
		{ dataIndex: 'kf_SalutationID', header: 'Salutation', width: 60, filter: {type: 'numeric', disabled: false}, renderer: get_SalutationAbbreviation  },
		{ dataIndex: 'PersonFirstName', header: 'First Name', width: 75, filter: {type: 'string', disabled: false} },
		{ dataIndex: 'PersonLastName', header: 'Last Name', width: 125, filter: {type: 'string', disabled: false} },
		{ dataIndex: 'kf_GenderID', header: 'Gender', width: 60, filter: {type: 'numeric', disabled: false}, renderer: get_GenderName },
		{ dataIndex: 'kf_NationalityID', header: 'Nationality', width: 75, filter: {type: 'numeric', disabled: false}, renderer: get_NationalityName },
		{ dataIndex: 'kf_DateID', header: 'Date of Birth', width: 75, filter: {type: 'int', disabled: false}, renderer: get_DateStart },
		{ dataIndex: 'kf_DateID', header: 'Age', width: 30, filter: {type: 'int', disabled: false}, renderer: get_Age },		
		{ dataIndex: 'kp_PersonID', header: 'Groups', flex: 1, filter: {type: 'numeric', disabled: false}, renderer: get_GroupNames }		
	];
	return columns.slice(start || 0, finish);
};

function get_GroupID(value, cell, doc, idx) {
	// code inspired by http://www.fusioncube.net/index.php/extjs-4-render-association-values-in-a-grid-panel

      var personsgroupsStore;
	  //alert(doc.hasOwnProperty("personsgroups"));
	  //alert(doc.id);
	  var ownProperties=[];
		for (var i in doc ) { ownProperties.push(i); }
		//alert('ownProperties: '+ownProperties);
		//var personsgroups = doc.hasOwnProperty('personsgroups');
	//	alert('personsgroups' in doc);  // RETURNS true
	//	alert(doc.prototype.personsgroups);
		//alert(doc.personsgroups.length);
      if (doc.hasOwnProperty("personsgroups")) {
         personsgroupsStore = doc.personsgroups.getStore();
         if (personsgroupsStore.findExact("id", "Title") !== -1) {
            return 1;
         }
		 else {
			return 0;
		 }
      }
	  else {
		return 99;
	  }
};

function get_SalutationAbbreviation(value){
	if(value){
		if(Ext.getStore('core.store.Salutations').loaded) {
			if(debug){console.info('PersonGrid - mapping to SalutationAbbreviation')};
			salutationAbbreviation = Ext.getStore('core.store.Salutations').getById(value).get('SalutationAbbreviation');
			if(debug){console.info('PersonGrid - SalutationAbbreviation:' +salutationAbbreviation)};
			if(debug){console.info('PersonGrid - SalutationAbbreviation mapped')};
			return salutationAbbreviation;
		}
		else {
			if(debug){console.info('PersonGrid - Salutations not yet loaded')};
			return 'Unknown';
		}
	}
	else{
		return 'Undefined';
	}
};

function get_GenderName(value){
	if(value){
		if(Ext.getStore('core.store.Genders').loaded) {
			if(debug){console.info('PersonGrid - mapping to GenderName')};
			genderName = Ext.getStore('core.store.Genders').getById(value).get('GenderName');
			if(debug){console.info('PersonGrid - GenderName: '+genderName)};			
			if(debug){console.info('PersonGrid - GenderName mapped')};
			return genderName;
		}
		else {
			if(debug){console.info('PersonGrid - Genders not yet loaded')};
			return 'Unknown';
		}
	}
	else{
		return 'Undefined';
	}
};

function get_NationalityName(value){
	if(value){
		if(Ext.getStore('core.store.Nationalities').loaded) {
			if(debug){console.info('PersonGrid - mapping to NationalityName')};
			nationalityName = Ext.getStore('core.store.Nationalities').getById(value).get('NationalityName');
			if(debug){console.info('PersonGrid - NationalityName: '+nationalityName)};			
			if(debug){console.info('PersonGrid - NationalityName mapped')};
			return nationalityName;
		}
		else {
			if(debug){console.info('PersonGrid - Nationalities not yet loaded')};
			return 'Unknown';
		}
	}
	else{
		return 'Undefined';
	}
};

function get_DateStart(value, metaData, record, rowIndex, colIndex, store){
	if(debug){console.info('PersonGrid - mapping to DateStart')};
	dateStart = 'Unknown';
	if(value){
		try {
			record.getDateModel(function(date, operation){
				dateStart = date.data.DateStart;
				dateStart = Ext.util.Format.date(dateStart, 'Y-m-d');
			});
		}
		catch(exception) {
			dateStart = 'Unknown';
		};
	};
	if(debug){console.info('PersonGrid - DateStart: '+dateStart)};
	if(debug){console.info('PersonGrid - DateStart mapped')};
	return dateStart;
};

function get_Age(value, metaData, record, rowIndex, colIndex, store){
	if(debug){console.info('PersonGrid - mapping to Age')};
	var age = 0;
	if(value){
		try {
			record.getDateModel(function(date, operation){
				dateStart = date.data.DateStart;
				dateStart = Ext.util.Format.date(dateStart, 'Y-m-d');
				var today = new Date();
				var birthDate = new Date(dateStart);
				age = today.getFullYear() - birthDate.getFullYear();
				var m = today.getMonth() - birthDate.getMonth();
				if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
				    age--;
				}
			});
		}
		catch(exception) {
			if(debug){console.info('PersonGrid - '+exception)};
		};
	};
	if(debug){console.info('PersonGrid - Age: '+age)};
	if(debug){console.info('PersonGrid - Age mapped')};
	return age;
};

function get_GroupNames(value){
	var storePersonsGroups = Ext.getStore('core.store.PersonsGroups');
	if(value){
		if(storePersonsGroups.loaded) {
			if(debug){console.info('PersonGrid - mapping to GroupNames')};
			try {
				var groupIDs = [];
				var groupIDsForThisPerson = storePersonsGroups.filterBy(
					function(record, id){
						if(record.get('kf_PersonID') == value){
							groupIDs.push(record.get('kf_GroupID'));
						}
					}
				);
				if(groupIDs.length > 0) {
					var groupNames = [];
					for (var i = 0; i < groupIDs.length; i++) {
						groupNames.push(Ext.getStore('core.store.Groups').getById(groupIDs[i]).get('GroupName'));
					}
					groupNames = groupNames.join(", ");
					return groupNames;
				}
				else {
					return 'None';
				}
			}
			catch (exception) {
				if(debug){console.info('PersonGrid - '+exception)};
				return 'None';
			}
			finally {
				if(debug){console.info('PersonGrid - GroupNames:' +groupNames)};
				if(debug){console.info('PersonGrid - GroupNames mapped')};
			}
		}
		else {
			if(debug){console.info('PersonGrid - PersonsGroups not yet loaded')};
			return 'Unknown';
		}
	}
	else{
		return 'Undefined';
	}
};