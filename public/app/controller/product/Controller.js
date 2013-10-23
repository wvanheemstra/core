/**
 * The ProductController acts as the command with asynchronous callback methods for successful
 * and failed product service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.product.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.product.Event",
        "FlowMVC.mvc.service.rpc.Responder",
        "nineam.locale.store.LocalesStore",
        "nineam.locale.event.LocaleEvent"		
    ],

    inject: [
        "productService",
        "productStore",
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
        this.eventBus.addGlobalEventListener(Core.event.product.Event.GET_PRODUCT_SLIDE, this.onGetProductSlide, this);
        this.eventBus.addGlobalEventListener(Core.event.product.Event.GET_PRODUCT_LIST, this.onGetProductList, this); 
        this.eventBus.addGlobalEventListener(Core.event.product.Event.GET_PRODUCT_TILE, this.onGetProductTile, this);
        this.eventBus.addGlobalEventListener(Core.event.product.Event.GET_PRODUCT_MODAL, this.onGetProductModal, this);               
        this.eventBus.addGlobalEventListener(Core.event.product.Event.CREATE_PRODUCT, this.onCreateProduct, this);
        this.eventBus.addGlobalEventListener(Core.event.product.Event.UPDATE_PRODUCT, this.onUpdateProduct, this);
        this.eventBus.addGlobalEventListener(Core.event.product.Event.DELETE_PRODUCT, this.onDeleteProduct, this);
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
                {id: "en_gb", label: "English GB", url: "locale/product/en_gb.json"},
                {id: "en_us", label: "English US", url: "locale/product/en_us.json"},
                {id: "es_us", label: "Spanish", url: "locale/product/es_us.json"},
                {id: "nl_nl", label: "Dutch", url: "locale/product/nl_nl.json"},
                {id: "de_de", label: "Deutsch", url: "locale/product/de_de.json"}
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
     * Performs get product by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getProductSlide: function() {
        this.logger.debug("getProductSlide");
        this.executeServiceCall(this.productService, this.productService.getProductSlide, null, this.getProductSlideSuccess, this.getProductSlideFailure, this);
    },	
	
    /**
     * Performs get product by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getProductList: function() {
        this.logger.debug("getProductList");
        this.executeServiceCall(this.productService, this.productService.getProductList, null, this.getProductListSuccess, this.getProductListFailure, this);
    },

    /**
     * Performs get product by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getProductTile: function() {
        this.logger.debug("getProductTile");
        this.executeServiceCall(this.productService, this.productService.getProductTile, null, this.getProductTileSuccess, this.getProductTileFailure, this);
    },

    /**
     * Performs get product by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getProductModal: function() {
        this.logger.debug("getProductModal");
        this.executeServiceCall(this.productService, this.productService.getProductModal, null, this.getProductModalSuccess, this.getProductModalFailure, this);
    },	
	
    /**
     * Performs create product by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.product.Model} product The product to create.
     */
    createProduct: function(product) {
        this.logger.debug("createProduct");
        this.executeServiceCall(this.productService, this.productService.createProduct, [product], this.createProductSuccess, this.createProductFailure, this);
    },

    /**
     * Performs update product by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.product.Model} product The product to update.
     */
    updateProduct: function(product) {
        this.logger.debug("updateProduct");
        this.executeServiceCall(this.productService, this.productService.updateProduct, [product], this.updateProductSuccess, this.updateProductFailure, this);
    },

    /**
     * Performs delete product by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.product.Model} product The product to delete.
     */
    deleteProduct: function(product) {
        this.logger.debug("deleteProduct");
        this.executeServiceCall(this.productService, this.productService.deleteProduct, [product], this.deleteProductSuccess, this.deleteProductFailure, this);
    },

    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the successful get product service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getProductSlideSuccess: function(response) {
        this.logger.info("getProductSlideSuccess");

		this.productStore.setData(response.productSlide);

        var evt = Ext.create("Core.event.product.Event", Core.event.product.Event.GET_PRODUCT_SLIDE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the successful get product service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getProductListSuccess: function(response) {
        this.logger.info("getProductListSuccess");

        this.productStore.setData(response.productList);

        var evt = Ext.create("Core.event.product.Event", Core.event.product.Event.GET_PRODUCT_LIST_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get product service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getProductTileSuccess: function(response) {
        this.logger.info("getProductTileSuccess");

        this.productStore.setData(response.productTile);

        var evt = Ext.create("Core.event.product.Event", Core.event.product.Event.GET_PRODUCT_TILE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get product service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getProductModalSuccess: function(response) {
        this.logger.info("getProductModalSuccess");

        this.productStore.setData(response.productModal);

        var evt = Ext.create("Core.event.product.Event", Core.event.product.Event.GET_PRODUCT_MODAL_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },	
	
    /**
     * Handles the failed get product service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getProductSlideFailure: function(response) {
        this.logger.warn("getProductSlideFailure");

        var evt = Ext.create("Core.event.product.Event", Core.event.product.Event.GET_PRODUCT_SLIDE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
	
    /**
     * Handles the failed get product service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getProductListFailure: function(response) {
        this.logger.warn("getProductListFailure");

        var evt = Ext.create("Core.event.product.Event", Core.event.product.Event.GET_PRODUCT_LIST_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get product service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getProductTileFailure: function(response) {
        this.logger.warn("getProductTileFailure");

        var evt = Ext.create("Core.event.product.Event", Core.event.product.Event.GET_PRODUCT_TILE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 

    /**
     * Handles the failed get product service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getProductModalFailure: function(response) {
        this.logger.warn("getProductModalFailure");

        var evt = Ext.create("Core.event.product.Event", Core.event.product.Event.GET_PRODUCT_MODAL_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    }, 	
	
    /**
     * Handles the successful create product service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createProductSuccess: function(response) {
        this.logger.info("createProductSuccess");

        this.productStore.add(response);

        var evt = Ext.create("Core.event.product.Event", Core.event.product.Event.CREATE_PRODUCT_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create product service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createProductFailure: function(response) {
        this.logger.warn("createProductFailure");

        var evt = Ext.create("Core.event.product.Event", Core.event.product.Event.CREATE_PRODUCT_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update product service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateProductSuccess: function(response) {
        this.logger.info("updateProductSuccess");

        this.productStore.update(response);

        var evt = Ext.create("Core.event.product.Event", Core.event.product.Event.UPDATE_PRODUCT_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update product service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateProductFailure: function(response) {
        this.logger.warn("updateProductFailure");

        var evt = Ext.create("Core.event.product.Event", Core.event.product.Event.UPDATE_PRODUCT_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete product service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteProductSuccess: function(response) {
        this.logger.info("deleteProductSuccess");

        this.productStore.setSelectedRecord(null);
        var product = this.productStore.findRecord("id", response.data.id);
        this.productStore.remove(product);

        var evt = Ext.create("Core.event.product.Event", Core.event.product.Event.DELETE_PRODUCT_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete product service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteProductFailure: function(response) {
        this.logger.warn("deleteProductFailure");

        var evt = Ext.create("Core.event.product.Event", Core.event.product.Event.DELETE_PRODUCT_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },
    
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the get product event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.product.Event} event Reference to the product event.
     */
    onGetProductSlide: function(event) {
        this.logger.debug("onGetProductSlide");

        this.getProductSlide();
    },
	
    /**
     * Handles the get product event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.product.Event} event Reference to the product event.
     */
    onGetProductList: function(event) {
        this.logger.debug("onGetProductList");

        this.getProductList();
    },    

    /**
     * Handles the get product event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.product.Event} event Reference to the product event.
     */
    onGetProductTile: function(event) {
        this.logger.debug("onGetProductTile");

        this.getProductTile();
    }, 

    /**
     * Handles the get product event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.product.Event} event Reference to the product event.
     */
    onGetProductModal: function(event) {
        this.logger.debug("onGetProductModal");

        this.getProductModal();
    },
	
    /**
     * Handles the create product event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.product.Event} event Reference to the product event. Contains a reference to the
     * product.
     */
    onCreateProduct: function(event) {
        this.logger.debug("onCreateProduct");

        this.createProduct(event.product);
    },

    /**
     * Handles the update product event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.product.Event} event Reference to the product event. Contains a reference to the
     * product.
     */
    onUpdateProduct: function(event) {
        this.logger.debug("onUpdateProduct");

        this.updateProduct(event.product);
    },

    /**
     * Handles the delete product event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.product.Event} event Reference to the product event. Contains a reference to the
     * product.
     */
    onDeleteProduct: function(event) {
        this.logger.debug("onDeleteProduct");

        this.deleteProduct(event.product);
    }
    
});    