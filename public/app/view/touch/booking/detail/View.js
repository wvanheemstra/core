/**
 * The booking details view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.touch.booking.detail.View", {
    extend: "Ext.form.Panel",
    alias: "widget.bookingDetailView",
    controller: "Core.mediator.touch.booking.detail.Mediator",

    requires: [
		"Ext.TitleBar", // Require explicitely
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
                        key: "bookingDetail.title"
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
                                key: "bookingDetail.back"
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
								key: "bookingDetail.delete"
							}
						]
					}
                ]
            },
            {
                xtype: "fieldset",
                itemId: "bookingDetailForm",
				defaults: {
					labelWidth: "35%"
				},
                items: [
                    {
                        xtype: "textfield",
                        itemId: "bookingNameTextField",
                        name: "BookingName",
						label: "Name",		
                        required: true,
                        plugins: [
                            {
                                type: "localization",
                                method: "setPlaceHolder",
                                key: "bookingDetail.bookingName"
                            }
                        ]
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
					itemId: "saveBookingButton",
					align: "right",
					ui: "neutral", // WAS action
					plugins: [
						{
							type: "localization",
							method: "setText",
							key: "bookingDetail.save"
						}
					]
				}]
			}
        ]
    }
});