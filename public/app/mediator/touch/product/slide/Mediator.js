/**
 * The product slide mediator essentially fulfils the passive view pattern for the product slide view.
 */
Ext.define("Core.mediator.touch.product.slide.Mediator", {
    extend: "Core.mediator.touch.product.base.Mediator",
	
    // set up view event to mediator mapping
    control: {	
    	// titlebar: {
    		// painted: "onPainted"
    	// },
        logoutButton: {
            tap: "onLogoutButtonTap"
        },
        // newProductButton: {
            // tap: "onNewProductButtonTap"
        // },
        searchInput :{
            keyup:          "onSearchKeyUp",
            clearicontap:   "onSearchClearIconTap"
        },
		list: {
			// empty, but is used by search so do not remove
		},
		view: {
			open: function(nav, position, duration) {
                console.log('Container open (position='+position+',duration='+duration+')');
            },
			close: function(nav, position, duration) {
				console.log('Container close (position='+position+',duration='+duration+')');
			},
			select: function(nav, item, index) {
				console.log('Selected item (index='+index+')');
			},
			opened: function(nav) {
				console.log('Container opened');
			},
			closed: function(nav) {
				console.log('Container closed');
			},
			slideend: function(nav) {
				console.log('Container slideend');
			},
			slidestart: function(nav) {
				console.log('Container slidestart');
			},
			dragstart: function(nav) {
				console.log('Container dragstart');
			},
			dragend: function(nav) {
				console.log('Container dragend');
			},
			showmodal: function(args) {
				console.log('Container showmodal: title = ' + args['title'] + ', url = ' + args['url']);
				// Avoid the next call if the url is an object, not a string
				if(typeof args['url'] != null) {
					this.showProductModal(args);
				}
			}
		},
		slideNavigationContainer: {
			//  The 'activate' event fires on the container, 
			//  not the child element.
			activate: function(container) {
                console.log('Activate Container: Item = ' + container.item);
            }			
		}
    },	
	
    /**
     * Sets up global event bus handlers. Called by the parent superclass during the initialization phase.
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
        this.eventBus.addGlobalEventListener(Core.event.ui.Event.SET_UI_SUCCESS, this.onSetUISuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.authentication.Event.LOGIN_SUCCESS, this.onLoginSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.product.Event.GET_PRODUCT_SLIDE_SUCCESS, this.onGetProductSlideSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.product.Event.GET_PRODUCT_SLIDE_FAILURE, this.onGetProductSlideFailure, this);
    },

    /**
     * Dispatches the application event to get the slide of products.
     */
    getProductSlideData: function() {
        this.logger.debug("getProductSlideData");
        this.getView().setMasked({
            xtype: "loadmask",
            message: nineam.locale.LocaleManager.getProperty("productSlide.loading")
        });
        var evt = Ext.create("Core.event.product.Event", Core.event.product.Event.GET_PRODUCT_SLIDE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the show product detail event from the product slide view. Grab the data model
     * from the selected item in the slide and set it as the data provider for the detail view.
     * Finally, slide the detail view onto stage.
     *
     * @param record    The record is the data model for the item in the slide currently selected.
     */
    showProductDetail: function(record) {
        var logMsg = (record != null)
            ? ": id = " + record.get("id") + ", product = " + record.get("name")
            : "new product";
        this.logger.debug("showProductDetail = " + logMsg);
		Core.config.product.Config.setPreviousView('productslide');
        this.navigate(Core.event.navigation.Event.ACTION_SHOW_PRODUCT_DETAIL);
        this.productStore.setSelectedRecord(record);
    },
    
	/**
	 * Handles the show product modal
	 *
	 * @param args	The args to show in the modal
	 */
	showProductModal: function(args) {
		this.logger.debug("showProductModal");
		if(args['title']){
			var title = args['title'];	
			this.logger.debug("title = " + title);			
			var evt = Ext.create("Core.event.title.Event", Core.event.title.Event.SET_TITLE, title);
	        this.eventBus.dispatchGlobalEvent(evt);
		}
		if(args['url']){
			var url = args['url'];
			this.logger.debug("url = " + url);					
			var evt = Ext.create("Core.event.url.Event", Core.event.url.Event.SET_URL, url);
	        this.eventBus.dispatchGlobalEvent(evt);
		}		
		Core.config.product.Config.setPreviousView('productslide');
		this.navigate(Core.event.navigation.Event.ACTION_SHOW_PRODUCT_MODAL);
	},
	
    /**
     * Handles the set UI event. 
     *
     * @param ui    The ui to set.	 
     */
    setUI: function(ui) {
    	this.logger.debug("setUI: ui = " + ui);
		for ( var i=0; i<this.getView().items.length; i++)
        {
            this.getView().items.getAt(i).setUi(ui);
        }
    }, 

	/** 
	 * Handles the set Title event.
	 * @param title	The title to set.
	 */
	setTitle: function(title) {
		this.logger.debug("setTitle: title = " + title);
	},
	
	/** 
	 * Handles the set URL event.
	 * @param url	The url to set.
	 */
	setURL: function(url) {
		this.logger.debug("setURL: url = " + url);
	},
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the painted application-level event.
     */    
    onPainted: function() {
	    this.logger.debug("onPainted");	
    },

    /**
     * Handles the login success application-level event. Slide the product slide view
     * onto stage.
     */
    onLoginSuccess: function() {
        this.logger.debug("onLoginSuccess");        
		if(Core.config.product.Config.getNextView()==='productslide') {
        	this.navigate(Core.event.authentication.Event.LOGIN_SUCCESS);
        	//this.getProductSlideData(); // TEMP commented out by wvh

		}
    },

    /**
     * Handles the set ui success application-level event. Update the components for the ui.
     */
    onSetUISuccess: function() {
        this.logger.debug("onSetUISuccess");
        this.setUI(Core.config.product.Config.getUi());
    },

    /**
     * Handles the get products application-level event.
     */
    onGetProductSlideSuccess: function() {
        this.logger.debug("onGetProductSlideSuccess");
        this.getView().setMasked(false);
        this.getSlide().setStore(this.productStore);
    },

    /**
     * Handles the get products failure event from the login controller.
     */
    onGetProductSlideFailure: function() {
        this.logger.debug("onGetProductSlideFailure");
        this.getView().setMasked(false);
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the tap of the logout button. Dispatches the logout application-level event.
     */
    onLogoutButtonTap: function() {
    	if(Core.config.product.Config.getCurrentView()==='productslide') {      	
	        this.logger.debug("onLogoutButtonTap");
	        var evt = Ext.create("Core.event.authentication.Event", Core.event.authentication.Event.LOGOUT);
	        this.eventBus.dispatchGlobalEvent(evt);
    	}	        
    },

    /**
     * Handles the tap of the new product button. Shows the product detail view.
     */
    onNewProductButtonTap: function() {
    	if(Core.config.product.Config.getCurrentView()==='productslide') {     	
	        this.logger.debug("onNewProductButtonTap");
	        this.showProductDetail();
    	}
    },

    /**
     * Handles the slide disclose of an product slide item. Shows the product detail view passing in a reference to
     * the selected item in the slide.
     *
     * @param {Ext.dataview.List} list  Reference to the visual list component.
     * @param {Object/Ext.data.Model} record Reference to the selected item in the list.
     * @param {Object} target The item in the list that's selected.
     * @param {Number} index The index of the selected item.
     * @param {Object/Event} evt the event that triggered the handler.
     * @param {Object} options ???
     */
    onSlideDisclose: function(slide, record, target, index, evt, options) {
    	if(Core.config.product.Config.getCurrentView()==='productslide') {      	
	        this.logger.debug("onSlideDisclose");
	        this.productStore.setSelectedRecord(record);
	        this.showProductDetail(record);
    	}
    },

    /**
     * Handles the clear icon tap event on the search field. Clears all filter on the list's store.
     */
    onSearchClearIconTap: function() {
    	if(Core.config.product.Config.getCurrentView()==='productslide') {  	
	        this.logger.debug("onSearchClearIconTap");
	        var store = this.getList().getStore();
	        store.clearFilter();
    	}        
    },

    /**
     * Handles the key up event on the search field. Filters the list component's store by the value in the
     * search field and determining if it matches the name element of each record in the list.
     *
     * @param {Ext.field.Search} field Reference to the search field.
     *
     * TODO: BMR: 02/28/13: clean this up. pulled directly from another example with minor changes: http://www.phs4j.com/2012/05/add-a-searchfield-to-a-sencha-touch-2-list-mvc/
     */
    onSearchKeyUp: function(field) {
    	if(Core.config.product.Config.getCurrentView()==='productslide') {
	        this.logger.debug("onSearchKeyUp");
	        //get the store and the value of the field
	        var value = field.getValue();
	        var store = this.getList().getStore(); 
	        //first clear any current filters on the store
	        store.clearFilter();
	        //check if a value is set first, as if it isn't we don't have to do anything
	        if (value) {
	            //the user could have entered spaces, so we must split them so we can loop through them all
	            var searches = value.split(" "),
	                regexps = [],
	                i;
	            //loop them all
	            for (i = 0; i < searches.length; i++) {
	                //if it is nothing, continue
	                if (!searches[i]) continue;
	                //if found, create a new regular expression which is case insensitive
	                regexps.push(new RegExp(searches[i], "i"));
	            }
	            //now filter the store by passing a method
	            //the passed method will be called for each record in the store
	            store.filter(function(record) {
	                var matched = [];
	                //loop through each of the regular expressions
	                for (i = 0; i < regexps.length; i++) {
	                    var search = regexps[i],
	                        didMatch = record.get("title").match(search);
	                    //if it matched the name, push it into the matches array
	                    matched.push(didMatch);
	                }
	                //if nothing was found, return false (don't so in the store)
	                if (regexps.length > 1 && matched.indexOf(false) != -1) {
	                    return false;
	                } else {
	                    //else true true (show in the store)
	                    return matched[0];
	                }
	            });
	        }
    	}//eof if
    }
});