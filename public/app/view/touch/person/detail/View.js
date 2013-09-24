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
						itemId: "deleteButton",
						align: "right",
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
            },
            {
                xtype: "fieldset",
                itemId: "fieldset",
                items: [
					{
                        xtype: "textfield",
                        itemId: "salutationAbbreviationTextField",
                        name: "kf_SalutationID",
                        required: false,
                        plugins: [
                            {
                                type: "localization",
                                method: "setPlaceHolder",
                                key: "personDetail.salutationAbbreviation"
                            }
                        ]
                    },
					{
                        xtype: "textfield",
                        itemId: "personFirstNameTextField",
                        name: "PersonFirstName",
                        required: true,
                        plugins: [
                            {
                                type: "localization",
                                method: "setPlaceHolder",
                                key: "personDetail.personFirstName"
                            }
                        ]
                    },
                    {
                        xtype: "textfield",
                        itemId: "personLastNameTextField",
                        name: "PersonLastName",
                        required: true,
                        plugins: [
                            {
                                type: "localization",
                                method: "setPlaceHolder",
                                key: "personDetail.personLastName"
                            }
                        ]
                    },
                    {
                        xtype: "textfield",
                        itemId: "genderTextField",
                        name: "kf_GenderID",
                        required: false,
                        plugins: [
                            {
                                type: "localization",
                                method: "setPlaceHolder",
                                key: "personDetail.gender"
                            }
                        ]
                    }
                ]
            },
			{
				xtype: "button",
				itemId: "savePersonButton",
				align: "center",
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
    }
});