/**
 * The url service object. Contains concrete Ajax calls.
 */
Ext.define("Core.service.url.Service", {
    extend: "FlowMVC.mvc.service.AbstractService",

    inject: [
        "logger"
    ],

    /**
     * The set ajax service call. Hits a json service and handles the success and fault accordingly.
     *
     * @param {String} url The url being set.
     */
	set: function(url) {
        this.logger.debug("set: url = " + url);		

        var deferred = Ext.create("Deft.promise.Deferred");
        var me = this;

        Ext.Ajax.request({
            url: "data/url-success.json",
//            url: "http://localhost:8080/SenchaDemo",
            method: "post",
            params: {
                j_url: url
            },

            success: function(response) {
                this.logger.debug("set.success");
				if(typeof response.responseText !== 'undefined'){
					// Covert the string Array to an Object
					response = JSON.parse(response.responseText);
				}
                me.success(response, deferred);
            },

            failure: function(response) {
                this.logger.debug("set.failure");
				if(typeof response.responseText !== 'undefined'){
					// Covert the string Array to an Object
					response = JSON.parse(response.responseText);
				}
                me.failure(response, deferred);
            }
        });

        return deferred.promise;
		
	}

});