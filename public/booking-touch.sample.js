/**
 * The booking application class sets up the following:
 *
 * <ul>
 * <li>Sets up loaders and class loader dependencies</li>
 * <li>Sencha MVC infrastructure (listing out the models, views, and controllers)</li>
 * <li>WASI Sencha Extensions library</li>
 * <li>DeftJS IoC and dependencies</li>
 * <li>Adds the views to the booking Viewport when the application launches</li>
 * </ul>
 */
Ext.onReady(function () {
    console.log("app.onReady");

    Ext.require([
        "Core.service.session.mock.Service", 
        "Core.service.background.Service",
        "Core.service.background.mock.Service",	
        "Core.service.ui.Service",
        "Core.service.ui.mock.Service", 
        "Core.service.company.Service",
        "Core.service.company.mock.Service",   
        "Core.service.url.Service",
        "Core.service.url.mock.Service", 
        "Core.service.title.Service",
        "Core.service.title.mock.Service", 		
        "Core.service.authentication.Service",
        "Core.service.authentication.mock.Service",
        "Core.service.booking.Service",
        "Core.service.booking.mock.Service",
		"Core.store.session.Store",
        "Core.store.booking.Store",
        "nineam.locale.LocaleManager",
        "nineam.locale.plugin.touch.LocalePlugin"

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
        bookingStore:			"Core.store.booking.Store",

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
        titleService:        	"Core.service.title.mock.Service", 		
        bookingService:			"Core.service.booking.mock.Service",

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
		
        titleServiceClass: {
            value: "Core.service.title.mock.Service"
        },
		
        bookingServiceClass: {
            value: "Core.service.booking.mock.Service"
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
    	"Core.config.booking.Config"	
    ],
    
    ////////////////////////////////////////////
    // MODELS
    ////////////////////////////////////////////
    models: [
        "session.Model",
    	"booking.Model"
    ],    

    ////////////////////////////////////////////
    // VIEWS
    ////////////////////////////////////////////
    views: [
        "Core.view.touch.login.View",
		"Core.view.touch.booking.slide.View",
        "Core.view.touch.booking.list.View",
        "Core.view.touch.booking.tile.View",
        "Core.view.touch.booking.modal.View",		
        "Core.view.touch.booking.detail.View"
    ],

    ////////////////////////////////////////////
    // CONTROLLERS
    ////////////////////////////////////////////
    controllers:[
        //"bootstrap.Controller",  // DEPRECATED, now part of "booking.Controller"
        "session.Controller",   
        "background.Controller",
        "ui.Controller",
        "company.Controller",   
        "url.Controller",
        "title.Controller",		
        "authentication.Controller",
        "booking.Controller"
    ],

    ////////////////////////////////////////////
    // ICON
    ////////////////////////////////////////////    
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    ////////////////////////////////////////////
    // STARTUP IMAGE
    ////////////////////////////////////////////
    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },    
    
    /**
     * Add the views to the stage. Not optimal since we don't need them all upfront, but it'll get the
     * ball rolling in the right direction for a PoC.
     *
     * TODO: BMR: 02/22/13: Don't add all the views to the stage at once. Do it on demand.
     */
    launch: function () {
        console.log("app.launch");
        
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        //since there's no view associated with it
        var viewportMediator = Ext.create("Core.mediator.touch.viewport.booking.Mediator");
        viewportMediator.init();

        Ext.Viewport.add([
            { xtype: "loginView" },
			{ xtype: "bookingSlideView" },
            { xtype: "bookingListView" },
            { xtype: "bookingTileView" },
            { xtype: "bookingModalView" },	
            { xtype: "bookingDetailView" }           
        ]);
		
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