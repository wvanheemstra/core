/**
 * The asset event contains data and event types to perform CRUD operations on assets.
 */
Ext.define("Core.event.asset.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {

		/**
		 * Moved to here from Navigate Event, but isn't as yet used by Navigate Event
		 */
		ACTION_BACK_SHOW_ASSET_LIST:     	"actionBackShowAssetList",
        ACTION_BACK_SHOW_ASSET_TILE:     	"actionBackShowAssetTile",
        ACTION_SHOW_ASSET_DETAIL:        	"actionShowAssetDetail",  
        ACTION_SHOW_ASSET_MODAL:         	"actionShowAssetModal",	
	
	
		///////////////////////////  ALL REPLACED BY READ_ASSETS_etc
	
			/**
			 * The get asset slide event type.
			 */
		//	GET_ASSET_SLIDE:          "getAssetSlide",
			
			/**
			 * The get asset slide success event type.
			 */
		//	GET_ASSET_SLIDE_SUCCESS:  "getAssetSlideSuccess",

			/**
			 * The get asset slide failure event type.
			 */
		//	GET_ASSET_SLIDE_FAILURE:  "getAssetSlideFailure",	
		
			/**
			 * The get asset list event type.
			 */
		//	GET_ASSET_LIST:          "getAssetList",
			
			/**
			 * The get asset list success event type.
			 */
		//	GET_ASSET_LIST_SUCCESS:  "getAssetListSuccess",

			/**
			 * The get asset list failure event type.
			 */
		//	GET_ASSET_LIST_FAILURE:  "getAssetListFailure",
			
			/**
			 * The get asset tile event type.
			 */
		//	GET_ASSET_TILE:          "getAssetTile",
			
			/**
			 * The get asset tile success event type.
			 */
		//	GET_ASSET_TILE_SUCCESS:  "getAssetTileSuccess",

			/**
			 * The get asset tile failure event type.
			 */
		//	GET_ASSET_TILE_FAILURE:  "getAssetTileFailure",        

			/**
			 * The get asset modal event type.
			 */
		//	GET_ASSET_MODAL:          "getAssetModal",
			
			/**
			 * The get asset modal success event type.
			 */
		//	GET_ASSET_MODAL_SUCCESS:  "getAssetModalSuccess",

			/**
			 * The get asset modal failure event type.
			 */
		//	GET_ASSET_MODAL_FAILURE:  "getAssetModalFailure",	
			
			/**
			 * The get asset event type.
			 */
		//	GET_ASSET:               "getAsset",

			/**
			 * The get asset success event type.
			 */
		//	GET_ASSET_SUCCESS:       "getAssetSuccess",

			/**
			 * The get asset failure event type.
			 */
		//	GET_ASSET_FAILURE:       "getAssetFailure",
		
		
		//////////////////////////
		

        /**
         * The create asset event type.
         */
        CREATE_ASSET:            "createAsset",

        /**
         * The create asset success event type.
         */
        CREATE_ASSET_SUCCESS:    "createAssetSuccess",

        /**
         * The create asset failure event type.
         */
        CREATE_ASSET_FAILURE:    "createAssetFailure",

        /**
         * The update asset event type.
         */
        UPDATE_ASSET:            "updateAsset",

        /**
         * The update asset success event type.
         */
        UPDATE_ASSET_SUCCESS:    "updateAssetSuccess",

        /**
         * The update asset failure event type.
         */
        UPDATE_ASSET_FAILURE:    "updateAssetFailure",

        /**
         * The delete asset event type.
         */
        DELETE_ASSET:            "deleteAsset",

        /**
         * The delete asset success event type.
         */
        DELETE_ASSET_SUCCESS:    "deleteAssetSuccess",

        /**
         * The delete asset failure event type.
         */
        DELETE_ASSET_FAILURE:    "deleteAssetFailure",
		
        /**
         * The read assets event type.
         */
        READ_ASSETS:            "readAssets",

        /**
         * The read assets success event type.
         */
        READ_ASSETS_SUCCESS:    "readAssetsSuccess",

        /**
         * The read assets failure event type.
         */
        READ_ASSETS_FAILURE:    "readAssetsFailure"		
		
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a asset.
     */
    id: null,

    /**
     * @property {Core.model.asset.Model} asset [readOnly=false]
     * A asset to perform CRUD actions on.
     */
    asset: null,

    /**
     * Constructor. 
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the asset the CRUD operation is acting on.
     * @param {Core.model.asset.Model} asset The asset the CRUD operation is acting on.     
     */
    constructor: function(type, id, asset) {
        this.callParent(arguments);

        this.id = id;
        this.asset = asset;
    }
});	