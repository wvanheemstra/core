Ext.application({
    name: 'AM',
    appFolder: 'core/components/core/apps/account_manager/app',
    // automatically create an instance of AM.view.Viewport
    autoCreateViewport: true,

    controllers: [
        'Users'
    ]
});