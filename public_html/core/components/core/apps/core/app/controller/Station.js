// By moving the application logic to controllers, it is centralized, making it easier to maintain and change.
Ext.define('core.controller.Station', {
    extend: 'Ext.app.Controller',
	stores: ['Stations', 'SearchResults'], // auto-creates getter named 'getStationsStore'    -> returns the Stations store instance
	refs: [{
		// A component query
		selector: 'stationslist',
		ref: 'stationsList'
	}],
    init: function() {
		// Add listeners, using the xtypes of the views (e.g. stationslist)
        this.control({
			'stationslist': {
				selectionchange: this.onStationSelect // the selectionchange event provided by Grid (from which our StationsList view extends)
			},
			// Listen for the select event on the NewStation combobox
			'newstation': {
				select: this.onNewStationSelect // the select event provided by ComboBox (from which our NewStation view extends)
			}
		});
    },
	onLaunch: function() {
		// Use the automatically generated getter to get the store
		var stationsStore = this.getStationsStore();
		stationsStore.load({
			callback: this.onStationsLoad,
			scope: this
		});
	},
	onStationsLoad: function() {
		var stationsList = this.getStationsList();
		stationsList.getSelectionModel().select(0);
	},
	onStationSelect: function(selModel, selection) {
		// Fire an application wide event
		this.application.fireEvent('stationstart', selection[0]);
	},
	onNewStationSelect: function(field, selection) {
		var selected = selection[0],
			store = this.getStationsStore(),
			list = this.getStationsList();
		if (selected && !store.getById(selected.get('id'))) {
			// If the newly selected station does not exist in our station store we add it
			store.add(selected);
		}
		// We select the station in the Station list
		list.getSelectionModel().select(selected);
	}
});