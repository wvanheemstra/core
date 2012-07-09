Ext.define('core.model.Song', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'artist', 'album', 'played_date', 'station'],
    proxy: {
        type: 'ajax',
        url: 'core/components/core/apps/core/data/recentsongs.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});