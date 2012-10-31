/**
 * appPersons01
 * Ext.app.Application
 */
Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath({
	'Ext.ux': 'assets/templates/core/javascripts/extjs/examples/ux'//,
//	'core': 'core/components/core/apps/core/app'
	});

var localHost = 'http://localhost';
var remoteHost = 'http://localhost';
	
Ext.create('Ext.app.Application', {
    name: 'core',
	appFolder: 'core/components/core/apps/core/app',
    autoCreateViewport: false,
    controllers: ['Persons'],
    launch: function() {
		if (Ext.get('loading')) {
			Ext.get('loading').remove();
		}
    }
});