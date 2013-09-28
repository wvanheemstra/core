/**
 * The gender base object to facilitate model associations.
 * See:
 * http://appointsolutions.com/2012/07/using-model-associations-in-sencha-touch-2-and-ext-js-4/
 */
Ext.define("Core.model.gender.base.Model", {
    extend: "Ext.data.Model",
	
	linkedAssociations: false,
	
    /* uses information from the associations to fetch a parent from an associated store */
	getParent: function(assocName) {
		console.log('getParent');
		var assoc = this.associations.get(assocName);
		if (!assoc) {
		  return null;
		}
		var store = Ext.StoreMgr.get(assoc.config.foreignStore);
		if (!store) {
		  return null;
		}

		return store.findRecord(assoc.config.primaryKey, this.get(assoc.config.foreignKey)) || undefined;
	},

	getChildren: function(assocName) {
		console.log('getChildren');	
		var assoc = this.associations.get(assocName),
		  id = this.get(assoc.config.primaryKey);

		if (!assoc) {
		  return null;
		}
		var store = Ext.StoreMgr.get(assoc.config.foreignStore);
		if (!store) {
		  return null;
		}

		store.suspendEvents(); /* make sure the store does not fire all sorts of events, triggering stuff we dont want */
		store.clearFilter();
		store.filterBy(function(record) {
		  return record.get(assoc.config.foreignKey) === id;
		});

		var range = store.getRange(); // return array of records
		store.clearFilter();
		store.resumeEvents();

		return range;
	},

	/* warning, recursive down in combination with up can be dangerous when there are loops in associations */
	getData: function(includeAssociated,down) {
		console.log('getData');		
			if (includeAssociated && !this.linkedAssociations) {
		  this.linkedAssociations = true;
		  this.linkChildAssociations(includeAssociated);
		  this.linkAssociations(includeAssociated);
			}

		var data = this.callParent(arguments);
		return data;
	},
	
	/*
	 * getFlattenedData
	 *
	 * Turns a hierarchical structure, fetched with getData, into a flat hash. 
	 * The keys contain the relations in dot format. 
	 * This way, the relations can be used for instance in a form panel.
	 *
     */	
	getFlattenedData: function(includeAssociated) {
		console.log('getFlattenedData');			
		var data = this.getData(includeAssociated, false); // don't ever recurse down when getting flattened data!

		/* This function flattens the datastructure of am object such that it can be used in a form
		 * {foo:1,bar:{blah: {boo: 3}}} becomes {foo: 1, bar.blah.boo: 3}
		 * This is the only way to use associated data in a form
		 * thanks to http://stackoverflow.com/users/2214/matthew-crumley
		 */
		var count=1;
		var prop;
		var flatten = function(obj, includePrototype, into, prefix) {
		  if (count++ > 20) {console.log('TOO DEEP RECURSION'); return;} // prevent infinite recursion
			into = into || {};
			prefix = prefix || "";

			for (var k in obj) {
				if (includePrototype || obj.hasOwnProperty(k)) {
					var prop = obj[k];
			  if (prop instanceof Array) { continue; } // Don't recurse into hasMany relations
					if (prop && typeof prop === "object" &&
						!(prop instanceof Date || prop instanceof RegExp)) {
						flatten(prop, includePrototype, into, prefix + k + ".");
					}
					else {
						into[prefix + k] = prop;
					}
				}
			}

			return into;
		};

		return flatten(data, false);
	},

	/*
	 * linkAssociations
	 *
	 * Iterates over all parent (belongsTo) and straight (hasOne) associations. 
	 * If the association includes our special foreignStore config we use the StoreManager to find the related record. 
	 * The link to the related record is stored in a way in which Sencha Touch automatically picks it up.
	 *
	 * This function ONLY recurses upwards (belongsTo), otherwise the data structure could become infinite.
	 */
	linkAssociations: function(includeAssociated, count) {
		console.log('linkAssociations');	
		var associations = this.associations.items,
		  associationCount = associations.length,
		  associationName,
		  association,
		  associatedRecord,
		  i,
		  type,
		  foreignStore;

		count = count || 0;

		if (count > 10) {
		  console.log('Too deep recursion in linkAssociations');
		  return;
		}

		for (i = 0; i < associationCount; i++) {
		  association = associations[i];
		  associationName = association.getName();
		  type = association.getType();
		  foreignStore = association.config.foreignStore;

		  if (!foreignStore) {
			continue;
		  }

		  if (type.toLowerCase() == 'belongsto' || type.toLowerCase() == 'hasone') {
			associatedRecord = this.getParent(associationName);
			if (associatedRecord) {
			  this[association.getInstanceName()] = associatedRecord;
			  associatedRecord.linkAssociations(includeAssociated, (count+1));
			}
		  }
		}
	},

	/*
	 * linkChildAssociations
	 *
	 * Used to fetch the direct children (hasMany) of the record 
	 * and again stored in a way the default model handlers pick it up. 
	 * When using this recursive, things can quickly spin out of control, 
	 * be careful with this one!
	 *
     */	 
	linkChildAssociations: function(includeAssociated, count) {
		console.log('linkChildAssociations');		
		var associations = this.associations.items,
		  associationCount = associations.length,
		  associationName,
		  association,
		  associatedRecord,
		  i,
		  type,
		  foreignStore;

		count = count || 0;

		if (count > 10) {
		  console.log('Too deep recursion in linkAssociations');
		  return;
		}

		for (i = 0; i < associationCount; i++) {
		  association = associations[i];
		  associationName = association.getName();
		  type = association.getType();
		  foreignStore = association.config.foreignStore;

		  if (!foreignStore) {
			continue;
		  }

		  if (type.toLowerCase() == 'hasmany') {
			var children = this.getChildren(associationName);
			association.setStoreName('hasMany_'+associationName+'_'+Ext.id());
			var store = Ext.create('Ext.data.Store',{
			  model: association.config.associatedModel
			});
			store.add(children);
			this[association.getStoreName()] = store;
		  }
		}
	}	
});