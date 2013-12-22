/**
 * The booking group base store.
 *
 * See:
 * https://github.com/robboerman/SenchaAssociationsPart1/blob/master/app/store/BaseStore.js
 */
Ext.define("Core.store.booking.group.base.Store", {
    extend: "FlowMVC.mvc.store.AbstractStore",
	
    findRecordAll: function(key, value) {
		var i, record;
		if(typeof key === 'function') {
			var fn = key;
			for(i = 0; i < this.data.all.length; i += 1) {
				record = this.data.all[i];
				if(fn(record)) {
					return record;
				}
			}
		} else {
			for(i = 0; i < this.data.all.length; i += 1) {
				record = this.data.all[i];
				if(record.get(key) === value) {
					return record;
				}
			}
		}
		return null;
	},

	findRecordsAll: function(key, value) {
		var i, record, col = [];
		if(typeof key === 'function') {
			var fn = key;
			for(i = 0; i < this.data.all.length; i += 1) {
				record = this.data.all[i];
				if(fn(record)) {
					col.push(record);
				}
			}
		} else {
			for(i = 0; i < this.data.all.length; i += 1) {
				record = this.data.all[i];
				if(record.get(key) === value) {
					col.push(record);
				}
			}
		}
		return col;
	}	
});