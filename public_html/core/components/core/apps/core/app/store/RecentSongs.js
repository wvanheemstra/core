Ext.define('core.store.RecentSongs', {
    extend: 'Ext.data.Store',
	// Make sure to require your model if you are
    // not using Ext JS 4.0.5
    requires: 'core.model.Song',
    model: 'core.model.Song'
});