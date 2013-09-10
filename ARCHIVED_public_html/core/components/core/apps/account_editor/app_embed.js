Ext.application({
   name: 'AE',
   appFolder: 'core/components/core/apps/account_editor/app',
   
   launch: function() {
                var panel = new Ext.Panel({
                        renderTo: 'content',
                        layout: 'fit',
                        items: [
                                {
                                        title: 'Account Editor',
                                        html : 'Hello! Welcome to Account Editor.'
                                }
                        ]
                });
                
                (function() {
                    Ext.Loader.setConfig({
                        enabled : true,
                        paths   : {
                            AE : 'core/components/core/apps/account_editor'
                        } 
                    });
                 
                    Ext.require('AE.app.view.UserEditorWindow');
                 
                    Ext.onReady(function() {
                        Ext.create('AE.app.view.UserEditorWindow').show();
                    });
                })();
                
                //pass along browser window resize events to the panel
                Ext.EventManager.onWindowResize(panel.doLayout, panel);
        }
});