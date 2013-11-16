/**
 * The viewport mediator essentially fulfils the passive view pattern for the application's Viewport.
 *
 * It is expected that different form factors may require a new mediator implementation as the events could be
 * different; e.g. a login button on a desktop app could be click whereas mobile could be tap.
 *
 * TODO: BMR: 02/22/13: Don't add all the views to the stage at once. Do it on demand.
 */
Ext.define("Core.mediator.extjs.viewport.asset.Mediator", {
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

		var ui = Core.config.asset.Config.getUi();
		this.setUI(ui);
		
		var background = Core.config.asset.Config.getBackground();
		this.setBackground(background);	
		
		var company = Core.config.asset.Config.getCompany();
		this.setCompany(company);
		
		var url = Core.config.asset.Config.getUrl();
		this.setURL(url);	
		
		var id = Core.config.asset.Config.getId();
		var sessionId = Core.config.asset.Config.getSessionId();
		this.getSession(id, sessionId);

		var lib = ['extjs'];
		console.log("lib = " + lib);		
		var models = ['asset'];
		console.log("models = " + models);
		var viewmodels = ['main', 'asset', 'asset/set', 'options'];
		console.log("viewmodels = " + viewmodels);
		var views = ['main', 'asset', 'asset/set', 'asset/schedule', 'asset/summary', 'options'];
		console.log("views = " + views);
		var locales = ['locale_en'];
		console.log("locales = " + locales);
		var state = {
		    lib: lib,
			models: models, 
			viewmodels: viewmodels, 
			views: views,
			locales: locales
		};
		this.setState(state);
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
				var nextView = Core.config.asset.Config.getNextView();
                console.log("next view: " + nextView);
				// LOGIN
				if(nextView === 'login') {view = this.getViewByXType("loginView");}			
				// ASSET
				if(nextView === 'assetslide') {view = this.getViewByXType("assetSlideView");}
				if(nextView === 'assetlist') {view = this.getViewByXType("assetListView");}
				if(nextView === 'assettile') {view = this.getViewByXType("assetTileView");}
				if(nextView === 'assetmodal') {view = this.getViewByXType("assetModalView");}

				Core.config.asset.Config.setCurrentView(nextView);
                direction = this.getSlideLeftTransition();
                break;
			// LOGIN
            case Core.event.authentication.Event.LOGOUT_SUCCESS:
                view = this.getViewByXType("loginView");
				Core.config.asset.Config.setCurrentView('login');
                direction = this.getSlideRightTransition();
                break;
			// ASSET
            case Core.event.navigation.Event.ACTION_SHOW_ASSET_DETAIL:
                view = this.getViewByXType("assetDetailView");
				Core.config.asset.Config.setCurrentView('assetdetail');
                direction = this.getSlideLeftTransition();
                break;
				
            case Core.event.navigation.Event.ACTION_SHOW_ASSET_MODAL:
                view = this.getViewByXType("assetModalView");
				Core.config.asset.Config.setCurrentView('assetmodal');
                direction = this.getSlideLeftTransition();// CHANGE THIS TO AN OPEN TRANSITION
                break;				

            case Core.event.navigation.Event.ACTION_BACK_SHOW_ASSET_SLIDE:
                view = this.getViewByXType("assetSlideView");
				Core.config.asset.Config.setCurrentView('assetslide');
                direction = this.getSlideRightTransition();
                break;
				
            case Core.event.navigation.Event.ACTION_BACK_SHOW_ASSET_LIST:
                view = this.getViewByXType("assetListView");
				Core.config.asset.Config.setCurrentView('assetlist');
                direction = this.getSlideRightTransition();
                break;

            case Core.event.navigation.Event.ACTION_BACK_SHOW_ASSET_TILE:
                view = this.getViewByXType("assetTileView");
				Core.config.asset.Config.setCurrentView('assettile');
                direction = this.getSlideRightTransition();
                break;

            case Core.event.navigation.Event.ACTION_CLOSE_SHOW_ASSET_SLIDE:
                view = this.getViewByXType("assetSlideView");
				Core.config.asset.Config.setCurrentView('assetslide');
                direction = this.getSlideRightTransition(); // CHANGE THIS TO A CLOSE TRANSITION
        }
        // only navigate to the screen if the view exists
        if(view !== null) {
            this.logger.debug("navigate = " + view.getItemId());
            this.getView().setView(view.getItemId());
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
	
    /**
     * Sets state for all glu related objects.
	 *
	 * @param state		The state to set
     */	
	setState: function(state) {
	    this.logger.debug("setState: state = " + state);
		require({
			paths: {
				"pipeline": "../../../../../resources/js/pipeline/src/pipeline",
			}
		}, ["pipeline"], function() {
			var pipeline = Pipeline().start(function() {
				// started
				console.log("PIPELINE: started");
			}).pipe(function(state) {
				// MODELS
				var models = state.models;
				for (key in models){
					console.log("PIPELINE: " + models[key] + " model");
					require(["../../app/model/" + models[key] + "/Model"], function() {
						// empty
					});
				}
			}).pipe(function(state) {
				// VIEWMODELS
				var viewmodels = state.viewmodels;		
				for (key in viewmodels){
					console.log("PIPELINE: " + viewmodels[key] + " view model");
					require(["../../app/viewmodel/" + viewmodels[key] + "/ViewModel"], function() {
						// empty
					});
				}
			}).pipe(function(state) {
				// VIEWS
				var views = state.views;
				var lib = state.lib;
				for (key in views){
					console.log("PIPELINE: " + views[key] + " view");	
					require(["../../app/view/" + lib + "/" + views[key] + "/View"], function() {
						// empty
					});
				}
			}).pipeAsync(function(state, callback) {
				// SPECS
				require(["../../app/spec/Backend"], function() {
					console.log("PIPELINE: Backend");
					callback();
				});
			}).pipeAsync(function(state, callback) {
				// LOCALES
				var locales = state.locales;
				for (key in locales){
					console.log("PIPELINE: " + locales[key] + " locale");	
					require(["../../app/locale/" + locales[key]], function() {
						callback();
					});
				}
			}).stop(function() {
				console.log("PIPELINE: stopped");
				// stopped
			}).create();
			pipeline(state); 
		});	
	},

    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////	

    /**
     * Handles the get session success event
     */
    onGetSessionSuccess: function() { 
    	this.logger.debug("onGetSessionSuccess");
    	//Core.config.asset.Config.setNextView('maintile');
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
    	Core.config.asset.Config.setCurrentView('login');
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
});