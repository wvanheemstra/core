/**
 * The mock asset service object.
 */
Ext.define("Core.service.asset.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],
    
    /**
     * The mock service call.
     */
    createAsset: function(asset) {
        this.logger.debug("createAsset");

        var response = {
            success: true,
            asset: {
                kp_AssetID: this.getRandomInt(1000, 99999),
                AssetName: asset.AssetName		
            }
        };

        response = Ext.create("Core.model.asset.Model", response.asset);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updateAsset: function(asset) {
        this.logger.debug("updateAsset: kp_AssetID = " + asset.kp_AssetID);

        var response = {
            success: true,
            asset: {
                kp_AssetID: asset.kp_AssetID,
                AssetName: asset.AssetName			
            }
        };

        response = Ext.create("Core.model.asset.Model", response.asset);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deleteAsset: function(asset) {
        this.logger.debug("deleteAsset: kp_AssetID = " + asset.kp_AssetID);

        var response = {
            success: true,
            asset: {
                kp_AssetID: asset.kp_AssetID,
                AssetName: asset.AssetName
            }
        };

        response = Ext.create("Core.model.asset.Model", response.asset);
        return this.delayedSuccess(response);
    }, 

    /**
     * The mock service call.
     */
    readAssets: function() {
        this.logger.debug("readAssets");

        var response = {
            success: true,
            assets: [
                { kp_AssetID: 1,    AssetName: "Adam" },
                { kp_AssetID: 2,    AssetName: "Bob" },
                { kp_AssetID: 3,    AssetName: "Carol" },
                { kp_AssetID: 4,    AssetName: "David" },
                { kp_AssetID: 5,    AssetName: "Eddie" },
                { kp_AssetID: 6,    AssetName: "Frank" },
                { kp_AssetID: 7,    AssetName: "George" },
                { kp_AssetID: 8,    AssetName: "Harry" },
                { kp_AssetID: 9,    AssetName: "Ike" },
                { kp_AssetID: 10,   AssetName: "Jim" },
                { kp_AssetID: 11,   AssetName: "Kenny" },
                { kp_AssetID: 12,   AssetName: "Larry" },
                { kp_AssetID: 13,   AssetName: "Mary" },
                { kp_AssetID: 14,   AssetName: "Nancy" },
                { kp_AssetID: 15,   AssetName: "Olivier" },
                { kp_AssetID: 16,   AssetName: "Peter" },
                { kp_AssetID: 17,   AssetName: "Quincy" },
                { kp_AssetID: 18,   AssetName: "Roger" },
                { kp_AssetID: 19,   AssetName: "Sam" },
                { kp_AssetID: 20,   AssetName: "Thomas" },
                { kp_AssetID: 21,   AssetName: "Uncle" },
                { kp_AssetID: 22,   AssetName: "Vincent" },
                { kp_AssetID: 23,   AssetName: "William" },
                { kp_AssetID: 24,   AssetName: "Xavier" },
                { kp_AssetID: 25,   AssetName: "Yogi" },
                { kp_AssetID: 26,   AssetName: "Zachary" }
            ]
        };

        return this.delayedSuccess(response);
    }
});