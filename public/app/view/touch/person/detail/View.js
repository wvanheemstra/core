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
            },//eof toolbar
			{
				xtype:"container",
				layout: {
					type: 'vbox'
				},
				items: [
					{
						xtype: "fieldset",
						title: "Personal",
					//	instructions: "Please enter the information above",
						itemId: "personDetailForm", // TO DO: rename to personalFieldSet
						height: 330, //TEST
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

								// THIS SHOULD BE SET IN THE MEDIATOR
							//	value: new Date(),
							//	picker: {
							//		title: "Choose a Date of Birth",
							//		width: "100% !important", // TEST
							//		yearFrom: 1920
							//	}
								
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
					},//eof personalFieldSet
					{
						xtype: "fieldset",
						title: "Memberships",
					//	instructions: "Please enter the information above",
						itemId: "membershipsFieldSet",
						height: 240, //TEST
						defaults: {
							labelWidth: "35%"
						},	
						items: [
							{
								xtype: "carousel",
								itemId: "membershipsCarousel",
								anchor: "100% 100%",
								ui: "neutral",
								fullscreen: false,
								direction: "horizontal",
							//	html: "Hello from membershipsCarousel",
								height: 180, // TEST
							//	autoHeight: true,
								layout: { // TEST
									type: "hbox"
								},
								style: "padding: 0px; margin: 0px",
								bodyStyle: "padding-top: " + (Ext.isIE ? "0" : "0px"),
								defaults: {
						//			styleHtmlContent: true,
									labelWidth: "35%",
						//			style: "padding: 0px; margin: 0px; font-size: 114%",
						//			bodyStyle: "padding-top: " + (Ext.isIE ? "0" : "0px"),
						//			align: "100% 100%",
									autoHeight: true
								},
								items: [
									{	
							//			xtype: "container",
							//			itemId: "membership1Container",
							//			//html: "Hello from membership1Container",
										items:[
										{	
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
											xtype: "textfield",
											itemId: "organisation1TextField",
											name: "Organisation",	// TO DO					
											label: "Organisation",
											required: false,
											plugins: [
												{
													type: "localization",
													method: "setPlaceHolder",
													key: "personDetail.organisationName"
												}
											]
										},{
											xtype: "hiddenfield",
											itemId: "kf_OrganisationID0HiddenField",
											name: "Membership[0]['kf_OrganisationID']",
											required: false,
											readOnly: true
										},{	
											xtype: "textfield",
											itemId: "whereabouts1TextField",
											name: "Whereabouts",	// TO DO					
											label: "Whereabouts",
											required: false,
											plugins: [
												{
													type: "localization",
													method: "setPlaceHolder",
													key: "personDetail.whereaboutsName"
												}
											]
										}]
									},{
										xtype: "container",
										itemId: "membership2Container",
										//html: "Hello from membership2Container",
										items:[
										{	
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
											xtype: "textfield",
											itemId: "organisation2TextField",
											name: "Organisation",	// TO DO					
											label: "Organisation",
											required: false,
											plugins: [
												{
													type: "localization",
													method: "setPlaceHolder",
													key: "personDetail.organisationName"
												}
											]
										},{
											xtype: "hiddenfield",
											itemId: "kf_OrganisationID1HiddenField",
											name: "Membership[1]['kf_OrganisationID']",
											required: false,
											readOnly: true
										},{	
											xtype: "textfield",
											itemId: "whereabouts2TextField",
											name: "Whereabouts",	// TO DO					
											label: "Whereabouts",
											required: false,
											plugins: [
												{
													type: "localization",
													method: "setPlaceHolder",
													key: "personDetail.whereaboutsName"
												}
											]
										}]								
									}
								]
							}
						]
					},//eof membershipsFieldSet
					{
						xtype: "fieldset",
						title: "Groups",
					//	instructions: "Please enter the information above",
						itemId: "groupsFieldSet",
						height: 300, //TEST
						defaults: {
							labelWidth: "35%"
						},	
						items:[
							{
								xtype: "container", // We create an ItemSelector for here in the Mediator
								name: "groupsContainer",
								anchor: "100% 100%",
								html: "Hello from GroupsContainer"
							}
						]
					}//eof groupsFieldSet
				]
			},// eof container
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