/**
 * The base of organisations view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.organisation.base.View", {
    extend: "Ext.Panel",
    //alias: "widget.organisationListView",
    //controller: "Core.mediator.extjs.organisation.list.Mediator",
    header: false,

    requires: [
        "Ext.data.*",
        "Ext.util.*",
        "Ext.view.View",
        "Core.view.extjs.component.LiveSearchGridPanel",
        "nineam.locale.LocaleManager"
    ]

});
