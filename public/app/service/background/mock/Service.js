/**
 * The mock background service object.
 */
Ext.define("Core.service.background.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],

    /**
     * The mock background service call.
     *
     * @param {String} background The background being set.
     */
    set: function(background) {
        this.logger.debug("set: background = " + background);

        if(background == background) { // allow any background for now

            var response = {
                success: true,
                background: {
                    background: background // return the same background as provided
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
