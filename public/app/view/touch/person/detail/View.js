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
		"Ext.TitleBar", // Require explicitly
        "Ext.form.FieldSet",
		"Ext.field.DatePicker"
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
			//	title: "Personal Information",
			//	instructions: "Please enter the information above",
                itemId: "personDetailForm",
				defaults: {
					labelWidth: "35%"
				},
                items: [
					{
                        xtype: "textfield",
                        itemId: "salutationAbbreviationTextField",
                        name: "SalutationAbbreviation", // Gets set in Mediator
						label: "Salutation",
                        required: false,
						plugins: [
                            {
                                type: "localization",
                                method: "setPlaceHolder",
                                key: "personDetail.salutationAbbreviation"
                            }
                        ],
						readOnly: true,					
					},
					{
                        xtype: "hiddenfield",
                        itemId: "kf_SalutationIDHiddenField",
                        name: "kf_SalutationID",
                        required: false,
						readOnly: true
                    },
					{ 
						xtype: "picker",
						itemId: "salutationPicker",
					//	width: '100% !important', // TEST
					//	flex: 1,
					//	style: "width: 100% !important", // TEST
						useTitles: true,
						ui: "neutral",
						doneButton: false,
						cancelButton: true,
						slots: [], // default empty, gets set in Mediator
						hidden: true
					},
					{
                        xtype: "textfield",
                        itemId: "personFirstNameTextField",
                        name: "PersonFirstName",
						label: "First Name",
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
						label: "Last Name",						
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
                        itemId: "genderNameTextField",
                        name: "GenderName", // Gets set in Mediator
						label: "Gender",
                        required: false,
						plugins: [
                            {
                                type: "localization",
                                method: "setPlaceHolder",
                                key: "personDetail.genderName"
                            }
                        ],
						readOnly: true
					},
					{
                        xtype: "hiddenfield",
                        itemId: "kf_GenderIDHiddenField",
                        name: "kf_GenderID",
                        required: false,
						readOnly: true
                    },
					{ 
						xtype: "picker",
						itemId: "genderPicker",
						useTitles: true,						
						ui: "neutral",
						doneButton: false,
						cancelButton: true,
						slots: [], // default empty, gets set in Mediator
						hidden: true
					},
					{
						xtype: "datepickerfield",
						destroyPickerOnHide: true,
						name: "StartDate",
						useTitles: true,						
						label: "Date of Birth",
						value: new Date(),
						picker: {
							title: "Choose a Date of Birth",
							width: "100% !important", // TEST
							yearFrom: 1920
						}
					},
					{
                        xtype: "textfield",
                        itemId: "nationalityNameTextField",
                        name: "NationalityName", // Gets set in Mediator
						label: "Nationality",
                        required: false,
						plugins: [
                            {
                                type: "localization",
                                method: "setPlaceHolder",
                                key: "personDetail.nationalityName"
                            }
                        ],
						readOnly: true,					
					},
					{
                        xtype: "hiddenfield",
                        itemId: "kf_NationalityIDHiddenField",
                        name: "kf_NationalityID",
                        required: false,
						readOnly: true
                    },
					{ 
						xtype: "picker",
						itemId: "nationalityPicker",
						useTitles: true,						
						ui: "neutral",
						doneButton: false,
						cancelButton: true,
						slots: [], // default empty, gets set in Mediator
						hidden: true
					}
                ]
            },
			{
                xtype: "titlebar", // Allows for button alignment
                itemId: "bottombar",
                ui: "neutral",
                docked: "bottom",
                items: [
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
				}]
			}
        ]
    }
});