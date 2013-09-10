/**
 * The company service object. Contains concrete Ajax calls.
 */
Ext.define("Core.service.company.Service", {
    extend: "FlowMVC.mvc.service.AbstractService",

    inject: [
        "logger"
    ],

    /**
     * The set ajax service call. Hits a json service and handles the success and fault accordingly.
     *
     * @param {String} company The company being set.
     */
	set: function(company) {
        this.logger.debug("set: company = " + company);		

        var deferred = Ext.create("Deft.promise.Deferred");
        var me = this;

        Ext.Ajax.request({
            url: "data/company-success.json",
//            url: "http://localhost:8080/SenchaDemo",
            method: "post",
            params: {
                j_company: company
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