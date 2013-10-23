/**
 * The employee list mediator essentially fulfils the passive view pattern for the employee list view.
 */
Ext.define("Core.mediator.extjs.employee.detail.Mediator", {
    extend: "Core.mediator.extjs.employee.base.Mediator",

    // set up view event to mediator mapping
    control: {
    	toolbar: {
    		painted: "onPainted"
    	},	
        backButton: {
            click: "onBackButtonClick"
        },
        saveEmployeeButton: {
            click: "onSaveEmployeeButtonClick"
        },
        deleteButton: {
            click: "onDeleteButtonClick"
        }
    },

    // set up injected object event listening
    observe: {
        employeeStore: {
            selectedRecordChange: "onSelectedRecordChange"
        }
    },

    /**
     * Sets up global event bus handlers. Called by the parent superclass during the initialization phase.
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");
        this.eventBus.addGlobalEventListener(Core.event.ui.Event.SET_UI_SUCCESS, this.onSetUISuccess, this);				
        this.eventBus.addGlobalEventListener(Core.event.employee.Event.CREATE_EMPLOYEE_SUCCESS, this.onCreateEmployeeSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.employee.Event.UPDATE_EMPLOYEE_SUCCESS, this.onUpdateEmployeeSuccess, this);
        this.eventBus.addGlobalEventListener(Core.event.employee.Event.DELETE_EMPLOYEE_SUCCESS, this.onDeleteEmployeeSuccess, this);
    },

    /**
     * Functional method to save an employee. Determines if the employee is new and it needs to be
     * created, or existing and needs to be updated and fires off the corresponding application-level event.
     *
     * @param employee    The employee is the data model for the item in the list currently selected.
     */
    saveEmployee: function(employee) {
        this.logger.debug("saveEmployee");
        var evt;
        var msg;
        if(employee !== null) {
            var id = employee.id;
            if( (id !== null) && (id !== "") ) {
                evt = Ext.create("Core.event.employee.Event", Core.event.employee.Event.UPDATE_EMPLOYEE);
                msg = nineam.locale.LocaleManager.getProperty("employeeDetail.updatingEmployee");
            } else {
                evt = Ext.create("Core.event.employee.Event", Core.event.employee.Event.CREATE_EMPLOYEE);
                msg = nineam.locale.LocaleManager.getProperty("employeeDetail.creatingEmployee");
            }
            this.getView().setLoading(msg);
            evt.employee = employee;
            this.eventBus.dispatchGlobalEvent(evt);
        }
    },

    /**
     * Functional method to delete an employee. Fires off the corresponding application-level event.
     *
     * @param employee    The employee is the data model for the item in the list currently selected.
     */
    deleteEmployee: function(employee) {
        this.logger.debug("deleteEmployee");
        if(employee !== null) {
            this.getView().setLoading(nineam.locale.LocaleManager.getProperty("employeeDetail.deletingEmployee"));
            var evt = Ext.create("Core.event.employee.Event", Core.event.employee.Event.DELETE_EMPLOYEE);
            evt.employee = employee;
            this.eventBus.dispatchGlobalEvent(evt);
        }
    },

    /**
     * Simple navigation method used to navigate back, depending on the previous view.
	 *
	 * @param view	The view to go back to.
     */
    backToPrevious: function(view) {
    	this.logger.debug("backToPrevious: view = " + view);
        switch(view) {
            case 'employeelist':
            	this.backToEmployeeList();
                break;
            case 'employeetile':
            	this.backToEmployeeTile();
                break;               
        }
    },

    /**
     * Simple navigation method used to navigate back to the employee list view.
     */
    backToEmployeeList: function() {
        this.logger.debug("backToEmployeeList");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_EMPLOYEE_LIST);
    },

    /**
     * Simple navigation method used to navigate back to the employee tile view.
     */
    backToEmployeeTile: function() {
        this.logger.debug("backToEmployeeTile");
        this.navigate(Core.event.navigation.Event.ACTION_BACK_SHOW_EMPLOYEE_TILE);
    },

    /**
     * Rests the view to it's default state -- no record set on the view's fields.
     */
    reset: function() {
        this.logger.debug("reset");
        this.getView().setLoading(false);
        // TODO: there doesn't appear to be an easy way to reset the currently loaded record in a form so we're hacking this. Might need to be updated for future vrs of ExtJS
        // resets the visual side so we're tapping into some u
        this.getView().getForm()._record = null;
//        this.getView().getForm().setRecord(null); // doesn't work as expected
//        this.getView().getForm().loadRecord(null); // doesn't work as expected
        this.getView().getForm().reset();
    },

    /**
     * Handles the set UI event. 
     *
	 * @param ui    The ui to set. 
     */
    setUI: function(ui) {
		this.logger.debug("setUI: ui = " + ui);
    	//Ext.getCmp('toolbar').ui = ui;
		for ( var i=0; i<this.getView().items.length; i++)
        {
            this.items.getAt(i).setUi(ui);
        }
    },
	
    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the painted application-level event. Set the main detail view
     * as the current view.
     */    
    onPainted: function() {
		this.logger.debug("onPainted");
    },	

    /**
     * Handles the set ui success application-level event. Update the components for the ui.
     */
    onSetUISuccess: function() {
        this.logger.debug("onSetUISuccess");
        this.setUI(Core.config.global.Config.getUi());
    },
	
    /**
     * Handles the create employee success application-level event. Navigates back to the employee list view.
     */
    onCreateEmployeeSuccess: function() {
        this.logger.debug("onCreateEmployeeSuccess");
        this.getView().setLoading(false);
        this.backToPrevious(Core.config.global.Config.getPreviousView());
    },

    /**
     * Handles the update employee success application-level event. Navigates back to the employee list view.
     */
    onUpdateEmployeeSuccess: function() {
        this.logger.debug("onUpdateEmployeeFailure");
        this.getView().setLoading(false);
        this.backToPrevious(Core.config.global.Config.getPreviousView());
    },

    /**
     * Handles the delete employee success application-level event. Navigates back to the employee list view.
     */
    onDeleteEmployeeSuccess: function() {
        this.logger.debug("onDeleteEmployeeSuccess");
        this.reset();
        this.backToPrevious(Core.config.global.Config.getPreviousView());
    },

    /**
     * Handles the change of the selected record in the employee store. Loads the appropriate record in the view or
     * resets it if the record is null.
     *
     * @param {Core.store.EmployeeStore} store The store that ahs the selected record.
     * @param {Core.model.EmployeeModel} record The selected record of the store.
     */
    onSelectedRecordChange: function(store, record) {
        var logMsg = (record !== null)
            ? ": id = " + record.get("id") + ", employee = " + record.get("firstName")
            : "new employee";
        this.logger.debug("onSelectedRecordChange = " + logMsg);
        if (record) {
            this.getView().loadRecord(record);
        } else {
            this.reset();
        }
    },

    ////////////////////////////////////////////////
    // VIEW EVENT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the back button tap event. Navigates back to the employee list view.
     */
    onBackButtonClick: function() {
        this.logger.debug("onBackButtonClick");
        this.backToPrevious(Core.config.global.Config.getPreviousView());
    },

    /**
     * Handles the save button tap event. Grabs the view's current employee data and passes the record
     * to the functional save method.
     */
    onSaveEmployeeButtonClick: function() {
        this.logger.debug("onSaveEmployeeButtonClick");
        var employee = this.getView().getRecord();
        var newEmployee = this.getView().getValues();
        // if this is a new employee record, there's no id available
        if(employee !== null) {
            newEmployee.id = employee.data.id;
        }
        this.saveEmployee(newEmployee);
    },

    /**
     * Handles the delete button tap event. Grabs the view's current employee data and passes the record
     * to the functional delete method.
     */
    onDeleteButtonClick: function() {
        this.logger.debug("onDeleteButtonClick");
        var employee = this.getView().getRecord();
	    if(employee) {
		    this.deleteEmployee(employee.data);
	    }
    }
});