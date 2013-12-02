/**
 * The AssetController acts as the command with asynchronous callback methods for successful
 * and failed asset service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.asset.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.asset.Event",
        "FlowMVC.mvc.service.rpc.Responder",
        "nineam.locale.store.LocalesStore",
        "nineam.locale.event.LocaleEvent"		
    ],

    inject: [
        "assetService",
        "assetStore",
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
        this.initLocaleManager();
    },
    
    /**
     * Sets up global event bus handlers.
     * @protected
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
		this.eventBus.addGlobalEventListener(Core.event.asset.Event.READ_ASSETS, this.onReadAssets, this);
    //    this.eventBus.addGlobalEventListener(Core.event.asset.Event.GET_ASSET_LIST, this.onGetAssetList, this);		
        this.eventBus.addGlobalEventListener(Core.event.asset.Event.CREATE_ASSET, this.onCreateAsset, this);
        this.eventBus.addGlobalEventListener(Core.event.asset.Event.UPDATE_ASSET, this.onUpdateAsset, this);
        this.eventBus.addGlobalEventListener(Core.event.asset.Event.DELETE_ASSET, this.onDeleteAsset, this);
    },

    /**
     * Initializes the Localization Manager loading in the languages available.
     */
    initLocaleManager: function() {
        var lm = nineam.locale.LocaleManager;
        lm.addListener(nineam.locale.event.LocaleEvent.INITIALIZED, this.localeManagerInitializedEventHandler, this);

		var currentApp = Core.config.global.Config.getCurrentApp();
		if(currentApp !== '') { 
			currentApp = currentApp + "/"; 
		}
		
        var locales = Ext.create("nineam.locale.store.LocalesStore", {
            data: [
                {id: "en_gb", label: "English GB", url: "locale/asset/en_gb.json"},
                {id: "en_us", label: "English US", url: "locale/asset/en_us.json"},
                {id: "es_us", label: "Spanish", url: "locale/asset/es_us.json"},
                {id: "nl_nl", label: "Dutch", url: "locale/asset/nl_nl.json"},
                {id: "de_de", label: "Deutsch", url: "locale/asset/de_de.json"}
            ]
        });
        lm.setLocales(locales);

        var locale = lm.getPersistedLocale();
        
		//locale = "de_de"; // for testing only
        
        this.logger.debug("locale: " + locale);
        
        
        locale = locale ? locale : Core.config.global.Config.getLocale();  // WAS "en_uk"
        this.logger.debug("initLocaleManager: locale = " + locale);
        lm.setLocale(locale);
    },

    /**
     * LocaleManager initialized event handler
     */
    localeManagerInitializedEventHandler: function() {
//        Ext.getBody().unmask(); // TODO: not for touch
    },
	
    /**
     * Performs create asset by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.asset.Model} asset The asset to create.
     */
    createAsset: function(asset) {
        this.logger.debug("createAsset");
        this.executeServiceCall(this.assetService, this.assetService.createAsset, [asset], this.createAssetSuccess, this.createAssetFailure, this);
    },

    /**
     * Performs update asset by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.asset.Model} asset The asset to update.
     */
    updateAsset: function(asset) {
        this.logger.debug("updateAsset");
        this.executeServiceCall(this.assetService, this.assetService.updateAsset, [asset], this.updateAssetSuccess, this.updateAssetFailure, this);
    },

    /**
     * Performs delete asset by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.asset.Model} asset The asset to delete.
     */
    deleteAsset: function(asset) {
        this.logger.debug("deleteAsset");
        this.executeServiceCall(this.assetService, this.assetService.deleteAsset, [asset], this.deleteAssetSuccess, this.deleteAssetFailure, this);
    },

    /**
     * Performs read assets by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    readAssets: function() {
        this.logger.debug("readAssets");
        this.executeServiceCall(this.assetService, this.assetService.readAssets, null, this.readAssetsSuccess, this.readAssetsFailure, this);
    },
	
    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////
	
    /**
     * Handles the successful create asset service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createAssetSuccess: function(response) {
        this.logger.info("createAssetSuccess");
		
        this.assetStore.add(response);

        var evt = Ext.create("Core.event.asset.Event", Core.event.asset.Event.CREATE_ASSET_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create asset service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createAssetFailure: function(response) {
        this.logger.warn("createAssetFailure");		
		
        var evt = Ext.create("Core.event.asset.Event", Core.event.asset.Event.CREATE_ASSET_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update asset service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateAssetSuccess: function(response) {
        this.logger.info("updateAssetSuccess");
		
		this.assetStore.update(response);

        var evt = Ext.create("Core.event.asset.Event", Core.event.asset.Event.UPDATE_ASSET_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update asset service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateAssetFailure: function(response) {
        this.logger.warn("updateAssetFailure");

        var evt = Ext.create("Core.event.asset.Event", Core.event.asset.Event.UPDATE_ASSET_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete asset service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteAssetSuccess: function(response) {
        this.logger.info("deleteAssetSuccess");
		
        this.assetStore.setSelectedRecord(null);
        var asset = this.assetStore.findRecord("kp_AssetID", response.data.kp_AssetID);
        this.assetStore.remove(asset);

        var evt = Ext.create("Core.event.asset.Event", Core.event.asset.Event.DELETE_ASSET_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete asset service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteAssetFailure: function(response) {
        this.logger.warn("deleteAssetFailure");	
		
        var evt = Ext.create("Core.event.asset.Event", Core.event.asset.Event.DELETE_ASSET_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

	/**
	 * Handles the successful read assets service call and takes the response data packet as a parameter.
	 * Fires off the corresponding success event on the application-level event bus.
	 *
	 * @param {Object} response The response data packet from the successful service call.
	 */
	readAssetsSuccess: function(response) {
		this.logger.info("readAssetsSuccess");
		
		this.assetStore.setData(response.assets); // assetStore will have already been loaded at Success, 
													// so need to check for this, and not overwrite. TO DO

		var evt = Ext.create("Core.event.asset.Event", Core.event.asset.Event.READ_ASSETS_SUCCESS);
		this.eventBus.dispatchGlobalEvent(evt);
	},	
	
    /**
     * Handles the failed read assets service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    readAssetsFailure: function(response) {
        this.logger.warn("readAssetsFailure");

        var evt = Ext.create("Core.event.asset.Event", Core.event.asset.Event.READ_ASSETS_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////
	
    /**
     * Handles the create asset event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.asset.Event} event Reference to the asset event. Contains a reference to the
     * asset.
     */
    onCreateAsset: function(event) {
        this.logger.debug("onCreateAsset");

        this.createAsset(event.asset);
    },

    /**
     * Handles the update asset event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.asset.Event} event Reference to the asset event. Contains a reference to the
     * asset.
     */
    onUpdateAsset: function(event) {
        this.logger.debug("onUpdateAsset");

        this.updateAsset(event.asset);
    },

    /**
     * Handles the delete asset event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.asset.Event} event Reference to the asset event. Contains a reference to the
     * asset.
     */
    onDeleteAsset: function(event) {
        this.logger.debug("onDeleteAsset");

        this.deleteAsset(event.asset);
    },

    /**
     * Handles the read assets event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.asset.Event} event Reference to the asset event.
     */
    onReadAssets: function(event) {
        this.logger.debug("onReadAssets");

        this.readAssets();
    }
    
});    