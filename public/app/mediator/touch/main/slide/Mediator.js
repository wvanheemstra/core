/**
 * The main slide mediator essentially fulfils the passive view pattern for the main slide view.
 */
Ext.define("Core.mediator.touch.main.slide.Mediator", {
    extend: "Core.mediator.touch.main.base.Mediator",
	
    // set up view event to mediator mapping
    control: {
//		'button[action=showPopup]': {
//			tap: 'showPopup'
//		},	
    	// titlebar: {
    		// painted: "onPainted"
    	// },
        logoutButton: {
            tap: "onLogoutButtonTap"
        },
        // newMainButton: {
            // tap: "onNewMainButtonTap"
        // },
        // searchInput :{
            // keyup:          "onSearchKeyUp",
            // clearicontap:   "onSearchClearIconTap"
        // },
        // slide: {
            // disclose: "onSlideDisclose"
        // },
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
					this.showMainModal(args);
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
        this.eventBus.addGlobalEventListener(Core.event.main.Event.GET_MAIN_SLIDE_SUCCESS, this.onGetMainSlideSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.main.Event.GET_MAIN_SLIDE_FAILURE, this.onGetMainSlideFailure, this);
    },

    /**
     * Dispatches the application event to get the slide of mains.
     */
    getMainSlideData: function() {
        this.logger.debug("getMainSlideData");
        this.getView().setMasked({
            xtype: "loadmask",
            message: nineam.locale.LocaleManager.getProperty("mainSlide.loading")
        });
        var evt = Ext.create("Core.event.main.Event", Core.event.main.Event.GET_MAIN_SLIDE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the show main detail event from the main slide view. Grab the data model
     * from the selected item in the slide and set it as the data provider for the detail view.
     * Finally, slide the detail view onto stage.
     *
     * @param record    The record is the data model for the item in the slide currently selected.
     */
    showMainDetail: function(record) {
        var logMsg = (record != null)
            ? ": id = " + record.get("id") + ", main = " + record.get("name")
            : "new main";
        this.logger.debug("showMainDetail = " + logMsg);
		Core.config.global.Config.setPreviousView('mainslide');
        this.navigate(Core.event.navigation.Event.ACTION_SHOW_MAIN_DETAIL);
        this.mainStore.setSelectedRecord(record);
    },
    
	/**
	 * Handles the show main modal
	 *
	 * @param args	The args to show in the modal
	 */
	showMainModal: function(args) {
		this.logger.debug("showMainModal: title = " + args['title'] + ", url = " + args['url']);
		if(args['title']){
			this.setTitle(args['title']);
		}
		if(args['url']){
			this.setURL(args['url']);
		}		
		Core.config.global.Config.setPreviousView('mainslide');
		this.navigate(Core.event.navigation.Event.ACTION_SHOW_MAIN_MODAL);
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
		Core.config.global.Config.setTitle(title);
	},
	
	/** 
	 * Handles the set URL event.
	 * @param url	The url to set.
	 */
	setURL: function(url) {
		this.logger.debug("setURL: url = " + url);
		Core.config.global.Config.setUrl(url);
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
     * Handles the login success application-level event. Slide the main slide view
     * onto stage.
     */
    onLoginSuccess: function() {
        this.logger.debug("onLoginSuccess");        
		if(Core.config.global.Config.getNextView()==='mainslide') {
        	this.navigate(Core.event.authentication.Event.LOGIN_SUCCESS);
        	//this.getMainSlideData(); // TEMP commented out by wvh

		}
    },

    /**
     * Handles the set ui success application-level event. Update the components for the ui.
     */
    onSetUISuccess: function() {
        this.logger.debug("onSetUISuccess");
        this.setUI(Core.config.global.Config.getUi());
    },

    /**
     * Handles the get mains application-level event.
     */
    onGetMainSlideSuccess: function() {
        this.logger.debug("onGetMainSlideSuccess");
        this.getView().setMasked(false);
        this.getSlide().setStore(this.mainStore);
    },

    /**
     * Handles the get mains failure event from the login controller.
     */
    onGetMainSlideFailure: function() {
        this.logger.debug("onGetMainSlideFailure");
        this.getView().setMasked(false);
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the tap of the logout button. Dispatches the logout application-level event.
     */
    onLogoutButtonTap: function() {
    	if(Core.config.global.Config.getCurrentView()==='mainslide') {      	
	        this.logger.debug("onLogoutButtonTap");
	        var evt = Ext.create("Core.event.authentication.Event", Core.event.authentication.Event.LOGOUT);
	        this.eventBus.dispatchGlobalEvent(evt);
    	}	        
    },

    /**
     * Handles the tap of the new main button. Shows the main detail view.
     */
    onNewMainButtonTap: function() {
    	if(Core.config.global.Config.getCurrentView()==='mainslide') {     	
	        this.logger.debug("onNewMainButtonTap");
	        this.showMainDetail();
    	}
    },

    /**
     * Handles the slide disclose of an main slide item. Shows the main detail view passing in a reference to
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
    	if(Core.config.global.Config.getCurrentView()==='mainslide') {      	
	        this.logger.debug("onSlideDisclose");
	        this.mainStore.setSelectedRecord(record);
	        this.showMainDetail(record);
    	}
    },

    /**
     * Handles the clear icon tap event on the search field. Clears all filter on the slide's store.
     */
    onSearchClearIconTap: function() {
    	if(Core.config.global.Config.getCurrentView()==='mainslide') {    	
	        this.logger.debug("onSearchClearIconTap");
	        var store = this.getSlide().getStore();
	        store.clearFilter();
    	}        
    },

    /**
     * Handles the key up event on the search field. Filters the slide component's store by the value in the
     * search field and determining if it matches the name element of each record in the slide.
     *
     * @param {Ext.field.Search} field Reference to the search field.
     *
     * TODO: BMR: 02/28/13: clean this up. pulled directly from another example with minor changes: http://www.phs4j.com/2012/05/add-a-searchfield-to-a-sencha-touch-2-list-mvc/
     */
    onSearchKeyUp: function(field) {
    	if(Core.config.global.Config.getCurrentView()==='mainslide') {
	        this.logger.debug("onSearchKeyUp");
	        //get the store and the value of the field
	        var value = field.getValue();
	        var store = this.getSlide().getStore();
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
	                        didMatch = record.get("name").match(search);
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