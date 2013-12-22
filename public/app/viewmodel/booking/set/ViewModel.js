glu.defModel('Core.bookings.bookingSet', {
    alias:'widget.bookingSetViewModel',
    name : '',
    bookingFilter:'',
    bookingList:{
        mtype:'glustore',
        model:'Core.bookings.models.Booking',
        remoteSort : true,
        pageSize:5,
        sorters:[{property:'name'}],
        proxy:{
            type:'ajax',
            url:'/json/bookings',
            reader:{
                type:'glujson',
                root:'rows',
                totalProperty:'total'
            }
        }
    },
    bookingListPage:1,

    //will hold a record once selected...
    bookingSelections:[],

    isFocused$ : function(){
		console.log("isFocused$");		
        return this.parentVM.bookingSetWithFocus == this;
    },

    //likewise
    bookingWithFocus:null,

    isClosable$ : function(){
		console.log("isClosable$");		
        return this.parentVM.bookingSetList.length>1;
    },

    showMissing$ : function(){
		console.log("showMissing$");		
        return this.rootVM.options.missingWarning;
    },

    init:function () {
		console.log("init");	
        this.refreshBookingList();
    },

    //COMMANDS
    openBooking:function () {
		console.log("openBooking");	
        var bookingWindow = this.open({mtype:'booking'});
        bookingWindow.load(this.bookingWithFocus.get('id'))
    },

    refreshBookingList:function () {
		console.log("refreshBookingList");		
        this.bookingList.loadPage(this.bookingListPage);
    },

    requestVerification:function () {
		console.log("requestVerification");		
        this.message(this.localize('verifyBegin'));
        this.ajax({
            url:'/json/bookings/action/requestVerification',
            params:{ids:this.selectedIds()},
            success:function () { //TODO: Automatically emit removeBookingsSuccess event
                this.refreshBookingList();
                this.parentVM.detail.refresh();
            }
        });
    },

    requestVerificationIsEnabled$:function () {
		console.log("requestVerificationIsEnabled$");			
        return this.bookingSelections.length > 0;
    },

    removeBookings:function () {
		console.log("removeBookings");		
        this.confirm({
            title:this.localize('removeBookingsTitle'),
            msg:this.localize('removeBookingsMessage'),
            buttons:Ext.Msg.YESNOCANCEL,
            icon:Ext.Msg.QUESTION,
            fn:function (btn) {
                if (btn !== 'yes') return;
                this.removeBookingsActual();
            }
        });
    },

    //TODO: Wire up confirmation automatically by pattern?
    removeBookingsActual:function () {
		console.log("removeBookingsActual");	
        this.ajax({
            url:'/json/bookings/action/remove',
            params:{ids:this.selectedIds()},
            success:function () { //TODO: Automatically emit removeBookingsSuccess event
                this.refreshBookingList();
            }
        });
    },

    removeBookingsIsEnabled$:function () {
		console.log("removeBookingsIsEnabled$");	
        return this.bookingSelections.length > 0;
    },

    when_page_changes_then_reload_grid:{
        on:'bookingListPageChanged',
        action:function () {
			console.log("action");			
            this.refreshBookingList();
        }
    },

    //PRIVATE
    selectedIds:function () {
		console.log("selectedIds");		
        var ids = [];
        for (var i = 0; i < this.bookingSelections.length; i++) {
            ids.push(this.bookingSelections[i].get('id'));
        }
        return ids;
    },

    clone :function(){
		console.log("clone");		
        return {
            mtype : 'bookingSet',
            bookingListPage : this.bookingListPage
        };
    }
});