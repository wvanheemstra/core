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
						xtype: "spacer",
						itemId: "spacer", // Required
						width: 0 // Set by Mediator
					},
                    {
                        xtype: "button",
                        itemId: "newPersonButton",
						iconCls: 'add',
						iconMask: true,
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
				itemTpl: Ext.create('Ext.XTemplate',
						"<div class='salutationAbbreviation'>",
						  "<div style='float:left; width: 15%'>{Salutation.SalutationAbbreviation}</div>",
						"</div>",				
						"<div class='personFirstName'>",
						  "<div style='float:left; width: 35%'>{PersonFirstName}</div>",
						"</div>",
						"<div class='personLastName'>",
						  "<div style='float:left; width: 35%'>{PersonLastName}</div>",
						"</div>",
						"<div class='genderName'>",
						  "<div style='float:left; width: 15%'>{Gender.GenderName}</div>",
						"</div>",
						"<div style='clear:both'></div>"
				),
                grouped: true, // WAS true, causes an error when data is not loaded yet
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