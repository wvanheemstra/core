glu.defModel('Core.individuals.individualSet', {
    alias:'widget.individualSetViewModel',
    name : '',
    individualFilter:'',
    individualList:{
        mtype:'glustore',
        model:'Core.individuals.models.Individual',
        remoteSort : true,
        pageSize:5,
        sorters:[{property:'name'}],
        proxy:{
            type:'ajax',
            url:'/json/individuals',
            reader:{
                type:'glujson',
                root:'rows',
                totalProperty:'total'
            }
        }
    },
    individualListPage:1,

    //will hold a record once selected...
    individualSelections:[],

    isFocused$ : function(){
		console.log("isFocused$");		
        return this.parentVM.individualSetWithFocus == this;
    },

    //likewise
    individualWithFocus:null,

    isClosable$ : function(){
		console.log("isClosable$");		
        return this.parentVM.individualSetList.length>1;
    },

    showMissing$ : function(){
		console.log("showMissing$");		
        return this.rootVM.options.missingWarning;
    },

    init:function () {
		console.log("init");	
        this.refreshIndividualList();
    },

    //COMMANDS
    openIndividual:function () {
		console.log("openIndividual");	
        var individualWindow = this.open({mtype:'individual'});
        individualWindow.load(this.individualWithFocus.get('id'))
    },

    refreshIndividualList:function () {
		console.log("refreshIndividualList");		
        this.individualList.loadPage(this.individualListPage);
    },

    requestVerification:function () {
		console.log("requestVerification");		
        this.message(this.localize('verifyBegin'));
        this.ajax({
            url:'/json/individuals/action/requestVerification',
            params:{ids:this.selectedIds()},
            success:function () { //TODO: Automatically emit removeIndividualsSuccess event
                this.refreshIndividualList();
                this.parentVM.detail.refresh();
            }
        });
    },

    requestVerificationIsEnabled$:function () {
		console.log("requestVerificationIsEnabled$");			
        return this.individualSelections.length > 0;
    },

    removeIndividuals:function () {
		console.log("removeIndividuals");		
        this.confirm({
            title:this.localize('removeIndividualsTitle'),
            msg:this.localize('removeIndividualsMessage'),
            buttons:Ext.Msg.YESNOCANCEL,
            icon:Ext.Msg.QUESTION,
            fn:function (btn) {
                if (btn !== 'yes') return;
                this.removeIndividualsActual();
            }
        });
    },

    //TODO: Wire up confirmation automatically by pattern?
    removeIndividualsActual:function () {
		console.log("removeIndividualsActual");	
        this.ajax({
            url:'/json/individuals/action/remove',
            params:{ids:this.selectedIds()},
            success:function () { //TODO: Automatically emit removeIndividualsSuccess event
                this.refreshIndividualList();
            }
        });
    },

    removeIndividualsIsEnabled$:function () {
		console.log("removeIndividualsIsEnabled$");	
        return this.individualSelections.length > 0;
    },

    when_page_changes_then_reload_grid:{
        on:'individualListPageChanged',
        action:function () {
			console.log("action");			
            this.refreshIndividualList();
        }
    },

    //PRIVATE
    selectedIds:function () {
		console.log("selectedIds");		
        var ids = [];
        for (var i = 0; i < this.individualSelections.length; i++) {
            ids.push(this.individualSelections[i].get('id'));
        }
        return ids;
    },

    clone :function(){
		console.log("clone");		
        return {
            mtype : 'individualSet',
            individualListPage : this.individualListPage
        };
    }
});