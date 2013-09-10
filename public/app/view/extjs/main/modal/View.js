/**
 * The modal of mains view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.main.modal.View", {
    extend: "Ext.form.Panel",
    alias: "widget.mainModalView",
    controller: "Core.mediator.extjs.main.modal.Mediator",
    submitEmptyText: false,	
	
    requires: [
        "Ext.form.FieldSet",
        "Ext.Toolbar"
    ],
	
	items: [
        {
            xtype: "toolbar",
			itemId: "toolbar",
            ui: "neutral",			
//            title: "Main",
            docked: "top",
            width: 400,
            items: [{
				itemId: "closeButton",
				ui: "neutral",
				plugins: [
					{
						ptype: "localization",
						method: "setText",
						key: "mainDetail.close"
					}
				]
			}]
    }]
	// more

});	