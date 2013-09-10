/**
 * The list of employees view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.employee.tile.View", {
    extend: "Ext.Panel",
    alias: "widget.employeeTileView",
    controller: "Core.mediator.extjs.employee.tile.Mediator",
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
            width: 400,

            items: [
                {
                    itemId: "logoutButton",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "employeeTile.logOut"
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
                            key: "employeeTile.title"
                        }
                    ]

                },
                {
                    xtype: "tbfill"
                },
                {
                    itemId: "newEmployeeButton",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "employeeTile.new"
                        }
                    ]
                }
            ]
        },
        {
                xtype: "tileview",
                itemId: "tile",
                itemTpl: "{firstName} {lastName}",
                autoScroll: true,
                emptyText: "No Employees"
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
                    dataIndex:  "firstName",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "employeeTile.firstName"
                        }
                    ]
                },
                {
                    dataIndex:  "lastName",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "employeeTile.lastName"
                        }
                    ]
                }
            ],
            plugins: [
                {
                    ptype: "localization",
                    method: "setTitle",
                    key: "employeeTile.search"
                }
            ]
        }
*/        
    ]
});