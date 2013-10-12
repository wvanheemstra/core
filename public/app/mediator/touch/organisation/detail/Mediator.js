/**
 * The organisation detail mediator essentially fulfils the passive view pattern for the organisation detail view.
 */
Ext.define("Core.mediator.touch.organisation.detail.Mediator", {
    extend: "Core.mediator.touch.organisation.base.Mediator",

    requires: [
        "Core.event.navigation.Event",  // THIS IS ALREADY IN THE BASE CLASS, REMOVE?
		"Ext.MessageBox"
	],

    // set up view event to mediator mapping
    control: {
    	titlebar: {
    		resize: "onResizeToolbar"
    	},  
		bottombar: {
			resize: "onResizeToolbar"
		},
        backButton: {
            tap: "onBackButtonTap"
        },
        saveOrganisationButton: {
            tap: "onSaveOrganisationButtonTap"
        },
        deleteButton: {
            tap: "onDeleteButtonTap"
        },		
		groupsSearchInput :{
            keyup:          "onGroupsSearchKeyUp",
            clearicontap:   "onGroupsSearchClearIconTap"
        }
    },

    // set up injected object event listening
    observe: {
        organisationStore: {
            selectedRecordChange: "onSelectedRecordChange"
        }
    },
	
	statics: {
		// empty
	},

    /**
     * Sets up global event bus handlers. Called by the parent superclass during the initialization phase.
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
        this.eventBus.addGlobalEventListener(Core.event.ui.Event.SET_UI_SUCCESS, this.onSetUISuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.CREATE_ORGANISATION_SUCCESS, this.onCreateOrganisationSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.UPDATE_ORGANISATION_SUCCESS, this.onUpdateOrganisationSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.organisation.Event.DELETE_ORGANISATION_SUCCESS, this.onDeleteOrganisationSuccess, this);
		this.eventBus.addGlobalEventListener(Core.event.group.Event.READ_GROUPS_SUCCESS, this.onReadGroupsSuccess, this);				
    },

    /**
     * Functional method to save a organisation. Determines if the organisation is new and it needs to be
     * created, or existing and needs to be updated and fires off the corresponding application-level event.
     *
     * @param organisation    The organisation is the data model for the item in the list currently selected.
     */
    saveOrganisation: function(organisation) {
        this.logger.debug("saveOrganisation");
        var evt;
        var msg;
        if(organisation != null) {
            var id = organisation.kp_OrganisationID;
            if( (id != null) && (id != "") ) {
                evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.UPDATE_ORGANISATION);
                msg = nineam.locale.LocaleManager.getProperty("organisationDetail.updatingOrganisation");
            } else {
                evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.CREATE_ORGANISATION);
                msg = nineam.locale.LocaleManager.getProperty("organisationDetail.creatingOrganisation");
            }
            this.getView().setMasked({
                xtype: "loadmask",
                message: msg
            });
            evt.organisation = organisation;
            this.eventBus.dispatchGlobalEvent(evt);
        }
    },

    /**
     * Functional method to delete a organisation. Fires off the corresponding application-level event.
     *
     * @param organisation    The organisation is the data model for the item in the list currently selected.
     */
    deleteOrganisation: function(organisation) {
        this.logger.debug("deleteOrganisation");
		var continueDeletion = false;
		var view = this.getView();
		var eventBus = this.eventBus;
		var organisationName = organisation.OrganisationFirstName + ' ' + organisation.OrganisationName;
		var callbackFunction = function(btn, text){
			if(btn === 'deleteYes'){
				continueDeletion = true;
				if(organisation != null && continueDeletion ) {
					view.setMasked({
						xtype: "loadmask",
						message: nineam.locale.LocaleManager.getProperty("organisationDetail.deletingOrganisation")
					});
					var evt = Ext.create("Core.event.organisation.Event", Core.event.organisation.Event.DELETE_ORGANISATION);
					evt.organisation = organisation;
					eventBus.dispatchGlobalEvent(evt);
				}
			} else {
				continueDeletion = false;
			}
	   };
		var message = Ext.Msg.show({
		   title:'Delete ' + organisationName,
		   msg: 'Are you sure?',
		   buttons: [
			{
				id: 'deleteYes',
				itemId: 'deleteYes',
				text: 'Yes',
				docked: 'left'
			},
			{
				id: 'deleteNo',
				itemId: 'deleteNo',
				text: 'No',
				docked: 'right'
			}
		   ],
		   ui: 'neutral',
		   icon: Ext.MessageBox.WARNING,
		   fn: callbackFunction,
		   scope: this,
		   animEl: 'elId'
		});
    },			
	
    /**
     * Simple navigation method used to navigate back, depending on the previous view.
	 *
	 * @param view	The view to go back to.
     */
    backToPrevious: function(view) {
    	this.logger.debug("backToPrevious view: " + view);
        switch(view) {
            case 'organisationslide':
            	this.backToOrganisationSlide();
                break;		
            case 'organisationlist':
            	this.backToOrganisationList();
                break;
            case 'organisationtile':
            	this.backToOrganisationTile();
                break;               
        }
    },
	
    /**
     * Simple navigation method used to navigate back to the organisation slide view.
     */
    backToOrganisationSlide: function() {
        this.logger.debug("backToOrganisationSlide");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_ORGANISATION_SLIDE);
    },
	
    /**
     * Simple navigation method used to navigate back to the organisation list view.
     */
    backToOrganisationList: function() {
        this.logger.debug("backToOrganisationList");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_ORGANISATION_LIST);
    },

    /**
     * Simple navigation method used to navigate back to the organisation tile view.
     */
    backToOrganisationTile: function() {
        this.logger.debug("backToOrganisationTile");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_ORGANISATION_TILE);
    },

    /**
     * Resets the view to it's default state -- no record set on the view's fields.
     */
    reset: function() {
        this.logger.debug("reset");
        this.getView().setMasked(false);
        this.getView().setRecord(null);
        this.getView().reset();
    },

    /**
     * Handles the set UI event. 
     *
     * @param ui    The ui to set.	 
     */
    setUI: function(ui) {
		this.logger.debug("setUI: ui = " + ui);
    	for ( var i=0; i<this.getView().items.length; i++)
        {
            this.getView().items.getAt(i).setUi(ui);
        }
    }, 
	
    /**
     * Refreshes an element provided.
	 *
	 * @param element    The element to refresh
	 * @param style      The element style to retain
	 * @param timeout    The timeout in milliseconds (e.g. 20)
     */	
	refreshElement: function(element, style, timeout) {
		this.logger.debug("refreshElement: element = ");
		console.log(element);
		this.logger.debug("refreshElement: style = ");
		console.log(style);
		if (!element) { 
			console.log("no element");
			return; 
		}
		var n = document.createTextNode(' ');
		element.appendChild(n);
		element.style.display = 'none';
		setTimeout(function(){
			element.style.display = style; // Set to the style provided
			n.parentNode.removeChild(n);
			console.log(element);
		}, timeout); // you can play with this timeout to make it as short as possible	
	},
	
    /**  THIS HAVE BEEN MOVED TO THE VIEW ITSELF ....
     * Build an itemSelector from the element provided.
	 *
	 * @param element    The element to build an itemSelector from
	 * @param options      The element's options
     */		
	buildItemSelector: function(element, options){
		this.logger.debug("buildItemSelector");	
		var me = element;
		/*
		var store = Ext.create('Ext.data.Store', {
			storeId:'groupStore',
			fields:['name', 'email', 'phone'],
			data:{'items':[
				{ 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
				{ 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
				{ 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
				{ 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
			]},
			proxy: {
				type: 'memory',
				reader: {
					type: 'json',
					root: 'items'
				}
			}
		});
		*/
		
		/*
		var panel = Ext.create('Ext.grid.Panel', {
			title: 'Groups',
			store: Ext.data.StoreManager.lookup('groupStore'),
			columns: [
				{ header: 'Name',  dataIndex: 'name', flex: 1 }
			],
			height: 200,
			width: 400,
			//renderTo: Ext.getBody()
			renderTo: this.getView().down("#groupsContainer")
		});
		*/
		/*
		var list = Ext.create('Ext.List', {
			// configure the newly created list
			mode: 'MULTI',
			store: Ext.data.StoreManager.lookup('groupStore'), //eof store
			itemTpl: "{name}",
			renderTo: this.getView().down("#groupsContainer"),
			listeners: {
				selectionchange: function(list,records){
					var names = [];
					Ext.Array.each(records, function(item){
						names.push("<li>"+item.data.name+"</li>");
					});// eof each()
					console.log("Selected " + records.length + " item(s): " + names.join(''));
				}//eof selectionchange
			}//eof listeners
		});
		*/
		// to do ...
	//	var component = this.getView().down("#groupsContainer");
	//	component.getItems().add(list);
	//	component.setHtml('Setting a list!');	
	//	var items = component.getItems();
	//	for(item in items){
	//		console.log(items[item]);
	//		items[item] = list; // Make it better so it checks that this is indeed a list
	//	}
		
	//	component.setHeight(300);
		//component.doLayout(); // Should refresh the component
		
		
	},
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the resize toolbar application-level event. 
     */    
    onResizeToolbar: function(toolbar) {
	    this.logger.debug("onResizeToolbar");
		var id = toolbar.id;
		var component = Ext.getCmp(id);
		var maxWidthToolbar = Math.max(component.element.dom["clientWidth"], component.element.dom["scrollWidth"], component.element.dom["offsetWidth"]);
		//console.log("maxWidthToolbar = " + maxWidthToolbar);
		// subtract the total width of any elements (except spacer or title) within the toolbar from max width of the toolbar
		var allItemsWidth = 0;
		var clientWidth = 0;
		var scrollWidth = 0; 
		var offsetWidth = 0;
		component.items.each(function(item){ 
			// Omit spacers
			var isNotSpacer;
			var itemId = item.id;
			var indexSpacer = itemId.indexOf("spacer");
			//console.log("indexSpacer = " + indexSpacer);
			if (indexSpacer < 0) {
				isNotSpacer = true;
			} else {
				isNotSpacer = false;
			}
			//console.log("isNotSpacer = " + isNotSpacer);
			// Omit titles
			var isNotTitle;
			var itemId = item.id;
			var indexTitle = itemId.indexOf("title");
			//console.log("indexTitle = " + indexTitle);
			if (indexTitle < 0) {
				isNotTitle = true;
			} else {
				isNotTitle = false;
			}
			//console.log("isNotTitle = " + isNotTitle);
			// Measure width of all others
			if(item.element.dom["clientWidth"] > 0 && isNotSpacer && isNotTitle ) { 
				clientWidth = item.element.dom["clientWidth"];
			} else {
				clientWidth = 0;
			}
			//console.log(item.id + ": clientWidth = " + clientWidth);				
			if(item.element.dom["scrollWidth"] > 0 && isNotSpacer && isNotTitle ) { 
				scrollWidth = item.element.dom["scrollWidth"];
			} else {
				scrollWidth = 0;
			}
			//console.log(item.id + ": scrollWidth = " + scrollWidth);			
			if(item.element.dom["offsetWidth"] > 0 && isNotSpacer && isNotTitle ) { 
				offsetWidth = item.element.dom["offsetWidth"];
			} else {
				offsetWidth = 0;
			}
			//console.log(item.id + ": offsetWidth = " + offsetWidth);
			var maxWidthItem = Math.max(clientWidth, scrollWidth, offsetWidth);
			allItemsWidth = allItemsWidth + maxWidthItem;
		});
		//console.log("allItemsWidth = " + allItemsWidth);
		// adjust the width of the spacer
		var spacer = component.down("#spacer");
		if(spacer) {
			var spacerWidth = maxWidthToolbar - allItemsWidth;
			spacer.setWidth(spacerWidth);
			//console.log("spacerWidth = " + spacerWidth);
		}
    },

    /**
     * Handles the set ui success application-level event. Update the components for the ui.
     */
    onSetUISuccess: function() {
        this.logger.debug("onSetUISuccess");
        this.setUI(Core.config.organisation.Config.getUi());
    },

    /**
     * Handles the create organisation success application-level event. Navigates back to the organisation list view.
     */
    onCreateOrganisationSuccess: function() {
        this.logger.debug("onCreateOrganisationSuccess");
        this.getView().setMasked(false);
        this.backToPrevious(Core.config.organisation.Config.getPreviousView());
    },

    /**
     * Handles the update organisation success application-level event. Navigates back to the organisation list view.
     */
    onUpdateOrganisationSuccess: function() {
        this.logger.debug("onUpdateOrganisationSuccess");
        this.getView().setMasked(false);
        this.backToPrevious(Core.config.organisation.Config.getPreviousView());
    },

    /**
     * Handles the delete organisation success application-level event. Navigates back to the organisation list view.
     */
    onDeleteOrganisationSuccess: function() {
        this.logger.debug("onDeleteOrganisationSuccess");
        this.reset();
        this.backToPrevious(Core.config.organisation.Config.getPreviousView());
    },

    /**
     * Handles the painted picker application-level event. 
	 *
	 * @param picker    The picker that is painted.
     */    
    onPaintedPicker: function(picker) {
		this.logger.debug("onPaintedPicker");
	/*	for (var i=0;i<50;i++){ // TEMP an arbitrary number of attempts
			var pickerslotId = 'ext-pickerslot-'+i;
			var pickerslotElement = document.getElementById(pickerslotId);
			if(pickerslotElement) {
				this.logger.debug("pickerslot found: " +i);
				var id = document.getElementById(pickerslotId).getAttribute("id");
				console.log("id = " +id);
				var style = document.getElementById(pickerslotId).getAttribute("style");
				console.log("style = " +style);
				// Force a width of '100% !important' or Chrome will not show the slots
				// refresh the element
				this.refreshElement(document.getElementById(pickerslotId), "width:'100%!important'", 20);  // SADLY Sencha overwrites our attempt
			}
		}
	*/
    },	
	
    /**
     * Handles the show picker application-level event. 
	 *
	 * @param picker    The picker that is shown.
     */    
    onShowPicker: function(picker) {	
		this.logger.debug("onShowPicker");
		// Set the value from the form to the slot
		var form = this.getView();
		var formValues = form.getValues();
		for (formValue in formValues) {
			switch(formValue) {				
				default: //empty
			}
		}
	},			

    /**
     * Handles the read groups success application-level event.
     */
    onReadGroupsSuccess: function() {
		if(Core.config.organisation.Config.getCurrentView()==='organisationdetail') {
			this.logger.debug("onReadGroupsSuccess");
			// more...
		}
	},

    /**
     * Handles the change of the selected record in the organisation store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.organisation.Store} store The store that has the selected record.
     * @param {Core.model.organisation.Model} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
        var logMsg = (record != null)
            ? ": kp_OrganisationID = " + record.get("kp_OrganisationID") + ", organisation = " + record.get("OrganisationName"): "new organisation";
        this.logger.debug("onSelectedRecordChange = " + logMsg);
        if (record) {
            this.getView().setRecord(record);
        } else {
            this.reset();
        }
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the back button tap event. Navigates back to the previous organisation view.
     */
    onBackButtonTap: function() {
        this.logger.debug("onBackButtonTap");
        this.backToPrevious(Core.config.organisation.Config.getPreviousView());
    },

    /**
     * Handles the save button tap event. Grabs the view's current organisation data and passes the record
     * to the functional save method.
     */
    onSaveOrganisationButtonTap: function() {
        this.logger.debug("onSaveOrganisationButtonTap");
        var organisation = this.getView().getRecord();
        var newOrganisation = this.getView().getValues();
        // if this is a new organisation record, there's no id available
        if(organisation != null) {
            newOrganisation.kp_OrganisationID = organisation.data.kp_OrganisationID;
        }
        this.saveOrganisation(newOrganisation);
    },

    /**
     * Handles the delete button tap event. Grabs the view's current organisation data and passes the record
     * to the functional delete method.
     */
    onDeleteButtonTap: function() {
        this.logger.debug("onDeleteButtonTap");
        var organisation = this.getView().getRecord();
	    if(organisation) {
		    this.deleteOrganisation(organisation.data);
	    }
    },		

    /**
     * Handles the clear icon tap event on the search field. Clears all filter on the list's store.
     */
    onGroupsSearchClearIconTap: function() {
    	if(Core.config.organisation.Config.getCurrentView()==='organisationdetail') {  	
	        this.logger.debug("onGroupsSearchClearIconTap");
	        var store = this.getView().down("#groupList").getStore();
	        store.clearFilter();
    	}        
    },

    /**
     * Handles the key up event on the search field. Filters the list component's store by the value in the
     * search field and determining if it matches the name element of each record in the list.
     *
     * @param {Ext.field.Search} field Reference to the search field.
     *
     * TODO: BMR: 02/28/13: clean this up. pulled directly from another example with minor changes: http://www.phs4j.com/2012/05/add-a-searchfield-to-a-sencha-touch-2-list-mvc/
     */
    onGroupsSearchKeyUp: function(field) {
    	if(Core.config.organisation.Config.getCurrentView()==='organisationdetail') {
	        this.logger.debug("onGroupsSearchKeyUp");
	        //get the store and the value of the field
	        var value = field.getValue();
	        var store = this.getView().down("#groupList").getStore(); 
	        //first clear any current filters on the store
	        store.clearFilter();
	        //check if a value is set first, as if it isn't we don't have to do anything
	        if (value) {
	            //the user could have entered spaces, so we must split them so we can loop through them all
	            var searches = value.split(" "),
	                regexps = [],
	                i;
	            //loop them all
	            for (i = 0; i < searches.length; i++) {
	                //if it is nothing, continue
	                if (!searches[i]) continue;
	                //if found, create a new regular expression which is case insensitive
	                regexps.push(new RegExp(searches[i], "i"));
	            }
	            //now filter the store by passing a method
	            //the passed method will be called for each record in the store
	            store.filter(function(record) {
	                var matched = [];
	                //loop through each of the regular expressions
	                for (i = 0; i < regexps.length; i++) {
	                    var search = regexps[i],
	                        didMatch = record.get("GroupName").match(search);
	                    //if it matched the name, push it into the matches array
	                    matched.push(didMatch);
	                }
	                //if nothing was found, return false (don't so in the store)
	                if (regexps.length > 1 && matched.indexOf(false) != -1) {
	                    return false;
	                } else {
	                    //else true true (show in the store)
	                    return matched[0];
	                }
	            });
	        }
    	}//eof if
    }
});