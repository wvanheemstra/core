/**
 * appPersons01
 * Ext.app.Application
 */
Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath({
	'Ext.ux': 'assets/templates/core/javascripts/extjs/examples/ux',
	'Ext.form.field.HtmlEditor': 'assets/templates/core/javascripts/extjs/src/form/field/HtmlEditor'
//	'core': 'core/components/core/apps/core/app'
	});
	
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