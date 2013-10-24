glu.defModel('Core.assets.main', {
	alias:'widget.mainViewModel',
	
	/*
	 * Properties - Hold states that various parts of the screen can be in. 
	 * Usually correspond to things that the user can set (like the contents of a text field, 
	 * or the currently active tab, or which rows of a grid are selected).
	 */
    sliceCounter:1,

	/*
	 * Sub-models - Contains various sub-screens and lists of sub-screens 
	 * (glu is for full applications so view models are always in a hierarchy with a single root). 
	 * There is also a special 'parentVM' property to find any view model's container.
	 */
    options:{
        mtype:'options'
    },	 
	 
    assetSetList:{
        mtype:'activatorlist',
        focusProperty:'assetSetWithFocus'
    },

    assetSetWithFocus: {
		mtype:'assetSet',
		name:'dummy'
	},

	/*
	 * Formulas - Calculated properties that respond to changes in properties or other formulas. 
	 * By their nature, they are read-only so they typically represent the app 'responding' to user interaction. 
	 * Glu will analyze the formula and keep it updated when input properties change.
	 * To declare a formula, put a $ at the end of the name (this won't become part of its name but is just a flag) 
	 * and then supply a function that returns a value.
	 */
    title$: function(){
		console.log("title$");
        return this.localize('title',{focusName: this.assetSetWithFocus.name});
    },

    detail:{ 
		mtype:'asset'
	},

    init:function(){
		console.log("init");
        this.cloneSet(); //clone dummy asset set
    },

    /*
	 * Commands - Actions that the user can take that aren't represented by simple properties. 
	 * For instance, a save button or hitting the 'close window' indicator.
	 */
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

    /*
	 * Reactors - Rules that are triggered on property / formula changes 
	 * so you don't have to put all of your side-effects into the property setter. 
	 * For instance, refreshing the grid when any of several filters change. 
	 * A formula is really a special type of reactor where the action is setting a single property; 
	 * if it's more complicated, use a reactor.
	 */
    when_selected_asset_changes_then_load_detail:{
        on:['assetSetWithFocusChanged','assetSetWithFocus.assetWithFocusChanged'],
        action:function () {
			console.log("action");	
            if (this.assetSetWithFocus.assetWithFocus == null) return;
            this.detail.load(this.assetSetWithFocus.assetWithFocus.get('id'));
        }
    },

    /*
	 * Externals
	 */
    notifyAssetChanged:function () {
		console.log("notifyAssetChanged");		
        this.assetSetList.getActiveItem().refreshAssetList();
    }
});