/**
 * The mock individual service object.
 */
Ext.define("Core.service.individual.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],
    
    /**
     * The mock service call.
     */
    createIndividual: function(individual) {
        this.logger.debug("createIndividual");

        var response = {
            success: true,
            individual: {
                kp_IndividualID: this.getRandomInt(1000, 99999),
                IndividualName: individual.IndividualName		
            }
        };

        response = Ext.create("Core.model.individual.Model", response.individual);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updateIndividual: function(individual) {
        this.logger.debug("updateIndividual: kp_IndividualID = " + individual.kp_IndividualID);

        var response = {
            success: true,
            individual: {
                kp_IndividualID: individual.kp_IndividualID,
                IndividualName: individual.IndividualName			
            }
        };

        response = Ext.create("Core.model.individual.Model", response.individual);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deleteIndividual: function(individual) {
        this.logger.debug("deleteIndividual: kp_IndividualID = " + individual.kp_IndividualID);

        var response = {
            success: true,
            individual: {
                kp_IndividualID: individual.kp_IndividualID,
                IndividualName: individual.IndividualName
            }
        };

        response = Ext.create("Core.model.individual.Model", response.individual);
        return this.delayedSuccess(response);
    }, 

    /**
     * The mock service call.
     */
    readIndividuals: function() {
        this.logger.debug("readIndividuals");

        var response = {
            success: true,
            individuals: [
                { kp_IndividualID: 1,    IndividualName: "Adam" },
                { kp_IndividualID: 2,    IndividualName: "Bob" },
                { kp_IndividualID: 3,    IndividualName: "Carol" },
                { kp_IndividualID: 4,    IndividualName: "David" },
                { kp_IndividualID: 5,    IndividualName: "Eddie" },
                { kp_IndividualID: 6,    IndividualName: "Frank" },
                { kp_IndividualID: 7,    IndividualName: "George" },
                { kp_IndividualID: 8,    IndividualName: "Harry" },
                { kp_IndividualID: 9,    IndividualName: "Ike" },
                { kp_IndividualID: 10,   IndividualName: "Jim" },
                { kp_IndividualID: 11,   IndividualName: "Kenny" },
                { kp_IndividualID: 12,   IndividualName: "Larry" },
                { kp_IndividualID: 13,   IndividualName: "Mary" },
                { kp_IndividualID: 14,   IndividualName: "Nancy" },
                { kp_IndividualID: 15,   IndividualName: "Olivier" },
                { kp_IndividualID: 16,   IndividualName: "Peter" },
                { kp_IndividualID: 17,   IndividualName: "Quincy" },
                { kp_IndividualID: 18,   IndividualName: "Roger" },
                { kp_IndividualID: 19,   IndividualName: "Sam" },
                { kp_IndividualID: 20,   IndividualName: "Thomas" },
                { kp_IndividualID: 21,   IndividualName: "Uncle" },
                { kp_IndividualID: 22,   IndividualName: "Vincent" },
                { kp_IndividualID: 23,   IndividualName: "William" },
                { kp_IndividualID: 24,   IndividualName: "Xavier" },
                { kp_IndividualID: 25,   IndividualName: "Yogi" },
                { kp_IndividualID: 26,   IndividualName: "Zachary" }
            ]
        };

        return this.delayedSuccess(response);
    }
});