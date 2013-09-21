/**
 * The tile of products view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.product.tile.View", {
    extend: "Ext.Panel",
    alias: "widget.productTileView",
    controller: "Core.mediator.extjs.product.tile.Mediator",
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
                            key: "productTile.logOut"
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
                            key: "productTile.title"
                        }
                    ]

                },
                {
                    xtype: "tbfill"
                },
                {
                    itemId: "newProductButton",
					ui: "neutral",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "productTile.new"
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
                emptyText: "No Products"
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
                            key: "productTile.name"
                        }
                    ]
                }
            ],
            plugins: [
                {
                    ptype: "localization",
                    method: "setTitle",
                    key: "productTile.search"
                }
            ]
        }
*/        
    ]
});