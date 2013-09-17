/**
 * The list of organisations view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.organisation.list.View", {
    extend: "Ext.Panel",
    alias: "widget.organisationListView",
    controller: "Core.mediator.extjs.organisation.list.Mediator",
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
                            key: "organisationList.logOut"
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
                            key: "organisationList.title"
                        }
                    ]

                },
                {
                    xtype: "tbfill"
                },
                {
                    itemId: "newOrganisationButton",
					//ui: "neutral",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "organisationList.new"
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
                            key: "organisationList.name"
                        }
                    ]
                }
            ],
            plugins: [
                {
                    ptype: "localization",
                    method: "setTitle",
                    key: "organisationList.search"
                }
            ]
        }
    ]
});
