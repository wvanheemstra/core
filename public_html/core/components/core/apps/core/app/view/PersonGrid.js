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
	// override
	constructor: function(config) {
		config = config || {};
		config.title = 'Person Grid';
		config.store = 'core.store.Persons';
		config.gridId = 'personGrid';
		config.stateful = true;
		config.stateId = 'personGrid';
		config.bbar = Ext.create('Ext.PagingToolbar', {
			store: 'core.store.Persons',
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
		config.columns = personColumns(8);
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

var personColumns = function (finish, start) {
	var columns = [
		{ dataIndex: 'kp_PersonID', header: 'ID', width: 50, filter: {type: 'numeric', disabled: false} },
		{ dataIndex: 'kf_SalutationID', header: 'Salutation', width: 60, filter: {type: 'numeric', disabled: false}, renderer: get_SalutationAbbreviation  },
		{ dataIndex: 'PersonFirstName', header: 'First Name', width: 75, filter: {type: 'string', disabled: false} },
		{ dataIndex: 'PersonLastName', header: 'Last Name', width: 125, filter: {type: 'string', disabled: false} },
		{ dataIndex: 'kf_GenderID', header: 'Gender', width: 60, filter: {type: 'numeric', disabled: false}, renderer: get_GenderName },
		{ dataIndex: 'kf_NationalityID', header: 'Nationality', width: 75, filter: {type: 'numeric', disabled: false}, renderer: get_NationalityName },
		{ dataIndex: 'kf_DateID', header: 'Date of Birth', width: 75, filter: {type: 'date', disabled: false}, renderer: get_DateStart },
		{ dataIndex: 'kp_PersonID', header: 'Groups', flex: 1, filter: {type: 'numeric', disabled: false}, renderer: get_GroupNames }		
	];
	return columns.slice(start || 0, finish);
};

function get_SalutationAbbreviation(value){
	if(value){
		if(Ext.getStore('core.store.Salutations').loaded) {
			if(debug){console.info('PersonGrid - mapping to SalutationAbbreviation')};
			salutationAbbreviation = Ext.getStore('core.store.Salutations').getById(value).get('SalutationAbbreviation');
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

function get_DateStart(value){
	if(value){
		if(Ext.getStore('core.store.Dates').loaded) {
			if(debug){console.info('PersonGrid - mapping to DateStart')};
			dateStart = Ext.getStore('core.store.Dates').getById(value).get('DateStart');
			if(debug){console.info('PersonGrid - DateStart mapped')};
			return dateStart;
		}
		else {
			if(debug){console.info('PersonGrid - Dates not yet loaded')};
			return 'Unknown';
		}
	}
	else{
		return 'Undefined';
	}
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
				if(debug){alert(exception)};
				return 'None';
			}
			finally {
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