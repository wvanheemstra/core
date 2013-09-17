/**
 * The list of organisation view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.touch.organisation.list.View", {
    extend: "Core.view.touch.organisation.base.View",
    alias: "widget.organisationListView",
    controller: "Core.mediator.touch.organisation.list.Mediator",

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
                        key: "organisationList.title"
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
                                key: "organisationList.logOut"
                            }
                        ]
                    },
					{
						xtype: "spacer"
					},
                    {
                        xtype: "button",
                        itemId: "newOrganisationButton",
                        align: "right",
                        ui: "neutral", // WAS action
                        plugins: [
                            {
                                type: "localization",
                                method: "setText",
                                key: "organisationList.new"
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
                        key: "organisationList.loading"
                    },
                    {
                        type: "localization",
                        method: "setEmptyText",
                        key: "organisationList.noOrganisations"
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