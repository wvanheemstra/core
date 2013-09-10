/**
 * The MainController acts as the command with asynchronous callback methods for successful
 * and failed main service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.main.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.main.Event",
        "FlowMVC.mvc.service.rpc.Responder"
    ],

    inject: [
        "mainService",
        "mainStore",
        "logger"
    ],
    
    // ... more
    
    /**
     * Sets up global event bus handlers.
     * @protected
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
        this.eventBus.addGlobalEventListener(Core.event.main.Event.GET_MAIN_SLIDE, this.onGetMainSlide, this);
        this.eventBus.addGlobalEventListener(Core.event.main.Event.GET_MAIN_LIST, this.onGetMainList, this); 
        this.eventBus.addGlobalEventListener(Core.event.main.Event.GET_MAIN_TILE, this.onGetMainTile, this);        this.eventBus.addGlobalEventListener(Core.event.main.Event.GET_MAIN_MODAL, this.onGetMainModal, this);               
        this.eventBus.addGlobalEventListener(Core.event.main.Event.CREATE_MAIN, this.onCreateMain, this);
        this.eventBus.addGlobalEventListener(Core.event.main.Event.UPDATE_MAIN, this.onUpdateMain, this);
        this.eventBus.addGlobalEventListener(Core.event.main.Event.DELETE_MAIN, this.onDeleteMain, this);
    },

    /**
     * Performs get main by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getMainSlide: function() {
        this.logger.debug("getMainSlide");
        this.executeServiceCall(this.mainService, this.mainService.getMainSlide, null, this.getMainSlideSuccess, this.getMainSlideFailure, this);
    },	
	
    /**
     * Performs get main by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getMainList: function() {
        this.logger.debug("getMainList");
        this.executeServiceCall(this.mainService, this.mainService.getMainList, null, this.getMainListSuccess, this.getMainListFailure, this);
    },

    /**
     * Performs get main by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getMainTile: function() {
        this.logger.debug("getMainTile");
        this.executeServiceCall(this.mainService, this.mainService.getMainTile, null, this.getMainTileSuccess, this.getMainTileFailure, this);
    },

    /**
     * Performs get main by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getMainModal: function() {
        this.logger.debug("getMainModal");
        this.executeServiceCall(this.mainService, this.mainService.getMainModal, null, this.getMainModalSuccess, this.getMainModalFailure, this);
    },	
	
    /**
     * Performs create main by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.main.Model} main The main to create.
     */
    createMain: function(main) {
        this.logger.debug("createMain");
        this.executeServiceCall(this.mainService, this.mainService.createMain, [main], this.createMainSuccess, this.createMainFailure, this);
    },

    /**
     * Performs update main by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.main.Model} main The main to update.
     */
    updateMain: function(main) {
        this.logger.debug("updateMain");
        this.executeServiceCall(this.mainService, this.mainService.updateMain, [main], this.updateMainSuccess, this.updateMainFailure, this);
    },

    /**
     * Performs delete main by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.main.Model} main The main to delete.
     */
    deleteMain: function(main) {
        this.logger.debug("deleteMain");
        this.executeServiceCall(this.mainService, this.mainService.deleteMain, [main], this.deleteMainSuccess, this.deleteMainFailure, this);
    },

    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the successful get main service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getMainSlideSuccess: function(response) {
        this.logger.info("getMainSlideSuccess");

		this.mainStore.setData(response.mainSlide);

        var evt = Ext.create("Core.event.main.Event", Core.event.main.Event.GET_MAIN_SLIDE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the successful get main service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getMainListSuccess: function(response) {
        this.logger.info("getMainListSuccess");

        this.mainStore.setData(response.mainList);

        var evt = Ext.create("Core.event.main.Event", Core.event.main.Event.GET_MAIN_LIST_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get main service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getMainTileSuccess: function(response) {
        this.logger.info("getMainTileSuccess");

        this.mainStore.setData(response.mainTile);

        var evt = Ext.create("Core.event.main.Event", Core.event.main.Event.GET_MAIN_TILE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get main service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getMainModalSuccess: function(response) {
        this.logger.info("getMainModalSuccess");

        this.mainStore.setData(response.mainModal);

        var evt = Ext.create("Core.event.main.Event", Core.event.main.Event.GET_MAIN_MODAL_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the failed get main service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getMainSlideFailure: function(response) {
        this.logger.warn("getMainSlideFailure");

        var evt = Ext.create("Core.event.main.Event", Core.event.main.Event.GET_MAIN_SLIDE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    /**
     * Handles the failed get main service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getMainListFailure: function(response) {
        this.logger.warn("getMainListFailure");

        var evt = Ext.create("Core.event.main.Event", Core.event.main.Event.GET_MAIN_LIST_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get main service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getMainTileFailure: function(response) {
        this.logger.warn("getMainTileFailure");

        var evt = Ext.create("Core.event.main.Event", Core.event.main.Event.GET_MAIN_TILE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get main service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getMainModalFailure: function(response) {
        this.logger.warn("getMainModalFailure");

        var evt = Ext.create("Core.event.main.Event", Core.event.main.Event.GET_MAIN_MODAL_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 	
	
    /**
     * Handles the successful create main service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createMainSuccess: function(response) {
        this.logger.info("createMainSuccess");

        this.mainStore.add(response);

        var evt = Ext.create("Core.event.main.Event", Core.event.main.Event.CREATE_MAIN_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create main service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createMainFailure: function(response) {
        this.logger.warn("createMainFailure");

        var evt = Ext.create("Core.event.main.Event", Core.event.main.Event.CREATE_MAIN_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update main service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateMainSuccess: function(response) {
        this.logger.info("updateMainSuccess");

        this.mainStore.update(response);

        var evt = Ext.create("Core.event.main.Event", Core.event.main.Event.UPDATE_MAIN_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update main service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateMainFailure: function(response) {
        this.logger.warn("updateMainFailure");

        var evt = Ext.create("Core.event.main.Event", Core.event.main.Event.UPDATE_MAIN_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete main service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteMainSuccess: function(response) {
        this.logger.info("deleteMainSuccess");

        this.mainStore.setSelectedRecord(null);
        var main = this.mainStore.findRecord("id", response.data.id);
        this.mainStore.remove(main);

        var evt = Ext.create("Core.event.main.Event", Core.event.main.Event.DELETE_MAIN_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete main service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteMainFailure: function(response) {
        this.logger.warn("deleteMainFailure");

        var evt = Ext.create("Core.event.main.Event", Core.event.main.Event.DELETE_MAIN_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
    
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the get main event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.main.Event} event Reference to the main event.
     */
    onGetMainSlide: function(event) {
        this.logger.debug("onGetMainSlide");

        this.getMainSlide();
    },
	
    /**
     * Handles the get main event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.main.Event} event Reference to the main event.
     */
    onGetMainList: function(event) {
        this.logger.debug("onGetMainList");

        this.getMainList();
    },    

    /**
     * Handles the get main event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.main.Event} event Reference to the main event.
     */
    onGetMainTile: function(event) {
        this.logger.debug("onGetMainTile");

        this.getMainTile();
    }, 

    /**
     * Handles the get main event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.main.Event} event Reference to the main event.
     */
    onGetMainModal: function(event) {
        this.logger.debug("onGetMainModal");

        this.getMainModal();
    },
	
    /**
     * Handles the create main event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.main.Event} event Reference to the main event. Contains a reference to the
     * main.
     */
    onCreateMain: function(event) {
        this.logger.debug("onCreateMain");

        this.createMain(event.main);
    },

    /**
     * Handles the update main event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.main.Event} event Reference to the main event. Contains a reference to the
     * main.
     */
    onUpdateMain: function(event) {
        this.logger.debug("onUpdateMain");

        this.updateMain(event.main);
    },

    /**
     * Handles the delete main event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.main.Event} event Reference to the main event. Contains a reference to the
     * main.
     */
    onDeleteMain: function(event) {
        this.logger.debug("onDeleteMain");

        this.deleteMain(event.main);
    }
    
});    