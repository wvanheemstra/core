/**
 * The glu mediator essentially fulfils the passive view pattern for the login view.
 *
 * It is expected that different form factors may require a new mediator implementation as the events could be
 * different; eg, a login button on a desktop app could be click whereas mobile could be tap.
 */
Ext.define("Core.mediator.touch.glu.Mediator", {
    extend: "Core.mediator.abstract.Mediator",

    requires: [
    //	"Core.event.session.Event",  
    //	"Core.event.background.Event",		
    //	"Core.event.ui.Event",
    //	"Core.event.company.Event",
    //    "Core.event.authentication.Event",
    //    "nineam.locale.LocaleManager"
    ],

    inject: [
        "logger"
    ],

    // set up view event to mediator mapping
    control: {
		//background:						true,	
	//	company:						true,
    //    logInButton: {
    //        tap: "onLoginButtonTap"
    //    },
    //    usernameTextField: 				true,
	//	passwordTextField: 				true,
    //    keepmeloggedinCheckboxField:    true,
    //    logInFailedLabel:      			true
    },

    ////////////////////////////////////////////////
    // FUNCTIONAL METHODS
    ////////////////////////////////////////////////

    /**
     * Sets up global event bus handlers. Called by the parent superclass during the initialization phase.
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners"); 
    //    this.eventBus.addGlobalEventListener(Core.event.background.Event.SET_BACKGROUND_SUCCESS, this.onSetBackgroundSuccess, this);		
    //    this.eventBus.addGlobalEventListener(Core.event.ui.Event.SET_UI_SUCCESS, this.onSetUISuccess, this);
    //    this.eventBus.addGlobalEventListener(Core.event.company.Event.SET_COMPANY_SUCCESS, this.onSetCompanySuccess, this);
    //    this.eventBus.addGlobalEventListener(Core.event.authentication.Event.LOGIN_SUCCESS, this.onLoginSuccess, this);
    //    this.eventBus.addGlobalEventListener(Core.event.authentication.Event.LOGIN_FAILURE, this.onLoginFailure, this);
     //   this.eventBus.addGlobalEventListener(Core.event.authentication.Event.LOGOUT_SUCCESS, this.onLogoutSuccess, this);
    }
	

    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////   	    

    

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    
});