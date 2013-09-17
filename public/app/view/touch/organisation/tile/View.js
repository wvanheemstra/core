/**
 * The list of tile view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.touch.organisation.tile.View", {
    extend: "Core.view.touch.organisation.base.View",
    alias: "widget.organisationTileView",
    controller: "Core.mediator.touch.organisation.tile.Mediator",

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
                        key: "organisationTile.title"
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
                                key: "organisationTile.logOut"
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
                                key: "organisationTile.new"
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
                emptyText: "No Organisations"        	
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
                        key: "organisationTile.loading"
                    },
                    {
                        type: "localization",
                        method: "setEmptyText",
                        key: "organisationTile.noOrganisations"
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