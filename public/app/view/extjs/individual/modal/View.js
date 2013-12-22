/**
 * The modal of individuals view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.individual.modal.View", {
    extend: "Ext.form.Panel",
    alias: "widget.individualModalView",
    controller: "Core.mediator.extjs.individual.modal.Mediator",
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
//            title: "Individual",
            docked: "top",
            width: 400,
            items: [{
				itemId: "closeButton",
				ui: "neutral",
				plugins: [
					{
						ptype: "localization",
						method: "setText",
						key: "individualDetail.close"
					}
				]
			}]
    }]
	// more

});	