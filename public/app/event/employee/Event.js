/**
 * The employee event contains data and event types to perform CRUD operations on employees.
 */
Ext.define("Core.event.employee.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {

        /**
         * The get employee list event type.
         */
        GET_EMPLOYEE_LIST:          "getEmployeeList",

        /**
         * The get employee list success event type.
         */
        GET_EMPLOYEE_LIST_SUCCESS:  "getEmployeeListSuccess",

        /**
         * The get employee list failure event type.
         */
        GET_EMPLOYEE_LIST_FAILURE:  "getEmployeeListFailure",
        
        /**
         * The get employee tile event type.
         */
        GET_EMPLOYEE_TILE:          "getEmployeeTile",

        /**
         * The get employee tile success event type.
         */
        GET_EMPLOYEE_TILE_SUCCESS:  "getEmployeeTileSuccess",

        /**
         * The get employee tile failure event type.
         */
        GET_EMPLOYEE_TILE_FAILURE:  "getEmployeeTileFailure",       

        /**
         * The get employee event type.
         */
        GET_EMPLOYEE:               "getEmployee",

        /**
         * The get employee success event type.
         */
        GET_EMPLOYEE_SUCCESS:       "getEmployeeSuccess",

        /**
         * The get employee failure event type.
         */
        GET_EMPLOYEE_FAILURE:       "getEmployeeFailure",

        /**
         * The create employee event type.
         */
        CREATE_EMPLOYEE:            "createEmployee",

        /**
         * The create employee success event type.
         */
        CREATE_EMPLOYEE_SUCCESS:    "createEmployeeSuccess",

        /**
         * The create employee failure event type.
         */
        CREATE_EMPLOYEE_FAILURE:    "createEmployeeFailure",

        /**
         * The update employee event type.
         */
        UPDATE_EMPLOYEE:            "updateEmployee",

        /**
         * The update employee success event type.
         */
        UPDATE_EMPLOYEE_SUCCESS:    "updateEmployeeSuccess",

        /**
         * The update employee failure event type.
         */
        UPDATE_EMPLOYEE_FAILURE:    "updateEmployeeFailure",

        /**
         * The delete employee event type.
         */
        DELETE_EMPLOYEE:            "deleteEmployee",

        /**
         * The delete employee success event type.
         */
        DELETE_EMPLOYEE_SUCCESS:    "deleteEmployeeSuccess",

        /**
         * The delete employee failure event type.
         */
        DELETE_EMPLOYEE_FAILURE:    "deleteEmployeeFailure"
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of an employee.
     */
    id: null,

    /**
     * @property {Skin.model.employee.Model} employee [readOnly=false]
     * An employee to perform CRUD actions on.
     */
    employee: null,

    /**
     * Constructor. Allows the username and password for authentication to be set on the event.
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the employee or ui the CRUD operation is acting on.
     * @param {Skin.model.employee.Model} employee The employee the CRUD operation is acting on.
     */
    constructor: function(type, id, employee) {
        this.callParent(arguments);

        this.id = id;
        this.employee = employee;
    }
});