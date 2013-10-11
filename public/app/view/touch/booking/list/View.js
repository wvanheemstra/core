/**
 * The list of booking view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.touch.booking.list.View", {
    extend: "Core.view.touch.booking.base.View",
    alias: "widget.bookingListView",
    controller: "Core.mediator.touch.booking.list.Mediator",

    requires: [
        //"Core.view.touch.component.ListView"
    ],

    config: {

        layout: {
            type: "fit"
        },

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
                        key: "bookingList.title"
                    }
                ],
                items: [
                    {
                        xtype: "button",
                        itemId: "logoutButton",
						ui: "neutral",				
                        align: "left",
                        plugins: [
                            {
                                type: "localization",
                                method: "setText",
                                key: "bookingList.logOut"
                            }
                        ]
                    },
					{
						xtype: "spacer",
						width: "100%"
					},
                    {
                        xtype: "button",
                        itemId: "newBookingButton",
                        align: "right",
                        ui: "neutral", // WAS action
                        plugins: [
                            {
                                type: "localization",
                                method: "setText",
                                key: "bookingList.new"
                            }
                        ]
                    }
                ]
            },
            {
                xtype: "list",
                itemId: "list",
                fullscreen: true,
				ui: "neutral",
				itemTpl: Ext.create('Ext.XTemplate',
						"<div class='bookingName'>",
						  "<div style='float:left; width: 100%'>{BookingName}</div>",
						"</div>",
						"<div style='clear:both'></div>"
				),
                grouped: true,
                onItemDisclosure: true,
                plugins: [
                    {
                        type: "localization",
                        method: "setLoadingText",
                        key: "bookingList.loading"
                    },
                    {
                        type: "localization",
                        method: "setEmptyText",
                        key: "bookingList.noBookings"
                    }
                ],

                items: [
                    {
                        xtype: "titlebar" ,
                        itemId:"titlebar",
                        id:"titlebar",
						ui: "neutral",
                        docked: "top",

                        items: [
                            {
                                xtype: "searchfield" ,
                                itemId:"searchInput",
                                id:"searchInput"
                            }
                        ]
                    }
                ]
            }
        ]
    }
});