/**
 * The PersonGroupController acts as the command with asynchronous callback methods for successful
 * and failed person group service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.person.group.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.person.group.Event",
        "FlowMVC.mvc.service.rpc.Responder",
        "nineam.locale.store.LocalesStore",
        "nineam.locale.event.LocaleEvent"		
    ],

    inject: [
        "personGroupService",
        "personGroupStore",
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
        this.eventBus.addGlobalEventListener(Core.event.person.group.Event.CREATE_PERSON_GROUP, this.onCreatePersonGroup, this);
        this.eventBus.addGlobalEventListener(Core.event.person.group.Event.UPDATE_PERSON_GROUP, this.onUpdatePersonGroup, this);
        this.eventBus.addGlobalEventListener(Core.event.person.group.Event.DELETE_PERSON_GROUP, this.onDeletePersonGroup, this);
		this.eventBus.addGlobalEventListener(Core.event.person.group.Event.READ_PERSON_GROUPS, this.onReadPersonGroups, this);
    },

    /**
     * Performs create person group by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.person.group.Model} personGroup The person group to create.
     */
    createPersonGroup: function(personGroup) {
        this.logger.debug("createPersonGroup");
        this.executeServiceCall(this.personGroupService, this.personGroupService.createPersonGroup, [personGroup], this.createPersonGroupSuccess, this.createPersonGroupFailure, this);
    },

    /**
     * Performs update person group by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.person.group.Model} personGroup The person group to update.
     */
    updatePersonGroup: function(personGroup) {
        this.logger.debug("updatePersonGroup");
        this.executeServiceCall(this.personGroupService, this.personGroupService.updatePersonGroup, [personGroup], this.updatePersonGroupSuccess, this.updatePersonGroupFailure, this);
    },

    /**
     * Performs delete person group by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.person.group.Model} personGroup The person group to delete.
     */
    deletePersonGroup: function(personGroup) {
        this.logger.debug("deletePersonGroup");
        this.executeServiceCall(this.personGroupService, this.personGroupService.deletePersonGroup, [personGroup], this.deletePersonGroupSuccess, this.deletePersonGroupFailure, this);
    },

    /**
     * Performs read person groups by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     */
    readPersonGroups: function() {
        this.logger.debug("readPersonGroups");
        this.executeServiceCall(this.personGroupService, this.personGroupService.readPersonGroups, null, this.readPersonGroupsSuccess, this.readPersonGroupsFailure, this);
    },	
	
    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////	
	
    /**
     * Handles the successful create person group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createPersonGroupSuccess: function(response) {
        this.logger.info("createPersonGroupSuccess");

        this.personGroupStore.add(response);

        var evt = Ext.create("Core.event.person.group.Event", Core.event.person.group.Event.CREATE_PERSON_GROUP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create person group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createPersonGroupFailure: function(response) {
        this.logger.warn("createPersonGroupFailure");

        var evt = Ext.create("Core.event.person.group.Event", Core.event.person.group.Event.CREATE_PERSON_GROUP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update person group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updatePersonGroupSuccess: function(response) {
        this.logger.info("updatePersonGroupSuccess");

        this.personGroupStore.update(response);

        var evt = Ext.create("Core.event.person.group.Event", Core.event.person.group.Event.UPDATE_PERSON_GROUP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update person group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updatePersonGroupFailure: function(response) {
        this.logger.warn("updatePersonGroupFailure");

        var evt = Ext.create("Core.event.person.group.Event", Core.event.person.group.Event.UPDATE_PERSON_GROUP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete person group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deletePersonGroupSuccess: function(response) {
        this.logger.info("deletePersonGroupSuccess");

        this.personGroupStore.setSelectedRecord(null);
        var personGroup = this.personGroupStore.findRecord("kp_PersonGroupID", response.data.kp_PersonGroupID);
        this.personGroupStore.remove(personGroup);

        var evt = Ext.create("Core.event.person.group.Event", Core.event.person.group.Event.DELETE_PERSON_GROUP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete person group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deletePersonGroupFailure: function(response) {
        this.logger.warn("deletePersonGroupFailure");

        var evt = Ext.create("Core.event.person.group.Event", Core.event.person.group.Event.DELETE_PERSON_GROUP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful read person groups service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     */
    readPersonGroupsSuccess: function(response) {
        this.logger.info("readPersonGroupsSuccess");

		this.personGroupStore.setData(response.personGroups);

        var evt = Ext.create("Core.event.person.group.Event", Core.event.person.group.Event.READ_PERSON_GROUPS_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed read person groups service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    readPersonGroupsFailure: function(response) {
        this.logger.warn("readPersonGroupsFailure");

        var evt = Ext.create("Core.event.person.group.Event", Core.event.person.group.Event.READ_PERSON_GROUPS_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////
	
    /**
     * Handles the create person group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.person.group.Event} event Reference to the person group event. Contains a reference to the
     * person group.
     */
    onCreatePersonGroup: function(event) {
        this.logger.debug("onCreatePersonGroup");

        this.createPersonGroup(event.personGroup);
    },

    /**
     * Handles the update person group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.person.group.Event} event Reference to the person group event. Contains a reference to the
     * person group.
     */
    onUpdatePersonGroup: function(event) {
        this.logger.debug("onUpdatePersonGroup");

        this.updatePersonGroup(event.personGroup);
    },

    /**
     * Handles the delete person group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.person.group.Event} event Reference to the person group event. Contains a reference to the
     * person group.
     */
    onDeletePersonGroup: function(event) {
        this.logger.debug("onDeletePersonGroup");

        this.deletePersonGroup(event.personGroup);
    },
	
	/**
     * Handles the read person groups event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.person.group.Event} event Reference to the person group event. Contains a reference to the
     * person groups.
     */
    onReadPersonGroups: function(event) {
        this.logger.debug("onReadPersonGroups");

        this.readPersonGroups();
    }
    
});    