/**
 * The GroupController acts as the command with asynchronous callback methods for successful
 * and failed group service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.group.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.group.Event",
        "FlowMVC.mvc.service.rpc.Responder",
        "nineam.locale.store.LocalesStore",
        "nineam.locale.event.LocaleEvent"		
    ],

    inject: [
        "groupService",
        "groupStore",
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
        this.eventBus.addGlobalEventListener(Core.event.group.Event.GET_GROUP_SLIDE, this.onGetGroupSlide, this);
        this.eventBus.addGlobalEventListener(Core.event.group.Event.GET_GROUP_LIST, this.onGetGroupList, this); 
        this.eventBus.addGlobalEventListener(Core.event.group.Event.GET_GROUP_TILE, this.onGetGroupTile, this);
		this.eventBus.addGlobalEventListener(Core.event.group.Event.GET_GROUP_MODAL, this.onGetGroupModal, this)               
        this.eventBus.addGlobalEventListener(Core.event.group.Event.CREATE_GROUP, this.onCreateGroup, this);
        this.eventBus.addGlobalEventListener(Core.event.group.Event.UPDATE_GROUP, this.onUpdateGroup, this);
        this.eventBus.addGlobalEventListener(Core.event.group.Event.DELETE_GROUP, this.onDeleteGroup, this);
		this.eventBus.addGlobalEventListener(Core.event.group.Event.READ_GROUPS, this.onReadGroups, this);
    },

    /**
     * Initializes the Localization Manager loading in the languages available.
     */
    // initLocaleManager: function() {
        // var lm = nineam.locale.LocaleManager;
        // lm.addListener(nineam.locale.event.LocaleEvent.INITIALIZED, this.localeManagerInitializedEventHandler, this);

		// var currentApp = Core.config.global.Config.getCurrentApp();
		// if(currentApp !== '') { 
			// currentApp = currentApp + "/"; 
		// }
		
        // var locales = Ext.create("nineam.locale.store.LocalesStore", {
            // data: [
                // {id: "en_gb", label: "English GB", url: "locale/group/en_gb.json"},
                // {id: "en_us", label: "English US", url: "locale/group/en_us.json"},
                // {id: "es_us", label: "Spanish", url: "locale/group/es_us.json"},
                // {id: "nl_nl", label: "Dutch", url: "locale/group/nl_nl.json"},
                // {id: "de_de", label: "Deutsch", url: "locale/group/de_de.json"}
            // ]
        // });
        // lm.setLocales(locales);

        // var locale = lm.getPersistedLocale();
        
	//	locale = "de_de"; // for testing only
        
        // this.logger.debug("locale: " + locale);
        
        
        // locale = locale ? locale : Core.config.global.Config.getLocale();  // WAS "en_uk"
        // this.logger.debug("initLocaleManager: locale = " + locale);
        // lm.setLocale(locale);
    // },

    /**
     * LocaleManager initialized event handler
     */
    // localeManagerInitializedEventHandler: function() {
    //   Ext.getBody().unmask(); // TODO: not for touch
    // },
	
    /**
     * Performs get group by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getGroupSlide: function() {
        this.logger.debug("getGroupSlide");
        this.executeServiceCall(this.groupService, this.groupService.getGroupSlide, null, this.getGroupSlideSuccess, this.getGroupSlideFailure, this);
    },	
	
    /**
     * Performs get group by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getGroupList: function() {
        this.logger.debug("getGroupList");
        this.executeServiceCall(this.groupService, this.groupService.getGroupList, null, this.getGroupListSuccess, this.getGroupListFailure, this);
    },

    /**
     * Performs get group by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getGroupTile: function() {
        this.logger.debug("getGroupTile");
        this.executeServiceCall(this.groupService, this.groupService.getGroupTile, null, this.getGroupTileSuccess, this.getGroupTileFailure, this);
    },

    /**
     * Performs get group by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getGroupModal: function() {
        this.logger.debug("getGroupModal");
        this.executeServiceCall(this.groupService, this.groupService.getGroupModal, null, this.getGroupModalSuccess, this.getGroupModalFailure, this);
    },	
	
    /**
     * Performs create group by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.group.Model} group The group to create.
     */
    createGroup: function(group) {
        this.logger.debug("createGroup");
        this.executeServiceCall(this.groupService, this.groupService.createGroup, [group], this.createGroupSuccess, this.createGroupFailure, this);
    },

    /**
     * Performs update group by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.group.Model} group The group to update.
     */
    updateGroup: function(group) {
        this.logger.debug("updateGroup");
        this.executeServiceCall(this.groupService, this.groupService.updateGroup, [group], this.updateGroupSuccess, this.updateGroupFailure, this);
    },

    /**
     * Performs delete group by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.group.Model} group The group to delete.
     */
    deleteGroup: function(group) {
        this.logger.debug("deleteGroup");
        this.executeServiceCall(this.groupService, this.groupService.deleteGroup, [group], this.deleteGroupSuccess, this.deleteGroupFailure, this);
    },

    /**
     * Performs read groups by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     */
    readGroups: function() {
        this.logger.debug("readGroups");
        this.executeServiceCall(this.groupService, this.groupService.readGroups, null, this.readGroupsSuccess, this.readGroupsFailure, this);
    },	
	
    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the successful get group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getGroupSlideSuccess: function(response) {
        this.logger.info("getGroupSlideSuccess");

		this.groupStore.setData(response.groupSlide);

        var evt = Ext.create("Core.event.group.Event", Core.event.group.Event.GET_GROUP_SLIDE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the successful get group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getGroupListSuccess: function(response) {
        this.logger.info("getGroupListSuccess");

        this.groupStore.setData(response.groupList);

        var evt = Ext.create("Core.event.group.Event", Core.event.group.Event.GET_GROUP_LIST_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getGroupTileSuccess: function(response) {
        this.logger.info("getGroupTileSuccess");

        this.groupStore.setData(response.groupTile);

        var evt = Ext.create("Core.event.group.Event", Core.event.group.Event.GET_GROUP_TILE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getGroupModalSuccess: function(response) {
        this.logger.info("getGroupModalSuccess");

        this.groupStore.setData(response.groupModal);

        var evt = Ext.create("Core.event.group.Event", Core.event.group.Event.GET_GROUP_MODAL_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the failed get group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getGroupSlideFailure: function(response) {
        this.logger.warn("getGroupSlideFailure");

        var evt = Ext.create("Core.event.group.Event", Core.event.group.Event.GET_GROUP_SLIDE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    /**
     * Handles the failed get group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getGroupListFailure: function(response) {
        this.logger.warn("getGroupListFailure");

        var evt = Ext.create("Core.event.group.Event", Core.event.group.Event.GET_GROUP_LIST_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getGroupTileFailure: function(response) {
        this.logger.warn("getGroupTileFailure");

        var evt = Ext.create("Core.event.group.Event", Core.event.group.Event.GET_GROUP_TILE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getGroupModalFailure: function(response) {
        this.logger.warn("getGroupModalFailure");

        var evt = Ext.create("Core.event.group.Event", Core.event.group.Event.GET_GROUP_MODAL_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 	
	
    /**
     * Handles the successful create group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createGroupSuccess: function(response) {
        this.logger.info("createGroupSuccess");

        this.groupStore.add(response);

        var evt = Ext.create("Core.event.group.Event", Core.event.group.Event.CREATE_GROUP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createGroupFailure: function(response) {
        this.logger.warn("createGroupFailure");

        var evt = Ext.create("Core.event.group.Event", Core.event.group.Event.CREATE_GROUP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateGroupSuccess: function(response) {
        this.logger.info("updateGroupSuccess");

        this.groupStore.update(response);

        var evt = Ext.create("Core.event.group.Event", Core.event.group.Event.UPDATE_GROUP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateGroupFailure: function(response) {
        this.logger.warn("updateGroupFailure");

        var evt = Ext.create("Core.event.group.Event", Core.event.group.Event.UPDATE_GROUP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete group service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteGroupSuccess: function(response) {
        this.logger.info("deleteGroupSuccess");

        this.groupStore.setSelectedRecord(null);
        var group = this.groupStore.findRecord("kp_GroupID", response.data.kp_GroupID);
        this.groupStore.remove(group);

        var evt = Ext.create("Core.event.group.Event", Core.event.group.Event.DELETE_GROUP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete group service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteGroupFailure: function(response) {
        this.logger.warn("deleteGroupFailure");

        var evt = Ext.create("Core.event.group.Event", Core.event.group.Event.DELETE_GROUP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful read groups service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     */
    readGroupsSuccess: function(response) {
        this.logger.info("readGroupsSuccess");

		this.groupStore.setData(response.groups);

        var evt = Ext.create("Core.event.group.Event", Core.event.group.Event.READ_GROUPS_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed read groups service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    readGroupsFailure: function(response) {
        this.logger.warn("readGroupsFailure");

        var evt = Ext.create("Core.event.group.Event", Core.event.group.Event.READ_GROUPS_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the get group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.group.Event} event Reference to the group event.
     */
    onGetGroupSlide: function(event) {
        this.logger.debug("onGetGroupSlide");

        this.getGroupSlide();
    },
	
    /**
     * Handles the get group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.group.Event} event Reference to the group event.
     */
    onGetGroupList: function(event) {
        this.logger.debug("onGetGroupList");

        this.getGroupList();
    },    

    /**
     * Handles the get group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.group.Event} event Reference to the group event.
     */
    onGetGroupTile: function(event) {
        this.logger.debug("onGetGroupTile");

        this.getGroupTile();
    }, 

    /**
     * Handles the get group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.group.Event} event Reference to the group event.
     */
    onGetGroupModal: function(event) {
        this.logger.debug("onGetGroupModal");

        this.getGroupModal();
    },
	
    /**
     * Handles the create group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.group.Event} event Reference to the group event. Contains a reference to the
     * group.
     */
    onCreateGroup: function(event) {
        this.logger.debug("onCreateGroup");

        this.createGroup(event.group);
    },

    /**
     * Handles the update group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.group.Event} event Reference to the group event. Contains a reference to the
     * group.
     */
    onUpdateGroup: function(event) {
        this.logger.debug("onUpdateGroup");

        this.updateGroup(event.group);
    },

    /**
     * Handles the delete group event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.group.Event} event Reference to the group event. Contains a reference to the
     * group.
     */
    onDeleteGroup: function(event) {
        this.logger.debug("onDeleteGroup");

        this.deleteGroup(event.group);
    },
	
	/**
     * Handles the read groups event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.group.Event} event Reference to the group event. Contains a reference to the
     * groups.
     */
    onReadGroups: function(event) {
        this.logger.debug("onReadGroups");

        this.readGroups();
    }
    
});    