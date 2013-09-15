/**
 * The modal of persons view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.person.modal.View", {
    extend: "Ext.form.Panel",
    alias: "widget.personModalView",
    controller: "Core.mediator.extjs.person.modal.Mediator",
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
//            title: "Person",
            docked: "top",
            width: 400,
            items: [{
				itemId: "closeButton",
				ui: "neutral",
				plugins: [
					{
						ptype: "localization",
						method: "setText",
						key: "personDetail.close"
					}
				]
			}]
    }]
	// more

});	