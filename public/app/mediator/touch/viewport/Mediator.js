/**
 * The viewport mediator essentially fulfils the passive view pattern for the application's Viewport.
 *
 * It is expected that different form factors may require a new mediator implementation as the events could be
 * different; e.g. a login button on a desktop app could be click whereas mobile could be tap.
 *
 * TODO: BMR: 02/22/13: Don't add all the views to the stage at once. Do it on demand.
 */
Ext.define("Core.mediator.touch.viewport.Mediator", {
    extend: "Core.mediator.abstract.Mediator",

    requires: [   
		"Core.event.session.Event",
        "Core.event.background.Event", 		
        "Core.event.ui.Event",     
        "Core.event.company.Event",  
        "Core.event.url.Event", 		
        "Core.event.authentication.Event",
        "Core.event.navigation.Event"
    ],

    inject: [
        "logger"
    ],

    config: {
        // create references to this mediator's views so we can listen to events and grab data from them
        loginView:              "loginView",
        mainSlideView:			"mainSlideView",		
        mainListView:			"mainListView",
        mainTileView:			"mainTileView",
        mainModalView:			"mainModalView",	
        mainDetailView:		    "mainDetailView"
    },

    ////////////////////////////////////////////////
    // FUNCTIONAL METHODS
    ////////////////////////////////////////////////

    /**
     * Initializes the view mediator and sets up global event bus handlers.
     */
    init: function() {
        this.logger.debug("init");
        return this.callParent();
    },

    /**
     * Sets up global event bus handlers. Called by the parent superclass during the initialization phase.
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
	    this.eventBus.addGlobalEventListener(Core.event.session.Event.GET_SESSION_SUCCESS, this.onGetSessionSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.session.Event.GET_SESSION_FAILURE, this.onGetSessionFailure, this); 	
        this.eventBus.addGlobalEventListener(Core.event.navigation.Event.NAVIGATE, this.onNavigate, this);
    },

	/**
	 * Sets up the Viewport
	 *
	 */
	setupViewport: function(){
		this.logger.debug("setupViewport");

		var background = Core.config.global.Config.getBackground();
		this.setBackground(background);		
		
		var ui = Core.config.global.Config.getUi();
		this.setUI(ui);
		
		var company = Core.config.global.Config.getCompany();
		this.setCompany(company);
		
		var url = Core.config.global.Config.getUrl();
		this.setURL(url);
		
		var id = Core.config.global.Config.getId();
		var sessionId = Core.config.global.Config.getSessionId();
		this.getSession(id, sessionId);
	},	

    /**
     * Sets the background
     *
	 * @param background	The background to set.	 
     */
    setBackground: function(background) {
        this.logger.debug("setBackground: background = " + background);
		var evt = Ext.create("Core.event.background.Event", Core.event.background.Event.SET_BACKGROUND, background);
		this.eventBus.dispatchGlobalEvent(evt);
    },
	
    /**
     * Sets the ui
     *
	 * @param ui	The ui to set.
     */
    setUI: function(ui) {
        this.logger.debug("setUI: ui = " + ui);
		var evt = Ext.create("Core.event.ui.Event", Core.event.ui.Event.SET_UI, ui);
		this.eventBus.dispatchGlobalEvent(evt);		
    },
    
    /**
     * Sets the company
     *
	 * @param company	The company to set.	 
     */
    setCompany: function(company) {
        this.logger.debug("setCompany: company = " + company);
		var evt = Ext.create("Core.event.company.Event", Core.event.company.Event.SET_COMPANY, company);
		this.eventBus.dispatchGlobalEvent(evt);
    },    

    /**
     * Sets the url
     *
	 * @param url	The url to set.	 
     */
    setURL: function(url) {
        this.logger.debug("setURL: url = " + url);
		var evt = Ext.create("Core.event.url.Event", Core.event.url.Event.SET_URL, url);
		this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Maps the current application action like company, ui, login, logout, show a view, etc and navigates to a
     * corresponding view.
     *
     * @param action    The current application-level action.
     */
    navigate: function(action) {
        this.logger.debug("navigate: action = " + action);
        var view;
		var animation = {};
        var direction;
		var type = 'slide'; // default, choose from: slide, pop, flip, fadeOut, etc.
		var duration = 0;
		var easing = {};
        switch(action) {      	

            case Core.event.authentication.Event.LOGIN_SUCCESS:
            	// HERE WE GET WHICH VIEW TO GO TO
				var nextView = Core.config.global.Config.getNextView();
                console.log("next view: " + nextView); // added by wvh, for testing only
				// LOGIN
				if(nextView == 'login') {view = this.getViewByXType("loginView");}
				// MAIN
				if(nextView == 'mainslide') {view = this.getViewByXType("mainSlideView");}
				if(nextView == 'mainlist') {view = this.getViewByXType("mainListView");}
				if(nextView == 'maintile') {view = this.getViewByXType("mainTileView");}
				Core.config.global.Config.setCurrentView(nextView);
                direction = 'left';
                break;

            case Core.event.authentication.Event.LOGOUT_SUCCESS:
                view = this.getLoginView();
				Core.config.global.Config.setCurrentView('login');
                type = 'pop';
				duration = 600;
				easing = {type: 'ease-out'};
                break;
			
				// MAIN
            case Core.event.navigation.Event.ACTION_SHOW_MAIN_SLIDE:
                view = this.getMainSlideView();
				Core.config.global.Config.setCurrentView('mainslide');
                direction = 'right';
                break;
				
            case Core.event.navigation.Event.ACTION_SHOW_MAIN_LIST:
                view = this.getMainListView();
				Core.config.global.Config.setCurrentView('mainlist');
                direction = 'right';
                break;

            case Core.event.navigation.Event.ACTION_SHOW_MAIN_TILE:
                view = this.getMainTileView();
				Core.config.global.Config.setCurrentView('maintile');
                direction = 'right';
                break;

            case Core.event.navigation.Event.ACTION_SHOW_MAIN_MODAL:
                view = this.getMainModalView();
				Core.config.global.Config.setCurrentView('mainmodal');
				type = 'pop';
				duration = 600;
				easing = {type: 'ease-in'};
                break;				
				
            case Core.event.navigation.Event.ACTION_SHOW_MAIN_DETAIL:
                view = this.getMainDetailView();
				Core.config.global.Config.setCurrentView('maindetail');
                direction = 'left';
				type = 'slide';
                break;

            case Core.event.navigation.Event.ACTION_BACK_SHOW_MAIN_SLIDE:
                view = this.getMainSlideView();
				Core.config.global.Config.setCurrentView('mainslide');
                direction = 'right';
				type = 'slide';
                break;				
				
            case Core.event.navigation.Event.ACTION_BACK_SHOW_MAIN_LIST:
                view = this.getMainListView();
				Core.config.global.Config.setCurrentView('mainlist');
                direction = 'right';
				type = 'slide';
                break;
                
            case Core.event.navigation.Event.ACTION_BACK_SHOW_MAIN_TILE:
                view = this.getMainTileView();
				Core.config.global.Config.setCurrentView('maintile');
                direction = 'right';
				type = 'slide';
                break;				

            case Core.event.navigation.Event.ACTION_CLOSE_SHOW_MAIN_SLIDE:
                view = this.getMainSlideView();
				Core.config.global.Config.setCurrentView('mainslide');
				type = 'pop';
				duration = 600;
				easing = {type: 'ease-out'};
                break;				
			
        }

        // only navigate to the screen if the view exist
        if(view != null) {
			animation['duration'] = duration;
			animation['type'] = type;
			animation['direction'] = direction;
			animation['easing'] = easing;
			
			switch(type) {
				case 'slide':
					Ext.Viewport.animateActiveItem(view, animation);
					break;
				case 'pop':
					view.hideAnimation = 'fadeOut';
					Ext.Viewport.animateActiveItem(view, animation);
					break;
				case 'show':
					view.show();		
					break;
				case 'flip':
					Ext.Viewport.animateActiveItem(view, animation);
					break;
				case 'fadeOut':	
					Ext.Viewport.animateActiveItem(view, animation);
					break;
			}	
        } else {
            this.logger.warn("ViewportMediator.navigate: couldn't map navigation to action = ", action);
        }

    },
	
    /**
     * Check if there is still a session of a not-logged off user.
     *
	 * @param id	The id to get
	 * @param sessionId	The sessionId to get
     */
	getSession: function(id, sessionId) {
	    this.logger.debug("getSession: id = " + id + ", sessionId = " + sessionId);
    	var evt = Ext.create("Core.event.session.Event", Core.event.session.Event.GET_SESSION, id, sessionId);
        this.eventBus.dispatchGlobalEvent(evt);
	},
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the get session success event
     */
    onGetSessionSuccess: function() { 
    	this.logger.debug("onGetSessionSuccess"); 	
    	// The next view to go to after login is set in the config file
        //var view = this.getView();
        //view.setLoading(false);
		this.navigate(Core.event.authentication.Event.LOGIN_SUCCESS);		
    },
    
    /**
     * Handles the get session failure event
     */
    onGetSessionFailure: function() { 
    	this.logger.debug("onGetSessionFailure"); 
    	//Core.config.global.Config.setCurrentView('login');
		this.navigate(Core.event.authentication.Event.LOGOUT_SUCCESS);
    },	
	
    /**
     * Handles the navigation application event and passes on the action to a functional, testable method.
     */
    onNavigate: function(event) {
        this.logger.debug("onNavigate");
        this.navigate(event.action);
    }
});

