/**
 * The title service object. Contains concrete Ajax calls.
 */
Ext.define("Core.service.title.Service", {
    extend: "FlowMVC.mvc.service.AbstractService",

    inject: [
        "logger"
    ],

    /**
     * The set ajax service call. Hits a json service and handles the success and fault accordingly.
     *
     * @param {String} title The title being set.
     */
	set: function(title) {
        this.logger.debug("set: title = " + title);		

        var deferred = Ext.create("Deft.promise.Deferred");
        var me = this;

        Ext.Ajax.request({
            title: "data/title-success.json",
//            url: "http://localhost:8080/SenchaDemo",
            method: "post",
            params: {
                j_title: title
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