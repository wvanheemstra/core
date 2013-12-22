glu.namespace('Core.assets.models').asset = {
	alias:'widget.assetModel',
    fields:[
        {
            name:'id',
            type:'int'
        },
        {
            name:'name',
            type:'string'
        },
        {
            name:'status',
            type:'string',
            oneOf : ['active','storage','verifying']
        },
        {
            name:'lastVerified',
            type:'date'
        }, {
            name:'yearsOfMaintenance',
            type:'number'
        }, {
            name:'maintenanceStartDate',
            type:'date'
        }
    ]
};
var rowModel = glu.deepApply({
    formulas:{
        yearsMatter: function(){
            return this.status=='active';
        }
    }
},Core.assets.models.asset );
glu.defRowModel('Core.assets.models.Asset', rowModel);