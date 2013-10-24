glu.defModel('Core.assets.assetSet', {
    alias:'widget.assetSetViewModel',
    name : '',
    assetFilter:'',
    assetList:{
        mtype:'glustore',
        model:'Core.assets.models.Asset',
        remoteSort : true,
        pageSize:5,
        sorters:[{property:'name'}],
        proxy:{
            type:'ajax',
            url:'/json/assets',
            reader:{
                type:'glujson',
                root:'rows',
                totalProperty:'total'
            }
        }
    },
    assetListPage:1,

    //will hold a record once selected...
    assetSelections:[],

    isFocused$ : function(){
		console.log("isFocused$");		
        return this.parentVM.assetSetWithFocus == this;
    },

    //likewise
    assetWithFocus:null,

    isClosable$ : function(){
		console.log("isClosable$");		
        return this.parentVM.assetSetList.length>1;
    },

    showMissing$ : function(){
		console.log("showMissing$");		
        return this.rootVM.options.missingWarning;
    },

    init:function () {
		console.log("init");	
        this.refreshAssetList();
    },

    //COMMANDS
    openAsset:function () {
		console.log("openAsset");	
        var assetWindow = this.open({mtype:'asset'});
        assetWindow.load(this.assetWithFocus.get('id'))
    },

    refreshAssetList:function () {
		console.log("refreshAssetList");		
        this.assetList.loadPage(this.assetListPage);
    },

    requestVerification:function () {
		console.log("requestVerification");		
        this.message(this.localize('verifyBegin'));
        this.ajax({
            url:'/json/assets/action/requestVerification',
            params:{ids:this.selectedIds()},
            success:function () { //TODO: Automatically emit removeAssetsSuccess event
                this.refreshAssetList();
                this.parentVM.detail.refresh();
            }
        });
    },

    requestVerificationIsEnabled$:function () {
		console.log("requestVerificationIsEnabled$");			
        return this.assetSelections.length > 0;
    },

    removeAssets:function () {
		console.log("removeAssets");		
        this.confirm({
            title:this.localize('removeAssetsTitle'),
            msg:this.localize('removeAssetsMessage'),
            buttons:Ext.Msg.YESNOCANCEL,
            icon:Ext.Msg.QUESTION,
            fn:function (btn) {
                if (btn !== 'yes') return;
                this.removeAssetsActual();
            }
        });
    },

    //TODO: Wire up confirmation automatically by pattern?
    removeAssetsActual:function () {
		console.log("removeAssetsActual");	
        this.ajax({
            url:'/json/assets/action/remove',
            params:{ids:this.selectedIds()},
            success:function () { //TODO: Automatically emit removeAssetsSuccess event
                this.refreshAssetList();
            }
        });
    },

    removeAssetsIsEnabled$:function () {
		console.log("removeAssetsIsEnabled$");	
        return this.assetSelections.length > 0;
    },

    when_page_changes_then_reload_grid:{
        on:'assetListPageChanged',
        action:function () {
			console.log("action");			
            this.refreshAssetList();
        }
    },

    //PRIVATE
    selectedIds:function () {
		console.log("selectedIds");		
        var ids = [];
        for (var i = 0; i < this.assetSelections.length; i++) {
            ids.push(this.assetSelections[i].get('id'));
        }
        return ids;
    },

    clone :function(){
		console.log("clone");		
        return {
            mtype : 'assetSet',
            assetListPage : this.assetListPage
        };
    }
});