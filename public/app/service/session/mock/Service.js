/**
 * The mock session service object.
 */
Ext.define("Core.service.session.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "sessionStore",
        "logger"
    ],

    /**
     * The mock get session service call.
     *
     * @param {Int} id The id being get.
     * @param {String} sessionId The sessionId being get.
     */
	getSession: function(id, sessionId) {
		this.logger.debug("get session: id = " + id + ", sessionId = " + sessionId);
		
        var me = this;
        me.id = id;
        me.sessionId = sessionId;

	    // THIS IS A FORCEFULL FIX TO GET THE SAME DATA IN localstorage
	    var key = "Core.session.ApplicationKey";
	    var value = localStorage.getItem(key);
		
		if (typeof sessionModel === 'undefined'){
			var sessionModel = new Core.model.session.Model({
				id: null,
				sessionId: null
			});
		}
	    
		// THIS CHECK IS ONLY TO SEE IF THERE IS A SESSION IN LOCALSTORAGE
		// WITHOUT KNOWING THE sessionId, I.E. sessionId = ''
		// USED E.G. WHEN RELOADING THE PAGE OR OPENING UP THE PAGE IN A NEW TAB
		if(me.sessionId === '' && value!=''){
			this.logger.debug("getSession.success");
			Core.config.global.Config.setId(value['id']);
			Core.config.global.Config.setSessionId(value['sessionId']);
			var response = {
				success: true,
				sessionToken: "qwerty1234567890",
				session: {
					id: value['id'],
					sessionId: value['sessionId']
				}
			};
			var delayInMilliseconds = 100; // The default delay of 3 seconds (=3000) for mock services.				
			return me.delayedSuccess(response, delayInMilliseconds);
		}

		// THIS CHECK IS WHEN WE DO PROVIDE A sessionId OTHER THAN '' TO VERIFY
	    if(value[id] === sessionModel.get('id') && value[sessionId] === sessionModel.get('sessionId')) {

			var sessionStore = me.sessionStore;
			sessionStore.removeAll(id);
			sessionStore.sync(); 		
		    var sessionModel = new Core.model.session.Model({
		      id: me.id,
		      sessionId: me.sessionId
		    });
		    sessionStore.add(sessionModel);
		    sessionStore.sync();

			if(null!=sessionStore.getAt(0).get('sessionId')){
				this.logger.debug("getSession.success");
			
				Core.config.global.Config.setId(me.id);
				Core.config.global.Config.setSessionId(me.sessionId);

				var response = {
	                success: true,
	                sessionToken: "qwerty1234567890",
	                session: {
	                    id: me.id,
	                    sessionId: me.sessionId
	                }
	            };
				var delayInMilliseconds = 100; // The default delay of 3 seconds (=3000) for mock services.	            
	            return me.delayedSuccess(response, delayInMilliseconds);
			}// eof second if
			else {   
				this.logger.debug("getSession.failure");
				
				var response = {
	                success: false
	            };
				var delayInMilliseconds = 100; // The default delay of 3 seconds (=3000) for mock services.					
	            return me.delayedFailure(response, delayInMilliseconds);
			}
	    }// eof first if
	    else {
			this.logger.debug("getSession.failure");
			
			var response = {
                success: false
            };
			var delayInMilliseconds = 100; // The default delay of 3 seconds (=3000) for mock services.				
            return me.delayedFailure(response, delayInMilliseconds);    	
	    }
	    // REPLACE ONCE SENCHA WORKS WITH localstorage AS DESIGNED

	},        
        
    /**
     * The mock set session service call.
     *
     * @param {Int} id The id being set.
     * @param {String} sessionId The sessionId being set.
     */
	setSession: function(id, sessionId) {
		this.logger.debug("set session: id = " + id + ", sessionId = " + sessionId);		

        var me = this;
        me.id = id;
        me.sessionId = sessionId;

		var sessionStore = me.sessionStore;
		sessionStore.removeAll(id);
		sessionStore.sync(); 		
	    var sessionModel = new Core.model.session.Model({
	      id: me.id,
	      sessionId: me.sessionId
	    });
	    
	    this.logger.debug("sessionModel: ");// for testing only
	    console.log(sessionModel);
	    
	    sessionStore.add(sessionModel);
	    sessionStore.sync();
	    
	    this.logger.debug("sessionStore: data.all = " + sessionStore.data.all);
	    
	    // THIS IS A FORCEFULL FIX TO GET THE SAME DATA IN localstorage
	    var key = "Core.session.ApplicationKey";
	    var value = {};
	    value['id'] = sessionModel.get('id');
	    value['sessionId'] = sessionModel.get('sessionId');
	    localStorage.setItem(key, JSON.stringify(value));
	    // REPLACE ONCE SENCHA WORKS WITH localstorage AS DESIGNED
	    
		if(null!=sessionStore.getAt(0).get('sessionId')){
			this.logger.debug("setSession.success");
		
			var response = {
                success: true,
                sessionToken: "qwerty1234567890",
                session: {
                    id: me.id,
                    sessionId: me.sessionId
                }
            };
            
			this.logger.debug("sessionStore: ");// for testing only
	    	console.log(sessionStore);
			var delayInMilliseconds = 100; // The default delay of 3 seconds (=3000) for mock services.	            
            return me.delayedSuccess(response, delayInMilliseconds);
		}
		else {   
			this.logger.debug("setSession.failure");
			
			var response = {
                success: false
            };
			var delayInMilliseconds = 100; // The default delay of 3 seconds (=3000) for mock services.				
            return me.delayedFailure(response, delayInMilliseconds);
		}

	},

    /**
     * The mock clear session service.
     *
     * @param {Int} id The id being cleared.
     * @param {String} sessionId The sessionId being cleared.
     */	
	clearSession: function(id, sessionId) {
		this.logger.debug("clear session: id = " + id + ", sessionId = " + sessionId);

        var me = this;
        me.id = id;
        me.sessionId = sessionId;
                
		var sessionStore = me.sessionStore;
		sessionStore.removeAll(me.id);
		sessionStore.sync();
		
		// THIS IS A FORCEFULL FIX TO CLEAR THE SAME DATA FROM localstorage
	    var key = "Core.session.ApplicationKey";
	    localStorage.removeItem(key);
	    // REPLACE ONCE SENCHA WORKS WITH localstorage AS DESIGNED
		
		//if(null!=sessionStore.getAt(0).get('sessionId')){  // sessionStore.getAt(0) is undefined
		
		if(true) { // TEMP SET TO ALWAYS BE TRUE, Store has no more data
			this.logger.debug("clearSession.success");
			var response = {
                success: true,
                sessionToken: "",
                session: {
                    id: me.id,
                    sessionId: me.sessionId
                }
            };
			var delayInMilliseconds = 100; // The default delay of 3 seconds (=3000) for mock services.				
			return me.delayedSuccess(response, delayInMilliseconds);
		}
		else {   
			this.logger.debug("clearSession.failure");
			var response = {
                success: false
            };
			var delayInMilliseconds = 100; // The default delay of 3 seconds (=3000) for mock services.				
			return me.delayedFailure(response, delayInMilliseconds);
		}
	} 
	
});
