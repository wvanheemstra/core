/**
 * The organisation application class sets up the following:
 *
 * <ul>
 * <li>Sets up loaders and class loader dependencies</li>
 * <li>Sencha MVC infrastructure (listing out the models, views, and controllers)</li>
 * <li>WASI Sencha Extensions library</li>
 * <li>DeftJS IoC and dependencies</li>
 * <li>Adds the views to the main Viewport when the application launches</li>
 * </ul>
 */
Ext.onReady(function () {
    console.log("app.onReady");

    // pull all of this in so they can be injected
    Ext.syncRequire([
	    "Core.view.extjs.viewport.View",
        "Core.service.session.mock.Service", 
        "Core.service.background.Service",
        "Core.service.background.mock.Service",		
        "Core.service.ui.Service",
        "Core.service.ui.mock.Service", 
        "Core.service.company.Service",
        "Core.service.company.mock.Service",
        "Core.service.url.Service",
        "Core.service.url.mock.Service",
        "Core.service.authentication.Service",
        "Core.service.authentication.mock.Service",
        "Core.service.organisation.Service",
        "Core.service.organisation.mock.Service",		
		"Core.store.session.Store",
        "Core.store.organisation.Store",		
        "FlowMVC.mvc.event.EventDispatcher",
        "FlowMVC.logger.Logger"
    ]);

    /**
     * Locale Manager core classes. These might only need to be required for dev.
     */
    Ext.syncRequire([
        "nineam.locale.LocaleManager",
        "nineam.locale.plugin.extjs.LocalePlugin"
    ]);

    // Configure the DeftJS IoC container
    Deft.Injector.configure({

        ////////////////////////////////////////////
        // LOGGER
        ////////////////////////////////////////////
        logger:                 FlowMVC.logger.Logger.getInjectableLogger(),

        ////////////////////////////////////////////
        // EVENT DISPATCHER
        ////////////////////////////////////////////
        eventBus:               "FlowMVC.mvc.event.EventDispatcher",

        ////////////////////////////////////////////
        // IMPL
        ////////////////////////////////////////////
        sessionStore:			"Core.store.session.Store",
        organisationStore:			"Core.store.organisation.Store",	

	    ////////////////////////////////////////////
	    // SERVICES
	    ////////////////////////////////////////////		
		
        ////////////////////////////////////////////
        // SERVICE MOCKS
        ////////////////////////////////////////////
        sessionService:         "Core.service.session.mock.Service", 
        authenticationService:  "Core.service.authentication.mock.Service",
        backgroundService:      "Core.service.background.mock.Service",		
        uiService:        		"Core.service.ui.mock.Service",
        companyService:        	"Core.service.company.mock.Service",
        urlService:        	    "Core.service.url.mock.Service",		
        organisationService:			"Core.service.organisation.mock.Service",

        sessionServiceClass: {
            value: "Core.service.session.mock.Service"
        },		
		
        authenticationServiceClass: {
            value: "Core.service.authentication.mock.Service"
        },
        
        backgroundServiceClass: {
            value: "Core.service.background.mock.Service"
        },
        
        uiServiceClass: {
            value: "Core.service.ui.mock.Service"
        },
        
        companyServiceClass: {
            value: "Core.service.company.mock.Service"
        },

        urlServiceClass: {
            value: "Core.service.url.mock.Service"
        },

        organisationServiceClass: {
            value: "Core.service.organisation.mock.Service"
        }
    });
});

Ext.application({

    name: "Core",
    
    ////////////////////////////////////////////
    // Ext
    ////////////////////////////////////////////    
    requires: [
    	"Ext.MessageBox"
    ],    
    
    ////////////////////////////////////////////
    // CONFIG
    ////////////////////////////////////////////    
    requires: [
    	"Core.config.global.Config",
		"Core.config.organisation.Config"
    ],

    ////////////////////////////////////////////
    // MODELS
    ////////////////////////////////////////////
    models: [
        "session.Model",
    	"organisation.Model"
    ],

    ////////////////////////////////////////////
    // VIEWS
    ////////////////////////////////////////////
    views: [
        "Core.view.extjs.viewport.organisation.View",
        "Core.view.extjs.login.View",
        "Core.view.extjs.organisation.slide.View",		
        "Core.view.extjs.organisation.list.View",
        "Core.view.extjs.organisation.detail.View",
        "Core.view.extjs.organisation.tile.View",
        "Core.view.extjs.organisation.modal.View"		
    ],

    ////////////////////////////////////////////
    // CONTROLLERS
    ////////////////////////////////////////////
    controllers:[
        "bootstrap.Controller",
        "session.Controller",  
        "background.Controller",		
        "ui.Controller",
        "company.Controller",
        "url.Controller",		
        "authentication.Controller",
        "organisation.Controller"	
    ],

    /**
     * Add the views to the stage. Not optimal since we don"t need them all upfront, but it"ll get the
     * ball rolling in the right direction for a PoC.
     *
     * TODO: BMR: 02/22/13: Don"t add all the views to the stage at once. Do it on demand.
     */
    launch: function () {
        console.log("app.launch");
        
    	// Destroy the #appLoadingIndicator element
    	Ext.fly('appLoadingIndicator').destroy();        

        // Set up QuickTips and create the Viewport
        Ext.tip.QuickTipManager.init();
        var viewport = Ext.create("Core.view.extjs.viewport.organisation.View");
		// BELOW IS MOVED TO GET_SESSION_SUCCESS and GET_SESSION_FAILURE
		// viewport.setView(Core.config.global.Config.getInitialView());
		var viewportMediator = viewport.getController();
		viewportMediator.setupViewport();
    },
    
    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
});