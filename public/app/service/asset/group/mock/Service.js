/**
 * The mock asset group service object.
 */
Ext.define("Core.service.asset.group.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],

    /**
     * The mock service call.
     */
    createAssetGroup: function(assetGroup) {
        this.logger.debug("createAssetGroup");

        var response = {
            success: true,
            assetGroup: {
                kp_AssetGroupID: this.getRandomInt(1000, 99999),
				kf_AssetID: assetGroup.kf_AssetID,
				kf_GroupID: assetGroup.kf_GroupID
            }
        };

        response = Ext.create("Core.model.asset.group.Model", response.assetGroup);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updateAssetGroup: function(assetGroup) {
        this.logger.debug("updateAssetGroup: kp_AssetGroupID = ", assetGroup.kp_AssetGroupID);

        var response = {
            success: true,
            assetGroup: {
                kp_AssetGroupID: assetGroup.kp_AssetGroupID,
				kf_AssetID: assetGroup.kf_AssetID,
				kf_GroupID: assetGroup.kf_GroupID		
            }
        };

        response = Ext.create("Core.model.asset.group.Model", response.assetGroup);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deleteAssetGroup: function(assetGroup) {
        this.logger.debug("deleteAssetGroup: kp_AssetGroupID = ", assetGroup.kp_AssetGroupID);

        var response = {
            success: true,
            assetGroup: {
                kp_AssetGroupID: assetGroup.kp_AssetGroupID,
				kf_AssetID: assetGroup.kf_AssetID,
				kf_GroupID: assetGroup.kf_GroupID
            }
        };

        response = Ext.create("Core.model.asset.group.Model", response.assetGroup);
        return this.delayedSuccess(response);
    },
	
    /**
     * The mock service call.
     */
    readAssetGroups: function() {
        this.logger.debug("readAssetGroups");

        var response = {
            success: true,
            assetGroups: [
                { kp_AssetGroupID: 1,    kf_AssetID: 1,    kf_GroupID: 1  },
                { kp_AssetGroupID: 2,    kf_AssetID: 2,    kf_GroupID: 2 },
                { kp_AssetGroupID: 3,    kf_AssetID: 3,    kf_GroupID: 3 }	
            ]
        };

        return this.delayedSuccess(response);
    }
});