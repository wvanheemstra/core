/**
 * The list of employees view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.touch.employee.list.View", {
    extend: "Core.view.touch.employee.base.View",
    alias: "widget.employeeListView",
    controller: "Core.mediator.touch.employee.list.Mediator",

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
                        key: "employeeList.title"
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
                                key: "employeeList.logOut"
                            }
                        ]
                    },
                    {
                        xtype: "button",
                        itemId: "newEmployeeButton",
                        align: "right",
                        ui: "neutral", // WAS action
                        plugins: [
                            {
                                type: "localization",
                                method: "setText",
                                key: "employeeList.new"
                            }
                        ]
                    }
                ]
            },
            {
                xtype: "list",
                //xtype: "listview",
                itemId: "list",
                fullscreen: true,
                ui: "neutral",
                itemTpl: "<div class='contact'>{firstName} <strong>{lastName}</strong></div>",
                grouped: false,// WAS true, grouped currently causes an error
                onItemDisclosure: true,
                plugins: [
                    {
                        type: "localization",
                        method: "setLoadingText",
                        key: "employeeList.loading"
                    },
                    {
                        type: "localization",
                        method: "setEmptyText",
                        key: "employeeList.noEmployees"
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
                                id: "searchInput"
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
