/**
 * The product event contains data and event types to perform CRUD operations on products.
 */
Ext.define("Core.event.product.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {

		/**
		 * Moved to here from Navigate Event, but isn't as yet used by Navigate Event
		 */
		ACTION_BACK_SHOW_PRODUCT_LIST:     	"actionBackShowProductList",
        ACTION_BACK_SHOW_PRODUCT_TILE:     	"actionBackShowProductTile",
        ACTION_SHOW_PRODUCT_DETAIL:        	"actionShowProductDetail",  
        ACTION_SHOW_PRODUCT_MODAL:         	"actionShowProductModal",	
	
        /**
         * The get product slide event type.
         */
        GET_PRODUCT_SLIDE:          "getProductSlide",
    	
        /**
         * The get product slide success event type.
         */
        GET_PRODUCT_SLIDE_SUCCESS:  "getProductSlideSuccess",

        /**
         * The get product slide failure event type.
         */
        GET_PRODUCT_SLIDE_FAILURE:  "getProductSlideFailure",	
	
        /**
         * The get product list event type.
         */
        GET_PRODUCT_LIST:          "getProductList",
    	
        /**
         * The get product list success event type.
         */
        GET_PRODUCT_LIST_SUCCESS:  "getProductListSuccess",

        /**
         * The get product list failure event type.
         */
        GET_PRODUCT_LIST_FAILURE:  "getProductListFailure",
        
        /**
         * The get product tile event type.
         */
        GET_PRODUCT_TILE:          "getProductTile",
    	
        /**
         * The get product tile success event type.
         */
        GET_PRODUCT_TILE_SUCCESS:  "getProductTileSuccess",

        /**
         * The get product tile failure event type.
         */
        GET_PRODUCT_TILE_FAILURE:  "getProductTileFailure",        

        /**
         * The get product modal event type.
         */
        GET_PRODUCT_MODAL:          "getProductModal",
    	
        /**
         * The get product modal success event type.
         */
        GET_PRODUCT_MODAL_SUCCESS:  "getProductModalSuccess",

        /**
         * The get product modal failure event type.
         */
        GET_PRODUCT_MODAL_FAILURE:  "getProductModalFailure",	
		
        /**
         * The get product event type.
         */
        GET_PRODUCT:               "getProduct",

        /**
         * The get product success event type.
         */
        GET_PRODUCT_SUCCESS:       "getProductSuccess",

        /**
         * The get product failure event type.
         */
        GET_PRODUCT_FAILURE:       "getProductFailure",

        /**
         * The create product event type.
         */
        CREATE_PRODUCT:            "createProduct",

        /**
         * The create product success event type.
         */
        CREATE_PRODUCT_SUCCESS:    "createProductSuccess",

        /**
         * The create product failure event type.
         */
        CREATE_PRODUCT_FAILURE:    "createProductFailure",

        /**
         * The update product event type.
         */
        UPDATE_PRODUCT:            "updateProduct",

        /**
         * The update product success event type.
         */
        UPDATE_PRODUCT_SUCCESS:    "updateProductSuccess",

        /**
         * The update product failure event type.
         */
        UPDATE_PRODUCT_FAILURE:    "updateProductFailure",

        /**
         * The delete product event type.
         */
        DELETE_PRODUCT:            "deleteProduct",

        /**
         * The delete product success event type.
         */
        DELETE_PRODUCT_SUCCESS:    "deleteProductSuccess",

        /**
         * The delete product failure event type.
         */
        DELETE_PRODUCT_FAILURE:    "deleteProductFailure"
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a product.
     */
    id: null,

    /**
     * @property {Core.model.product.Model} product [readOnly=false]
     * A product to perform CRUD actions on.
     */
    product: null,

    /**
     * Constructor. Allows the username and password for authentication to be set on the event.
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the product the CRUD operation is acting on.
     * @param {Core.model.product.Model} product The product the CRUD operation is acting on.     
     */
    constructor: function(type, id, product) {
        this.callParent(arguments);

        this.id = id;
        this.product = product;
    }
})	