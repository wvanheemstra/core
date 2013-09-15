/**
 * The mock title service object.
 */
Ext.define("Core.service.title.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],

    /**
     * The mock title service call.
     *
     * @param {String} title The title being set.
     */
    set: function(title) {
        this.logger.debug("set: title = " + title);

        if(title == title) { // allow any title for now

            var response = {
                success: true,
                sessionToken: "qwerty0987654321",
                title: {
                    title: title // return the same title as provided
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
