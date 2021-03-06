Ext.define('core.view.Viewport', {
    extend: 'Ext.container.Viewport',
	requires: [
		'core.view.NewStation',
        'core.view.SongControls',
        'core.view.StationsList',
        'core.view.RecentlyPlayedScroller',
        'core.view.SongInfo'
	],
	// By not defining properties like flex, width, height in the views, 
	// we can easily adjust the application�s overall layout in one single place (this Viewport), 
	// adding to the maintainability and flexibility of our architecture.
	initComponent: function() {
		var panel = new Ext.Panel({
            renderTo: 'content',
            layout: 'fit',
			dockedItems: [{
				dock: 'top',
				xtype: 'toolbar',
				height: 80,
				items: [{
					xtype: 'newstation',
					width:150
				}, {
					xtype: 'songcontrols',
					flex: 1
				}, {
					xtype: 'component',
					hmtl: 'Core<br>Internet Radio'
				}]
			}],
			layout: {
				type: 'hbox',
				align: 'stretch'
			},
			items: [{
				width: 250,
				xtype: 'panel',
				layout: {
					type: 'vbox',
					align: 'stretch'
				},
				items: [{
					xtype: 'stationslist',
					flex: 1
				}, {
					html: 'Ad',
					height: 50,
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
					height: 250
				}]
			}]
        });
		//pass along browser window resize events to the panel
        Ext.EventManager.onWindowResize(panel.doLayout, panel);
		
		this.callParent();
    }
});