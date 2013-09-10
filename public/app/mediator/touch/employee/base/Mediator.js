/**
 * The employee base mediator.
 */
Ext.define("Core.mediator.touch.employee.base.Mediator", {
    extend: "Core.mediator.abstract.Mediator",

    requires: [
        "Core.event.employee.Event"
    ],

    inject: [
        "employeeStore",
        "logger"
    ]
    
});