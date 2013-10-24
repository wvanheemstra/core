glu.defView('Core.assets.options', {
    alias:'widget.optionsView',
    title:'~~title~~',
    xtype: 'form',
    defaultType :'autofield',
    defaults : {
        labelWidth : 200
    },
    items:[
        'warnings',
        'offMaintenanceWarning',
        'missingWarning'
    ]
});
