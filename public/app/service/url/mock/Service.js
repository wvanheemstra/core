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

        if(
	        (url == "www.google.com") ||
		    (url == "www.yahoo.com") ||
            (url == "www.amazon.com")
            ) {

            var response = {
                success: true,
                sessionToken: "qwerty0987654321",
                url: {
                    url:"www.google.com"
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
