Ext.define('core.model.Station', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name'],
    proxy: {
        type: 'ajax',
        url: 'core/components/core/apps/core/data/stations.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});