/**
 * The list of person view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.touch.person.list.View", {
    extend: "Core.view.touch.person.base.View",
    alias: "widget.personListView",
    controller: "Core.mediator.touch.person.list.Mediator",

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
                        key: "personList.title"
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
                                key: "personList.logOut"
                            }
                        ]
                    },
					{
						xtype: "spacer"
					},
                    {
                        xtype: "button",
                        itemId: "newPersonButton",
                        align: "right",
                        ui: "neutral", // WAS action
                        plugins: [
                            {
                                type: "localization",
                                method: "setText",
                                key: "personList.new"
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
                itemTpl: "<div class='contact'>{name}</div>",
                grouped: false,// WAS true, grouped currently causes an error
                onItemDisclosure: true,
                plugins: [
                    {
                        type: "localization",
                        method: "setLoadingText",
                        key: "personList.loading"
                    },
                    {
                        type: "localization",
                        method: "setEmptyText",
                        key: "personList.noPersons"
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