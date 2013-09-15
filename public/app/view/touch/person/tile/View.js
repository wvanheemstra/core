/**
 * The list of tile view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.touch.person.tile.View", {
    extend: "Core.view.touch.person.base.View",
    alias: "widget.personTileView",
    controller: "Core.mediator.touch.person.tile.Mediator",

    requires: [
        //"Core.view.touch.component.TileView"
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
                        key: "personTile.title"
                    }
                ],
                items: [
                    {
                        xtype: "button",
                        itemId: "logoutButton",
                        align: "left",
                        plugins: [
                            {
                                type: "localization",
                                method: "setText",
                                key: "personTile.logOut"
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
                                key: "personTile.new"
                            }
                        ]
                    }
                ]
            }, 
/*                      
            {
                xtype: "tileview",
                itemId: "tile",
                itemTpl: "{name}",
                autoScroll: true,
                emptyText: "No Persons"        	
            }
 */           
            {
                xtype: "list",
                itemId: "tile",
                ui: "neutral",
                fullscreen: true,
                itemTpl: "<div class='contact'>{name}</div>",
                grouped: false, // WAS true, but this causes an error
                onItemDisclosure: true,
                plugins: [
                    {
                        type: "localization",
                        method: "setLoadingText",
                        key: "personTile.loading"
                    },
                    {
                        type: "localization",
                        method: "setEmptyText",
                        key: "personTile.noPersons"
                    }
                ],

                items: [
                    {
                        xtype: "titlebar" ,
                        itemId:"titlebar",
                        id:"titlebar",
                        docked: "top",
                        ui: "neutral",
                        items: [
                            {
                                xtype: "searchfield" ,
                                itemId:"searchInput",
                                id:"searchInput"
                            }
                        ]
                    }
                ]
            }// eof list                      
        ]
    }// eof config
});