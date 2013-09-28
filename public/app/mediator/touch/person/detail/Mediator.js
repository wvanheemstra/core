/**
 * The person detail mediator essentially fulfils the passive view pattern for the person detail view.
 */
Ext.define("Core.mediator.touch.person.detail.Mediator", {
    extend: "Core.mediator.touch.person.base.Mediator",

    requires: [
        "Core.event.navigation.Event"  // THIS IS ALREADY IN THE BASE CLASS, REMOVE?
    ],

    // set up view event to mediator mapping
    control: {
    	titlebar: {
    		painted: "onPainted"
    	},    	
        backButton: {
            tap: "onBackButtonTap"
        },
        savePersonButton: {
            tap: "onSavePersonButtonTap"
        },
        deleteButton: {
            tap: "onDeleteButtonTap"
        },
		salutationAbbreviationTextField: {
			focus: "onSalutationAbbreviationTextFieldFocus"
		},
		salutationPicker: {
			//painted: "onPaintedPicker",
			show: "onShowPicker",
			change: "onChangeSalutationPicker"
		},
		genderNameTextField: {
			focus: "onGenderNameTextFieldFocus"
		},
		genderPicker: {
			show: "onShowPicker"
		},
		nationalityNameTextField: {
			focus: "onNationalityNameTextFieldFocus"
		},
		nationalityPicker: {
			show: "onShowPicker"
		}
    },

    // set up injected object event listening
    observe: {
        personStore: {
            selectedRecordChange: "onSelectedRecordChange"
        }
    },
	
	statics: {
        SALUTATION_PICKER_SET:    false,
        GENDER_PICKER_SET:    false,
        NATIONALITY_PICKER_SET:    false			
	},

    /**
     * Sets up global event bus handlers. Called by the parent superclass during the initialization phase.
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
        this.eventBus.addGlobalEventListener(Core.event.ui.Event.SET_UI_SUCCESS, this.onSetUISuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.CREATE_PERSON_SUCCESS, this.onCreatePersonSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.UPDATE_PERSON_SUCCESS, this.onUpdatePersonSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.person.Event.DELETE_PERSON_SUCCESS, this.onDeletePersonSuccess, this);
		this.eventBus.addGlobalEventListener(Core.event.salutation.Event.READ_SALUTATIONS_SUCCESS, this.onReadSalutationsSuccess, this);
		this.eventBus.addGlobalEventListener(Core.event.gender.Event.READ_GENDERS_SUCCESS, this.onReadGendersSuccess, this);
		this.eventBus.addGlobalEventListener(Core.event.nationality.Event.READ_NATIONALITIES_SUCCESS, this.onReadNationalitiesSuccess, this);		
    },

    /**
     * Functional method to save a person. Determines if the person is new and it needs to be
     * created, or existing and needs to be updated and fires off the corresponding application-level event.
     *
     * @param person    The person is the data model for the item in the list currently selected.
     */
    savePerson: function(person) {
        this.logger.debug("savePerson");
        var evt;
        var msg;
        if(person != null) {
            var id = person.kp_PersonID;
            if( (id != null) && (id != "") ) {
                evt = Ext.create("Core.event.person.Event", Core.event.person.Event.UPDATE_PERSON);
                msg = nineam.locale.LocaleManager.getProperty("personDetail.updatingPerson");
            } else {
                evt = Ext.create("Core.event.person.Event", Core.event.person.Event.CREATE_PERSON);
                msg = nineam.locale.LocaleManager.getProperty("personDetail.creatingPerson");
            }
            this.getView().setMasked({
                xtype: "loadmask",
                message: msg
            });
            evt.person = person;
            this.eventBus.dispatchGlobalEvent(evt);
        }
    },

    /**
     * Functional method to delete a person. Fires off the corresponding application-level event.
     *
     * @param person    The person is the data model for the item in the list currently selected.
     */
    deletePerson: function(person) {
        this.logger.debug("deletePerson");
        if(person != null) {
            this.getView().setMasked({
                xtype: "loadmask",
                message: nineam.locale.LocaleManager.getProperty("personDetail.deletingPerson")
            });
            var evt = Ext.create("Core.event.person.Event", Core.event.person.Event.DELETE_PERSON);
            evt.person = person;
            this.eventBus.dispatchGlobalEvent(evt);
        }
    },

    /**
     * Functional method to read salutations. Fires off the corresponding application-level event.
     *
     */
	readSalutations: function() {
        this.logger.debug("readSalutations");
        if(this.self.SALUTATION_PICKER_SET == false) {
            this.getView().setMasked({
                xtype: "loadmask",
                message: nineam.locale.LocaleManager.getProperty("personDetail.readingSalutations")
            });
            var evt = Ext.create("Core.event.salutation.Event", Core.event.salutation.Event.READ_SALUTATIONS);
            this.eventBus.dispatchGlobalEvent(evt);
        }
		else {
			this.getSalutationPicker().show();
		}
	},	

    /**
     * Functional method to read genders. Fires off the corresponding application-level event.
     *
     */
	readGenders: function() {
        this.logger.debug("readGenders");
        if(this.self.GENDER_PICKER_SET == false) {
            this.getView().setMasked({
                xtype: "loadmask",
                message: nineam.locale.LocaleManager.getProperty("personDetail.readingGenders")
            });
            var evt = Ext.create("Core.event.gender.Event", Core.event.gender.Event.READ_GENDERS);
            this.eventBus.dispatchGlobalEvent(evt);
        }
		else {
			this.getGenderPicker().show();
		}
	},

    /**
     * Functional method to read nationalities. Fires off the corresponding application-level event.
     *
     */
	readNationalities: function() {
        this.logger.debug("readNationalities");
        if(this.self.NATIONALITY_PICKER_SET == false) {
            this.getView().setMasked({
                xtype: "loadmask",
                message: nineam.locale.LocaleManager.getProperty("personDetail.readingNationalities")
            });
            var evt = Ext.create("Core.event.nationality.Event", Core.event.nationality.Event.READ_NATIONALITIES);
            this.eventBus.dispatchGlobalEvent(evt);
        }
		else {
			this.getNationalityPicker().show();
		}
	},	

    /**
     * Simple navigation method used to navigate back, depending on the previous view.
	 *
	 * @param view	The view to go back to.
     */
    backToPrevious: function(view) {
    	this.logger.debug("backToPrevious view: " + view);
        switch(view) {
            case 'personslide':
            	this.backToPersonSlide();
                break;		
            case 'personlist':
            	this.backToPersonList();
                break;
            case 'persontile':
            	this.backToPersonTile();
                break;               
        }
    },
	
    /**
     * Simple navigation method used to navigate back to the person slide view.
     */
    backToPersonSlide: function() {
        this.logger.debug("backToPersonSlide");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_PERSON_SLIDE);
    },
	
    /**
     * Simple navigation method used to navigate back to the person list view.
     */
    backToPersonList: function() {
        this.logger.debug("backToPersonList");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_PERSON_LIST);
    },

    /**
     * Simple navigation method used to navigate back to the person tile view.
     */
    backToPersonTile: function() {
        this.logger.debug("backToPersonTile");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_PERSON_TILE);
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

    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the painted application-level event. 
     */    
    onPainted: function() {
		this.logger.debug("onPainted");
    },

    /**
     * Handles the set ui success application-level event. Update the components for the ui.
     */
    onSetUISuccess: function() {
        this.logger.debug("onSetUISuccess");
        this.setUI(Core.config.person.Config.getUi());
    },

    /**
     * Handles the create person success application-level event. Navigates back to the person list view.
     */
    onCreatePersonSuccess: function() {
        this.logger.debug("onCreatePersonSuccess");
        this.getView().setMasked(false);
        this.backToPrevious(Core.config.person.Config.getPreviousView());
    },

    /**
     * Handles the update person success application-level event. Navigates back to the person list view.
     */
    onUpdatePersonSuccess: function() {
        this.logger.debug("onUpdatePersonSuccess");
        this.getView().setMasked(false);
        this.backToPrevious(Core.config.person.Config.getPreviousView());
    },

    /**
     * Handles the delete person success application-level event. Navigates back to the person list view.
     */
    onDeletePersonSuccess: function() {
        this.logger.debug("onDeletePersonSuccess");
        this.reset();
        this.backToPrevious(Core.config.person.Config.getPreviousView());
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
				case 'kf_SalutationID': 
					setTimeout(function() {
						picker.setValue({
							salutationSlot1 : formValues[formValue]
						}, true);
					}, 2000);
					break;
				case 'kf_GenderID': 
					setTimeout(function() {
						picker.setValue({
							genderSlot1 : formValues[formValue]
						}, true);
					}, 2000);
					break;	
				case 'kf_NationalityID': 
					setTimeout(function() {
						picker.setValue({
							nationalitySlot1 : formValues[formValue]
						}, true);
					}, 2000);
					break;						
				default: //empty
			}
		}
	},
	
    /**
     * Handles the change salutation picker application-level event. 
	 *
	 * @param picker    The picker that is changed.
     */ 	
	onChangeSalutationPicker: function(picker) {
        selectedValue = picker.getValue()['salutationSlot1'];
        console.log("salutationSlot1: value = " + selectedValue);
	},
	
    /**
     * Handles the read salutations success application-level event.
     */
    onReadSalutationsSuccess: function() {
		if(Core.config.person.Config.getCurrentView()==='persondetail') {
			this.logger.debug("onReadSalutationsSuccess");
			var salutationPicker = this.getSalutationPicker(); // referenced as a control
			
		//	document.getElementById('ext-pickerslot-1').style.width = "100% !important"; // Force a width or Chrome will not show the slots
			
			salutationPicker.setSlots({
				name: 'salutationSlot1',
				itemId: "salutationSlot1", // TEST
				title: 'Choose a Salutation',
				store: this.salutationStore,
				displayField: "SalutationAbbreviation",
				valueField: "kp_SalutationID",
				itemTpl: '{SalutationAbbreviation}',
			//	width: "100% !important", // TEST
			//	style: "width: 100% !important", // TEST
			//	flex: 1, // TEST
				value: 0, // The value at the start, default to empty
				listeners:{
					itemtap: function (obj, index, target, record, e, eOpts) {	
						console.log("itemtap");
						var form = this.up('personDetailView');
						form.setValues({
							SalutationAbbreviation: record.get('SalutationAbbreviation'),
							kf_SalutationID: record.get('kp_SalutationID'), // Note: kf links to kp
						});
						obj.parent.hide(); // Dismiss the picker
					}
				}
			});
			
			this.getView().add(salutationPicker);			
			this.self.SALUTATION_PICKER_SET = true;
			salutationPicker.show();
			this.getView().setMasked(false);
		}	
    },	

    /**
     * Handles the read genders success application-level event.
     */
    onReadGendersSuccess: function() {
		if(Core.config.person.Config.getCurrentView()==='persondetail') {
			this.logger.debug("onReadGendersSuccess");
			var genderPicker = this.getGenderPicker(); // referenced as a control
			
		//	document.getElementById('ext-pickerslot-1').style.width = "100% !important"; // Force a width or Chrome will not show the slots
			
			genderPicker.setSlots({
				name: 'genderSlot1',
				title: 'Choose a Gender',
				store: this.genderStore,
				displayField: "GenderName",
				valueField: "kp_GenderID",
				itemTpl: '{GenderName}',
				listeners:{
					itemtap: function (obj, index, target, record, e, eOpts) {	
						console.log("itemtap");
						var form = this.up('personDetailView');
						form.setValues({
							GenderName: record.get('GenderName'),
							kf_GenderID: record.get('kp_GenderID'), // Note: kf links to kp
						});
						obj.parent.hide(); // Dismiss the picker
					}
				}
			});
			this.getView().add(genderPicker);			
			this.self.GENDER_PICKER_SET = true;
			genderPicker.show();
			this.getView().setMasked(false);
		}	
    },

    /**
     * Handles the read nationalities success application-level event.
     */
    onReadNationalitiesSuccess: function() {
		if(Core.config.person.Config.getCurrentView()==='persondetail') {
			this.logger.debug("onReadNationalitiesSuccess");
			var nationalityPicker = this.getNationalityPicker(); // referenced as a control
			
		//	document.getElementById('ext-pickerslot-1').style.width = "100% !important"; // Force a width or Chrome will not show the slots
			
			nationalityPicker.setSlots({
				name: 'nationalitySlot1',
				title: 'Choose a Nationality',
				store: this.nationalityStore,
				displayField: "NationalityName",
				valueField: "kp_NationalityID",
				itemTpl: '{NationalityName}',
				listeners:{
					itemtap: function (obj, index, target, record, e, eOpts) {	
						console.log("itemtap");
						var form = this.up('personDetailView');
						form.setValues({
							NationalityName: record.get('NationalityName'),
							kf_NationalityID: record.get('kp_NationalityID'), // Note: kf links to kp
						});
						obj.parent.hide(); // Dismiss the picker
					}
				}
			});
			this.getView().add(nationalityPicker);			
			this.self.NATIONALITY_PICKER_SET = true;
			nationalityPicker.show();
			this.getView().setMasked(false);
		}	
    },	
	
    /**
     * Handles the change of the selected record in the person store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.person.Store} store The store that has the selected record.
     * @param {Core.model.person.Model} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
        var logMsg = (record != null)
            ? ": kp_PersonID = " + record.get("kp_PersonID") + ", person = " + record.get("PersonFirstName") + " " + record.get("PersonLastName") 
            : "new person";
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
     * Handles the back button tap event. Navigates back to the previous person view.
     */
    onBackButtonTap: function() {
        this.logger.debug("onBackButtonTap");
        this.backToPrevious(Core.config.person.Config.getPreviousView());
    },

    /**
     * Handles the save button tap event. Grabs the view's current person data and passes the record
     * to the functional save method.
     */
    onSavePersonButtonTap: function() {
        this.logger.debug("onSavePersonButtonTap");
        var person = this.getView().getRecord();
        var newPerson = this.getView().getValues();
        // if this is a new person record, there's no id available
        if(person != null) {
            newPerson.kp_PersonID = person.data.kp_PersonID;
        }
        this.savePerson(newPerson);
    },

    /**
     * Handles the delete button tap event. Grabs the view's current person data and passes the record
     * to the functional delete method.
     */
    onDeleteButtonTap: function() {
        this.logger.debug("onDeleteButtonTap");
        var person = this.getView().getRecord();
	    if(person) {
		    this.deletePerson(person.data);
	    }
    },

    /**
     * Handles the salutation abbreviation text field focus event. 
     * 
     */
    onSalutationAbbreviationTextFieldFocus: function() {
        this.logger.debug("onSalutationAbbreviationTextFieldFocus");
		this.readSalutations();
    },
	
    /**
     * Handles the gender name text field focus event. 
     * 
     */
    onGenderNameTextFieldFocus: function() {
        this.logger.debug("onGenderNameTextFieldFocus");
		this.readGenders();
    },
	
    /**
     * Handles the nationality name text field focus event. 
     * 
     */
    onNationalityNameTextFieldFocus: function() {
        this.logger.debug("onNationalityNameTextFieldFocus");
		this.readNationalities();
    }		

});