/**
 * The employee details view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.employee.detail.View", {
    extend: "Ext.form.Panel",
    alias: "widget.employeeDetailView",
    controller: "Core.mediator.extjs.employee.detail.Mediator",
    submitEmptyText: false,

    requires: [
        "Ext.form.FieldSet",
        "Ext.Toolbar"
    ],

    items: [
        {
            xtype: "toolbar",
			itemId: "toolbar",
//            title: "Employee",
            docked: "top",
            width: 400,

            items: [
                {
                    itemId: "backButton",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "employeeDetail.back"
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
                            method: "setTitle",
                            key: "employeeDetail.title"
                        }
                    ]
                },
                {
                    xtype: "tbfill"
                },
                {
                    itemId: "saveEmployeeButton",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "employeeDetail.save"
                        }
                    ]
                }
            ]
        },
        {
            xtype: "fieldset",
            itemId: "fieldset",
            items: [
                {
                    xtype: "textfield",
                    itemId: "firstNameTextField",
                    name: "firstName",
                    required: true,
                    plugins: [
                        {
                            ptype: "localization",
                            method: "emptyText",
                            key: "employeeDetail.firstName"
                        }
                    ]
                },
                {
                    xtype: "textfield",
                    itemId: "lastNameTextField",
                    name: "lastName",
                    required: true,
                    plugins: [
                        {
                            ptype: "localization",
                            method: "emptyText",
                            key: "employeeDetail.lastName"
                        }
                    ]
                },
                {
                    xtype: "textfield",
                    itemId: "phoneNumberTextField",
                    name: "phoneNumber",
                    required: true,
                    plugins: [
                        {
                            ptype: "localization",
                            method: "emptyText",
                            key: "employeeDetail.phoneNumber"
                        }
                    ]
                }
            ]
        },
        {
            xtype: "toolbar",
            items: [
                {
                    itemId: "deleteButton",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "employeeDetail.delete"
                        }
                    ]
                }
            ]

        }
    ]
});