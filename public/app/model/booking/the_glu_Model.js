glu.namespace('Core.bookings.models').booking = {
	alias:'widget.bookingModel',
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
},Core.bookings.models.booking );
glu.defRowModel('Core.bookings.models.Booking', rowModel);