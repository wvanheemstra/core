Ext.Loader.setConfig({ enabled: true });
Ext.application({
	name: 'core',
	appFolder: 'core/components/core/apps/core/app',
	autoCreateViewport: true,
	models: ['Station', 'Song'],
    stores: ['Stations', 'RecentSongs', 'SearchResults'],
	controllers: [
	//	'Parties',
	//	'Organisations',
	//	'Persons',
		'Station',
		'Song'
	],
});