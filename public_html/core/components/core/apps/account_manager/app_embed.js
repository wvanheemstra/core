//Ext.require('Ext.container.Viewport');
Ext.application({
   name: 'AM',
   appFolder: 'core/components/core/apps/account_manager/app',
   controllers: ['Users'],
   
   launch: function() {
                var panel = new Ext.Panel({
                        renderTo: 'content',
                        layout: 'fit',
                        items: [
                                {
                                        title: 'Account Manager',
                                        html : 'Hello! Welcome to Account Manager.'
                                }
                        ]
                });
                //pass along browser window resize events to the panel
                Ext.EventManager.onWindowResize(panel.doLayout, panel);
        }
});