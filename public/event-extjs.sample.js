/**
 * The event application class sets up the following:
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
	
    Ext.require([
    	"Core.config.global.Config"
    ]);
	
	var currentApp = 'event';
	Core.config.global.Config.setCurrentApp(currentApp); // Set currentApp globally		

    // pull all of this in so they can be injected
    Ext.syncRequire([
	    "Core.view.extjs.viewport.event.View",		
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

	// Configure the DeftJS IoC container in general
    Deft.Injector.configure({
        ////////////////////////////////////////////
        // LOGGER
        ////////////////////////////////////////////
        logger:                 FlowMVC.logger.Logger.getInjectableLogger(),

        ////////////////////////////////////////////
        // EVENT DISPATCHER
        ////////////////////////////////////////////
        eventBus:               "FlowMVC.mvc.event.EventDispatcher"
	});
	
	// MOVE THIS TO THE Core.config.person.Config AS SOON AS Core IS NOT undefined
	var services = [{
		authentication:  [{
			mock: true
		}]
	},{
		background:  [{
			mock: true
		}]
	},{
		session:  [{
			mock: true,
			store: true
		}]
	},{
		title:  [{
			mock: true
		}]
	},{
		ui:  [{
			mock: true
		}]
	},{
		url:  [{
			mock: true
		}]
	},{
		company:  [{
			mock: true
		}]
	},{
		membership:  [{
			mock: true,
			store: true
		}]
	},{
		eventGroup:  [{
			mock: true,
			store: true
		}]
	},{
		group:  [{
			mock: true,
			store: true
		}]
	},{
		event:  [{
			mock: true,
			store: true
		}]
	}];
	
	for (var n = 0; n < services.length; n++) {
		var service = services[n];
		for (var key in service) {
			if (key === 'length' || !service.hasOwnProperty(key)) continue;
			var serviceName = key.toString();		
			var value = service[key][0];
			// value is e.g. 
			// {mock: true, store: false}
			for (var key in value) {
				if(key == 'mock'){
					var mock = value[key];
					var serviceService = serviceName+"Service";
					var servicePath = "";  // TO DO: Make e.g. person to person, but personGroup to person.group
					// TO DO: Make e.g. person to person, but personGroup to person.group
						// TEMP FIX:
						if(serviceName == 'eventGroup'){
							servicePath = 'event.group'; 
						}
						else {
							servicePath = serviceName;
						}
					var keyValuePairArray = {};
					if(mock){
						keyValuePairArray[serviceService] = String("Core.service."+servicePath+".mock"+".Service");
						Ext.require([String("Core.service."+servicePath+".mock"+".Service")]);
					} 
					else {
						keyValuePairArray[serviceService] = String("Core.service."+servicePath+".Service");
						Ext.require([String("Core.service."+servicePath+".Service")]);
					}
					// Configure the DeftJS IoC container for Services
					Deft.Injector.configure(keyValuePairArray);
				}
				if(key == 'store'){
					var store = value[key];
					var serviceStore = serviceName+"Store";
					var storePath = "";  // TO DO: Make e.g. person to person, but personGroup to person.group
						// TEMP FIX:
						if(serviceName == 'eventGroup'){
							storePath = 'event.group'; 
						}
						else {
							storePath = serviceName;
						}
					var keyValuePairArray = {};
					if(store){
						keyValuePairArray[serviceStore] = String("Core.store."+storePath+".Store");
						Ext.require([String("Core.store."+storePath+".Store")]);
					} 				
					// Configure the DeftJS IoC container for Stores
					Deft.Injector.configure(keyValuePairArray);
				}
			}	
		}
	}
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
		"Core.config.event.Config"
    ],

    ////////////////////////////////////////////
    // MODELS
    ////////////////////////////////////////////
    models: [
        "session.Model",
		"membership.Model",
		"event.group.Model",		
		"group.Model",		
    	"event.Model"
    ],

    ////////////////////////////////////////////
    // VIEWS
    ////////////////////////////////////////////
    views: [
        "Core.view.extjs.viewport.event.View",
        "Core.view.extjs.login.View",
        "Core.view.extjs.event.slide.View",		
        "Core.view.extjs.event.list.View",
        "Core.view.extjs.event.detail.View",
        "Core.view.extjs.event.tile.View",
        "Core.view.extjs.event.modal.View"		
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
		"membership.Controller",
		"event.group.Controller",		
		"group.Controller",			
        "event.Controller"	
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
        var viewport = Ext.create("Core.view.extjs.viewport.event.View");
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