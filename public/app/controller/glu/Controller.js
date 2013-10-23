/**
 * The GluController acts as the command with asynchronous callback methods for successful
 * and failed glu service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.glu.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
    //    "Core.event.glu.Event",
        "FlowMVC.mvc.service.rpc.Responder",
        "nineam.locale.store.LocalesStore",
        "nineam.locale.event.LocaleEvent"		
    ],

    inject: [
    //    "gluService",
    //    "gluStore",
	//	"salutationStore",
	//	"genderStore",
	//	"nationalityStore",
	//	"dateStore",
	//	"membershipStore",
	//	"groupStore",
        "logger"
    ],
    
    /**
     * Sets up global event bus handlers.
     * @protected
     */
    init: function() {
        this.callParent();
        this.logger.debug("init");

        this.initLocaleManager();
    },
    
    /**
     * Sets up global event bus handlers.
     * @protected
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
    //    this.eventBus.addGlobalEventListener(Core.event.person.Event.READ_PERSONS, this.onReadPersons, this);		
    //    this.eventBus.addGlobalEventListener(Core.event.person.Event.CREATE_PERSON, this.onCreatePerson, this);
    //    this.eventBus.addGlobalEventListener(Core.event.person.Event.UPDATE_PERSON, this.onUpdatePerson, this);
    //    this.eventBus.addGlobalEventListener(Core.event.person.Event.DELETE_PERSON, this.onDeletePerson, this);
    },

        /**
     * Initializes the Localization Manager loading in the languages available.
     */
    initLocaleManager: function() {
		// empty
	}
	
    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////
	
    
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////
	
    
    
});    