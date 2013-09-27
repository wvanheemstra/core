/**
 * The mock gender service object.
 */
Ext.define("Core.service.gender.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],

    /**
     * The mock service call.
     */
    getGenderSlide: function() {
        this.logger.debug("getGenderSlide");

        var response = {
            success: true,
            genderSlide: [
                { kp_GenderID: 1,    GenderName: "Male" },
                { kp_GenderID: 2,    GenderName: "Female" }
            ]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    getGenderList: function() {
        this.logger.debug("getGenderList");

        var response = {
            success: true,
            genderList: [
                { kp_GenderID: 1,    GenderName: "Male" },
                { kp_GenderID: 2,    GenderName: "Female" }
            ]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    getGenderTile: function() {
        this.logger.debug("getGenderTile");

        var response = {
            success: true,
            genderTile: [
                { kp_GenderID: 1,    GenderName: "Male" },
                { kp_GenderID: 2,    GenderName: "Female" }
            ]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    createGender: function(gender) {
        this.logger.debug("createGender");

        var response = {
            success: true,
            gender: {
                kp_GenderID: this.getRandomInt(1000, 99999),
				GenderName: gender.GenderName
            }
        };

        response = Ext.create("Core.model.gender.Model", response.gender);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updateGender: function(gender) {
        this.logger.debug("updateGender: kp_GenderID = ", gender.kp_GenderID);

        var response = {
            success: true,
            gender: {
                kp_GenderID: gender.kp_GenderID,
				GenderName: gender.GenderName		
            }
        };

        response = Ext.create("Core.model.gender.Model", response.gender);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deleteGender: function(gender) {
        this.logger.debug("deleteGender: kp_GenderID = ", gender.kp_GenderID);

        var response = {
            success: true,
            gender: {
                kp_GenderID: gender.kp_GenderID,
				GenderName: gender.GenderName
            }
        };

        response = Ext.create("Core.model.gender.Model", response.gender);
        return this.delayedSuccess(response);
    },
	
    /**
     * The mock service call.
     */
    readGenders: function() {
        this.logger.debug("readGenders");

        var response = {
            success: true,
            genders: [
                { kp_GenderID: 1,    GenderName: "Male" },
                { kp_GenderID: 2,    GenderName: "Female" }
            ]
        };

        return this.delayedSuccess(response);
    }
});