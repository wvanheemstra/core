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

        if(
	        (ui == "dark") ||
		    (ui == "light") ||
            (ui == "neutral")
            ) {

            var response = {
                success: true,
                sessionToken: "qwerty0987654321",
                ui: {
                    ui:"neutral"
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
