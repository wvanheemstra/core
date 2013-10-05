/**
 * The OrganisationGroupController acts as the command with asynchronous callback methods for successful
 * and failed organisation group service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.organisation.group.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.organisation.group.Event",
        "FlowMVC.mvc.service.rpc.Responder",
        "nineam.locale.store.LocalesStore",
        "nineam.locale.event.LocaleEvent"		
    ],

    inject: [
        "organisationGroupService",
        "organisationGroupStore",
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
        this.eventBus.addGlobalEventListener(Core.event.organisation.group.Event.CREATE_ORGANISATION_GROUP, this.onCreateOrganisationGroup, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.group.Event.UPDATE_ORGANISATION_GROUP, this.onUpdateOrganisationGroup, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.group.Event.DELETE_ORGANISATION_GROUP, this.onDeleteOrganisationGroup, this);
		this.eventBus.addGlobalEventListener(Core.event.organisation.group.Event.READ_ORGANISATION_GROUPS, this.onReadOrganisationGroups, this);
    },

    /**
     * Performs create organisation group by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.organisation.group.Model} organisationGroup The organisation group to create.
     */
    createOrganisationGroup: function(organisationGroup) {
        this.logger.debug("createOrganisationGroup");
        this.executeServiceCall(this.organisationGroupService, this.organisationGroupService.createOrganisationGroup, [organisationGroup], this.createOrganisationGroupSuccess, this.createOrganisationGroupFailure, this);
    },

    /**
     * Performs update organisation group by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.organisation.group.Model} organisationGroup The organisation group to update.
     */
    updateOrganisationGroup: function(organisationGroup) {
        this.logger.debug("updateOrganisationGroup");
        this.executeServiceCall(this.organisationGroupService, this.organisationGroupService.updateOrganisationGroup, [organisationGroup], this.updateOrganisationGroupSuccess, this.updateOrganisationGroupFailure, this);
    },

    /**
     * Performs delete organisation group by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.organisation.group.Model} organisationGroup The organisation group to delete.
     */
    deleteOrganisationGroup: function(organisationGroup) {
        this.logger.debug("deleteOrganisationGroup");
        this.executeServiceCall(this.organisationGroupService, this.organisationGroupService.deleteOrganisationGroup, [organisationGroup], this.deleteOrganisationGroupSuccess, this.deleteOrganisationGroupFailure, this);
    },

    /**
     * Performs read organisation groups by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     */
    readOrganisationGroups: function() {
        this.logger.debug("readOrganisationGroups");
        this.executeServiceCall(this.organisationGroupService, this.organisationGroupService.readOrganisationGroups, null, this.readOrganisationGroupsSuccess, this.readOrganisationGroupsFailure, this);
    },	
	
    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////	
	
    /**
     * Handles the successful create organisation group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createOrganisationGroupSuccess: function(response) {
        this.logger.info("createOrganisationGroupSuccess");

        this.organisationGroupStore.add(response);

        var evt = Ext.create("Core.event.organisation.group.Event", Core.event.organisation.group.Event.CREATE_ORGANISATION_GROUP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create organisation group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createOrganisationGroupFailure: function(response) {
        this.logger.warn("createOrganisationGroupFailure");

        var evt = Ext.create("Core.event.organisation.group.Event", Core.event.organisation.group.Event.CREATE_ORGANISATION_GROUP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update organisation group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateOrganisationGroupSuccess: function(response) {
        this.logger.info("updateOrganisationGroupSuccess");

        this.organisationGroupStore.update(response);

        var evt = Ext.create("Core.event.organisation.group.Event", Core.event.organisation.group.Event.UPDATE_ORGANISATION_GROUP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update organisation group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateOrganisationGroupFailure: function(response) {
        this.logger.warn("updateOrganisationGroupFailure");

        var evt = Ext.create("Core.event.organisation.group.Event", Core.event.organisation.group.Event.UPDATE_ORGANISATION_GROUP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete organisation group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteOrganisationGroupSuccess: function(response) {
        this.logger.info("deleteOrganisationGroupSuccess");

        this.organisationGroupStore.setSelectedRecord(null);
        var organisationGroup = this.organisationGroupStore.findRecord("kp_OrganisationGroupID", response.data.kp_OrganisationGroupID);
        this.organisationGroupStore.remove(organisationGroup);

        var evt = Ext.create("Core.event.organisation.group.Event", Core.event.organisation.group.Event.DELETE_ORGANISATION_GROUP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete organisation group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteOrganisationGroupFailure: function(response) {
        this.logger.warn("deleteOrganisationGroupFailure");

        var evt = Ext.create("Core.event.organisation.group.Event", Core.event.organisation.group.Event.DELETE_ORGANISATION_GROUP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful read organisation groups service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     */
    readOrganisationGroupsSuccess: function(response) {
        this.logger.info("readOrganisationGroupsSuccess");

		this.organisationGroupStore.setData(response.organisationGroups);

        var evt = Ext.create("Core.event.organisation.group.Event", Core.event.organisation.group.Event.READ_ORGANISATION_GROUPS_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed read organisation groups service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    readOrganisationGroupsFailure: function(response) {
        this.logger.warn("readOrganisationGroupsFailure");

        var evt = Ext.create("Core.event.organisation.group.Event", Core.event.organisation.group.Event.READ_ORGANISATION_GROUPS_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////
	
    /**
     * Handles the create organisation group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.organisation.group.Event} event Reference to the organisation group event. Contains a reference to the
     * organisation group.
     */
    onCreateOrganisationGroup: function(event) {
        this.logger.debug("onCreateOrganisationGroup");

        this.createOrganisationGroup(event.organisationGroup);
    },

    /**
     * Handles the update organisation group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.organisation.group.Event} event Reference to the organisation group event. Contains a reference to the
     * organisation group.
     */
    onUpdateOrganisationGroup: function(event) {
        this.logger.debug("onUpdateOrganisationGroup");

        this.updateOrganisationGroup(event.organisationGroup);
    },

    /**
     * Handles the delete organisation group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.organisation.group.Event} event Reference to the organisation group event. Contains a reference to the
     * organisation group.
     */
    onDeleteOrganisationGroup: function(event) {
        this.logger.debug("onDeleteOrganisationGroup");

        this.deleteOrganisationGroup(event.organisationGroup);
    },
	
	/**
     * Handles the read organisation groups event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.organisation.group.Event} event Reference to the organisation group event. Contains a reference to the
     * organisation groups.
     */
    onReadOrganisationGroups: function(event) {
        this.logger.debug("onReadOrganisationGroups");

        this.readOrganisationGroups();
    }
    
});    