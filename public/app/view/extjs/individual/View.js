glu.defView('Core.individuals.individual', {
    alias:'widget.individualView',
    title:'~~title~~',
    collapsed: '@{!isExpanded}',
    xtype:'tabpanel',
    items:[
        {xtype:'individualSummary'},
        {xtype:'individualSchedule'}
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
