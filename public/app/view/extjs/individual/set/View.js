glu.defView('Core.individuals.individualSet', {
	alias:'widget.individualSetView',
    name:'individualList',
    region:'center',
    title:'@{name}',
    xtype:'grid',
    selType:'checkboxmodel',
    closable : '@{isClosable}',
    //TODO: Make binding off of selection object above
    columns:[
        {
            //TODO: Localize column headers
            header:'Name',
            dataIndex:'name'
        },
        {
            header:'Status',
            dataIndex:'status'
        },{
            header:'Years Matter',
            dataIndex:'yearsMatter',
            sortable:false
        }
    ],
    dockedItems:[
        {
            xtype:'pagingtoolbar',
            dock:'bottom',
            store:'@{individualList}',
            page:'@{individualListPage}',
            refreshHandler:'@{refreshIndividualList}',
            displayInfo:true
        },
        {
            xtype:'toolbar',
            dock:'top',
            items:['requestVerification', 'removeIndividuals']
        }
    ]
});