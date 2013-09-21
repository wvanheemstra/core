/**
 * The tile of bookings view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.booking.tile.View", {
    extend: "Ext.Panel",
    alias: "widget.bookingTileView",
    controller: "Core.mediator.extjs.booking.tile.Mediator",
    header: false,

    requires: [
        "Ext.data.*",
        "Ext.util.*",
        "Ext.view.View",
        //"Core.view.extjs.component.LiveSearchGridPanel",
        "Core.view.extjs.component.TileView",
        "nineam.locale.LocaleManager"
    ],

//    layout: {
//        type: "fit" // WHY DOES 'fit' NOT WORK AS DESIGNED ??
//    },

    height: 330,
	width: 400,
	
    items: [
        {
            xtype: "toolbar",
			itemId: "toolbar",
			ui: "neutral",
            width: 400,

            items: [
                {
                    itemId: "logoutButton",
					ui: "neutral",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "bookingTile.logOut"
                        }
                    ]
                },
                {
                    xtype: "tbfill"
                },
                {
                    xtype: "label",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "bookingTile.title"
                        }
                    ]

                },
                {
                    xtype: "tbfill"
                },
                {
                    itemId: "newBookingButton",
					ui: "neutral",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "bookingTile.new"
                        }
                    ]
                }
            ]
        },		
        {
                xtype: "tileview",
                itemId: "tile",
                itemTpl: "{name}",
                autoScroll: true,
                emptyText: "No Bookings"
        }
/*        
        {
            xtype: "livesearchgridpanel",
            store: null,
            itemId: "tile",
            forceFit: true,
            autoScroll: true,
            height: 300,
            viewConfig: {
                stripeRows: true
            },
            columns: [
                {
                    dataIndex:  "name",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "bookingTile.name"
                        }
                    ]
                }
            ],
            plugins: [
                {
                    ptype: "localization",
                    method: "setTitle",
                    key: "bookingTile.search"
                }
            ]
        }
*/        
    ]
});