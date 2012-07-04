Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        api: {
            read: 'core/components/core/apps/account_manager/data/users.json',
            update: 'core/components/core/apps/account_manager/data/updateUsers.json'
        },
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
});