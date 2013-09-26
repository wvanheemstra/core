/**
 * The mock salutation service object.
 */
Ext.define("Core.service.salutation.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],

    /**
     * The mock service call.
     */
    getSalutationSlide: function() {
        this.logger.debug("getSalutationSlide");

        var response = {
            success: true,
            salutationSlide: [
                { kp_SalutationID: 1,    SalutationAbbreviation: "Mr" },
                { kp_SalutationID: 2,    SalutationAbbreviation: "Mrs" },
                { kp_SalutationID: 3,    SalutationAbbreviation: "Miss" },
                { kp_SalutationID: 4,    SalutationAbbreviation: "Ms" }
            ]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    getSalutationList: function() {
        this.logger.debug("getSalutationList");

        var response = {
            success: true,
            salutationList: [
                { kp_SalutationID: 1,    SalutationAbbreviation: "Mr" },
                { kp_SalutationID: 2,    SalutationAbbreviation: "Mrs" },
                { kp_SalutationID: 3,    SalutationAbbreviation: "Miss" },
                { kp_SalutationID: 4,    SalutationAbbreviation: "Ms" }
            ]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    getSalutationTile: function() {
        this.logger.debug("getSalutationTile");

        var response = {
            success: true,
            salutationTile: [
                { kp_SalutationID: 1,    SalutationAbbreviation: "Mr" },
                { kp_SalutationID: 2,    SalutationAbbreviation: "Mrs" },
                { kp_SalutationID: 3,    SalutationAbbreviation: "Miss" },
                { kp_SalutationID: 4,    SalutationAbbreviation: "Ms" }
            ]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    createSalutation: function(salutation) {
        this.logger.debug("createSalutation");

        var response = {
            success: true,
            salutation: {
                kp_SalutationID: this.getRandomInt(1000, 99999),
				SalutationAbbreviation: salutation.SalutationAbbreviation
            }
        };

        response = Ext.create("Core.model.salutation.Model", response.salutation);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updateSalutation: function(salutation) {
        this.logger.debug("updateSalutation: kp_SalutationID = ", salutation.kp_SalutationID);

        var response = {
            success: true,
            salutation: {
                kp_SalutationID: salutation.kp_SalutationID,
				SalutationAbbreviation: salutation.SalutationAbbreviation		
            }
        };

        response = Ext.create("Core.model.salutation.Model", response.salutation);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deleteSalutation: function(salutation) {
        this.logger.debug("deleteSalutation: kp_SalutationID = ", salutation.kp_SalutationID);

        var response = {
            success: true,
            salutation: {
                kp_SalutationID: salutation.kp_SalutationID,
				SalutationAbbreviation: salutation.SalutationAbbreviation
            }
        };

        response = Ext.create("Core.model.salutation.Model", response.salutation);
        return this.delayedSuccess(response);
    },
	
    /**
     * The mock service call.
     */
    readSalutations: function() {
        this.logger.debug("readSalutations");

        var response = {
            success: true,
            salutations: [
                { kp_SalutationID: 1,    SalutationAbbreviation: "Mr" },
                { kp_SalutationID: 2,    SalutationAbbreviation: "Mrs" },
                { kp_SalutationID: 3,    SalutationAbbreviation: "Miss" },
                { kp_SalutationID: 4,    SalutationAbbreviation: "Ms" }
            ]
        };

        return this.delayedSuccess(response);
    }
});