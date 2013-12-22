/**
 * The IndividualGroupController acts as the command with asynchronous callback methods for successful
 * and failed individual group service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.individual.group.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.individual.group.Event",
        "FlowMVC.mvc.service.rpc.Responder",
        "nineam.locale.store.LocalesStore",
        "nineam.locale.event.LocaleEvent"		
    ],

    inject: [
        "individualGroupService",
        "individualGroupStore",
        "logger"
    ],
    
    /**
     * Sets up global event bus handlers.
     * @protected
     */
    init: function() {
        this.callParent();
        this.logger.debug("init");

    //    this.initLocaleManager();
    },
    
    /**
     * Sets up global event bus handlers.
     * @protected
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");              
        this.eventBus.addGlobalEventListener(Core.event.individual.group.Event.CREATE_ASSET_GROUP, this.onCreateIndividualGroup, this);
        this.eventBus.addGlobalEventListener(Core.event.individual.group.Event.UPDATE_ASSET_GROUP, this.onUpdateIndividualGroup, this);
        this.eventBus.addGlobalEventListener(Core.event.individual.group.Event.DELETE_ASSET_GROUP, this.onDeleteIndividualGroup, this);
		this.eventBus.addGlobalEventListener(Core.event.individual.group.Event.READ_ASSET_GROUPS, this.onReadIndividualGroups, this);
    },

    /**
     * Performs create individual group by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.individual.group.Model} individualGroup The individual group to create.
     */
    createIndividualGroup: function(individualGroup) {
        this.logger.debug("createIndividualGroup");
        this.executeServiceCall(this.individualGroupService, this.individualGroupService.createIndividualGroup, [individualGroup], this.createIndividualGroupSuccess, this.createIndividualGroupFailure, this);
    },

    /**
     * Performs update individual group by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.individual.group.Model} individualGroup The individual group to update.
     */
    updateIndividualGroup: function(individualGroup) {
        this.logger.debug("updateIndividualGroup");
        this.executeServiceCall(this.individualGroupService, this.individualGroupService.updateIndividualGroup, [individualGroup], this.updateIndividualGroupSuccess, this.updateIndividualGroupFailure, this);
    },

    /**
     * Performs delete individual group by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.individual.group.Model} individualGroup The individual group to delete.
     */
    deleteIndividualGroup: function(individualGroup) {
        this.logger.debug("deleteIndividualGroup");
        this.executeServiceCall(this.individualGroupService, this.individualGroupService.deleteIndividualGroup, [individualGroup], this.deleteIndividualGroupSuccess, this.deleteIndividualGroupFailure, this);
    },

    /**
     * Performs read individual groups by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     */
    readIndividualGroups: function() {
        this.logger.debug("readIndividualGroups");
        this.executeServiceCall(this.individualGroupService, this.individualGroupService.readIndividualGroups, null, this.readIndividualGroupsSuccess, this.readIndividualGroupsFailure, this);
    },	
	
    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////	
	
    /**
     * Handles the successful create individual group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createIndividualGroupSuccess: function(response) {
        this.logger.info("createIndividualGroupSuccess");

        this.individualGroupStore.add(response);

        var evt = Ext.create("Core.event.individual.group.Event", Core.event.individual.group.Event.CREATE_ASSET_GROUP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create individual group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createIndividualGroupFailure: function(response) {
        this.logger.warn("createIndividualGroupFailure");

        var evt = Ext.create("Core.event.individual.group.Event", Core.event.individual.group.Event.CREATE_ASSET_GROUP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update individual group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateIndividualGroupSuccess: function(response) {
        this.logger.info("updateIndividualGroupSuccess");

        this.individualGroupStore.update(response);

        var evt = Ext.create("Core.event.individual.group.Event", Core.event.individual.group.Event.UPDATE_ASSET_GROUP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update individual group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateIndividualGroupFailure: function(response) {
        this.logger.warn("updateIndividualGroupFailure");

        var evt = Ext.create("Core.event.individual.group.Event", Core.event.individual.group.Event.UPDATE_ASSET_GROUP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete individual group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteIndividualGroupSuccess: function(response) {
        this.logger.info("deleteIndividualGroupSuccess");

        this.individualGroupStore.setSelectedRecord(null);
        var individualGroup = this.individualGroupStore.findRecord("kp_IndividualGroupID", response.data.kp_IndividualGroupID);
        this.individualGroupStore.remove(individualGroup);

        var evt = Ext.create("Core.event.individual.group.Event", Core.event.individual.group.Event.DELETE_ASSET_GROUP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete individual group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteIndividualGroupFailure: function(response) {
        this.logger.warn("deleteIndividualGroupFailure");

        var evt = Ext.create("Core.event.individual.group.Event", Core.event.individual.group.Event.DELETE_ASSET_GROUP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful read individual groups service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     */
    readIndividualGroupsSuccess: function(response) {
        this.logger.info("readIndividualGroupsSuccess");

		this.individualGroupStore.setData(response.individualGroups);

        var evt = Ext.create("Core.event.individual.group.Event", Core.event.individual.group.Event.READ_ASSET_GROUPS_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed read individual groups service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    readIndividualGroupsFailure: function(response) {
        this.logger.warn("readIndividualGroupsFailure");

        var evt = Ext.create("Core.event.individual.group.Event", Core.event.individual.group.Event.READ_ASSET_GROUPS_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////
	
    /**
     * Handles the create individual group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.individual.group.Event} event Reference to the individual group event. Contains a reference to the
     * individual group.
     */
    onCreateIndividualGroup: function(event) {
        this.logger.debug("onCreateIndividualGroup");

        this.createIndividualGroup(event.individualGroup);
    },

    /**
     * Handles the update individual group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.individual.group.Event} event Reference to the individual group event. Contains a reference to the
     * individual group.
     */
    onUpdateIndividualGroup: function(event) {
        this.logger.debug("onUpdateIndividualGroup");

        this.updateIndividualGroup(event.individualGroup);
    },

    /**
     * Handles the delete individual group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.individual.group.Event} event Reference to the individual group event. Contains a reference to the
     * individual group.
     */
    onDeleteIndividualGroup: function(event) {
        this.logger.debug("onDeleteIndividualGroup");

        this.deleteIndividualGroup(event.individualGroup);
    },
	
	/**
     * Handles the read individual groups event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.individual.group.Event} event Reference to the individual group event. Contains a reference to the
     * individual groups.
     */
    onReadIndividualGroups: function(event) {
        this.logger.debug("onReadIndividualGroups");

        this.readIndividualGroups();
    }
    
});    