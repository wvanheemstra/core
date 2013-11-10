/**
 * The viewport mediator essentially fulfils the passive view pattern for the application's Viewport.
 *
 * It is expected that different form factors may require a new mediator implementation as the events could be
 * different; e.g. a login button on a desktop app could be click whereas mobile could be tap.
 *
 * TODO: BMR: 02/22/13: Don't add all the views to the stage at once. Do it on demand.
 */
Ext.define("Core.mediator.extjs.viewport.person.Mediator", {
    extend: "Core.mediator.abstract.Mediator",

    requires: [
		"Core.event.session.Event",
        "Core.event.ui.Event",     
        "Core.event.company.Event",	
        "Core.event.url.Event",
        "Core.event.background.Event",		
        "Core.event.authentication.Event",
        "Core.event.navigation.Event"
    ],

    inject: [
        "logger"
    ],

    ////////////////////////////////////////////////
    // FUNCTIONAL METHODS
    ////////////////////////////////////////////////

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

		var ui = Core.config.person.Config.getUi();
		this.setUI(ui);
		
		var background = Core.config.person.Config.getBackground();
		this.setBackground(background);	
		
		var company = Core.config.person.Config.getCompany();
		this.setCompany(company);
		
		var url = Core.config.person.Config.getUrl();
		this.setURL(url);	
		
		var id = Core.config.person.Config.getId();
		var sessionId = Core.config.person.Config.getSessionId();
		this.getSession(id, sessionId);
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
     * Maps the current application action like login, logout, show a view, etc and navigates to a
     * corresponding view.
     *
     * @param action    The current application-level action.
     */
    navigate: function(action) {
        this.logger.debug("navigate: action = " + action);

        var view;
        var direction;

        switch(action) {
		
            case Core.event.authentication.Event.LOGIN_SUCCESS:
            	// HERE WE GET WHICH VIEW TO GO TO
				var nextView = Core.config.person.Config.getNextView();
                console.log("next view: " + nextView);
				// LOGIN
				if(nextView === 'login') {view = this.getViewByXType("loginView");}			
				// PERSON
				if(nextView === 'personslide') {view = this.getViewByXType("personSlideView");}
				if(nextView === 'personlist') {view = this.getViewByXType("personListView");}
				if(nextView === 'persontile') {view = this.getViewByXType("personTileView");}	
				if(nextView === 'personmodal') {view = this.getViewByXType("personModalView");}				
				
				Core.config.person.Config.setCurrentView(nextView);
                direction = this.getSlideLeftTransition();
                break;
			// LOGIN
            case Core.event.authentication.Event.LOGOUT_SUCCESS:
                view = this.getViewByXType("loginView");
				Core.config.person.Config.setCurrentView('login');
                direction = this.getSlideRightTransition();
                break;
			// PERSON
            case Core.event.navigation.Event.ACTION_SHOW_PERSON_DETAIL:
                view = this.getViewByXType("personDetailView");
				Core.config.person.Config.setCurrentView('persondetail');
                direction = this.getSlideLeftTransition();
                break;
				
            case Core.event.navigation.Event.ACTION_SHOW_PERSON_MODAL:
                view = this.getViewByXType("personModalView");
				Core.config.person.Config.setCurrentView('personmodal');
                direction = this.getSlideLeftTransition();// CHANGE THIS TO AN OPEN TRANSITION
                break;				

            case Core.event.navigation.Event.ACTION_BACK_SHOW_PERSON_SLIDE:
                view = this.getViewByXType("personSlideView");
				Core.config.person.Config.setCurrentView('personslide');
                direction = this.getSlideRightTransition();
                break;
				
            case Core.event.navigation.Event.ACTION_BACK_SHOW_PERSON_LIST:
                view = this.getViewByXType("personListView");
				Core.config.person.Config.setCurrentView('personlist');
                direction = this.getSlideRightTransition();
                break;

            case Core.event.navigation.Event.ACTION_BACK_SHOW_PERSON_TILE:
                view = this.getViewByXType("personTileView");
				Core.config.person.Config.setCurrentView('persontile');
                direction = this.getSlideRightTransition();
                break;

            case Core.event.navigation.Event.ACTION_CLOSE_SHOW_PERSON_SLIDE:
                view = this.getViewByXType("personSlideView");
				Core.config.person.Config.setCurrentView('personslide');
                direction = this.getSlideRightTransition(); // CHANGE THIS TO A CLOSE TRANSITION
        }

        // only navigate to the screen if the view exists
        if(view !== null) {
//            this.slidleft(this.getViewByXType("extjsLoginView"));
            this.logger.debug("navigate = " + view.getItemId());
            this.getView().setView(view.getItemId());
//            this.setView(view.getItemId());
        } else {
            this.logger.warn("ViewportMediator.navigate: couldn't map navigation to action = " + action + " because " +
                "the view is null. Check the xtype.");
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
	
//    /**
//     * TODO
//     * @param view
//     */
//    setView: function(view) {
//        console.log("Viewport.setView: " + view);
//
//        try {
//            for ( var i=0; i<this.getView().items.length; i++)
//            {
//                var id = this.getView().items.getAt(i).getItemId();
//                if (id === view)
//                {
//                    this.getView().items.getAt(i).show();
//                } else {
//                    this.getView().items.getAt(i).hide();
//                }
//            }
//        } catch(e) {
//
//        }
//
//    },

    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////	

    /**
     * Handles the get session success event
     */
    onGetSessionSuccess: function() { 
    	this.logger.debug("onGetSessionSuccess"); 	
    	//Core.config.person.Config.setNextView('maintile');
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
    	Core.config.person.Config.setCurrentView('login');
        //var view = this.getView();
        //view.setLoading(false);
		this.navigate(Core.event.authentication.Event.LOGOUT_SUCCESS);
    },	
	
    /**
     * Handles the navigation application event and passes on the action to a functional, testable method.
     */
    onNavigate: function(event) {
        this.logger.debug("onNavigate");
        this.navigate(event.action);
    }
	
    // slidleft: function (view) {
        // var results = this.getView().getState();
        // view.animate({
            // to: {
                // x: -results.width,
                // y: 0
            // },
            // duration: 1000,
            // listeners: {
                // afteranimate: function() {
                    // this.getView().getLayout().setActiveItem(this.getViewByXType("extjsMainListView")); // IS THIS NOT A TYPO, SHOULD IT BE mainListView INSTEAD ?
                    // this.logger.debug("after")
                // }
            // }
        // })
    // }
});