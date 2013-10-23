/**
 * The mock company service object.
 */
Ext.define("Core.service.company.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],

    /**
     * The mock company service call.
     *
     * @param {String} company The company being set.
     */
    set: function(company) {
        this.logger.debug("set: company = " + company);

        if(company === company) { //Allow any company for now

            var response = {
                success: true,
                sessionToken: "qwerty1357908642",
                company: {
                    company: company // return the same company as provided
                }
            };
			var delayInMilliseconds = 100; // The default delay of 3 seconds (=3000) for mock services.
            return this.delayedSuccess(response, delayInMilliseconds);
        }
        else {

            var response = {
                success: false
            };
			var delayInMilliseconds = 100; // The default delay of 3 seconds (=3000) for mock services.
            return this.delayedFailure(response, delayInMilliseconds);
        }
    }
});
