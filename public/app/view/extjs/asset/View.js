glu.defView('Core.assets.asset', {
    alias:'widget.assetView',
    title:'~~title~~',
    collapsed: '@{!isExpanded}',
    xtype:'tabpanel',
    items:[
        {xtype:'assetSummary'},
        {xtype:'assetSchedule'}
    ],
    tbar : ['save','revert'],
    //settings when in window mode
    asWindow : {
        defaults : {
            header : false,
            border : false
        },
        title : '~~inspectorTitle~~',
        width : 300,
        height : 200
    }
});
