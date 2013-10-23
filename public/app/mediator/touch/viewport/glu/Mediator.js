/**
 * The viewport mediator essentially fulfils the passive view pattern for the application's Viewport.
 *
 * It is expected that different form factors may require a new mediator implementation as the events could be
 * different; e.g. a login button on a desktop app could be click whereas mobile could be tap.
 *
 * TODO: BMR: 02/22/13: Don't add all the views to the stage at once. Do it on demand.
 */
Ext.define("Core.mediator.touch.viewport.glu.Mediator", {
    extend: "Core.mediator.abstract.Mediator",

    requires: [   
	//	"Core.event.session.Event",
    //    "Core.event.background.Event", 		
    //    "Core.event.ui.Event",     
    //    "Core.event.company.Event",  
    //    "Core.event.url.Event", 		
    //    "Core.event.authentication.Event",
    //    "Core.event.navigation.Event"
    ],

    inject: [
        "logger"
    ],

    config: {
        // create references to this mediator's views so we can listen to events and grab data from them
		
		gluView:                  "gluView"
		
    //    loginView:              "loginView",
    //    personListView:         "personListView",
	//	personSlideView:        "personSlideView",
    //    personTileView:         "personTileView",
    //    personModalView:		"personModalView",
    //    personDetailView:       "personDetailView"
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
	//    this.eventBus.addGlobalEventListener(Core.event.session.Event.GET_SESSION_SUCCESS, this.onGetSessionSuccess, this);
    //    this.eventBus.addGlobalEventListener(Core.event.session.Event.GET_SESSION_FAILURE, this.onGetSessionFailure, this); 	
    //    this.eventBus.addGlobalEventListener(Core.event.navigation.Event.NAVIGATE, this.onNavigate, this);
    },

	/**
	 * Sets up the Viewport
	 *
	 */
	setupViewport: function(){
		this.logger.debug("setupViewport");

	//	var background = Core.config.person.Config.getBackground();
	//	this.setBackground(background);		
		
	//	var ui = Core.config.person.Config.getUi();
	//	this.setUI(ui);
		
	//	var company = Core.config.person.Config.getCompany();
	//	this.setCompany(company);
		
	//	var url = Core.config.person.Config.getUrl();
	//	this.setURL(url);
		
	//	var id = Core.config.person.Config.getId();
	//	var sessionId = Core.config.person.Config.getSessionId();
	//	this.getSession(id, sessionId);
	}
});



/*
//old-school Ext JS straight-ahead style
Ext.onReady(function (){
    //Starts with view definition
    new Ext.Viewport({
        layout : 'fit',
        items : [{
            title : 'Hello World!',
            tbar: [{
                text : 'Coming/Going',
                //'controller' code that responds to the user toggling the button
                toggleHandler : function(button, state){
                    var msg = this.state ? 'Goodbye World!' : 'Hello World!';
                    button.ownerCt.setTitle(msg); //have to find some way to reference the other control
                }
            }]
        }]
    });
});
*/