/**
 * The slide of main view for the application.
 *
 * <p> 
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.touch.main.slide.View", {
    //extend: "Core.view.touch.main.base.View",
	extend: "Ext.Container",
    alias: "widget.mainSlideView",
    controller: "Core.mediator.touch.main.slide.Mediator",

    requires: [
		// empty
		"nineam.locale.LocaleManager"
    ],
	
    /**
     * @event close
     * @preventable moveContainer
     * Fires whenever the container is closed
     * @param {Core.view.touch.main.slide.View} this The navigation View instance
     * @param {Number} position The x-coordinate to which the container will be moved to
     * @param {Number} duration The duration of the slide event
     */

    /**
     * @event open
     * @preventable moveContainer
     * Fires whenever the container is opened
     * @param {Core.view.touch.main.slide.View} this The navigation View instance
     * @param {Number} position The x-coordinate to which the container will be moved to
     * @param {Number} duration The duration of the slide event
     */

    /**
     * @event select
     * @preventable setContainerItem
     * Fires whenever an item in the menu is selected
     * @param {Core.view.touch.main.slide.View} this The navigation View instance
     * @param {Ext.Component} item The selected item
     * @param {Integer} index The index of the selected item
     */

    /**
     * @event slideend
     * Fires whenever the user has finished sliding the container.  This is fired once the
     * animation is complete.
     * @param {Core.view.touch.main.slide.View} this The navigation View instance
     */

    /**
     * @event slidestart
     * Fires whenever the user has started sliding the container.  This is fired once the
     * animation is complete.
     * @param {Core.view.touch.main.slide.View} this The navigation View instance
     */

    /**
     * @event opened
     * Fires after the container is fully opened.
     * @param {Core.view.touch.main.slide.View} this The navigation View instance
     */

    /**
     * @event closed
     * Fires after the container is fully closed.
     * @param {Core.view.touch.main.slide.View} this The navigation View instance
     */	
    config: {
		fullscreen: true,
		
	    /**
         * @cfg {Object} list Configuration for the navigation list.
         * The maxDrag property is not supported when the list is on the right.
         */
        list: {
            width: 250,
            maxDrag: 400, //WAS null,
            itemTpl: '{title}',
            grouped: true, //WAS true,
			ui: 'neutral',
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'neutral',
				/*
				title:{
					title: 'Navigation',
					centered: false,
					width: 200,
					left: 0
				},
				*/
				/**
                 *  Here's an example of how to add a different type of
                 *  component into the toolbar of the list.
                 */
                items: [{
                    docked: 'top',
                    xtype: 'searchfield',
                    placeHolder: 'search',
                    width: 180
                }]
            },{
                xtype: 'toolbar',
                docked: 'bottom',
                ui: 'neutral',
				items: [{
					xtype: "button",
					itemId: "logoutButton",
					ui: "neutral",
					align: "left",
					plugins: [
						{
							type: "localization",
							method: "setText",
							key: "mainSlide.logOut"
						}
					]
				}]
			}]
        },
        /**
         * @cfg {Object} container Configuration for the container
         */
        container: {},
        /**
         * @cfg {Object/Boolean} itemMask Configuration for the mask used to mask
         * items when the container is opened.  Set to false to disable masking of
         * items.
         */
        itemMask: true, //WAS false,
        /**
         * @cfg {Array} items An array of items to put into the navigation list.
         * The items can either be Ext components or special objects with a "handler"
         * key, which should be a function to execute when selected.  Additionally, you
         * can define the order of the items by defining an 'order' parameter.
         */        
        items: [{
            title: 'Home',
			plugins: [
				{
					type: "localization",
					method: "setTitle",
					key: "mainItem1.title"
				}
			],			
            group: 'Group 0',
			ui: 'neutral',
			hidden: true, // hide the item initially
            // Enable the slide button using the defaults defined above in
            // `slideButtonDefaults`.
            slideButton: true,
			slideHeader: true,
            items: [{
                xtype: 'toolbar',
                //title: 'Item 1',
				plugins: [
                    {
                        type: "localization",
                        method: "setTitle",
                        key: "mainItem1.title"
                    }
                ],
                docked: 'top',
				ui: 'neutral'
            },{
                xtype: 'panel',
				scrollable: true,
				style: 'background-image: url("./resources/bg/noise.png");',
				styleHtmlContent: true,
                html: [
					'<center>',
					'<img src="./resources/logos/logo.png" />',
					'<h2>Welcome to Your Home Page</h2>',
					'<p>This page can be customized in whatever way you prefer.</p>',
					'</center>'
				].join(""),
                // Mask this item when the container is opened
                maskOnOpen: true
            }]
        },
		/* NO LONGER IN USE
		{
            title: 'Item 2',
			plugins: [
				{
					type: "localization",
					method: "setTitle",
					key: "mainItem2.title"
				}
			],			
            group: 'Group 2',
			ui: 'neutral',
			hidden: true, // hide the item initially
            slideButton: true,
			slideHeader: true,			
            items: [{
                xtype: 'toolbar',
                //title: 'Item 2',
				plugins: [
                    {
                        type: "localization",
                        method: "setTitle",
                        key: "mainItem2.title"
                    }
                ],
                docked: 'top',
				ui: 'neutral'
            },{
                xtype: 'panel',
                layout: 'card',
				style: 'background-image: url("./resources/bg/noise.png");',
				items: [{  
					xtype: 'button',
					height: 280,
					width: 200,
					margin: 20,
					text: 'Show Modal',
					url: 'www.expedia.com',
					listeners: {
						release: function(button, e, eOpts) {
							console.log('released');
							var me = button.up('mainSlideView');
							me.showModal(button, e);
						},
						tap: function(button, e) {
							// Need this to stop auto-selecting any component
							// hidden beneath the container.
							e.preventDefault();
						},
						scope: this
					}
				}],
                styleHtmlContent: true,
                html: '<p>Some text here.</p><p>Donec neque augue, fermentum quis tempor quis, lacinia ut augue. Sed dictum risus id arcu vehicula sed porttitor nisi egestas. Aliquam arcu felis, sagittis vel pulvinar vitae, ultricies a augue. Praesent eget erat tellus. Aenean nec dui magna. Cras sagittis, diam vel bibendum mattis, neque purus placerat turpis, sit amet tempor neque nisl non eros. Pellentesque id orci nulla, nec eleifend quam. Proin ut magna turpis. Phasellus erat urna, faucibus in tempus bibendum, ultrices a mauris. Nulla semper ante sed est placerat sagittis. Nam ut vestibulum nulla. Sed sit amet aliquet urna. Morbi est velit, vulputate quis pretium vitae, lobortis sed ligula.</p>',
                scrollable: true,
                maskOnOpen: true
            }]
        } */
		
		/*  NO LONGER IN USE
		,{
            title: 'Item 3',
			plugins: [
				{
					type: "localization",
					method: "setTitle",
					key: "mainItem3.title"
				}
			],
            group: 'Group 3',
			ui: 'neutral',
			hidden: true, // hide the item initially			
            order: 0,
			slideButton: true,
			slideHeader: true,
            items: [{
                xtype: 'toolbar',
                //title: 'Item 3',
				plugins: [
                    {
                        type: "localization",
                        method: "setTitle",
                        key: "mainItem3.title"
                    }
                ],
                docked: 'top',
				ui: 'neutral'
            },{
                xtype: 'container',
                scrollable: 'vertical',
                // ORIGINAL style: 'margin: auto !important; text-align: center;',
				style: 'margin: auto !important; text-align: center; background-image: url("./resources/bg/noise.png");',
                maskOnOpen: true,
                defaults: {
                    style: "float: left; margin: 10px; box-shadow: "+
                           "#999 0px 0px 6px 2px; border: 1px solid #888; "+
                           "overflow: hidden;",
                    height: 170,
                    width: 110
                },
                items: [{
					xtype: 'button',  
					text: 'Pop up',  
					action: 'showPopup'
				},{
                    html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/13/43/11134356_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/16/11/11161107_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/16/10/11161098_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/15/75/11157588_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/16/13/11161343_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/16/12/11161272_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content7.flixster.com/movie/11/16/24/11162445_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/15/92/11159214_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/16/03/11160390_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/16/05/11160598_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/16/09/11160942_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content7.flixster.com/movie/11/15/25/11152577_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/16/09/11160962_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/16/02/11160244_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/16/25/11162555_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/15/83/11158339_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/15/65/11156544_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content7.flixster.com/movie/11/15/66/11156693_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/15/90/11159072_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/16/26/11162639_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/16/26/11162672_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/15/92/11159258_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/15/84/11158472_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content7.flixster.com/movie/11/15/65/11156581_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/15/16/11151659_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/15/81/11158182_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/15/90/11159075_pro.jpg" />'
                }]
            }]
        }, */
		{
            title: 'Administration',
			plugins: [
				{
					type: "localization",
					method: "setTitle",
					key: "mainItem4.title"
				}
			],
            group: 'Group 1',
			ui: 'neutral',
			hidden: true, // hide the item initially			
            order: 0,
			slideButton: true,
			slideHeader: true,			
            // Extend `slideButtonDefaults`
        //    slideButton: {
        //        iconMask: false,
        //        iconCls: null,
        //        text: 'menu'
        //    },
            items: [{
                xtype: 'toolbar',
                //title: 'Item 4',
				plugins: [
                    {
                        type: "localization",
                        method: "setTitle",
                        key: "mainItem4.title"
                    }
                ],
                docked: 'top',
				ui: 'neutral'
            },{
                xtype: 'container',
                scrollable: 'vertical',
                // ORIGINAL style: 'margin: auto !important; text-align: center;',
				style: 'margin: auto !important; text-align: center; background-image: url("./resources/bg/noise.png");',
                maskOnOpen: true,
                defaults: {
                    style: "float: left; margin: 10px; box-shadow: "+
                           "#999 0px 0px 6px 2px; border: 1px solid #888; "+
                           "overflow: hidden;",
                    height: 170,
                    width: 110
                },
                items: [{
					xtype: 'button',  
					text: 'People',
					title: 'People',
					url: 'https://www.google.co.uk/search?q=people&source=lnms&tbm=isch',
					listeners: {
						release: function(button, e, eOpts) {
							console.log('released');
							var me = button.up('mainSlideView');
							me.showModal(button, e);
						},
						tap: function(button, e) {
							// Need this to stop auto-selecting any component
							// hidden beneath the container.
							e.preventDefault();
						},
						scope: this
					}
				},{
					xtype: 'button',  
					text: 'Products',
					title: 'Products',		
					url: 'https://www.google.co.uk/search?q=products&source=lnms&tbm=isch',
					listeners: {
						release: function(button, e, eOpts) {
							console.log('released');
							var me = button.up('mainSlideView');
							me.showModal(button, e);
						},
						tap: function(button, e) {
							// Need this to stop auto-selecting any component
							// hidden beneath the container.
							e.preventDefault();
						},
						scope: this
					}
				},{
					xtype: 'button',  
					text: 'Bookings', 
					title: 'Bookings',					
					url: 'https://www.google.co.uk/search?q=bookings&source=lnms&tbm=isch',
					listeners: {
						release: function(button, e, eOpts) {
							console.log('released');
							var me = button.up('mainSlideView');
							me.showModal(button, e);
						},
						tap: function(button, e) {
							// Need this to stop auto-selecting any component
							// hidden beneath the container.
							e.preventDefault();
						},
						scope: this
					}
				}]
            }]
        }],
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
        groups: {
		    'Group 0': 0,		
		    'Group 1': 1,
            'Group 2': 2,
            'Group 3': 3,
			'Group 4': 4
		},
        /**
         * @cfg {Object} defaults An object of default values to apply to any Ext
         * components created from those listed in ``items``.
         */
        defaults: {
            layout: 'card'			
			/**
             *  Here's an example of how to add a different type of
             *  component for the defaults.
			 */
			/*
			style: 'background: #fff',
			xtype: 'container'
			*/
        },
        /**
         * @cfg {String} listPosition Position of the list menu, left or right.
         * Defaults to 'left'.
         */
        listPosition: 'left',
		
        /**
         * @cfg {String} background Background of a panel in the container.
         * Defaults to ''.
         */		
		background: 'background-image: url("./resources/bg/noise.png");',

        /**
         * @cfg {String} slideSelector Class selector of object (or parent)
         * of which dragging should be allowed.  Defaults to the entire container.
         * For example, this could be set to something like 'x-toolbar' to restrict
         * dragging only to a toolbar.
         */
        slideSelector: 'x-toolbar', // WAS slideSelector: '',

        /**
         * @cfg {Integer} containerSlideDelay Pixel offset that must be dragged before
         * allowing the underlying container to be dragged.
         * Defaults to -1, which is disabled.  Setting this to 10 will very closely mimic
         * the behavior of the FB version.
         */
        containerSlideDelay: 10, // WAS -1,
        
        /**
         * @cfg {Integer} slideDuration Number of milliseconds to animate the sliding
         * of the container when "flicked".  By default the animation is disable on
         * Android.
         */
        slideDuration: Ext.os.is('Android') ? 0 : 200,
        
        /**
         * @cfg {Integer} selectSlideDuration Number of milliseconds to animate the sliding
         * of the container when list item is selected (if closeOnSelect = true). The default
         * value here of 300 gives a much nicer feel.  By default the animation is disable on
         * Android.
         */
        selectSlideDuration: Ext.os.is('Android') ? 0 : 300,
        
        /**
         * @cfg {Boolean} closeOnSelect Whether or not to automatically close the container
         * when an item in the list is selected.  Default is true.
         */
        closeOnSelect: true,

        /**
         * @cfg {String} shadowStyle CSS to use for styling the shadow when the container is
         * open.  This should be a valid CSS 'box-shadow' argument.  Set to false to disable
         * it.
         */
        shadowStyle: '0 0 4px 1px #999',

        /**
         *  Define the default slide button config.  Any item that has
         *  a `slideButton` value that is either `true` or a button config
         *  will use these values at the default.
         */
        slideButtonDefaults: {
			selector: 'toolbar'  // WAS nothing, LEAVING THIS EMPTY CAUSES AN ERROR
		},
		
        /**
         *  Define the default slide header config.  Any item that has
         *  a `slideHeader` value that is `true`
         *  will use these values at the default.
         */
        slideHeaderDefaults: {
			selector: 'toolbar'  // WAS nothing, LEAVING THIS EMPTY CAUSES AN ERROR
		}		
		
    },
	initConfig: function() {
		console.log("initConfig");
		var me = this;
        me._indexCount = 0;
        // Create the store.
        me.store = Ext.create('Ext.data.Store', {
            model: me.getModel(),
            sorters: 'order',
            grouper: {
                //property: 'group',
                //sortProperty: 'groupOrder',
				groupFn: function(record) {
					var group = record.get('group');
					group = me.getGroup(group);
					// Hide the generic group name, instead show the custom group name
					return '<span style="display:none;">' + record.get('group') + '</span>' + group;
				}
            }
        });
		console.log("store created");
        // Add the items into the list.
        me.addItems(me.config.items || []);
		console.log("items added");
        me.callParent(arguments);
		console.log("parent called");	
		delete me.config.items;// DELETE THE me.config.items AFTER callParent(arguments)
        /**
         *  @private
         *
         *  This stores the instances of the components created.
         *  TODO: Support 'autoDestroy'.  
         */
        me._cache = {};	
        // Default config values used for creating a slideButton.
        me._slideButtonConfig = {
            xtype: 'button',
            iconMask: true,
            iconCls: 'list', //WAS 'more',
            align: this.getListPosition(),
            name: 'slidebutton',
            listeners: {
                release: me.toggleContainer,
                tap: function(button, e) {
                    // Need this to stop auto-selecting any component
                    // hidden beneath the container.
                    e.preventDefault();
                },
                scope: me
            },
            /**
             *  To add the button into a toolbar, you can add the following
             *  to any item in your navigation list.
             */
            selector: ['toolbar']
        };
        // Default config values used for creating a slideHeader.
        me._slideHeaderConfig = {
			xtype: 'image',
			width: 218,
			height: 44,	
			src:'/resources/logos/slideheaderlogo.png',
            name: 'slideheader',
            /**
             *  To add the header into a toolbar, you can add the following
             *  to any item in your navigation list.
             */
            selector: ['toolbar']
        };		
        /**
         *  Default config for masked items.
         */
        me.itemMaskDefaults = {
            xtype: 'mask',
            transparent: true
        };
	},
    initialize: function() {
		console.log("initialize");	
        this.__init = false;
        this.callParent();
        this.addCls('x-slidenavigation');
		this.list = this.createNavigationList();
		this.container = this.createContainer('slideNavigationContainer');
		this.add([
		   this.list,
		   this.container
		]);
		this.createContainerCSS();
		var selectedItemIndex = 0;		
		Ext.each(this.list.getStore().getRange(), function(item, index) {
		   if (item.get('selected') === true) {
			   selectedItemIndex = index;
		   }
		});
		this.list.select(selectedItemIndex);
        this.__init = true;
	},
	
    /**
     *  @private
     *
     *  Sets the background.
     */	
	setBackground: function(background) {
		console.log("setBackground");	
		// TO DO
	},
	
    /**
     *  @private
     *
     *  Shows the modal.
	 *
	 * @param button The button that requested to show the modal
	 * @param e The event
     */	
	showModal: function(button, e){
		console.log("showModal");
		console.log("button: text = " + button.getText());
		var me = this,
			url = '',
			title = '';
		// TO DO: open the modal view 
		// set the title and
		// optionally points its content 
		// to the url if provided 
		// by the button
		try {
			title = button.title;
			console.log("button: title = " + title);		
		}
		catch(ex){
			// exception
		}		
		try {
			url = button.url;
			console.log("button: url = " + url);		
		}
		catch(ex){
			// exception
		}	
		me.fireEvent('showmodal', {title: title, url: url});
	},
	
    /**
     *  @private
     *
     *  Gets the group.
     */	
	getGroup: function(group) {
		console.log("getGroup");
		// TO DO ... translating the group 
		if(group == 'Group 0'){ var group = '' } // Reserved for the Home item		
		if(group == 'Group 1'){ var group = 'A' }
		if(group == 'Group 2'){ var group = 'B' }
		if(group == 'Group 3'){ var group = 'C' }
		if(group == 'Group 4'){ var group = 'D' }			
		return group;
	},	
	
    /**
     *  @private
     *
     *  Adds an array of items (or a single item) into the list.
     */
    addItems: function(items) {
		console.log("addItems");
        var me = this,
            items = Ext.isArray(items) ? items : [items],
            groups = me.config.groups;
        Ext.each(items, function(item, index) {
            if (!Ext.isDefined(item.index)) {
                item.index = me._indexCount;
                me._indexCount++;
            }
            me.store.add(item);
        });
    },
    /**
     *  @private
     *
     *  Construct style element for container shadow and insert into the DOM.
     */
    createContainerCSS: function() {
        var shadowStyle = this.getShadowStyle(),
            id          = this.getId();
        if (shadowStyle) {
            if (!document.getElementById(id)) {
                style           = document.createElement('style');
                style.type      = 'text/css';			
                style.innerHTML = '.x-slidenavigation-container.x-dragging, '+
                                  '.x-slidenavigation-container.open { '+
                                  'box-shadow: '+shadowStyle+';'+
                                  '-webkit-box-shadow:'+shadowStyle+';';					  
                document.getElementsByTagName('head')[0].appendChild(style);
            }
        }
    },
    /**
     *  @private
     *
     *  Creates a button that can toggle the navigation menu.  For an example
     *  config, see ``slideButtonDefaults``.
     */
    createSlideButton: function(el, config) {
		console.log("createSlideButton");	
        var me      = this,
            config  = Ext.merge(me.getSlideButtonDefaults(),
                                Ext.isObject(config) ? config : {}),
            parent  = el.down(config.selector),
            listPosition = this.getListPosition();
        if (parent) {
            // Make sure that the button is placed on the correct side of the toolbar
            layout = parent.getLayout();
            if (layout && Ext.isFunction(layout.setPack)) {
                layout.setPack(listPosition);
            }
			return parent.add(Ext.merge(me._slideButtonConfig, config));
        }
        return false;
    },	
	
    /**
     *  @private
     *
     *  Creates a header.  For an example
     *  config, see ``slideHeaderDefaults``.
     */
    createSlideHeader: function(el, config) {
		console.log("createSlideHeader");	
        var me      = this,
            config  = Ext.merge(me.getSlideHeaderDefaults(),
                                Ext.isObject(config) ? config : {}),
            parent  = el.down(config.selector),
            listPosition = this.getListPosition();
        if (parent) {
            // Make sure that the button is placed on the correct side of the toolbar
//            layout = parent.getLayout();
//            if (layout && Ext.isFunction(layout.setPack)) {
//                layout.setPack(listPosition);
//            }
			return parent.add(Ext.merge(me._slideHeaderConfig, config));
        }
        return false;
    },	
	
    /**
     *  @private
     *
     *  Gets the configuration for masking items.  If masking items is disabled
     *  this returns false.
     */
    getMask: function() {
		console.log("getMask");		
        var mask = this.getItemMask();
        if (mask != false) {
            if (Ext.isBoolean(mask)) {
                mask = this.itemMaskDefaults;
            }
        }
        return mask;
    },
    /**
     *  @private
     *
     *  If item masking is enabled, this method will mask any containers that have
     *  a ``maskOnOpen`` configuration variable set to ``true``.  If masking is
     *  disabled, this method does nothing.
     */
    doMaskItem: function(item, mask) {
		console.log("doMaskItem");	
        var maskConfig  = this.getMask(),
            mask        = Ext.isDefined(mask) ? mask : true;
        Ext.each(item.query('component[maskOnOpen=true]'), function(el) {
            if (mask) {
                el.setMasked(maskConfig);
                // This is needed to allow dragging on the mask, which is disabled
                // by the default Ext.Mask class.
                el.getMasked().onEvent = Ext.emptyFn;
            } else {
                el.setMasked(false);
            }
        });
    },
    /**
     * @private
     *
     * Always called when item in the list is tapped.
     */
    onItemTap: function (list, index, target, item, e, eOpts) {
		console.log("onItemTap");
        if (list.isSelected(item) && this.config.closeOnSelect) {
            this.closeContainer();
        }
    },
    /**
     *  @private
     *
     *  Called when an item in the list is tapped if item is not selected.
     */
    onSelect: function(list, item, eOpts) {
		console.log("onSelect");	
        var me = this,
            store = list.getStore(),
            index = item.raw.index,
            container = me.container,
            func      = Ext.emptyFn;	
        if (me._cache[index] == undefined) {            
            // If the object has a handler defined, then we don't need to
            // create an Ext object
            if (Ext.isFunction(item.raw.handler)) {
                me._cache[index] = item.raw.handler;
            } else {
                me._cache[index] = container.add(Ext.merge({}, me.config.defaults, item.raw));
                me.doMaskItem(me._cache[index], true);
                // Wait until the component is painted before closing the container.  This makes
                // the initial animation much smoother.
                if (me.config.closeOnSelect) {
                    me._cache[index].addListener('painted', function() {
                        // The slight delay here gives the component enough time to update before
                        // the close animation starts.
                        Ext.defer(me.closeContainer, 200, me, [me.config.selectSlideDuration]);
                    });
                }
                // Add a button for controlling the slide, if desired
                if ((item.raw.slideButton || false)) {
                    me.createSlideButton(me._cache[index], item.raw.slideButton);
                }
				// Add a header, if desired
				if((item.raw.slideHeader || false)) {
					me.createSlideHeader(me._cache[index], item.raw.slideHeader);
				}
            }
        }
        if (Ext.isFunction(me._cache[index])) {
            func = me._cache[index];
        } else {
            func = me.setContainerItem;
        }
        if (me.__init) {
            me.fireAction('select', [me , me._cache[index], index], func, me);
        }
    },
    /**
     *  @private
     *
     *  Set the active item in the container.
     */
    setContainerItem: function(nav, item) {
		console.log("setContainerItem");	
        var container = nav.container;
        container.setActiveItem(item);
    },
    /**
     *  @private
     *
     *  Callback function for when the container has started being dragged.
     */
    onContainerDragstart: function(draggable, e, offset, eOpts) {
		console.log("onContainerDragstart");	
        var slideSelector       = this.getSlideSelector(),
            containerSlideDelay = this.config.containerSlideDelay;
        if (slideSelector == false && containerSlideDelay < 0) {
            return false;
        }
        if (this.container.dragAllowed) {
            // TODO: "value", This doesn't work as is, but I'd like to disable the underlying component
            //       once dragging has started...
            //this.doMaskItem(this.container.getActiveItem(), true);
            return true;
        }
        if (slideSelector) {
            node = e.target;
            while (node = node.parentNode) {
                if (node.classList && node.classList.contains(slideSelector)) {
                    this.fireEvent('dragstart', this);
                    return true;
                }
            }
            return false;
        }
        return false;
    },
    /**
     *  @private
     *
     *  Callback function for when the container has finished being dragged.  This determines
     *  which direction to finish moving the container based on its current position and velocity.
     */
    onContainerDragend: function(draggable, e, eOpts) {
		console.log("onContainerDragend");	
        var velocity     = Math.abs(e.deltaX / e.deltaTime),
            listPosition = this.getListPosition(),
            direction    = (e.deltaX > 0) ? "right" : "left",
            offset       = Ext.clone(draggable.offset),
            threshold    = parseInt(this.config.list.minWidth * .70);
        // XXX: This is ugly
        if (listPosition == "right")
        {
            if (direction == "right")  {
                direction = "left";
            } else {
                direction = "right";
            }
        }
        switch (direction) {
            case "right":
                offset.x = (velocity > 0.75 || offset.x > threshold) ? this.config.list.minWidth : 0;
                break;
            case "left":
                offset.x = (velocity > 0.75 || offset.x < threshold) ? 0 : this.config.list.minWidth;
                break;
        }
        this.fireEvent('dragend', this);
        this.moveContainer(this, offset.x);
    },
    /**
     *  @private
     *
     *  Registers the model with Ext.ModelManager, if it hasn't been
     *  already, and returns the name of the model for use in the store.
     */
    getModel: function() {
		console.log("getModel");
        var model = 'SlideNavigationPanelItem',
            groups = this.config.groups;
        if (!Ext.ModelManager.get(model)) {
            Ext.define(model, {
                extend: 'Ext.data.Model',
                config: {
                    idProperty: 'index',
                    fields: [
                        'index', 'title', 'group', 'selected',
                        {
                            name: 'order',
                            defaultValue: 1
                        },{
                            name: 'groupOrder',
                            convert: function(value, record) {
                                // By default we group and order by group name.
                                group = record.get('group');
                                return groups[group] || group;
                            }
                        }
                    ]
                }
            });
        }
        return model;
    },
    /**
     *  Closes the container.  See {@link #moveContainer} for more details.
     */
    closeContainer: function(duration) {
		console.log("closeContainer");	
        var me       = this,
            duration = duration || this.config.slideDuration;
        
        if (me.__init) {
            me.fireAction('close', [me, 0, duration], 'moveContainer', me);
        }
    },
    /**
     *  Opens the container.  See {@link #moveContainer} for more details.
     */
    openContainer: function(duration) {
		console.log("openContainer");		
        var me       = this,
            duration = duration || this.config.slideDuration,
            offsetX  = this.config.list.minWidth;

        if (me.__init) {
            me.fireAction('open', [me, offsetX, duration], 'moveContainer', me);
        }
    },
    /**
     *  Toggles the container open or close.
     */
    toggleContainer: function(duration) {
		console.log("toggleContainer");	
        var duration = Ext.isNumber(duration) ? duration : this.config.slideDuration;
        if (this.isClosed()) {
            this.openContainer(duration);
        } else {
            this.closeContainer(duration);
        }
    },
    /**
     *  @private
     *
     *  Moves the container to a specified ``offsetX`` pixels.  Positive
     *  integer values move the container that many pixels from the left edge
     *  of the window.  If ``duration`` is provided, it should be an integer
     *  number of milliseconds to animate the slide effect.  If no duration is
     *  provided, the default in ``config.slideDuration`` is used.
     */
    moveContainer: function(nav, offsetX, duration) {
		console.log("moveContainer");	
        var duration  = duration || this.config.slideDuration,
            draggable = this.container.draggableBehavior.draggable;
            listPosition = this.getListPosition();
        // Invert the direction of the side movement
        if (listPosition == "right") {
            offsetX = -offsetX;
        }
        this.container.addCls('open');
        draggable.setOffset(offsetX, 0, {
            duration: duration
        });
    },
    /**
     *  Returns true if the container is closed, false otherwise.  This is a
     *  computed value based off the current offset position of the container.
     *
     *  @return {Boolean} Whether or not the container is fully closed.
     */
    isClosed: function() {
		console.log("isClosed");		
        return (this.container.draggableBehavior.draggable.offset.x == 0);
    },
    /**
     *  Returns true if the container is closed, false otherwise.  This is a
     *  computed value based off the current offset position of the container.
     *
     *  @return {Boolean} Whether or not the container is fully open.
     */
    isOpened: function() {
		console.log("isOpened");		
        var listPosition = this.getListPosition();
            offset = (listPosition == "left") ? this.config.list.minWidth : -this.config.list.minWidth;

        return (this.container.draggableBehavior.draggable.offset.x == offset);
    },
    /**
     *  @private
     *
     *  Sets the container as being closed.  This shouldn't ever be called
     *  directly as it is automatically called by the ``translatable``
     *  "animationend" event after the container has stopped moving.  All this
     *  really does is set the CSS class for the container.
     */
    setClosed: function(closed) {  
		console.log("setClosed");	
        if (closed) {
            this.container.removeCls('open');
        } else {
            this.container.addCls('open');
        }
    },
    /**
     *  @private
     *
     *  Generates a new Ext.dataview.List object to be used for displaying
     *  the navigation items.
     */
    createNavigationList: function() {
		console.log("createNavigationList");
		var listConfig = this.getList(),
			listPosition = this.getListPosition();
        // The menu can be dragged further than the width
        if (listConfig.width) {
            listConfig.minWidth = listConfig.width;
            if (listPosition == "left") {
                // The actual width of the list is determined by maxDrag
                listConfig.width = listConfig.maxDrag || listConfig.width;
            }
        }
        return Ext.create('Ext.dataview.List', Ext.merge({}, listConfig, {
            store: this.store,
            docked: listPosition,
            cls: 'x-slidenavigation-list',
			style: 'position: absolute; top: 0; '+listPosition+': 0; height: 100%;' + 'z-index: 2',
			listeners: {
			   select: this.onSelect,
			   itemtap: this.onItemTap,
			   scope: this
			}
        }));
    },
    /**
     *  @private
     *
     *  Generates and returns the Ext.Container to be used for displaying
     *  content.  This is the "slideable" container that is positioned above
     *  the navigation list.
	 *
	 * @param itemId The itemId of the container.
     */
    createContainer: function(itemId) {
		console.log("createContainer");
        var me                  = this,
            listPosition        = this.getListPosition(),
            containerSlideDelay = this.getContainerSlideDelay(),
            containerConstraint;
        if (listPosition == "left") {
            containerConstraint = {
                min: { x: 0, y: 0 },
                max: { x: me.config.list.maxDrag || Math.max(screen.width, screen.height), y: 0 }
            }
        } else {
            containerConstraint = {
                // TODO: The sliding menu does not currently support maxDrag when positioned on the right,
                //       because it would require adding padding to every element in the list.
                min: { x: -me.config.list.width, y: 0 },
                max: { x: 0, y: 0 }
            }
        }
        var container = Ext.create('Ext.Container', Ext.merge({}, me.config.container, {
            // docked: 'left',
			itemId: itemId, // NEW by wvh
            cls: 'x-slidenavigation-container',
            style: 'width: 100%; height: 100%; position: absolute; opacity: 1; z-index: 3',
            layout: 'card',
            dragAllowed:        false,
            dragAllowedForced:  false,
            draggable: {
                direction: 'horizontal',
                constraint: containerConstraint,
                listeners: {
                    dragstart: {
                        fn:    me.onContainerDragstart,
                        order: 'before',
                        scope: me
                    },
                    dragend: me.onContainerDragend,
                    scope:   me
                },
                translatable: {
                    listeners: {
                        animationstart: function() {
							me.fireEvent('slidestart', me);
                        },
                        animationend: function(translatable, b, c) {
                            // Fire the event now that the animation is done.
                            if (me.__init) {
                                me.fireEvent('slideend', me);
                            }
                            if (me.isOpened()) {
                                me.fireEvent('opened', me);
                                me.doMaskItem(me.container.getActiveItem(), true);
                            }
                            else if (me.isClosed()) {
                                me.fireEvent('closed', me);
                                me.doMaskItem(me.container.getActiveItem(), false);
                            }
                            // Remove the class when the animation is finished, but only
                            // if we're "closed"
                            me.setClosed(me.isClosed());
                        },
                        scope: me // The "x-slidenavigation" container
                    }
                }
            }
        }));
        // Create optional drag-on-container functionality
        if (containerSlideDelay > -1) {
            container.element.on({
                drag: function(e, node, opts, eOpts) {
                    deltaX = e.absDeltaX;
                    deltaY = e.absDeltaY;
                    // This essentially acts as a vertical 'scroll-lock'.  If the user drags more
                    // than 10px vertically, we disable horizontal drag all together.
                    if (deltaY > 10 && !container.dragAllowed) {
                        container.dragAllowedForced = true;
                        return false;
                    };
                    // If vertical scroll-lock hasn't been enforced (``dragAllowedForced``), and
                    // ``deltaX`` is large enough, enable horizontal dragging
                    if (deltaX > containerSlideDelay && !container.dragAllowed && !container.dragAllowedForced) {
                        if (!container.dragAllowed) {
                            scrollParent = me.container.getActiveItem().down('component[scrollable]');
                            if (scrollParent) {
                                scrollable              = scrollParent.getScrollable();
                                scroller                = scrollable.getScroller();
                                scroller._scrollState   = scroller.getDisabled();
                                console.log(scroller.getDisabled() != false);
                                if (scroller._scrollState != false) {
                                    scroller.setDisabled(true);
                                    scrollable.hideIndicators();
                                }
                            }
                        }
                        container.dragAllowed = true;
                        container.element.fireEvent('dragstart');
                    }
                },
                dragend: function() {
                    if (container.dragAllowed) {
                        // Re-enable scrolling on the child element
                        scrollParent = me.container.getActiveItem().down('component[scrollable]');
                        if (scrollParent) {
                            scrollable              = scrollParent.getScrollable();
                            scroller                = scrollable.getScroller();
                            scroller._scrollState   = scroller.getDisabled();
                            if (scroller._scrollState != false) {
                                scroller.setDisabled(null);
                                scrollable.hideIndicators();
                            }
                        }
                    }
                    container.dragAllowedForced = false;
                    container.dragAllowed       = false;
                }
            });
        }
        return container;
    },
	/**
     *  Override the default method so that we actually return the active item in the list,
     *  otherwise this will always return the same thing (the main container, not the
     *  selected item).
     *
     *  @return {Ext.Component/null} The currently active component.
     */
    getActiveItem: function() {
		console.log("getActiveItem");
		if(typeof this.list !== 'undefined') {
			var selection = this.list.getSelection();
			if (selection) {
				return selection[0];
			}
		}
    }
});