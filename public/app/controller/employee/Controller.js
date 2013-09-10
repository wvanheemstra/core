/**
 * The EmployeeController acts as the command with asynchronous callback methods for successful
 * and failed employee service calls.eError: "undefined" is not a function(evaluating "controller.getStores()")
 */
Ext.define("Core.controller.employee.Controller", {
    extend: "FlowMVC.mvc.controller.AbstractController",

    requires: [
        "Core.event.employee.Event",
        "FlowMVC.mvc.service.rpc.Responder"
    ],

    inject: [
        "employeeService",
        "employeeStore",
        "logger"
    ],

//    config: {
//
//        /**
//         * @cfg {Object} employeeService The injected employee service from DeftJS.
//         * @accessor
//         */
//        employeeService: null,
//
//        /**
//         * @cfg {Object} employeeStore The injected employee store from DeftJS.
//         * @accessor
//         */
//        employeeStore: null
//    },

    /**
     * @event Core.event.employee.Event.GET_EMPLOYEE_LIST_SUCCESS
     * Fired when the get employee service is successful.
     */

    /**
     * @event Core.event.authentication.Event.GET_EMPLOYEE_LIST_FAILURE
     * Fired when the get employee service fails.
     */

    /**
     * Sets up global event bus handlers.
     * @protected
     */
    setupGlobalEventListeners: function() {
        this.callParent();
        this.logger.debug("setupGlobalEventListeners");

        this.eventBus.addGlobalEventListener(Core.event.employee.Event.GET_EMPLOYEE_LIST, this.onGetEmployeeList, this);
        this.eventBus.addGlobalEventListener(Core.event.employee.Event.GET_EMPLOYEE_TILE, this.onGetEmployeeTile, this);
        this.eventBus.addGlobalEventListener(Core.event.employee.Event.CREATE_EMPLOYEE, this.onCreateEmployee, this);
        this.eventBus.addGlobalEventListener(Core.event.employee.Event.UPDATE_EMPLOYEE, this.onUpdateEmployee, this);
        this.eventBus.addGlobalEventListener(Core.event.employee.Event.DELETE_EMPLOYEE, this.onDeleteEmployee, this);
    },

    /**
     * Performs get employees by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getEmployeeList: function() {
        this.logger.debug("getEmployeeList");

        this.executeServiceCall(this.employeeService, this.employeeService.getEmployeeList, null, this.getEmployeeListSuccess, this.getEmployeeListFailure, this);
    },

    /**
     * Performs get employees by using the referenced service and sets up the service success and failure
     * callback handlers.
     */
    getEmployeeTile: function() {
        this.logger.debug("getEmployeeTile");

        this.executeServiceCall(this.employeeService, this.employeeService.getEmployeeTile, null, this.getEmployeeTileSuccess, this.getEmployeeTileFailure, this);
    },

    /**
     * Performs create employee by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.EmployeeModel} employee The employee to create.
     */
    createEmployee: function(employee) {
        this.logger.debug("createEmployee");

        this.executeServiceCall(this.employeeService, this.employeeService.createEmployee, [employee], this.createEmployeeSuccess, this.createEmployeeFailure, this);
    },

    /**
     * Performs update employee by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.EmployeeModel} employee The employee to update.
     */
    updateEmployee: function(employee) {
        this.logger.debug("updateEmployee");

        this.executeServiceCall(this.employeeService, this.employeeService.updateEmployee, [employee], this.updateEmployeeSuccess, this.updateEmployeeFailure, this);
    },

    /**
     * Performs delete employee by using the referenced service and sets up the service success and failure
     * callback handlers.
     *
     * @param {Core.model.EmployeeModel} employee The employee to delete.
     */
    deleteEmployee: function(employee) {
        this.logger.debug("deleteEmployee");

        this.executeServiceCall(this.employeeService, this.employeeService.deleteEmployee, [employee], this.deleteEmployeeSuccess, this.deleteEmployeeFailure, this);
    },

    ////////////////////////////////////////////////
    // SERVICE SUCCESS/FAULT HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the successful get employees service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getEmployeeListSuccess: function(response) {
        this.logger.info("getEmployeeListSuccess");

        this.employeeStore.setData(response.employeeList);

        var evt = Ext.create("Core.event.employee.Event", Core.event.employee.Event.GET_EMPLOYEE_LIST_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful get employees service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    getEmployeeTileSuccess: function(response) {
        this.logger.info("getEmployeeTileSuccess");

        this.employeeStore.setData(response.employeeTile);

        var evt = Ext.create("Core.event.employee.Event", Core.event.employee.Event.GET_EMPLOYEE_TILE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed get employees service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getEmployeeListFailure: function(response) {
        this.logger.warn("getEmployeeListFailure");

        var evt = Ext.create("Core.event.employee.Event", Core.event.employee.Event.GET_EMPLOYEE_LIST_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed get employees service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    getEmployeeTileFailure: function(response) {
        this.logger.warn("getEmployeeTileFailure");

        var evt = Ext.create("Core.event.employee.Event", Core.event.employee.Event.GET_EMPLOYEE_TILE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful create employee service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    createEmployeeSuccess: function(response) {
        this.logger.info("createEmployeeSuccess");

        this.employeeStore.add(response);

        var evt = Ext.create("Core.event.employee.Event", Core.event.employee.Event.CREATE_EMPLOYEE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed create employee service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    createEmployeeFailure: function(response) {
        this.logger.warn("createEmployeeFailure");

        var evt = Ext.create("Core.event.employee.Event", Core.event.employee.Event.CREATE_EMPLOYEE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful update employee service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    updateEmployeeSuccess: function(response) {
        this.logger.info("updateEmployeeSuccess");

        this.employeeStore.update(response);

        var evt = Ext.create("Core.event.employee.Event", Core.event.employee.Event.UPDATE_EMPLOYEE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed update employee service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    updateEmployeeFailure: function(response) {
        this.logger.warn("updateEmployeeFailure");

        var evt = Ext.create("Core.event.employee.Event", Core.event.employee.Event.UPDATE_EMPLOYEE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the successful delete employee service call and takes the response data packet as a parameter.
     * Fires off the corresponding success event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the successful service call.
     */
    deleteEmployeeSuccess: function(response) {
        this.logger.info("deleteEmployeeSuccess");

        this.employeeStore.setSelectedRecord(null);
        var employee = this.employeeStore.findRecord("id", response.data.id);
        this.employeeStore.remove(employee);

        var evt = Ext.create("Core.event.employee.Event", Core.event.employee.Event.DELETE_EMPLOYEE_SUCCESS);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    /**
     * Handles the failed delete employee service call and takes the response data packet as a parameter.
     * Fires off the corresponding failure event on the application-level event bus.
     *
     * @param {Object} response The response data packet from the failed service call.
     */
    deleteEmployeeFailure: function(response) {
        this.logger.warn("deleteEmployeeFailure");

        var evt = Ext.create("Core.event.employee.Event", Core.event.employee.Event.DELETE_EMPLOYEE_FAILURE);
        this.eventBus.dispatchGlobalEvent(evt);
    },

    ////////////////////////////////////////////////
    // EVENT BUS HANDLERS
    ////////////////////////////////////////////////

    /**
     * Handles the get employee event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.EmployeeEvent} event Reference to the employee event.
     */
    onGetEmployeeList: function(event) {
        this.logger.debug("onGetEmployeeList");

        this.getEmployeeList();
    },

    /**
     * Handles the get employee event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.EmployeeEvent} event Reference to the employee event.
     */
    onGetEmployeeTile: function(event) {
        this.logger.debug("onGetEmployeeTile");

        this.getEmployeeTile();
    },

    /**
     * Handles the create employee event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.EmployeeEvent} event Reference to the employee event. Contains a reference to the
     * employee.
     */
    onCreateEmployee: function(event) {
        this.logger.debug("onCreateEmployee");

        this.createEmployee(event.employee);
    },

    /**
     * Handles the update employee event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.EmployeeEvent} event Reference to the employee event. Contains a reference to the
     * employee.
     */
    onUpdateEmployee: function(event) {
        this.logger.debug("onUpdateEmployee");

        this.updateEmployee(event.employee);
    },

    /**
     * Handles the delete employee event on the application-level event bus. Calls a functional method that's more
     * testable than this event handler.
     *
     * @param {Core.event.EmployeeEvent} event Reference to the employee event. Contains a reference to the
     * employee.
     */
    onDeleteEmployee: function(event) {
        this.logger.debug("onDeleteEmployee");

        this.deleteEmployee(event.employee);
    }

});

