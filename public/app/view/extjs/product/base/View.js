/**
 * The base of products view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.product.base.View", {
    extend: "Ext.Panel",
    //alias: "widget.productListView",
    //controller: "Core.mediator.extjs.product.list.Mediator",
    header: false,

    requires: [
        "Ext.data.*",
        "Ext.util.*",
        "Ext.view.View",
        "Core.view.extjs.component.LiveSearchGridPanel",
        "nineam.locale.LocaleManager"
    ]

});
