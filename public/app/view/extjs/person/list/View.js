/**
 * The list of persons view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.person.list.View", {
    extend: "Ext.Panel",
    alias: "widget.personListView",
    controller: "Core.mediator.extjs.person.list.Mediator",
    header: false,

    requires: [
        "Ext.data.*",
        "Ext.util.*",
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
                            key: "personList.logOut"
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
                            key: "personList.title"
                        }
                    ]

                },
                {
                    xtype: "tbfill"
                },
                {
                    itemId: "newPersonButton",
					//ui: "neutral",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "personList.new"
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
                    dataIndex:  "name",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "personList.name"
                        }
                    ]
                }
            ],
            plugins: [
                {
                    ptype: "localization",
                    method: "setTitle",
                    key: "personList.search"
                }
            ]
        }
    ]
});
