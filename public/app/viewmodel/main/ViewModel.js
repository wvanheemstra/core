glu.defModel('Core.assets.main', {
	alias:'widget.mainViewModel',
    options:{
        mtype:'options'
    },

    sliceCounter:1,

    assetSetList:{
        mtype:'activatorlist',
        focusProperty:'assetSetWithFocus'
    },

    assetSetWithFocus: {
		mtype:'assetSet',
		name:'dummy'
	},

    title$: function(){
		console.log("title$");
        return this.localize('title',{focusName: this.assetSetWithFocus.name}); // TEMP commented out by wvh
    },

    detail:{ 
		mtype:'asset'
	},

    init:function(){
		console.log("init");
        this.cloneSet(); //clone dummy asset set
    },

    //COMMANDS
    cloneSet:function () {
		console.log("cloneSet");	
        var newSlice = this.model(this.assetSetWithFocus.clone());
        newSlice.set('name', 'Asset Set ' + this.sliceCounter++);
        this.assetSetList.add(newSlice);
        newSlice.init();
        this.set('assetSetWithFocus', newSlice);
    },

    openOptions:function () {
		console.log("openOptions");	
        this.open(this.options);
    },

    //REACTIONS
    when_selected_asset_changes_then_load_detail:{
        on:['assetSetWithFocusChanged','assetSetWithFocus.assetWithFocusChanged'],
        action:function () {
			console.log("action");	
            if (this.assetSetWithFocus.assetWithFocus == null) return;
            this.detail.load(this.assetSetWithFocus.assetWithFocus.get('id'));
        }
    },

    //EXTERNAL
    notifyAssetChanged:function () {
		console.log("notifyAssetChanged");		
        this.assetSetList.getActiveItem().refreshAssetList();
    }
});