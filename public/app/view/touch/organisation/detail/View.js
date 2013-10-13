/**
 * The organisation details view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.touch.organisation.detail.View", {
    extend: "Ext.form.Panel",
    alias: "widget.organisationDetailView",
    controller: "Core.mediator.touch.organisation.detail.Mediator",

    requires: [
		//"Ext.TitleBar", // Remove
        "Ext.form.FieldSet",
		"Ext.field.DatePicker"
    ],

    config: {
	
		/**
		 * @cfg {Object} itemSelector Configuration for the item selector.
		 *
		 */
		itemSelector: {
			/**
			 * @cfg {Object} list Configuration for the list.
			 * 
			 */
			list: {
				xtype: "list",
				maxDrag: 400, // Not applicable
				width: 250,
				grouped: false, // Set to true
				ui: "neutral",
				items: [{
					xtype: 'toolbar',
					docked: 'top',
					ui: 'neutral',
					items: [{
						docked: 'top',
						xtype: 'searchfield',
						placeHolder: 'search',
						itemId:"searchInput",
						width: 180
					}]
				}]
				/*
				THESE ARE DYNAMICALLY SET
				listeners: {
					selectionchange: function(list,records){
						var names = [];
						Ext.Array.each(records, function(item){
							names.push("<li>"+item.data.GroupName+"</li>");
						});// eof each()
						console.log("Selected " + records.length + " item(s): " + names.join(''));
					}//eof selectionchange
				}//eof listeners
				*/
			},
			/**
			 * @cfg {Object} container Configuration for the container
			 */
			container: {},
			/**
			 * @cfg {Array} items An array of items to put into the itemselector list.
			 * The items can either be Ext components or special objects with a "handler"
			 * key, which should be a function to execute when selected.  Additionally, you
			 * can define the order of the items by defining an 'order' parameter.
			 */  
			items: [], // Initially empty		
			/**
			 * @cfg {Object} groups Mapping of group name to order.  For example,
			 * say you have defined two groups; "Group 1" and "Group 2".  By default
			 * these will be presented in the list in that order, since
			 * 'Group 1' > 'Group 2'.  This option allows you to change the ordering,
			 * like so:
			 *
			 *  groups: {
			 *    'Group 1': 2
			 *    'Group 2': 1
			 *  }
			 *
			 *  You should use integers, starting with 1, as the ordering value.
			 *  By default groups are ordered by their name.
			 */
			groups: {}, // Initially empty
			/**
			 * @cfg {String} listPosition Position of the list menu, left or right.
			 * Defaults to 'left'.
			 */
			listPosition: 'left'
		},

        items: [
            {
                xtype: "toolbar", // WAS "titlebar" but that does not show title
                itemId: "titlebar",
                ui: "neutral",
                docked: "top",
                plugins: [
                    {
                        type: "localization",
                        method: "setTitle",
                        key: "organisationDetail.title"
                    }
                ],
                items: [
                    {
                        xtype: "button",
                        itemId: "backButton",
						iconCls: 'arrow_left',
						iconMask: true,
                        align: "left",
                        plugins: [
                            {
                                type: "localization",
                                method: "setText",
                                key: "organisationDetail.back"
                            }
                        ]
                    },
					{
						xtype: "spacer",
						itemId: "spacer", // Required
						width: 0 // Set by Mediator	
					},
					{
						xtype: "button",
						itemId: "deleteButton",
						iconCls: 'delete',
						iconMask: true,
						align: "right",
						ui: "neutral", // WAS action
						plugins: [
							{
								type: "localization",
								method: "setText",
								key: "organisationDetail.delete"
							}
						]
					}
                ]
            },//eof toolbar
			{
				xtype:"container",
				layout: {
					type: 'vbox'
				},
				items: [
					{
						xtype: "fieldset",
						title: "Organisational",
					//	instructions: "Please enter the information above",
						itemId: "organisationDetailForm", // TO DO: rename to organisationalFieldSet
						height: 330, //TEST
						defaults: {
							labelWidth: "35%"
						},
						items: [
							{
								xtype: "textfield",
								itemId: "organisationNameTextField",
								name: "OrganisationName",
								label: "Name",						
								required: true,
								plugins: [
									{
										type: "localization",
										method: "setPlaceHolder",
										key: "organisationDetail.organisationName"
									}
								]
							}
						]		
					},//eof organisationalFieldSet
					{
						xtype: "fieldset",
						title: "Memberships",
					//	instructions: "Please enter the information above",
						itemId: "membershipsFieldSet",
						height: 240, //TEST
						defaults: {
							labelWidth: "35%"
						},	
						items: [
							{
								xtype: "carousel",
								itemId: "membershipsCarousel",
								anchor: "100% 100%",
								ui: "neutral",
								fullscreen: false,
								direction: "horizontal",
							//	html: "Hello from membershipsCarousel",
								height: 180, // TEST
							//	autoHeight: true,
								layout: { // TEST
									type: "hbox"
								},
								style: "padding: 0px; margin: 0px",
								bodyStyle: "padding-top: " + (Ext.isIE ? "0" : "0px"),
								defaults: {
						//			styleHtmlContent: true,
									labelWidth: "35%",
						//			style: "padding: 0px; margin: 0px; font-size: 114%",
						//			bodyStyle: "padding-top: " + (Ext.isIE ? "0" : "0px"),
						//			align: "100% 100%",
									autoHeight: true
								},
								items: [
									{	
							//			xtype: "container",
							//			itemId: "membership1Container",
							//			//html: "Hello from membership1Container",
										items:[
										{	
											xtype: "textfield",
											itemId: "membership1TextField",
											name: "Membership[0]['kp_MembershipID']",						
											label: "Membership",
											required: false,
											plugins: [
												{
													type: "localization",
													method: "setPlaceHolder",
													key: "organisationDetail.membershipName"
												}
											]
										},{	
											xtype: "textfield",
											itemId: "organisation1TextField",
											name: "Organisation",	// TO DO					
											label: "Organisation",
											required: false,
											plugins: [
												{
													type: "localization",
													method: "setPlaceHolder",
													key: "organisationDetail.organisationName"
												}
											]
										},{
											xtype: "hiddenfield",
											itemId: "kf_OrganisationID0HiddenField",
											name: "Membership[0]['kf_OrganisationID']",
											required: false,
											readOnly: true
										},{	
											xtype: "textfield",
											itemId: "whereabouts1TextField",
											name: "Whereabouts",	// TO DO					
											label: "Whereabouts",
											required: false,
											plugins: [
												{
													type: "localization",
													method: "setPlaceHolder",
													key: "organisationDetail.whereaboutsName"
												}
											]
										}]
									},{
										xtype: "container",
										itemId: "membership2Container",
										//html: "Hello from membership2Container",
										items:[
										{	
											xtype: "textfield",
											itemId: "membership1TextField",
											name: "Membership[1]['kp_MembershipID']",						
											label: "Membership",
											required: false,
											plugins: [
												{
													type: "localization",
													method: "setPlaceHolder",
													key: "organisationDetail.membershipName"
												}
											]
										},{	
											xtype: "textfield",
											itemId: "organisation2TextField",
											name: "Organisation",	// TO DO					
											label: "Organisation",
											required: false,
											plugins: [
												{
													type: "localization",
													method: "setPlaceHolder",
													key: "organisationDetail.organisationName"
												}
											]
										},{
											xtype: "hiddenfield",
											itemId: "kf_OrganisationID1HiddenField",
											name: "Membership[1]['kf_OrganisationID']",
											required: false,
											readOnly: true
										},{	
											xtype: "textfield",
											itemId: "whereabouts2TextField",
											name: "Whereabouts",	// TO DO					
											label: "Whereabouts",
											required: false,
											plugins: [
												{
													type: "localization",
													method: "setPlaceHolder",
													key: "organisationDetail.whereaboutsName"
												}
											]
										}]								
									}
								]
							}
						]
					},//eof membershipsFieldSet
					{
						xtype: "fieldset",
						title: "Groups",
					//	instructions: "Please enter the information above",
						itemId: "groupsFieldSet",
						height: 300, //TEST
						defaults: {
							labelWidth: "35%"
						},	
						items:[
					// Gets automatically set on initialize of this View	
					//		{
					//			xtype: "container", // We create an ItemSelector for here in the Mediator
					//			name: "groupsContainer",
					//			itemId: "groupsContainer",
					//			anchor: "100% 100%",
					//			height: 300,
					//			width: "100%",
					//			html: "Hello from GroupsContainer"
					//		}
						]
					}//eof groupsFieldSet
				]
			},// eof container
			{
                xtype: "toolbar", // WAS "titlebar" but that does align buttons
                itemId: "bottombar",
                ui: "neutral",
                docked: "bottom",
                items: [
					{
						xtype: "spacer",
						itemId: "spacer", // Required
						width: 0 // Set by Mediator	
					},
					{
						xtype: "button",
						itemId: "saveOrganisationButton",
						iconCls: 'check2',
						iconMask: true,
						align: "right",
						ui: "neutral", // WAS action
						plugins: [
							{
								type: "localization",
								method: "setText",
								key: "organisationDetail.save"
							}
						]
					}
				]
			}
        ]
    },
	initConfig: function() {
		console.log("initConfig");
		var me = this;
		me._indexCount = 0;
		// Set the groups.
//		me.setGroups(Core.config.global.Config.getGroups());
		
		// NOT APPLICABLE
		// Create the store.
        // me.store = Ext.create('Ext.data.Store', {
            // model: me.getModel(),
            // sorters: 'order',	
            // grouper: {
                // property: 'group',
                // sortProperty: 'groupOrder'
            // }
        // });
		// console.log("store created");
		
		me.callParent(arguments);
		console.log("parent called");
		delete me.config.itemSelector.items;// DELETE THE me.config.itemSelector.items AFTER callParent(arguments)
        /**
         *  @private
         *
         *  This stores the instances of the components created.
         *  TODO: Support 'autoDestroy'.  
         */
        me._cache = {};


		// more ...
	
	},
	initialize: function() {
		console.log("initialize");
        this.__init = false;
		this.callParent();
		this.addCls('x-itemselector');
		
		// Specific to Group itemSelector
		var itemId = "groupList";
		var itemTpl = "{GroupName}";
		var searchInput = "groupsSearchInput";
		var mode = "MULTI";
		var store =	Ext.data.StoreManager.lookup('groupStore');
		var component = this.down("#groupsFieldSet"); 
		
		this.list = this.createItemList(itemId, itemTpl, searchInput, mode, store);
		this.navigation = this.createItemNavigation();
		this.selection = this.createItemSelection();
		this.container = this.createContainer('itemSelectorContainer');

		component.add([
			this.list,
			this.navigation,
			this.selection,
			this.container
		]);
		this.createContainerCSS();
		var selectedItemIndex = 0;
		Ext.each(this.list.getStore().getRange(), function(item, index) {
			if(item.get('selected') === true) {
				selectedItemIndex = index;
			}
		});
		if(this.list.hasLoadedStore) {
			this.list.select(selectedItemIndex);
		}
		this.__init = true;
	},
	
    /**
     *  @private
     *
     *  Construct style element for container and insert into the DOM.
     */
    createContainerCSS: function() {
		console.log("createContainerCSS");	
		// more ...
	},	

	/**
     *  @private
     *
     *  Generates a new object to be used for displaying
     *  the navigation of items.
     */
	createItemNavigation: function() {
		console.log("createItemNavigation");	
		return Ext.create('Ext.dataview.List', { // IMPROVE THIS FOR REAL NAVIGATION ITEMS !!!
            docked: "left",
            cls: "x-itemselector-navigation",
			style: "position: absolute; top: 0; left: 250px; height: 250px; width: 50px; border: 1px solid blue; " + "z-index: 2;"
		});
	},
	
	/**
     *  @private
     *
     *  Generates a new Ext.dataview.List object to be used for displaying
     *  the selected items.
     */
	createItemSelection: function() {
		console.log("createItemSelection");	
		return Ext.create('Ext.dataview.List', { // IMPROVE THIS FOR REAL SELECTED ITEMS !!!
            docked: "left",
            cls: "x-itemselector-selection",
			style: "position: absolute; top: 0; left: 300px; height: 250px; width: 100%; border: 1px solid red; " + "z-index: 2;"
		});
	},
	
	/**
     *  @private
     *
     *  Generates a new Ext.dataview.List object to be used for displaying
     *  the items.
     */
    createItemList: function(itemId, itemTpl, searchInput, mode, store) {
		console.log("createItemList");
		var listConfig = this.getItemSelector()['list'],
			listPosition = this.getItemSelector()['listPosition'],
			listSearchInput = this.getItemSelector()['list']['items'][0]['items'][0]; // Make nicer
		/* NOT APPLICABLE	
        // The menu can be dragged further than the width
        if (listConfig.width) {
            listConfig.minWidth = listConfig.width;
            if (listPosition == "left") {
                // The actual width of the list is determined by maxDrag
                listConfig.width = listConfig.maxDrag || listConfig.width;
            }
        }
		*/
		listConfig.itemId = itemId;
		listConfig.itemTpl = itemTpl;
		listSearchInput['itemId'] = searchInput;	// renames the itemId of the searchInput
		listConfig.mode = mode;
		listConfig.store = store;

        return Ext.create('Ext.dataview.List', Ext.merge({}, listConfig, {
            //store: this.store, // Already set in listConfig
            docked: listPosition,
            cls: 'x-itemselector-list',
			style: 'position: absolute; top: 0; '+listPosition+': 0; height: 100%;' + 'z-index: 2',
			listeners: {
				selectionchange: this.onSelectionChange,
				select: this.onSelect,
				itemtap: this.onItemTap,
				scope: this
			}
        }));
    },
	/**
     * @private
     *
     * Always called when selection in the list is changed.
     */
    onSelectionChange: function (list, records) {
		console.log("onSelectionChange");
		var names = [];
		Ext.Array.each(records, function(item){
			names.push("<li>"+item.data.GroupName+"</li>"); // Specific to GroupName, make dynamic
		});// eof each()
		console.log("Selected " + records.length + " item(s): " + names.join(''));
		// more ...
	},
	/**
     * @private
     *
     * Always called when item in the list is tapped.
     */
    onItemTap: function (list, index, target, item, e, eOpts) {
		console.log("onItemTap");
		// more ...
	},
	/**
     *  @private
     *
     *  Called when an item in the list is tapped if item is not selected.
     */
    onSelect: function(list, item, eOpts) {
		console.log("onSelect");
		// more...
	},
	
    /**
     *  @private
     *
     *  Generates and returns the Ext.Container to be used for displaying
     *  content.
	 *
	 * @param itemId The itemId of the container.
     */
    createContainer: function(itemId) {
		console.log("createContainer");
        var me = this;
        var container = Ext.create('Ext.Container', Ext.merge({}, me.config.itemSelector.container, {
            // docked: 'left',
			itemId: itemId, // NEW by wvh
            cls: "x-itemselector-container",
            style: "width: '100%'; height: '100%'; position: absolute;"
        }));
        // Create optional container functionality
        
        return container;
    }	
	
});