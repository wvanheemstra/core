/**
 * The asset group event contains data and event types to perform CRUD operations on asset groups.
 */
Ext.define("Core.event.asset.group.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {	
		
        /**
         * The get asset group event type.
         */
        GET_ASSET_GROUP:               "getAssetGroup",

        /**
         * The get asset group success event type.
         */
        GET_ASSET_GROUP_SUCCESS:       "getAssetGroupSuccess",

        /**
         * The get asset group failure event type.
         */
        GET_ASSET_GROUP_FAILURE:       "getAssetGroupFailure",

        /**
         * The create asset group event type.
         */
        CREATE_ASSET_GROUP:            "createAssetGroup",

        /**
         * The create asset group success event type.
         */
        CREATE_ASSET_GROUP_SUCCESS:    "createAssetGroupSuccess",

        /**
         * The create asset group failure event type.
         */
        CREATE_ASSET_GROUP_FAILURE:    "createAssetGroupFailure",

        /**
         * The update asset group event type.
         */
        UPDATE_ASSET_GROUP:            "updateAssetGroup",

        /**
         * The update asset group success event type.
         */
        UPDATE_ASSET_GROUP_SUCCESS:    "updateAssetGroupSuccess",

        /**
         * The update asset group failure event type.
         */
        UPDATE_ASSET_GROUP_FAILURE:    "updateAssetGroupFailure",

        /**
         * The delete asset group event type.
         */
        DELETE_ASSET_GROUP:            "deleteAssetGroup",

        /**
         * The delete asset group success event type.
         */
        DELETE_ASSET_GROUP_SUCCESS:    "deleteAssetGroupSuccess",

        /**
         * The delete asset group failure event type.
         */
        DELETE_ASSET_GROUP_FAILURE:    "deleteAssetGroupFailure",
		
		/**
         * The read asset groups event type.
         */
        READ_ASSET_GROUPS:            "readAssetGroups",

        /**
         * The read asset groups success event type.
         */
        READ_ASSET_GROUPS_SUCCESS:    "readAssetGroupsSuccess",

        /**
         * The read asset groups failure event type.
         */
        READ_ASSET_GROUPS_FAILURE:    "readAssetGroupsFailure"
		
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a asset group.
     */
    id: null,

    /**
     * @property {Core.model.asset.group.Model} assetGroup [readOnly=false]
     * A asset group to perform CRUD actions on.
     */
    assetGroup: null,

    /**
     * Constructor. 
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the asset group the CRUD operation is acting on.
     * @param {Core.model.asset.group.Model} assetGroup The asset group the CRUD operation is acting on.     
     */
    constructor: function(type, id, assetGroup) {
        this.callParent(arguments);

        this.id = id;
        this.assetGroup = assetGroup;
    }
});	