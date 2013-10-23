/**
 * The glu application class sets up the following:
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
	
	//glu.viewport('helloworld.main');
	
	Core.spec.Backend.createMockBackend(true);
    glu.viewport('Core.viewmodel.main.ViewModel');
	

    // pull all of this in so they can be injected
/*     Ext.syncRequire([
	    "Core.view.extjs.viewport.person.View",		
        "FlowMVC.mvc.event.EventDispatcher",
        "FlowMVC.logger.Logger"
    ]); */

    /**
     * Locale Manager core classes. These might only need to be required for dev.
     */
/*     Ext.syncRequire([
        "nineam.locale.LocaleManager",
        "nineam.locale.plugin.extjs.LocalePlugin"
    ]); */

	// Configure the DeftJS IoC container in general
/*     Deft.Injector.configure({
        ////////////////////////////////////////////
        // LOGGER
        ////////////////////////////////////////////
        logger:                 FlowMVC.logger.Logger.getInjectableLogger(),

        ////////////////////////////////////////////
        // EVENT DISPATCHER
        ////////////////////////////////////////////
        eventBus:               "FlowMVC.mvc.event.EventDispatcher"
	}); */
	
	// MOVE THIS TO THE Core.config.person.Config AS SOON AS Core IS NOT undefined
/* 	var services = [{
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
		salutation:  [{
			mock: true,
			store: true
		}]
	},{
		gender:  [{
			mock: true,
			store: true
		}]
	},{
		nationality:  [{
			mock: true,
			store: true
		}]
	},{
		date:  [{
			mock: true,
			store: true
		}]
	},{
		membership:  [{
			mock: true,
			store: true
		}]
	},{
		personGroup:  [{
			mock: true,
			store: true
		}]
	},{
		group:  [{
			mock: true,
			store: true
		}]
	},{
		glu:  [{
			mock: true,  // Set to 'false' when retrieving live data
			store: true
		}]
	}]; */
	
	/* for (var n = 0; n < services.length; n++) {
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
						if(serviceName == 'personGroup'){
							servicePath = 'person.group'; 
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
					var storePath = "";  // TO DO: Make e.g. person to person, but personGroup to person.group
						// TEMP FIX:
						if(serviceName == 'personGroup'){
							storePath = 'person.group'; 
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
	} */
});



//View model
glu.defModel('helloworld.main', {
    arriving:true,
    message$:function () {
        return this.localize(this.arriving ? 'greeting' : 'farewell')
    }
});
//View
glu.defView('helloworld.main', {
    title:'@{message}',
    tbar:[
        {
            text:'Toggle',
            enableToggle:true,
            pressed:'@{arriving}'
        }
    ]
});
//Locale
glu.ns('helloworld').locale = {
    greeting:'Hello World!',
    farewell:'Goodbye World!'
}


/* Ext.application({

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
		"Core.config.person.Config"
    ],

    ////////////////////////////////////////////
    // MODELS
    ////////////////////////////////////////////
    models: [
        "session.Model",
		"salutation.Model",	
		"gender.Model",	
		"nationality.Model",	
		"date.Model",	
		"membership.Model",	
		"person.group.Model",		
		"group.Model",			
    	"person.Model"
    ],

    ////////////////////////////////////////////
    // VIEWS
    ////////////////////////////////////////////
    views: [
        "Core.view.extjs.viewport.person.View",
        "Core.view.extjs.login.View",
        "Core.view.extjs.person.slide.View",		
        "Core.view.extjs.person.list.View",
        "Core.view.extjs.person.detail.View",
        "Core.view.extjs.person.tile.View",
        "Core.view.extjs.person.modal.View"		
    ],

    ////////////////////////////////////////////
    // CONTROLLERS
    ////////////////////////////////////////////
    controllers:[
        //"bootstrap.Controller", // DEPRECATED, now part of "person.Controller"
        "session.Controller",  
        "background.Controller",		
        "ui.Controller",
        "company.Controller",
        "url.Controller",		
        "authentication.Controller",
		"salutation.Controller",
		"gender.Controller",
		"nationality.Controller",	
		"date.Controller",
		"membership.Controller",
		"person.group.Controller",			
		"group.Controller",		
        "person.Controller"	
    ],

    /**
     * Add the views to the stage. Not optimal since we don"t need them all upfront, but it"ll get the
     * ball rolling in the right direction for a PoC.
     *
     * TODO: BMR: 02/22/13: Don"t add all the views to the stage at once. Do it on demand.
     */
/*     launch: function () {
        console.log("app.launch");
        
    	// Destroy the #appLoadingIndicator element
    	Ext.fly('appLoadingIndicator').destroy();        

        // Set up QuickTips and create the Viewport
        Ext.tip.QuickTipManager.init();
        var viewport = Ext.create("Core.view.extjs.viewport.person.View");
		// BELOW IS MOVED TO GET_SESSION_SUCCESS and GET_SESSION_FAILURE
		// viewport.setView(Core.config.global.Config.getInitialView());
		var viewportMediator = viewport.getController();
		viewportMediator.setupViewport();
    }, */
    
/*     onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    } */
//}); */