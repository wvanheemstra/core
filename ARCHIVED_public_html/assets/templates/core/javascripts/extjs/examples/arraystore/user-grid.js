// http://all-docs.info/extjs4/docs/api/Ext.data.JsonReader.html

// Create a 'User' model.
Ext.regModel('User', {
    fields: ['id', 'name', 'email']
});

// The JSON Reader is used by a Proxy to read a server response 
// that is sent back in JSON format. 
// This usually happens as a result of loading a Store
var store = new Ext.data.Store({
    model: 'User',
    proxy: {
        type: 'ajax',
        url : 'users.json',
        reader: {
            type: 'json'
        }
    }
});
// We created the simplest type of JSON Reader possible 
// by simply telling our Store's Proxy that we want a JSON Reader. 
// The Store automatically passes the configured model to the Store, 
// so it is as if we passed this instead: 
// reader: {
//    type : 'json',
//    model: 'User'
//}

