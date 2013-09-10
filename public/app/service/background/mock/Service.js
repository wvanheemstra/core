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

        if(
	        (background == "noise") ||
		    (background == "red") ||
            (background == "blue")
            ) {

            var response = {
                success: true,
                background: {
                    background: "url('/bg/noise.png')"
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
