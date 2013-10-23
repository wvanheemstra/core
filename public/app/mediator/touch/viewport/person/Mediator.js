/**
 * The viewport mediator essentially fulfils the passive view pattern for the application's Viewport.
 *
 * It is expected that different form factors may require a new mediator implementation as the events could be
 * different; e.g. a login button on a desktop app could be click whereas mobile could be tap.
 *
 * TODO: BMR: 02/22/13: Don't add all the views to the stage at once. Do it on demand.
 */
Ext.define("Core.mediator.touch.viewport.person.Mediator", {
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
        personListView:         "personListView",
		personSlideView:        "personSlideView",
        personTileView:         "personTileView",
        personModalView:		"personModalView",
        personDetailView:       "personDetailView"
    },

    ////////////////////////////////////////////////
    // FUNCTIONAL METHODS
    ////////////////////////////////////////////////

    /**
     * Initializes the view mediator and sets up global event bus handlers.
     */
    init: function() {
        this.logger.debug("init");
		// Add a Listener. Listen for [Viewport ~ Orientation] Change.
        //Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, {buffer: 50 });
        return this.callParent();
    },

    /**
     * Handles orientation change. 
     */	
/* 	handleOrientationChange: function(viewport, orientation, width, height) {
        console.log("handleOrientationChange");
        // Execute the code that needs to fire on Orientation Change.
		alert('orientation:' + orientation + ' width:' + width + ' height:' + height);
    }, */

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

		var background = Core.config.person.Config.getBackground();
		this.setBackground(background);		
		
		var ui = Core.config.person.Config.getUi();
		this.setUI(ui);
		
		var company = Core.config.person.Config.getCompany();
		this.setCompany(company);
		
		var url = Core.config.person.Config.getUrl();
		this.setURL(url);
		
		var id = Core.config.person.Config.getId();
		var sessionId = Core.config.person.Config.getSessionId();
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
				var nextView = Core.config.person.Config.getNextView();
                console.log("next view: " + nextView); // added by wvh, for testing only
				// LOGIN
				if(nextView == 'login') {view = this.getViewByXType("loginView");}
				// PERSON
				if(nextView == 'personslide') {view = this.getViewByXType("personSlideView");}
				if(nextView == 'personlist') {view = this.getViewByXType("personListView");}
				if(nextView == 'persontile') {view = this.getViewByXType("personTileView");}
				Core.config.person.Config.setCurrentView(nextView);
                direction = 'left';
                break;
				// LOGIN
            case Core.event.authentication.Event.LOGOUT_SUCCESS:
                view = this.getLoginView();
				Core.config.person.Config.setCurrentView('login');
                type = 'pop';
				duration = 600;
				easing = {type: 'ease-out'};
                break;			
				// PERSON
            case Core.event.navigation.Event.ACTION_SHOW_PERSON_SLIDE:
                view = this.getPersonSlideView();
				Core.config.person.Config.setCurrentView('personslide');
                direction = 'right';
                break;
				
            case Core.event.navigation.Event.ACTION_SHOW_PERSON_LIST:
                view = this.getPersonListView();
				Core.config.person.Config.setCurrentView('personlist');
                direction = 'right';
                break;

            case Core.event.navigation.Event.ACTION_SHOW_PERSON_TILE:
                view = this.getPersonTileView();
				Core.config.person.Config.setCurrentView('persontile');
                direction = 'right';
                break;

            case Core.event.navigation.Event.ACTION_SHOW_PERSON_MODAL:
                view = this.getPersonModalView();
				Core.config.person.Config.setCurrentView('personmodal');
				type = 'pop';
				duration = 600;
				easing = {type: 'ease-in'};
                break;				
				
            case Core.event.navigation.Event.ACTION_SHOW_PERSON_DETAIL:
                view = this.getPersonDetailView();
				Core.config.person.Config.setCurrentView('persondetail');
                direction = 'left';
				type = 'slide';
                break;

            case Core.event.navigation.Event.ACTION_BACK_SHOW_PERSON_SLIDE:
                view = this.getPersonSlideView();
				Core.config.person.Config.setCurrentView('personslide');
                direction = 'right';
				type = 'slide';
                break;				
				
            case Core.event.navigation.Event.ACTION_BACK_SHOW_PERSON_LIST:
                view = this.getPersonListView();
				Core.config.person.Config.setCurrentView('personlist');
                direction = 'right';
				type = 'slide';
                break;
                
            case Core.event.navigation.Event.ACTION_BACK_SHOW_PERSON_TILE:
                view = this.getPersonTileView();
				Core.config.person.Config.setCurrentView('persontile');
                direction = 'right';
				type = 'slide';
                break;				

            case Core.event.navigation.Event.ACTION_CLOSE_SHOW_PERSON_SLIDE:
                view = this.getPersonSlideView();
				Core.config.person.Config.setCurrentView('personslide');
				type = 'pop';
				duration = 600;
				easing = {type: 'ease-out'};
                break;				
        }

        // only navigate to the screen if the view exist
        if(view !== null) {
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
		
	//	this.navigate(Core.event.authentication.Event.LOGIN_SUCCESS);	
	
		// The views need to be able to load their data,
		// hence we throw a LOGIN_SUCCESS event
		// to which they are listening
		var evt = Ext.create("Core.event.authentication.Event", Core.event.authentication.Event.LOGIN_SUCCESS);
		this.eventBus.dispatchGlobalEvent(evt);
    },
    
    /**
     * Handles the get session failure event
     */
    onGetSessionFailure: function() { 
    	this.logger.debug("onGetSessionFailure"); 
    	//Core.config.person.Config.setCurrentView('login');
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

