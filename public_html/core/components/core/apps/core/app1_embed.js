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
	//launch: function() {
		// This is fired as soon as the page is ready
		// var panel = new Ext.Panel({
                        // renderTo: 'content',
                        // layout: 'fit',
                        // items: [
                                // {
                                        // title: 'Some Title',
                                        // html : 'Some Text'
								// //		xtype: 'partylist',
								// //		xtype: 'organisationlist'
								// //		xtype: 'personlist'
                                // }
                        // ]
        //});
		// (function() {
                    // Ext.Loader.setConfig({
                        // enabled : true,
                        // paths   : {
                            // core : 'core/components/core/apps/core'
                        // } 
                    // });
                 
                // //    Ext.require('core.app.view.UserEditorWindow');
                 
                    // Ext.onReady(function() {
                // //        Ext.create('core.app.view.UserEditorWindow').show();
                    // });
        // })();
		//pass along browser window resize events to the panel
        // Ext.EventManager.onWindowResize(panel.doLayout, panel);
	//}
});