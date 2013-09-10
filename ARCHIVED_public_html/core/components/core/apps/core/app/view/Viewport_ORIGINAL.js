Ext.define('core.view.Viewport', {
    extend: 'Ext.container.Viewport',
	layout: 'fit',
	renderTo: 'content',
	requires: [
		'core.view.NewStation',
        'core.view.SongControls',
        'core.view.StationsList',
        'core.view.RecentlyPlayedScroller',
        'core.view.SongInfo'
	],
	// By not defining properties like flex, width, height in the views, 
	// we can easily adjust the application’s overall layout in one single place (this Viewport), 
	// adding to the maintainability and flexibility of our architecture.
	initComponent: function() {
		this.items = {
            dockedItems: [{
                dock: 'top',
                xtype: 'toolbar',
                height: 80,
                items: [{
                    xtype: 'newstation',
                    width: 150
                }, {
                    xtype: 'songcontrols',
                    height: 70,
                    flex: 1
                }, {
                    xtype: 'component',
                    html: 'Core<br>Internet Radio'
                }]
            }],
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                width: 250,
                xtype: 'panel',
				id: 'west-region',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'stationslist',
                    flex: 1
                }, {
                    html: 'Ad',
                    height: 250,
                    xtype: 'panel'
                }]
            }, {
                xtype: 'container',
                flex: 1,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'recentlyplayedscroller',
                    height: 250
                }, {
                    xtype: 'songinfo',
                    flex: 1
                }]
            }]
        };
		
		//pass along browser window resize events to the panel
        Ext.EventManager.onWindowResize(mainPanel.doLayout, mainPanel);
		
		//Ext.EventManager.onWindowResize(function() {
			// pass "true" to get the contendWidth (excluding border/padding/etc.)
		//	mainPanel.setWidth(Ext.getBody().getWidth(true));
			// seems to be no need to call mainPanel.doLayout() here in my situation
		//});
		
		this.callParent();
    }
});
	