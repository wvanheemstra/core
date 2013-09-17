/**
 * The OrganisationController acts as the command with asynchronous callback methods for successful
 * and failed organisation service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.organisation.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.organisation.Event",
        "FlowMVC.mvc.service.rpc.Responder"
    ],

    inject: [
        "organisationService",
        "organisationStore",
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
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.GET_ORGANISATION_SLIDE, this.onGetOrganisationSlide, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.GET_ORGANISATION_LIST, this.onGetOrganisationList, this); 
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.GET_ORGANISATION_TILE, this.onGetOrganisationTile, this);        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.GET_ORGANISATION_MODAL, this.onGetOrganisationModal, this);               
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.CREATE_ORGANISATION, this.onCreateOrganisation, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.UPDATE_ORGANISATION, this.onUpdateOrganisation, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.DELETE_ORGANISATION, this.onDeleteOrganisation, this);
    },

    /**
     * Performs get organisation by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getOrganisationSlide: function() {
        this.logger.debug("getOrganisationSlide");
        this.executeServiceCall(this.organisationService, this.organisationService.getOrganisationSlide, null, this.getOrganisationSlideSuccess, this.getOrganisationSlideFailure, this);
    },	
	
    /**
     * Performs get organisation by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getOrganisationList: function() {
        this.logger.debug("getOrganisationList");
        this.executeServiceCall(this.organisationService, this.organisationService.getOrganisationList, null, this.getOrganisationListSuccess, this.getOrganisationListFailure, this);
    },

    /**
     * Performs get organisation by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getOrganisationTile: function() {
        this.logger.debug("getOrganisationTile");
        this.executeServiceCall(this.organisationService, this.organisationService.getOrganisationTile, null, this.getOrganisationTileSuccess, this.getOrganisationTileFailure, this);
    },

    /**
     * Performs get organisation by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getOrganisationModal: function() {
        this.logger.debug("getOrganisationModal");
        this.executeServiceCall(this.organisationService, this.organisationService.getOrganisationModal, null, this.getOrganisationModalSuccess, this.getOrganisationModalFailure, this);
    },	
	
    /**
     * Performs create organisation by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.organisation.Model} organisation The organisation to create.
     */
    createOrganisation: function(organisation) {
        this.logger.debug("createOrganisation");
        this.executeServiceCall(this.organisationService, this.organisationService.createOrganisation, [organisation], this.createOrganisationSuccess, this.createOrganisationFailure, this);
    },

    /**
     * Performs update organisation by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.organisation.Model} organisation The organisation to update.
     */
    updateOrganisation: function(organisation) {
        this.logger.debug("updateOrganisation");
        this.executeServiceCall(this.organisationService, this.organisationService.updateOrganisation, [organisation], this.updateOrganisationSuccess, this.updateOrganisationFailure, this);
    },

    /**
     * Performs delete organisation by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.organisation.Model} organisation The organisation to delete.
     */
    deleteOrganisation: function(organisation) {
        this.logger.debug("deleteOrganisation");
        this.executeServiceCall(this.organisationService, this.organisationService.deleteOrganisation, [organisation], this.deleteOrganisationSuccess, this.deleteOrganisationFailure, this);
    },

    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the successful get organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getOrganisationSlideSuccess: function(response) {
        this.logger.info("getOrganisationSlideSuccess");

		this.organisationStore.setData(response.organisationSlide);

        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.GET_ORGANISATION_SLIDE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the successful get organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getOrganisationListSuccess: function(response) {
        this.logger.info("getOrganisationListSuccess");

        this.organisationStore.setData(response.organisationList);

        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.GET_ORGANISATION_LIST_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getOrganisationTileSuccess: function(response) {
        this.logger.info("getOrganisationTileSuccess");

        this.organisationStore.setData(response.organisationTile);

        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.GET_ORGANISATION_TILE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getOrganisationModalSuccess: function(response) {
        this.logger.info("getOrganisationModalSuccess");

        this.organisationStore.setData(response.organisationModal);

        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.GET_ORGANISATION_MODAL_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the failed get organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getOrganisationSlideFailure: function(response) {
        this.logger.warn("getOrganisationSlideFailure");

        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.GET_ORGANISATION_SLIDE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    /**
     * Handles the failed get organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getOrganisationListFailure: function(response) {
        this.logger.warn("getOrganisationListFailure");

        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.GET_ORGANISATION_LIST_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getOrganisationTileFailure: function(response) {
        this.logger.warn("getOrganisationTileFailure");

        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.GET_ORGANISATION_TILE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getOrganisationModalFailure: function(response) {
        this.logger.warn("getOrganisationModalFailure");

        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.GET_ORGANISATION_MODAL_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 	
	
    /**
     * Handles the successful create organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createOrganisationSuccess: function(response) {
        this.logger.info("createOrganisationSuccess");

        this.organisationStore.add(response);

        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.CREATE_ORGANISATION_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createOrganisationFailure: function(response) {
        this.logger.warn("createOrganisationFailure");

        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.CREATE_ORGANISATION_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateOrganisationSuccess: function(response) {
        this.logger.info("updateOrganisationSuccess");

        this.organisationStore.update(response);

        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.UPDATE_ORGANISATION_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateOrganisationFailure: function(response) {
        this.logger.warn("updateOrganisationFailure");

        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.UPDATE_ORGANISATION_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteOrganisationSuccess: function(response) {
        this.logger.info("deleteOrganisationSuccess");

        this.organisationStore.setSelectedRecord(null);
        var organisation = this.organisationStore.findRecord("id", response.data.id);
        this.organisationStore.remove(organisation);

        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.DELETE_ORGANISATION_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete organisation service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteOrganisationFailure: function(response) {
        this.logger.warn("deleteOrganisationFailure");

        var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.DELETE_ORGANISATION_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
    
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the get organisation event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.organisation.Event} event Reference to the organisation event.
     */
    onGetOrganisationSlide: function(event) {
        this.logger.debug("onGetOrganisationSlide");

        this.getOrganisationSlide();
    },
	
    /**
     * Handles the get organisation event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.organisation.Event} event Reference to the organisation event.
     */
    onGetOrganisationList: function(event) {
        this.logger.debug("onGetOrganisationList");

        this.getOrganisationList();
    },    

    /**
     * Handles the get organisation event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.organisation.Event} event Reference to the organisation event.
     */
    onGetOrganisationTile: function(event) {
        this.logger.debug("onGetOrganisationTile");

        this.getOrganisationTile();
    }, 

    /**
     * Handles the get organisation event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.organisation.Event} event Reference to the organisation event.
     */
    onGetOrganisationModal: function(event) {
        this.logger.debug("onGetOrganisationModal");

        this.getOrganisationModal();
    },
	
    /**
     * Handles the create organisation event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.organisation.Event} event Reference to the organisation event. Contains a reference to the
     * organisation.
     */
    onCreateOrganisation: function(event) {
        this.logger.debug("onCreateOrganisation");

        this.createOrganisation(event.organisation);
    },

    /**
     * Handles the update organisation event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.organisation.Event} event Reference to the organisation event. Contains a reference to the
     * organisation.
     */
    onUpdateOrganisation: function(event) {
        this.logger.debug("onUpdateOrganisation");

        this.updateOrganisation(event.organisation);
    },

    /**
     * Handles the delete organisation event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.organisation.Event} event Reference to the organisation event. Contains a reference to the
     * organisation.
     */
    onDeleteOrganisation: function(event) {
        this.logger.debug("onDeleteOrganisation");

        this.deleteOrganisation(event.organisation);
    }
    
});    