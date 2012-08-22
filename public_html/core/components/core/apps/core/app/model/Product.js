Ext.define('core.model.Product', {
    extend: 'Ext.data.Model',
    idProperty: 'idProduct',
    fields: [
        { name: 'idProduct', type: 'int' },
        { name: 'productName' },
        { name: 'qty', type: 'int' },
        { name: 'rate', type: 'float' },
        { name: 'total', type: 'float' }
    ],
    proxy: {
        type: 'ajax',
        actionMethods: 'POST',
        api: {
            read: 'http://localhost/core/components/core/apps/core/data/list_product.php',
            create: 'http://localhost/core/components/core/apps/core/data/save_product.php',
            update: 'http://localhost/core/components/core/apps/core/data/save_product.php',
            destroy: 'http://localhost/core/components/core/apps/core/data/delete_product.php' // not in use
        },
        reader: {
            type: 'json',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message',
            root: 'data'
        },

        writer: {
            type: 'json',
            writeAllFields: true,
            allowSingle: false,
            root: 'data'
        },
        listeners: {
            /*
            exception: function(proxy, response, operation){
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
            */
        }
    }
});

storeProducts = new Ext.data.Store({
    autoLoad: true, 
    type: 'json',
    model: 'core.model.Product',
    // pageSize: 25,
    sorters: {
        property: 'idProduct',
        direction: 'ASC'
    }
});

var colProducts = [
    { dataIndex: 'idProduct', header: 'ID', width: 75 },
    { dataIndex: 'productName', header: 'Name', flex: 1 },
    { dataIndex: 'qty', header: 'Qty' },
    { dataIndex: 'rate', header: 'Rate' },
    { dataIndex: 'total', header: 'Total' }
];
