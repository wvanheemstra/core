/**
 * The person details view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.person.detail.View", {
    extend: "Ext.form.Panel",
    alias: "widget.personDetailView",
    controller: "Core.mediator.extjs.person.detail.Mediator",
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

            items: [
                {
                    itemId: "backButton",
					ui: "neutral",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "personDetail.back"
                        }
                    ]
                },
                {
                    xtype: "tbfill"
                },
                {
                    xtype: "label",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setTitle",
                            key: "personDetail.title"
                        }
                    ]
                },
                {
                    xtype: "tbfill"
                },
                {
                    itemId: "savePersonButton",
					ui: "neutral",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "personDetail.save"
                        }
                    ]
                }
            ]
        },
        {
            xtype: "fieldset",
            itemId: "fieldset",
            items: [
                {
                    xtype: "textfield",
                    itemId: "nameTextField",
                    name: "name",
                    required: true,
                    plugins: [
                        {
                            ptype: "localization",
                            method: "emptyText",
                            key: "personDetail.name"
                        }
                    ]
                }
            ]
        },
        {
            xtype: "toolbar",
			ui: "neutral",
            items: [
                {
                    itemId: "deleteButton",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "personDetail.delete"
                        }
                    ]
                }
            ]

        }
    ]
});