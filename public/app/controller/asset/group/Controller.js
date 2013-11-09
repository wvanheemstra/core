/**
 * The AssetGroupController acts as the command with asynchronous callback methods for successful
 * and failed asset group service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.asset.group.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.asset.group.Event",
        "FlowMVC.mvc.service.rpc.Responder",
        "nineam.locale.store.LocalesStore",
        "nineam.locale.event.LocaleEvent"		
    ],

    inject: [
        "assetGroupService",
        "assetGroupStore",
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
        this.eventBus.addGlobalEventListener(Core.event.asset.group.Event.CREATE_ASSET_GROUP, this.onCreateAssetGroup, this);
        this.eventBus.addGlobalEventListener(Core.event.asset.group.Event.UPDATE_ASSET_GROUP, this.onUpdateAssetGroup, this);
        this.eventBus.addGlobalEventListener(Core.event.asset.group.Event.DELETE_ASSET_GROUP, this.onDeleteAssetGroup, this);
		this.eventBus.addGlobalEventListener(Core.event.asset.group.Event.READ_ASSET_GROUPS, this.onReadAssetGroups, this);
    },

    /**
     * Performs create asset group by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.asset.group.Model} assetGroup The asset group to create.
     */
    createAssetGroup: function(assetGroup) {
        this.logger.debug("createAssetGroup");
        this.executeServiceCall(this.assetGroupService, this.assetGroupService.createAssetGroup, [assetGroup], this.createAssetGroupSuccess, this.createAssetGroupFailure, this);
    },

    /**
     * Performs update asset group by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.asset.group.Model} assetGroup The asset group to update.
     */
    updateAssetGroup: function(assetGroup) {
        this.logger.debug("updateAssetGroup");
        this.executeServiceCall(this.assetGroupService, this.assetGroupService.updateAssetGroup, [assetGroup], this.updateAssetGroupSuccess, this.updateAssetGroupFailure, this);
    },

    /**
     * Performs delete asset group by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.asset.group.Model} assetGroup The asset group to delete.
     */
    deleteAssetGroup: function(assetGroup) {
        this.logger.debug("deleteAssetGroup");
        this.executeServiceCall(this.assetGroupService, this.assetGroupService.deleteAssetGroup, [assetGroup], this.deleteAssetGroupSuccess, this.deleteAssetGroupFailure, this);
    },

    /**
     * Performs read asset groups by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     */
    readAssetGroups: function() {
        this.logger.debug("readAssetGroups");
        this.executeServiceCall(this.assetGroupService, this.assetGroupService.readAssetGroups, null, this.readAssetGroupsSuccess, this.readAssetGroupsFailure, this);
    },	
	
    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////	
	
    /**
     * Handles the successful create asset group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createAssetGroupSuccess: function(response) {
        this.logger.info("createAssetGroupSuccess");

        this.assetGroupStore.add(response);

        var evt = Ext.create("Core.event.asset.group.Event", Core.event.asset.group.Event.CREATE_ASSET_GROUP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create asset group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createAssetGroupFailure: function(response) {
        this.logger.warn("createAssetGroupFailure");

        var evt = Ext.create("Core.event.asset.group.Event", Core.event.asset.group.Event.CREATE_ASSET_GROUP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update asset group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateAssetGroupSuccess: function(response) {
        this.logger.info("updateAssetGroupSuccess");

        this.assetGroupStore.update(response);

        var evt = Ext.create("Core.event.asset.group.Event", Core.event.asset.group.Event.UPDATE_ASSET_GROUP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update asset group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateAssetGroupFailure: function(response) {
        this.logger.warn("updateAssetGroupFailure");

        var evt = Ext.create("Core.event.asset.group.Event", Core.event.asset.group.Event.UPDATE_ASSET_GROUP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete asset group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteAssetGroupSuccess: function(response) {
        this.logger.info("deleteAssetGroupSuccess");

        this.assetGroupStore.setSelectedRecord(null);
        var assetGroup = this.assetGroupStore.findRecord("kp_AssetGroupID", response.data.kp_AssetGroupID);
        this.assetGroupStore.remove(assetGroup);

        var evt = Ext.create("Core.event.asset.group.Event", Core.event.asset.group.Event.DELETE_ASSET_GROUP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete asset group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteAssetGroupFailure: function(response) {
        this.logger.warn("deleteAssetGroupFailure");

        var evt = Ext.create("Core.event.asset.group.Event", Core.event.asset.group.Event.DELETE_ASSET_GROUP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful read asset groups service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     */
    readAssetGroupsSuccess: function(response) {
        this.logger.info("readAssetGroupsSuccess");

		this.assetGroupStore.setData(response.assetGroups);

        var evt = Ext.create("Core.event.asset.group.Event", Core.event.asset.group.Event.READ_ASSET_GROUPS_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed read asset groups service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    readAssetGroupsFailure: function(response) {
        this.logger.warn("readAssetGroupsFailure");

        var evt = Ext.create("Core.event.asset.group.Event", Core.event.asset.group.Event.READ_ASSET_GROUPS_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////
	
    /**
     * Handles the create asset group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.asset.group.Event} event Reference to the asset group event. Contains a reference to the
     * asset group.
     */
    onCreateAssetGroup: function(event) {
        this.logger.debug("onCreateAssetGroup");

        this.createAssetGroup(event.assetGroup);
    },

    /**
     * Handles the update asset group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.asset.group.Event} event Reference to the asset group event. Contains a reference to the
     * asset group.
     */
    onUpdateAssetGroup: function(event) {
        this.logger.debug("onUpdateAssetGroup");

        this.updateAssetGroup(event.assetGroup);
    },

    /**
     * Handles the delete asset group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.asset.group.Event} event Reference to the asset group event. Contains a reference to the
     * asset group.
     */
    onDeleteAssetGroup: function(event) {
        this.logger.debug("onDeleteAssetGroup");

        this.deleteAssetGroup(event.assetGroup);
    },
	
	/**
     * Handles the read asset groups event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.asset.group.Event} event Reference to the asset group event. Contains a reference to the
     * asset groups.
     */
    onReadAssetGroups: function(event) {
        this.logger.debug("onReadAssetGroups");

        this.readAssetGroups();
    }
    
});    