/**
 * The mock ui service object.
 */
Ext.define("Core.service.ui.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],

    /**
     * The mock ui service call.
     *
     * @param {String} ui The ui being set.
     */
    set: function(ui) {
        this.logger.debug("set: ui = " + ui);

        if(ui == ui) { // Allow any ui for now

            var response = {
                success: true,
                sessionToken: "qwerty0987654321",
                ui: {
                    ui: ui // return the same ui as provided
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
