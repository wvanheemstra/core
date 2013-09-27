/**
 * The person application class sets up the following:
 *
 * <ul>
 * <li>Sets up loaders and class loader dependencies</li>
 * <li>Sencha MVC infrastructure (listing out the models, views, and controllers)</li>
 * <li>WASI Sencha Extensions library</li>
 * <li>DeftJS IoC and dependencies</li>
 * <li>Adds the views to the person Viewport when the application launches</li>
 * </ul>
 */
Ext.onReady(function () {
    console.log("app.onReady");

    Ext.require([
        "nineam.locale.LocaleManager",
        "nineam.locale.plugin.touch.LocalePlugin"
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
		person:  [{
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
					var keyValuePairArray = {};
					if(mock){
						keyValuePairArray[serviceService] = String("Core.service."+serviceName+".mock"+".Service");
						Ext.require([String("Core.service."+serviceName+".mock"+".Service")]);
					} 
					else {
						keyValuePairArray[serviceService] = String("Core.service."+serviceName+".Service");
						Ext.require([String("Core.service."+serviceName+".Service")]);
					}
					// Configure the DeftJS IoC container for Services
					Deft.Injector.configure(keyValuePairArray);
				}
				if(key == 'store'){
					var store = value[key];
					var serviceStore = serviceName+"Store";
					var keyValuePairArray = {};
					if(store){
						keyValuePairArray[serviceStore] = String("Core.store."+serviceName+".Store");
						Ext.require([String("Core.store."+serviceName+".Store")]);
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
    	"person.Model"
    ],    

    ////////////////////////////////////////////
    // VIEWS
    ////////////////////////////////////////////
    views: [
        "Core.view.touch.login.View",
		"Core.view.touch.person.slide.View",
        "Core.view.touch.person.list.View",
        "Core.view.touch.person.tile.View",
        "Core.view.touch.person.modal.View",		
        "Core.view.touch.person.detail.View"
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
        "title.Controller",		
        "authentication.Controller",
		"salutation.Controller",
		"gender.Controller",
		"nationality.Controller",
        "person.Controller"
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
        var viewportMediator = Ext.create("Core.mediator.touch.viewport.person.Mediator");
        viewportMediator.init();

        Ext.Viewport.add([
            { xtype: "loginView" },
			{ xtype: "personSlideView" },
            { xtype: "personListView" },
            { xtype: "personTileView" },
            { xtype: "personModalView" },	
            { xtype: "personDetailView" }           
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