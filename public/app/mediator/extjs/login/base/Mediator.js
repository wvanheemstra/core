/**
 * The login base mediator essentially fulfils the passive view pattern for the login view.
 *
 * It is expected that different form factors may require a new mediator implementation as the events could be
 * different; eg, a login button on a desktop app could be click whereas mobile could be tap.
 */
Ext.define("Core.mediator.extjs.login.base.Mediator", {
    extend: "Core.mediator.abstract.Mediator",

    requires: [
    	"Core.event.session.Event",
    	"Core.event.background.Event",			
    	"Core.event.ui.Event",
    	"Core.event.company.Event",	
        "Core.event.authentication.Event"
    ],

    inject: [
        "logger"
    ],

    ////////////////////////////////////////////////
    // FUNCTIONAL METHODS
    ////////////////////////////////////////////////

    /**
     * Sets up view component event handlers.
     */
    init: function() {
        this.callParent(arguments);
        this.logger.debug("init");
//        this.addEventListenerBySelector("extjsLoginView button[action=login]", "click", this.onLoginButtonClick);
    },

    /**
     * Sets up global event bus handlers. Called by the parent superclass during the initialization phase.
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
        this.eventBus.addGlobalEventListener(Core.event.session.Event.GET_SESSION_SUCCESS, this.onGetSessionSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.session.Event.GET_SESSION_FAILURE, this.onGetSessionFailure, this);    
        this.eventBus.addGlobalEventListener(Core.event.background.Event.SET_BACKGROUND_SUCCESS, this.onSetBackgroundSuccess, this);		
        this.eventBus.addGlobalEventListener(Core.event.ui.Event.SET_UI_SUCCESS, this.onSetUISuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.company.Event.SET_COMPANY_SUCCESS, this.onSetCompanySuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.authentication.Event.LOGIN_SUCCESS, this.onLoginSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.authentication.Event.LOGIN_FAILURE, this.onLoginFailure, this);
        this.eventBus.addGlobalEventListener(Core.event.authentication.Event.LOGOUT_SUCCESS, this.onLogoutSuccess, this);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the painted application-level event.
     */    
    onPainted: function() {
		// placeholder
    },
    
    /**
     * Handles the get session success event
     */
    onGetSessionSuccess: function() { 
		// placeholder
    },
    
    /**
     * Handles the get session failure event
     */
    onGetSessionFailure: function() { 
		// placeholder
    },    	    

    /**
     * Handles the set background success event from the login controller.
     */
    onSetBackgroundSuccess: function() {
		// placeholder
    },	
	
    /**
     * Handles the set ui success event from the login controller.
     */
    onSetUISuccess: function() {
		// placeholder
    },

    /**
     * Handles the set company success event from the login controller.
     */
    onSetCompanySuccess: function() {
		// placeholder
    },	
	
    /**
     * Handles the login success event from the login controller. Removes the loading mask from the view.
     */
    onLoginSuccess: function() {
		// placeholder
    },

    /**
     * Handles the logout success event from the logout controller. Slide the login view
     * onto stage.
     */
    onLogoutSuccess: function() {
		// placeholder
    },

    /**
     * Handles the login failure event from the login controller. Removes the loading mask from the view.
     * Shows the failed login message.
     */
    onLoginFailure: function() {
		// placeholder
    },
	
});