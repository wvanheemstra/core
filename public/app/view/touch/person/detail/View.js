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
        "Ext.form.FieldSet",
		"Ext.field.DatePicker"
    ],

    config: {

		salutationPicker: null,
	
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
                        name: "kf_SalutationID",
                        required: false,
                        plugins: [
                            {
                                type: "localization",
                                method: "setPlaceHolder",
                                key: "personDetail.salutationAbbreviation"
                            }
                        ],
						readOnly: true
						
				/*		
						listeners: {
							focus: function () {
								if(this.salutationPicker == null) {
									// Create the salutationPicker
									this.salutationPicker = Ext.create('Ext.Picker', {
										doneButton: "Done",
										cancelButton: true,
										slots: [{
											name: 'kf_SalutationID',
											title: 'Choose a Salutation',
											store: Ext.create('Core.store.salutation.Store'),
											itemTpl: '{SalutationAbbreviation}',
											listeners: {
												itemtap: function (obj, index, target, record, e, eOpts) {
													var form = Ext.getCmp('personDetailForm');
													form.setValues({
											//			SalutationAbbreviation: record.get('SalutationAbbreviation'),
														kf_SalutationID: record.get('kf_SalutationID'),
													});
													// how to dismiss the picker?
													obj.parent.hide();
												}
											}
										}]
									});
									Ext.Viewport.add(this.salutationPicker);
								}//eof if
								this.salutationPicker.show();
							}//eof focus
						}//eof listeners
				*/
						
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
                    },	
					{
						xtype: "datepickerfield",
						destroyPickerOnHide: true,
						name: "StartDate",
						label: "Date of Birth",
						value: new Date(),
						picker: {
							yearFrom: 1920
						}
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