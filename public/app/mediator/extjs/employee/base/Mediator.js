/**
 * The employee base mediator.
 */
Ext.define("Core.mediator.extjs.employee.base.Mediator", {
    extend: "Core.mediator.abstract.Mediator",

    requires: [
        "Core.event.employee.Event"
    ],

    inject: [
        "employeeStore",
        "logger"
    ]
    
});