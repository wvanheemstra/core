/**
 * The individual application class sets up the following:
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
	
//	  Core.individuals.createMockBackend(true);  // Moved to Core.view.extjs.viewport.individual.View
//    glu.viewport('Core.individuals.main');     // Moved to Core.view.extjs.viewport.individual.View
	
    // pull all of this in so they can be injected
    Ext.syncRequire([
	    "Core.view.extjs.viewport.individual.View",	
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
	
	// MOVE THIS TO THE Core.config.individual.Config AS SOON AS Core IS NOT undefined
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
		individualGroup:  [{
			mock: true,
			store: true
		}]
	},{
		group:  [{
			mock: true,
			store: true
		}]
	},{
		individual:  [{
			mock: true,  // Set to 'false' when retrieving live data
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
					var servicePath = "";
					// TO DO: Make e.g. individual to individual, but individualGroup to individual.group
						// TEMP FIX:
						if(serviceName == 'individualGroup'){
							servicePath = 'individual.group'; 
						}
						else {
							servicePath = serviceName;
						}					
					var keyValuePairArray = {};
					if(mock){
						keyValuePairArray[serviceService] = String("Core.service."+servicePath+".mock"+".Service");
						Ext.syncRequire([String("Core.service."+servicePath+".mock"+".Service")]);
					} 
					else {
						keyValuePairArray[serviceService] = String("Core.service."+servicePath+".Service");
						Ext.syncRequire([String("Core.service."+servicePath+".Service")]);
					}
					// Configure the DeftJS IoC container for Services
					Deft.Injector.configure(keyValuePairArray);
				}
				if(key == 'store'){
					var store = value[key];
					var serviceStore = serviceName+"Store";
					var storePath = "";  
					// TO DO: Make e.g. individual to individual, but individualGroup to individual.group
						// TEMP FIX:
						if(serviceName == 'individualGroup'){
							storePath = 'individual.group'; 
						}
						else {
							storePath = serviceName;
						}
					var keyValuePairArray = {};
					if(store){
						keyValuePairArray[serviceStore] = String("Core.store."+storePath+".Store");
						Ext.syncRequire([String("Core.store."+storePath+".Store")]);
					} 				
					// Configure the DeftJS IoC container for Stores
					Deft.Injector.configure(keyValuePairArray);
				}
			}	
		}
	}
});



//View model
//glu.defModel('helloworld.main', {
//    arriving:true,
//    message$:function () {
//        return this.localize(this.arriving ? 'greeting' : 'farewell')
//    }
//});

//View
//glu.defView('helloworld.main', {
//    title:'@{message}',
//    tbar:[
//        {
//            text:'Toggle',
//            enableToggle:true,
//            pressed:'@{arriving}'
//        }
//    ]
//});

//Locale
//glu.ns('helloworld').locale = {
//    greeting:'Hello World!',
//    farewell:'Goodbye World!'
//}


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
		"Core.config.individual.Config"
    ],

    ////////////////////////////////////////////
    // MODELS
    ////////////////////////////////////////////
    models: [
        "session.Model",
		"individual.group.Model",		
		"group.Model",			
    	"individual.Model"
    ],

    ////////////////////////////////////////////
    // VIEWS
    ////////////////////////////////////////////
    views: [
        "Core.view.extjs.viewport.individual.View",
        "Core.view.extjs.login.View",
        "Core.view.extjs.individual.slide.View",		
        "Core.view.extjs.individual.list.View",
        "Core.view.extjs.individual.detail.View",
        "Core.view.extjs.individual.tile.View",
        "Core.view.extjs.individual.modal.View"		
    ],

    ////////////////////////////////////////////
    // CONTROLLERS
    ////////////////////////////////////////////
    controllers:[
        //"bootstrap.Controller", // DEPRECATED, now part of "individual.Controller"
        "session.Controller",  
        "background.Controller",		
        "ui.Controller",
        "company.Controller",
        "url.Controller",		
        "authentication.Controller",
		"individual.group.Controller",			
		"group.Controller",		
        "individual.Controller"	
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
        var viewport = Ext.create("Core.view.extjs.viewport.individual.View");
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