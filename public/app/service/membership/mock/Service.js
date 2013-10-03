/**
 * The mock membership service object.
 */
Ext.define("Core.service.membership.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],

    /**
     * The mock service call.
     */
    getMembershipSlide: function() {
        this.logger.debug("getMembershipSlide");

        var response = {
            success: true,
            membershipSlide: [
				{ "kp_MembershipID": 1,    "kf_PersonID": 1,	"kf_OrganisationID": 1 },
				{ "kp_MembershipID": 2,    "kf_PersonID": 2,	"kf_OrganisationID": 2 },
				{ "kp_MembershipID": 3,    "kf_PersonID": 3,	"kf_OrganisationID": 3 },
				{ "kp_MembershipID": 4,    "kf_PersonID": 4,	"kf_OrganisationID": 4 },
				{ "kp_MembershipID": 5,    "kf_PersonID": 5,	"kf_OrganisationID": 5 },
				{ "kp_MembershipID": 6,    "kf_PersonID": 6,	"kf_OrganisationID": 6 },
				{ "kp_MembershipID": 7,    "kf_PersonID": 7,	"kf_OrganisationID": 7 },
				{ "kp_MembershipID": 8,    "kf_PersonID": 8,	"kf_OrganisationID": 8 },
				{ "kp_MembershipID": 9,    "kf_PersonID": 9,	"kf_OrganisationID": 9 },
				{ "kp_MembershipID": 10,   "kf_PersonID": 10,	"kf_OrganisationID": 10 },
				{ "kp_MembershipID": 11,   "kf_PersonID": 11,	"kf_OrganisationID": 11 },
				{ "kp_MembershipID": 12,   "kf_PersonID": 12,	"kf_OrganisationID": 12 },
				{ "kp_MembershipID": 13,   "kf_PersonID": 13,	"kf_OrganisationID": 13 },
				{ "kp_MembershipID": 14,   "kf_PersonID": 14,	"kf_OrganisationID": 14 },
				{ "kp_MembershipID": 15,   "kf_PersonID": 15,	"kf_OrganisationID": 15 },
				{ "kp_MembershipID": 16,   "kf_PersonID": 16,	"kf_OrganisationID": 16 },
				{ "kp_MembershipID": 17,   "kf_PersonID": 17,	"kf_OrganisationID": 17 },
				{ "kp_MembershipID": 18,   "kf_PersonID": 18,	"kf_OrganisationID": 18 },
				{ "kp_MembershipID": 19,   "kf_PersonID": 19,	"kf_OrganisationID": 19 },
				{ "kp_MembershipID": 20,   "kf_PersonID": 20,	"kf_OrganisationID": 20 },
				{ "kp_MembershipID": 21,   "kf_PersonID": 21,	"kf_OrganisationID": 21 },
				{ "kp_MembershipID": 22,   "kf_PersonID": 22,	"kf_OrganisationID": 22 },
				{ "kp_MembershipID": 23,   "kf_PersonID": 23,	"kf_OrganisationID": 23 },
				{ "kp_MembershipID": 24,   "kf_PersonID": 24,	"kf_OrganisationID": 24 },
				{ "kp_MembershipID": 25,   "kf_PersonID": 25,	"kf_OrganisationID": 25 },
				{ "kp_MembershipID": 26,   "kf_PersonID": 26,	"kf_OrganisationID": 26 }
			]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    getMembershipList: function() {
        this.logger.debug("getMembershipList");

        var response = {
            success: true,
            membershipList: [
				{ "kp_MembershipID": 1,    "kf_PersonID": 1,	"kf_OrganisationID": 1 },
				{ "kp_MembershipID": 2,    "kf_PersonID": 2,	"kf_OrganisationID": 2 },
				{ "kp_MembershipID": 3,    "kf_PersonID": 3,	"kf_OrganisationID": 3 },
				{ "kp_MembershipID": 4,    "kf_PersonID": 4,	"kf_OrganisationID": 4 },
				{ "kp_MembershipID": 5,    "kf_PersonID": 5,	"kf_OrganisationID": 5 },
				{ "kp_MembershipID": 6,    "kf_PersonID": 6,	"kf_OrganisationID": 6 },
				{ "kp_MembershipID": 7,    "kf_PersonID": 7,	"kf_OrganisationID": 7 },
				{ "kp_MembershipID": 8,    "kf_PersonID": 8,	"kf_OrganisationID": 8 },
				{ "kp_MembershipID": 9,    "kf_PersonID": 9,	"kf_OrganisationID": 9 },
				{ "kp_MembershipID": 10,   "kf_PersonID": 10,	"kf_OrganisationID": 10 },
				{ "kp_MembershipID": 11,   "kf_PersonID": 11,	"kf_OrganisationID": 11 },
				{ "kp_MembershipID": 12,   "kf_PersonID": 12,	"kf_OrganisationID": 12 },
				{ "kp_MembershipID": 13,   "kf_PersonID": 13,	"kf_OrganisationID": 13 },
				{ "kp_MembershipID": 14,   "kf_PersonID": 14,	"kf_OrganisationID": 14 },
				{ "kp_MembershipID": 15,   "kf_PersonID": 15,	"kf_OrganisationID": 15 },
				{ "kp_MembershipID": 16,   "kf_PersonID": 16,	"kf_OrganisationID": 16 },
				{ "kp_MembershipID": 17,   "kf_PersonID": 17,	"kf_OrganisationID": 17 },
				{ "kp_MembershipID": 18,   "kf_PersonID": 18,	"kf_OrganisationID": 18 },
				{ "kp_MembershipID": 19,   "kf_PersonID": 19,	"kf_OrganisationID": 19 },
				{ "kp_MembershipID": 20,   "kf_PersonID": 20,	"kf_OrganisationID": 20 },
				{ "kp_MembershipID": 21,   "kf_PersonID": 21,	"kf_OrganisationID": 21 },
				{ "kp_MembershipID": 22,   "kf_PersonID": 22,	"kf_OrganisationID": 22 },
				{ "kp_MembershipID": 23,   "kf_PersonID": 23,	"kf_OrganisationID": 23 },
				{ "kp_MembershipID": 24,   "kf_PersonID": 24,	"kf_OrganisationID": 24 },
				{ "kp_MembershipID": 25,   "kf_PersonID": 25,	"kf_OrganisationID": 25 },
				{ "kp_MembershipID": 26,   "kf_PersonID": 26,	"kf_OrganisationID": 26 }
			]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    getMembershipTile: function() {
        this.logger.debug("getMembershipTile");

        var response = {
            success: true,
            membershipTile: [
				{ "kp_MembershipID": 1,    "kf_PersonID": 1,	"kf_OrganisationID": 1 },
				{ "kp_MembershipID": 2,    "kf_PersonID": 2,	"kf_OrganisationID": 2 },
				{ "kp_MembershipID": 3,    "kf_PersonID": 3,	"kf_OrganisationID": 3 },
				{ "kp_MembershipID": 4,    "kf_PersonID": 4,	"kf_OrganisationID": 4 },
				{ "kp_MembershipID": 5,    "kf_PersonID": 5,	"kf_OrganisationID": 5 },
				{ "kp_MembershipID": 6,    "kf_PersonID": 6,	"kf_OrganisationID": 6 },
				{ "kp_MembershipID": 7,    "kf_PersonID": 7,	"kf_OrganisationID": 7 },
				{ "kp_MembershipID": 8,    "kf_PersonID": 8,	"kf_OrganisationID": 8 },
				{ "kp_MembershipID": 9,    "kf_PersonID": 9,	"kf_OrganisationID": 9 },
				{ "kp_MembershipID": 10,   "kf_PersonID": 10,	"kf_OrganisationID": 10 },
				{ "kp_MembershipID": 11,   "kf_PersonID": 11,	"kf_OrganisationID": 11 },
				{ "kp_MembershipID": 12,   "kf_PersonID": 12,	"kf_OrganisationID": 12 },
				{ "kp_MembershipID": 13,   "kf_PersonID": 13,	"kf_OrganisationID": 13 },
				{ "kp_MembershipID": 14,   "kf_PersonID": 14,	"kf_OrganisationID": 14 },
				{ "kp_MembershipID": 15,   "kf_PersonID": 15,	"kf_OrganisationID": 15 },
				{ "kp_MembershipID": 16,   "kf_PersonID": 16,	"kf_OrganisationID": 16 },
				{ "kp_MembershipID": 17,   "kf_PersonID": 17,	"kf_OrganisationID": 17 },
				{ "kp_MembershipID": 18,   "kf_PersonID": 18,	"kf_OrganisationID": 18 },
				{ "kp_MembershipID": 19,   "kf_PersonID": 19,	"kf_OrganisationID": 19 },
				{ "kp_MembershipID": 20,   "kf_PersonID": 20,	"kf_OrganisationID": 20 },
				{ "kp_MembershipID": 21,   "kf_PersonID": 21,	"kf_OrganisationID": 21 },
				{ "kp_MembershipID": 22,   "kf_PersonID": 22,	"kf_OrganisationID": 22 },
				{ "kp_MembershipID": 23,   "kf_PersonID": 23,	"kf_OrganisationID": 23 },
				{ "kp_MembershipID": 24,   "kf_PersonID": 24,	"kf_OrganisationID": 24 },
				{ "kp_MembershipID": 25,   "kf_PersonID": 25,	"kf_OrganisationID": 25 },
				{ "kp_MembershipID": 26,   "kf_PersonID": 26,	"kf_OrganisationID": 26 }
			]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    createMembership: function(membership) {
        this.logger.debug("createMembership");

        var response = {
            success: true,
            membership: {
                kp_MembershipID: this.getRandomInt(1000, 99999),
				kf_PersonID: membership.kf_PersonID,
				kf_OrganisationID: membership.kf_OrganisationID		
            }
        };

        response = Ext.create("Core.model.membership.Model", response.membership);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updateMembership: function(membership) {
        this.logger.debug("updateMembership: kp_MembershipID = ", membership.kp_MembershipID);

        var response = {
            success: true,
            membership: {
                kp_MembershipID: membership.kp_MembershipID,
				kf_PersonID: membership.kf_PersonID,
				kf_OrganisationID: membership.kf_OrganisationID			
            }
        };

        response = Ext.create("Core.model.membership.Model", response.membership);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deleteMembership: function(membership) {
        this.logger.debug("deleteMembership: kp_MembershipID = ", membership.kp_MembershipID);

        var response = {
            success: true,
            membership: {
                kp_MembershipID: membership.kp_MembershipID,
				kf_PersonID: membership.kf_PersonID,
				kf_OrganisationID: membership.kf_OrganisationID	
            }
        };

        response = Ext.create("Core.model.membership.Model", response.membership);
        return this.delayedSuccess(response);
    }, 

    /**
     * The mock service call.
     */
    readMemberships: function() {
        this.logger.debug("readMemberships");

        var response = {
            success: true,
            memberships: [
				{ "kp_MembershipID": 1,    "kf_PersonID": 1,	"kf_OrganisationID": 1 },
				{ "kp_MembershipID": 2,    "kf_PersonID": 2,	"kf_OrganisationID": 2 },
				{ "kp_MembershipID": 3,    "kf_PersonID": 3,	"kf_OrganisationID": 3 },
				{ "kp_MembershipID": 4,    "kf_PersonID": 4,	"kf_OrganisationID": 4 },
				{ "kp_MembershipID": 5,    "kf_PersonID": 5,	"kf_OrganisationID": 5 },
				{ "kp_MembershipID": 6,    "kf_PersonID": 6,	"kf_OrganisationID": 6 },
				{ "kp_MembershipID": 7,    "kf_PersonID": 7,	"kf_OrganisationID": 7 },
				{ "kp_MembershipID": 8,    "kf_PersonID": 8,	"kf_OrganisationID": 8 },
				{ "kp_MembershipID": 9,    "kf_PersonID": 9,	"kf_OrganisationID": 9 },
				{ "kp_MembershipID": 10,   "kf_PersonID": 10,	"kf_OrganisationID": 10 },
				{ "kp_MembershipID": 11,   "kf_PersonID": 11,	"kf_OrganisationID": 11 },
				{ "kp_MembershipID": 12,   "kf_PersonID": 12,	"kf_OrganisationID": 12 },
				{ "kp_MembershipID": 13,   "kf_PersonID": 13,	"kf_OrganisationID": 13 },
				{ "kp_MembershipID": 14,   "kf_PersonID": 14,	"kf_OrganisationID": 14 },
				{ "kp_MembershipID": 15,   "kf_PersonID": 15,	"kf_OrganisationID": 15 },
				{ "kp_MembershipID": 16,   "kf_PersonID": 16,	"kf_OrganisationID": 16 },
				{ "kp_MembershipID": 17,   "kf_PersonID": 17,	"kf_OrganisationID": 17 },
				{ "kp_MembershipID": 18,   "kf_PersonID": 18,	"kf_OrganisationID": 18 },
				{ "kp_MembershipID": 19,   "kf_PersonID": 19,	"kf_OrganisationID": 19 },
				{ "kp_MembershipID": 20,   "kf_PersonID": 20,	"kf_OrganisationID": 20 },
				{ "kp_MembershipID": 21,   "kf_PersonID": 21,	"kf_OrganisationID": 21 },
				{ "kp_MembershipID": 22,   "kf_PersonID": 22,	"kf_OrganisationID": 22 },
				{ "kp_MembershipID": 23,   "kf_PersonID": 23,	"kf_OrganisationID": 23 },
				{ "kp_MembershipID": 24,   "kf_PersonID": 24,	"kf_OrganisationID": 24 },
				{ "kp_MembershipID": 25,   "kf_PersonID": 25,	"kf_OrganisationID": 25 },
				{ "kp_MembershipID": 26,   "kf_PersonID": 26,	"kf_OrganisationID": 26 }
			]
        };

        return this.delayedSuccess(response);
    }
	
});