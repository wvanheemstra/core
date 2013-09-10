/**
 * The ui service object. Contains concrete Ajax calls.
 */
Ext.define("Core.service.ui.Service", {
    extend: "FlowMVC.mvc.service.AbstractService",

    inject: [
        "logger"
    ],

    /**
     * The set ajax service call. Hits a json service and handles the success and fault accordingly.
     *
     * @param {String} ui The ui being set.
     */
	set: function(ui) {
        this.logger.debug("set: ui = " + ui);		

        var deferred = Ext.create("Deft.promise.Deferred");
        var me = this;

        Ext.Ajax.request({
            url: "data/ui-success.json",
//            url: "http://localhost:8080/SenchaDemo",
            method: "post",
            params: {
                j_ui: ui
            },

            success: function(response) {
                this.logger.debug("set.success");
                me.success(response, deferred);
            },

            failure: function(response) {
                this.logger.debug("set.failure");
                me.failure(response, deferred);
            }
        });

        return deferred.promise;
		
	}

});