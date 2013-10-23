/**
 * The MembershipController acts as the command with asynchronous callback methods for successful
 * and failed membership service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.membership.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.membership.Event",
        "FlowMVC.mvc.service.rpc.Responder",
        "nineam.locale.store.LocalesStore",
        "nineam.locale.event.LocaleEvent"		
    ],

    inject: [
        "membershipService",
        "membershipStore",
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
        this.eventBus.addGlobalEventListener(Core.event.membership.Event.GET_MEMBERSHIP_SLIDE, this.onGetMembershipSlide, this);
        this.eventBus.addGlobalEventListener(Core.event.membership.Event.GET_MEMBERSHIP_LIST, this.onGetMembershipList, this); 
        this.eventBus.addGlobalEventListener(Core.event.membership.Event.GET_MEMBERSHIP_TILE, this.onGetMembershipTile, this);
		this.eventBus.addGlobalEventListener(Core.event.membership.Event.GET_MEMBERSHIP_MODAL, this.onGetMembershipModal, this);               
        this.eventBus.addGlobalEventListener(Core.event.membership.Event.CREATE_MEMBERSHIP, this.onCreateMembership, this);
        this.eventBus.addGlobalEventListener(Core.event.membership.Event.UPDATE_MEMBERSHIP, this.onUpdateMembership, this);
        this.eventBus.addGlobalEventListener(Core.event.membership.Event.DELETE_MEMBERSHIP, this.onDeleteMembership, this);
		this.eventBus.addGlobalEventListener(Core.event.membership.Event.READ_MEMBERSHIPS, this.onReadMemberships, this);
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
                // {id: "en_gb", label: "English GB", url: "locale/membership/en_gb.json"},
                // {id: "en_us", label: "English US", url: "locale/membership/en_us.json"},
                // {id: "es_us", label: "Spanish", url: "locale/membership/es_us.json"},
                // {id: "nl_nl", label: "Dutch", url: "locale/membership/nl_nl.json"},
                // {id: "de_de", label: "Deutsch", url: "locale/membership/de_de.json"}
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
     * Performs get membership by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getMembershipSlide: function() {
        this.logger.debug("getMembershipSlide");
        this.executeServiceCall(this.membershipService, this.membershipService.getMembershipSlide, null, this.getMembershipSlideSuccess, this.getMembershipSlideFailure, this);
    },	
	
    /**
     * Performs get membership by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getMembershipList: function() {
        this.logger.debug("getMembershipList");
        this.executeServiceCall(this.membershipService, this.membershipService.getMembershipList, null, this.getMembershipListSuccess, this.getMembershipListFailure, this);
    },

    /**
     * Performs get membership by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getMembershipTile: function() {
        this.logger.debug("getMembershipTile");
        this.executeServiceCall(this.membershipService, this.membershipService.getMembershipTile, null, this.getMembershipTileSuccess, this.getMembershipTileFailure, this);
    },

    /**
     * Performs get membership by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getMembershipModal: function() {
        this.logger.debug("getMembershipModal");
        this.executeServiceCall(this.membershipService, this.membershipService.getMembershipModal, null, this.getMembershipModalSuccess, this.getMembershipModalFailure, this);
    },	
	
    /**
     * Performs create membership by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.membership.Model} membership The membership to create.
     */
    createMembership: function(membership) {
        this.logger.debug("createMembership");
        this.executeServiceCall(this.membershipService, this.membershipService.createMembership, [membership], this.createMembershipSuccess, this.createMembershipFailure, this);
    },

    /**
     * Performs update membership by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.membership.Model} membership The membership to update.
     */
    updateMembership: function(membership) {
        this.logger.debug("updateMembership");
        this.executeServiceCall(this.membershipService, this.membershipService.updateMembership, [membership], this.updateMembershipSuccess, this.updateMembershipFailure, this);
    },

    /**
     * Performs delete membership by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.membership.Model} membership The membership to delete.
     */
    deleteMembership: function(membership) {
        this.logger.debug("deleteMembership");
        this.executeServiceCall(this.membershipService, this.membershipService.deleteMembership, [membership], this.deleteMembershipSuccess, this.deleteMembershipFailure, this);
    },

    /**
     * Performs read memberships by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     */
    readMemberships: function() {
        this.logger.debug("readMemberships");
        this.executeServiceCall(this.membershipService, this.membershipService.readMemberships, null, this.readMembershipsSuccess, this.readMembershipsFailure, this);
    },	
	
    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the successful get membership service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getMembershipSlideSuccess: function(response) {
        this.logger.info("getMembershipSlideSuccess");

		this.membershipStore.setData(response.membershipSlide);

        var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.GET_MEMBERSHIP_SLIDE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the successful get membership service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getMembershipListSuccess: function(response) {
        this.logger.info("getMembershipListSuccess");

        this.membershipStore.setData(response.membershipList);

        var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.GET_MEMBERSHIP_LIST_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get membership service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getMembershipTileSuccess: function(response) {
        this.logger.info("getMembershipTileSuccess");

        this.membershipStore.setData(response.membershipTile);

        var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.GET_MEMBERSHIP_TILE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get membership service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getMembershipModalSuccess: function(response) {
        this.logger.info("getMembershipModalSuccess");

        this.membershipStore.setData(response.membershipModal);

        var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.GET_MEMBERSHIP_MODAL_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the failed get membership service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getMembershipSlideFailure: function(response) {
        this.logger.warn("getMembershipSlideFailure");

        var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.GET_MEMBERSHIP_SLIDE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    /**
     * Handles the failed get membership service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getMembershipListFailure: function(response) {
        this.logger.warn("getMembershipListFailure");

        var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.GET_MEMBERSHIP_LIST_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get membership service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getMembershipTileFailure: function(response) {
        this.logger.warn("getMembershipTileFailure");

        var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.GET_MEMBERSHIP_TILE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get membership service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getMembershipModalFailure: function(response) {
        this.logger.warn("getMembershipModalFailure");

        var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.GET_MEMBERSHIP_MODAL_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 	
	
    /**
     * Handles the successful create membership service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createMembershipSuccess: function(response) {
        this.logger.info("createMembershipSuccess");

        this.membershipStore.add(response);

        var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.CREATE_MEMBERSHIP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create membership service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createMembershipFailure: function(response) {
        this.logger.warn("createMembershipFailure");

        var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.CREATE_MEMBERSHIP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update membership service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateMembershipSuccess: function(response) {
        this.logger.info("updateMembershipSuccess");

        this.membershipStore.update(response);

        var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.UPDATE_MEMBERSHIP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update membership service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateMembershipFailure: function(response) {
        this.logger.warn("updateMembershipFailure");

        var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.UPDATE_MEMBERSHIP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete membership service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteMembershipSuccess: function(response) {
        this.logger.info("deleteMembershipSuccess");

        this.membershipStore.setSelectedRecord(null);
        var membership = this.membershipStore.findRecord("kp_MembershipID", response.data.kp_MembershipID);
        this.membershipStore.remove(membership);

        var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.DELETE_MEMBERSHIP_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete membership service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteMembershipFailure: function(response) {
        this.logger.warn("deleteMembershipFailure");

        var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.DELETE_MEMBERSHIP_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful read memberships service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     */
    readMembershipsSuccess: function(response) {
        this.logger.info("readMembershipsSuccess");

		this.membershipStore.setData(response.memberships);

        var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.READ_MEMBERSHIPS_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed read memberships service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    readMembershipsFailure: function(response) {
        this.logger.warn("readMembershipsFailure");

        var evt = Ext.create("Core.event.membership.Event", Core.event.membership.Event.READ_MEMBERSHIPS_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the get membership event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.membership.Event} event Reference to the membership event.
     */
    onGetMembershipSlide: function(event) {
        this.logger.debug("onGetMembershipSlide");

        this.getMembershipSlide();
    },
	
    /**
     * Handles the get membership event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.membership.Event} event Reference to the membership event.
     */
    onGetMembershipList: function(event) {
        this.logger.debug("onGetMembershipList");

        this.getMembershipList();
    },    

    /**
     * Handles the get membership event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.membership.Event} event Reference to the membership event.
     */
    onGetMembershipTile: function(event) {
        this.logger.debug("onGetMembershipTile");

        this.getMembershipTile();
    }, 

    /**
     * Handles the get membership event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.membership.Event} event Reference to the membership event.
     */
    onGetMembershipModal: function(event) {
        this.logger.debug("onGetMembershipModal");

        this.getMembershipModal();
    },
	
    /**
     * Handles the create membership event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.membership.Event} event Reference to the membership event. Contains a reference to the
     * membership.
     */
    onCreateMembership: function(event) {
        this.logger.debug("onCreateMembership");

        this.createMembership(event.membership);
    },

    /**
     * Handles the update membership event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.membership.Event} event Reference to the membership event. Contains a reference to the
     * membership.
     */
    onUpdateMembership: function(event) {
        this.logger.debug("onUpdateMembership");

        this.updateMembership(event.membership);
    },

    /**
     * Handles the delete membership event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.membership.Event} event Reference to the membership event. Contains a reference to the
     * membership.
     */
    onDeleteMembership: function(event) {
        this.logger.debug("onDeleteMembership");

        this.deleteMembership(event.membership);
    },
	
	/**
     * Handles the read memberships event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.membership.Event} event Reference to the membership event. Contains a reference to the
     * memberships.
     */
    onReadMemberships: function(event) {
        this.logger.debug("onReadMemberships");

        this.readMemberships();
    }
    
});    