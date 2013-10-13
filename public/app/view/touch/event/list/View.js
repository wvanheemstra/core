/**
 * The list of event view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.touch.event.list.View", {
    extend: "Core.view.touch.event.base.View",
    alias: "widget.eventListView",
    controller: "Core.mediator.touch.event.list.Mediator",

    requires: [
        // empty
    ],

    config: {

        layout: {
            type: "fit"
        },

        items: [
            {
                xtype: "toolbar", // WAS "titlebar" but that does not show title
                itemId: "titlebar",
                ui: "neutral",
                docked: "top",
                plugins: [
                    {
                        type: "localization",
                        method: "setTitle",
                        key: "eventList.title"
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
                                key: "eventList.logOut"
                            }
                        ]
                    },
					{
						xtype: "spacer",
						itemId: "spacer", // Required
						width: 0 // Set by Mediator
					},
                    {
                        xtype: "button",
                        itemId: "newEventButton",
						iconCls: 'add',
						iconMask: true,
                        align: "right",
                        ui: "neutral", // WAS action
                        plugins: [
                            {
                                type: "localization",
                                method: "setText",
                                key: "eventList.new"
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
						"<div class='eventName'>",
						  "<div style='float:left; width: 35%'>{EventName}</div>",
						"</div>",
						"<div style='clear:both'></div>"
				),
                grouped: true, // WAS true, causes an error when data is not loaded yet
                onItemDisclosure: true,
                plugins: [
                    {
                        type: "localization",
                        method: "setLoadingText",
                        key: "eventList.loading"
                    },
                    {
                        type: "localization",
                        method: "setEmptyText",
                        key: "eventList.noEvents"
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