/**
 * The slide of mains view for the application.
 *
 * <p> 
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.main.slide.View", {
	extend: "Ext.Container", // WAS "Ext.Panel",
    alias: "widget.mainSlideView",
    controller: "Core.mediator.extjs.main.slide.Mediator",
    header: false,

    requires: [
	
	    "Ext.Container",
		"Ext.MessageBox",
		"Ext.Panel",
		"Ext.Toolbar",
		//"Ext.event.publisher.Dom", //THIS IS SPECIFIC TO Touch
	
        "Ext.data.*",
        "Ext.util.*",
        "Ext.view.View",
        "Core.view.extjs.component.LiveSearchGridPanel",
        "nineam.locale.LocaleManager"
    ],

//    layout: {
//        type: "fit" // WHY DOES 'fit' NOT WORK AS DESIGNED ??
//    },

    /**
     * @event close
     * @preventable moveContainer
     * Fires whenever the container is closed
     * @param {Ext.ux.slidenavigation.View} this The navigation View instance
     * @param {Number} position The x-coordinate to which the container will be moved to
     * @param {Number} duration The duration of the slide event
     */

    /**
     * @event open
     * @preventable moveContainer
     * Fires whenever the container is opened
     * @param {Ext.ux.slidenavigation.View} this The navigation View instance
     * @param {Number} position The x-coordinate to which the container will be moved to
     * @param {Number} duration The duration of the slide event
     */

    /**
     * @event select
     * @preventable setContainerItem
     * Fires whenever an item in the menu is selected
     * @param {Ext.ux.slidenavigation.View} this The navigation View instance
     * @param {Ext.Component} item The selected item
     * @param {Integer} index The index of the selected item
     */

    /**
     * @event slideend
     * Fires whenever the user has finished sliding the container.  This is fired once the
     * animation is complete.
     * @param {Ext.ux.slidenavigation.View} this The navigation View instance
     */

    /**
     * @event slidestart
     * Fires whenever the user has started sliding the container.  This is fired once the
     * animation is complete.
     * @param {Ext.ux.slidenavigation.View} this The navigation View instance
     */

    /**
     * @event opened
     * Fires after the container is fully opened.
     * @param {Ext.ux.slidenavigation.View} this The navigation View instance
     */

    /**
     * @event closed
     * Fires after the container is fully closed.
     * @param {Ext.ux.slidenavigation.View} this The navigation View instance
     */

	config: { 
	 
	    /**
         * @cfg {Object} list Configuration for the navigation list.
         * The maxDrag property is not supported when the list is on the right.
         */
        list: {
            width: 250,
            maxDrag: null,
            itemTpl: '{title}',
            grouped: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light'
            }]
        },

        /**
         * @cfg {Object} container Configuration for the container
         */
        //container: {}, // THIS THROWS Uncaught TypeError: Object #<Object> has no method 'getById' 

        /**
         * @cfg {Object/Boolean} itemMask Configuration for the mask used to mask
         * items when the container is opened.  Set to false to disable masking of
         * items.
         */
        itemMask: false,
		
        /**
         * @cfg {Array} items An array of items to put into the navigation list.
         * The items can either be Ext components or special objects with a "handler"
         * key, which should be a function to execute when selected.  Additionally, you
         * can define the order of the items by defining an 'order' parameter.
         */        
        items: [],

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
        groups: {},

        /**
         * @cfg {Object} defaults An object of default values to apply to any Ext
         * components created from those listed in ``items``.
         */
        defaults: {
            layout: 'card'
        },
		
        /**
         * @cfg {String} listPosition Position of the list menu, left or right.
         * Defaults to 'left'.
         */
        listPosition: 'left',

        /**
         * @cfg {String} slideSelector Class selector of object (or parent)
         * of which dragging should be allowed.  Defaults to the entire container.
         * For example, this could be set to something like 'x-toolbar' to restrict
         * dragging only to a toolbar.
         */
        slideSelector: '',

        /**
         * @cfg {Integer} containerSlideDelay Pixel offset that must be dragged before
         * allowing the underlying container to be dragged.
         * Defaults to -1, which is disabled.  Setting this to 10 will very closely mimic
         * the behaviour of the FB version.
         */
        containerSlideDelay: -1,
        
        /**
         * @cfg {Integer} slideDuration Number of milliseconds to animate the sliding
         * of the container when "flicked".  By default the animation is disable on
         * Android.
         */
        slideDuration: 200, //WAS Ext.os.is('Android') ? 0 : 200,		

        /**
         * @cfg {Integer} selectSlideDuration Number of milliseconds to animate the sliding
         * of the container when list item is selected (if closeOnSelect = true). The default
         * value here of 300 gives a much nicer feel.  By default the animation is disable on
         * Android.
         */
        selectSlideDuration: 300, //WAS Ext.os.is('Android') ? 0 : 300,

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
		
        slideButtonDefaults: {}
		
	},//eof config 
	
	initConfig: function() {
	
		console.log("initConfig");

        var me = this;
		
        me._indexCount = 0;		
		
		// Create the Store
		
		//more
		
		console.log("store created");
		
		// more

	},//eof initConfig

    initialize: function() {
	
		console.log("initialize");
		
        this.__init = false;	

        this.callParent();
		
        this.addCls('x-slidenavigation');
		
		
		// more
		
	},//eof initialize

    /**
     *  @private
     *
     *  Adds an array of items (or a single item) into the list.
     */
    addItems: function(items) {
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
     *  Gets the configuration for masking items.  If masking items is disabled
     *  this returns false.
     */
    getMask: function() {
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
        var container = nav.container;
        container.setActiveItem(item);
    },
    
    /**
     *  @private
     *
     *  Callback function for when the container has started being dragged.
     */
    onContainerDragstart: function(draggable, e, offset, eOpts) {
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
        var velocity     = Math.abs(e.deltaX / e.deltaTime),
            listPosition = this.getListPosition()
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
        return (this.container.draggableBehavior.draggable.offset.x == 0);
    },


    /**
     *  Returns true if the container is closed, false otherwise.  This is a
     *  computed value based off the current offset position of the container.
     *
     *  @return {Boolean} Whether or not the container is fully open.
     */
    isOpened: function() {
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
    createNavigationList: function(store) {
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
            style: 'position: absolute; top: 0; '+listPosition+': 0; height: 100%;' +
                   'z-index: 2',
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
     */
    createContainer: function() {
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

                    // This essentally acts as a vertical 'scroll-lock'.  If the user drags more
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
        var selection = this.list.getSelection();
        if (selection) {
            return selection[0];
        }
    },
	
	////////////////// BELOW HERE IS SIMILAR TO MAINLIST /////////////// 

    height: 330,
	width: 400,
	
    items: [
        {
            xtype: "toolbar",
			itemId: "toolbar",
            //ui: "neutral",			
            width: 400,

            items: [
                {
                    itemId: "logoutButton",
					//ui: "neutral",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "mainSlide.logOff"
                        }
                    ]
                },
                {
                    xtype: "tbfill"
                },
                {
                    xtype: "label",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "mainSlide.title"
                        }
                    ]

                },
                {
                    xtype: "tbfill"
                },
                {
                    itemId: "newMainButton",
					//ui: "neutral",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "mainSlide.new"
                        }
                    ]
                }
            ]
        },
        {
            xtype: "livesearchgridpanel",
            //ui: "neutral",			
            store: null,
            itemId: "slide",
            forceFit: true,
            autoScroll: true,
            height: 300,
            viewConfig: {
                stripeRows: true
            },
            columns: [
                {
                    dataIndex:  "name",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "mainSlide.name"
                        }
                    ]
                }
            ],
            plugins: [
                {
                    ptype: "localization",
                    method: "setTitle",
                    key: "mainSlide.search"
                }
            ]
        }
    ]
});