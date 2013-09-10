/**
 * The base of employees view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.touch.employee.base.View", {
    extend: "Ext.Panel",

    requires: [
        "Ext.TitleBar",
        "Ext.dataview.List",
        "Ext.field.Search"
    ],

    config: {
    }
});
