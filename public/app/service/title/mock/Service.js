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

        if(
	        (title == "Google") ||
		    (title == "Yahoo") ||
            (title == "Amazon")
            ) {

            var response = {
                success: true,
                sessionToken: "qwerty0987654321",
                title: {
                    title:"Google"
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
