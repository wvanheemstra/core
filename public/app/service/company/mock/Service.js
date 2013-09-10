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

        if(
	        (company == "Your Company") ||
		    (company == "Caledonia") ||
            (company == "van Heemstra Pictures")
            ) {

            var response = {
                success: true,
                sessionToken: "qwerty1357908642",
                company: {
                    company:"Your Company"
                }
            };

            return this.delayedSuccess(response);
        }
        else {

            var response = {
                success: false
            };

            return this.delayedFailure(response);
        }
    }
});
