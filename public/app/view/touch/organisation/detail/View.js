/**
 * The organisation details view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.touch.organisation.detail.View", {
    extend: "Ext.form.Panel",
    alias: "widget.organisationDetailView",
    controller: "Core.mediator.touch.organisation.detail.Mediator",

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
                        key: "organisationDetail.title"
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
                                key: "organisationDetail.back"
                            }
                        ]
                    },
					{
						xtype: "spacer"
					},
					{
						xtype: "button",
						itemId: "deleteButton",
						align: "right",
						ui: "neutral", // WAS action
						plugins: [
							{
								type: "localization",
								method: "setText",
								key: "organisationDetail.delete"
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
                        itemId: "organisationNameTextField",
                        name: "organisationName",
                        required: true,
                        plugins: [
                            {
                                type: "localization",
                                method: "setPlaceHolder",
                                key: "organisationDetail.organisationName"
                            }
                        ]
                    }
                ]
            },
			{
				xtype: "button",
				itemId: "saveOrganisationButton",
				align: "center",
				ui: "neutral", // WAS action
				plugins: [
					{
						type: "localization",
						method: "setText",
						key: "organisationDetail.save"
					}
				]
			}
        ]
    }
});