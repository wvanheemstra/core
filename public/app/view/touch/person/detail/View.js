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
						hidden: true,
						destroyPickerOnHide: false
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
						hidden: true,
						destroyPickerOnHide: false
					},
                    {
                        xtype: "textfield",
                        itemId: "dateStartTextField",
                        name: "DateStart", // Gets set in Mediator
						label: "Date of Birth",
                        required: false,
						plugins: [
                            {
                                type: "localization",
                                method: "setPlaceHolder",
                                key: "personDetail.dateStart"
                            }
                        ],
						readOnly: true
					},
					{
                        xtype: "hiddenfield",
                        itemId: "kf_DateIDHiddenField",
                        name: "kf_DateID",
                        required: false,
						readOnly: true
                    },
					{
						xtype: "datepickerfield", // WAS picker
						itemId: "datePicker",
						useTitles: true,						
						ui: "neutral",
						doneButton: true, // deviates from the standard
						cancelButton: true,
						slots: [], // default empty, gets set in Mediator
						hidden: true,
						destroyPickerOnHide: true, // deviates from the standard

						/* THIS SHOULD BE SET IN THE MEDIATOR
						value: new Date(),
						picker: {
							title: "Choose a Date of Birth",
							width: "100% !important", // TEST
							yearFrom: 1920
						}
						*/
						
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
					},
					{
						xtype:"container",
						align: "100% 100%",
						autoHeight: true,
						itemId: "membershipsContainer",						
						html: "Hello from membershipsContainer",
						items: [{
							xtype:"toolbar",
							itemId: "membershipsToolbar",
							html: "Hello from membershipsToolbar",
							docked: "top",
							ui: "neutral"
						},{
							xtype: "carousel",
							itemId: "membershipsCarousel",
							anchor: "100% 100%",
							ui: "neutral",
							fullscreen: false,
							direction: "horizontal",
							html: "Hello from membershipsCarousel",
							//height: 300, // TEST
							autoHeight: true,
							layout: { // TEST
								type: "hbox"
							},
							style: "padding: 0px; margin: 0px",
							bodyStyle: "padding-top: " + (Ext.isIE ? "0" : "0px"),
							defaults: {
								styleHtmlContent: true,
								labelWidth: "35%",
								style: "padding: 0px; margin: 0px; font-size: 114%",
								bodyStyle: "padding-top: " + (Ext.isIE ? "0" : "0px"),
								align: "100% 100%",
								autoHeight: true
							},
							items: [{	
								xtype: "container",
								itemId: "membership1Container",
								html: "Hello from membership1Container",
								items:[{	
									xtype: "textfield",
									itemId: "membership1TextField",
									name: "Membership[0]['kp_MembershipID']",						
									label: "Membership",
									required: false,
									plugins: [
										{
											type: "localization",
											method: "setPlaceHolder",
											key: "personDetail.membershipName"
										}
									]
								},{
									xtype: "hiddenfield",
									itemId: "kf_OrganisationID0HiddenField",
									name: "Membership[0]['kf_OrganisationID']",
									required: false,
									readOnly: true
								}]
							},{
								xtype: "container",
								itemId: "membership2Container",
								html: "Hello from membership2Container",
								items:[{	
									xtype: "textfield",
									itemId: "membership1TextField",
									name: "Membership[1]['kp_MembershipID']",						
									label: "Membership",
									required: false,
									plugins: [
										{
											type: "localization",
											method: "setPlaceHolder",
											key: "personDetail.membershipName"
										}
									]
								},{
									xtype: "hiddenfield",
									itemId: "kf_OrganisationID1HiddenField",
									name: "Membership[1]['kf_OrganisationID']",
									required: false,
									readOnly: true
								}]								
							}]							
						}]
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