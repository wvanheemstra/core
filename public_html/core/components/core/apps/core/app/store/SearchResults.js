Ext.define('core.store.SearchResults', {
    extend: 'Ext.data.Store',
    requires: 'core.model.Station',
    model: 'core.model.Station',
    autoLoad: true,
    // Overriding the model's default proxy
    proxy: {
        type: 'ajax',
        url: 'core/components/core/apps/core/data/searchresults.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});