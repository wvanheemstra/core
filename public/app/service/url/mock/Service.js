/**
 * The mock url service object.
 */
Ext.define("Core.service.url.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],

    /**
     * The mock url service call.
     *
     * @param {String} url The url being set.
     */
    set: function(url) {
        this.logger.debug("set: url = " + url);

        if(url === url) { // allow all urls for now

            var response = {
                success: true,
                sessionToken: "qwerty0987654321",
                url: {
                    url: url// return the same url as provided
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
