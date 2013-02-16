Ext.Ajax.request({
    url: 'http://www.google.com',
    params: {
        id: 1
    },
    success: function(response){
        var text = response.responseText;
        // process server response here
    }
});