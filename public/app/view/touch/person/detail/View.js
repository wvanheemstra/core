/**
 * The person details view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.touch.person.detail.View", {
    extend: "Ext.form.Panel",
    alias: "widget.personDetailView",
    controller: "Core.mediator.touch.person.detail.Mediator",

    requires: [
        "Ext.form.FieldSet"
    ],

    config: {

        items: [
            {
                xtype: "titlebar",
                itemId: "titlebar",
                ui: "neutral",
                docked: "top",
                plugins: [
                    {
                        type: "localization",
                        method: "setTitle",
                        key: "personDetail.title"
                    }
                ],
                items: [
                    {
                        xtype: "button",
                        itemId: "backButton",
                        align: "left",
                        plugins: [
                            {
                                type: "localization",
                                method: "setText",
                                key: "personDetail.back"
                            }
                        ]
                    },
					{
						xtype: "spacer"
					},
                    {
                        xtype: "button",
                        itemId: "savePersonButton",
                        align: "right",
                        ui: "neutral", // WAS action
                        plugins: [
                            {
                                type: "localization",
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
                                type: "localization",
                                method: "setPlaceHolder",
                                key: "personDetail.name"
                            }
                        ]
                    }
                ]
            },
            {
                xtype: "button",
                itemId: "deleteButton",
                align: "center",
                ui: "neutral", // WAS action
                plugins: [
                    {
                        type: "localization",
                        method: "setText",
                        key: "personDetail.delete"
                    }
                ]
            }
        ]
    }
});