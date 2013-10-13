/**
 * The EventGroupController acts as the command with asynchronous callback methods for successful
 * and failed event group service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.event.group.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.event.group.Event",
        "FlowMVC.mvc.service.rpc.Responder",
        "nineam.locale.store.LocalesStore",
        "nineam.locale.event.LocaleEvent"		
    ],

    inject: [
        "eventGroupService",
        "eventGroupStore",
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
        this.eventBus.addGlobalEventListener(Core.event.event.group.Event.CREATE_EVENT_GROUP, this.onCreateEventGroup, this);
        this.eventBus.addGlobalEventListener(Core.event.event.group.Event.UPDATE_EVENT_GROUP, this.onUpdateEventGroup, this);
        this.eventBus.addGlobalEventListener(Core.event.event.group.Event.DELETE_EVENT_GROUP, this.onDeleteEventGroup, this);
		this.eventBus.addGlobalEventListener(Core.event.event.group.Event.READ_EVENT_GROUPS, this.onReadEventGroups, this);
    },

    /**
     * Performs create event group by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.event.group.Model} eventGroup The event group to create.
     */
    createEventGroup: function(eventGroup) {
        this.logger.debug("createEventGroup");
        this.executeServiceCall(this.eventGroupService, this.eventGroupService.createEventGroup, [eventGroup], this.createEventGroupSuccess, this.createEventGroupFailure, this);
    },

    /**
     * Performs update event group by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.event.group.Model} eventGroup The event group to update.
     */
    updateEventGroup: function(eventGroup) {
        this.logger.debug("updateEventGroup");
        this.executeServiceCall(this.eventGroupService, this.eventGroupService.updateEventGroup, [eventGroup], this.updateEventGroupSuccess, this.updateEventGroupFailure, this);
    },

    /**
     * Performs delete event group by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.event.group.Model} eventGroup The event group to delete.
     */
    deleteEventGroup: function(eventGroup) {
        this.logger.debug("deleteEventGroup");
        this.executeServiceCall(this.eventGroupService, this.eventGroupService.deleteEventGroup, [eventGroup], this.deleteEventGroupSuccess, this.deleteEventGroupFailure, this);
    },

    /**
     * Performs read event groups by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     */
    readEventGroups: function() {
        this.logger.debug("readEventGroups");
        this.executeServiceCall(this.eventGroupService, this.eventGroupService.readEventGroups, null, this.readEventGroupsSuccess, this.readEventGroupsFailure, this);
    },	
	
    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////	
	
    /**
     * Handles the successful create event group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createEventGroupSuccess: function(response) {
        this.logger.info("createEventGroupSuccess");

        this.eventGroupStore.add(response);

        var evt = Ext.create("Core.event.event.group.Event", Core.event.event.group.Event.CREATE_EVENT_GROUP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create event group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createEventGroupFailure: function(response) {
        this.logger.warn("createEventGroupFailure");

        var evt = Ext.create("Core.event.event.group.Event", Core.event.event.group.Event.CREATE_EVENT_GROUP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update event group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateEventGroupSuccess: function(response) {
        this.logger.info("updateEventGroupSuccess");

        this.eventGroupStore.update(response);

        var evt = Ext.create("Core.event.event.group.Event", Core.event.event.group.Event.UPDATE_EVENT_GROUP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update event group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateEventGroupFailure: function(response) {
        this.logger.warn("updateEventGroupFailure");

        var evt = Ext.create("Core.event.event.group.Event", Core.event.event.group.Event.UPDATE_EVENT_GROUP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete event group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteEventGroupSuccess: function(response) {
        this.logger.info("deleteEventGroupSuccess");

        this.eventGroupStore.setSelectedRecord(null);
        var eventGroup = this.eventGroupStore.findRecord("kp_EventGroupID", response.data.kp_EventGroupID);
        this.eventGroupStore.remove(eventGroup);

        var evt = Ext.create("Core.event.event.group.Event", Core.event.event.group.Event.DELETE_EVENT_GROUP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete event group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteEventGroupFailure: function(response) {
        this.logger.warn("deleteEventGroupFailure");

        var evt = Ext.create("Core.event.event.group.Event", Core.event.event.group.Event.DELETE_EVENT_GROUP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful read event groups service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     */
    readEventGroupsSuccess: function(response) {
        this.logger.info("readEventGroupsSuccess");

		this.eventGroupStore.setData(response.eventGroups);

        var evt = Ext.create("Core.event.event.group.Event", Core.event.event.group.Event.READ_EVENT_GROUPS_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed read event groups service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    readEventGroupsFailure: function(response) {
        this.logger.warn("readEventGroupsFailure");

        var evt = Ext.create("Core.event.event.group.Event", Core.event.event.group.Event.READ_EVENT_GROUPS_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////
	
    /**
     * Handles the create event group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.event.group.Event} event Reference to the event group event. Contains a reference to the
     * event group.
     */
    onCreateEventGroup: function(event) {
        this.logger.debug("onCreateEventGroup");

        this.createEventGroup(event.eventGroup);
    },

    /**
     * Handles the update event group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.event.group.Event} event Reference to the event group event. Contains a reference to the
     * event group.
     */
    onUpdateEventGroup: function(event) {
        this.logger.debug("onUpdateEventGroup");

        this.updateEventGroup(event.eventGroup);
    },

    /**
     * Handles the delete event group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.event.group.Event} event Reference to the event group event. Contains a reference to the
     * event group.
     */
    onDeleteEventGroup: function(event) {
        this.logger.debug("onDeleteEventGroup");

        this.deleteEventGroup(event.eventGroup);
    },
	
	/**
     * Handles the read event groups event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.event.group.Event} event Reference to the event group event. Contains a reference to the
     * event groups.
     */
    onReadEventGroups: function(event) {
        this.logger.debug("onReadEventGroups");

        this.readEventGroups();
    }
    
});    