glu.defModel('Core.bookings.booking', {
	alias:'widget.bookingViewModel',
    model:'booking',

    isSaving : false,

    isExpanded$ : function(){
		console.log("isExpanded$");	
        return this.rootVM.bookingSetWithFocus.bookingSelections.length>0;
    },

    nameIsValid$:function () {
		console.log("nameIsValid$");		
        return this.get('name').length > 0 ? true : this.localize('valid_needOneCharacter');
    },

    yearsOfMaintenanceIsEnabled$:function () {
		console.log("yearsOfMaintenanceIsEnabled$");	
        return this.status === 'active';
    },

    maintenanceEndDate$:function(){
		console.log("maintenanceEndDate$");		
        if (this.maintenanceStartDate==null) return 0;
        return Ext.Date.add(this.maintenanceStartDate,Ext.Date.YEAR,this.yearsOfMaintenance);
    },

    yearsOfMaintenanceRemaining$:function(){
		console.log("yearsOfMaintenanceRemaining$");			
        if (this.maintenanceStartDate==null) return 0;
        var yearsLeft = moment(this.maintenanceEndDate).diff(Ext.Date.now(), 'years');
        return yearsLeft;
    },

//    isPastMaintenance$: function(){
//        return this.yearsOfMaintenanceRemaining <= 0;
//    },
//
//    warning$:function(){
//        return this.isPastMaintenance ? 'Past maintenance!' : '';
//    },

    save:function(){
		console.log("save");		
        this.set('isSaving', true)
        this.ajax({
            url:'/json/bookings/' + this.id +'/action/save',
            method:'post',
            params:Ext.encode(this.asObject()),
            success:function (r) {
                this.commit();
                this.set('isSaving',false);
                this.refresh();
                //how best to notify grid that we've changed? For now just notify direct
                this.parentVM.notifyBookingChanged();
            }
        })
    },

    saveIsEnabled$:function(){
		console.log("saveIsEnabled$");		
        return this.isDirty && this.isValid && !this.isSaving;
    },

    revertIsEnabled$:function(){
		console.log("revertIsEnabled$");		
        return this.isDirty && !this.isSaving;
    },

    //PRIVATE
    load:function (id) {
		console.log("load");		
        this.ajax({
            url:'/json/bookings/' + id,
            success:function (r) {
                this.loadData(Ext.decode(r.responseText));
            }
        })
    },
    refresh:function(){
		console.log("refresh");	
        this.load(this.id);
    }
});
