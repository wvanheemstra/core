/**
 * The list of assets view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.asset.list.View", {
    extend: "Ext.Panel",
    alias: "widget.assetListView",
    controller: "Core.mediator.extjs.asset.list.Mediator",
    header: false,

    requires: [
    //    "Ext.data.*",  // Causes an error
    //    "Ext.util.*",  // Causes an error
        "Ext.view.View",
        "Core.view.extjs.component.LiveSearchGridPanel",
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
            //ui: "neutral",			
            width: 400,

            items: [
                {
                    itemId: "logoutButton",
					//ui: "neutral",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "assetList.logOut"
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
                            key: "assetList.title"
                        }
                    ]

                },
                {
                    xtype: "tbfill"
                },
                {
                    itemId: "newAssetButton",
					//ui: "neutral",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "assetList.new"
                        }
                    ]
                }
            ]
        },
        {
            xtype: "livesearchgridpanel",
            //ui: "neutral",			
            store: null,
            itemId: "list",
            forceFit: true,
            autoScroll: true,
            height: 300,
            viewConfig: {
                stripeRows: true
            },
            columns: [
                {
                    dataIndex:  "AssetName",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "assetList.assetName"
                        }
                    ]
                }
            ],
            plugins: [
                {
                    ptype: "localization",
                    method: "setTitle",
                    key: "assetList.search"
                }
            ]
        }
    ]
});
